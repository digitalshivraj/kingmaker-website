// Motion layer for the whole site. Everything here is decoration: the page reads the same without it,
// and people who ask their device for reduced motion get none of it.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// Reading progress works for everyone: it shows position, it does not move content.
const bar = document.querySelector<HTMLElement>('[data-read-progress]');
const article = document.querySelector<HTMLElement>('.prose');
function readProgress() {
  if (!bar || !article) return;
  const r = article.getBoundingClientRect();
  bar.style.setProperty('--p', String(clamp((window.innerHeight * 0.4 - r.top) / r.height, 0, 1)));
}

if (reduce) {
  readProgress();
  window.addEventListener('scroll', readProgress, { passive: true });
} else {
  root.classList.add('motion');

  // Things that start once they reach the screen. Checked on every scroll frame by position,
  // so a fast jump past an element still starts it.
  type Pending = { el: HTMLElement; start: (el: HTMLElement) => void };
  let pending: Pending[] = [];

  // 1. Headlines rise word by word
  document.querySelectorAll<HTMLElement>('main h1, main :is(h2, p).d-xl, main :is(h2, p).d-lg, main h2.d-md').forEach((el) => {
    let i = 0;
    const walk = (node: Node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent ?? '';
          if (!text.trim()) return;
          const frag = document.createDocumentFragment();
          text.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) return frag.append(part);
            const outer = document.createElement('span');
            const inner = document.createElement('span');
            outer.className = 'sw';
            inner.className = 'si';
            inner.style.setProperty('--i', String(i++));
            inner.textContent = part;
            outer.append(inner);
            frag.append(outer);
          });
          child.replaceWith(frag);
        } else if (child instanceof HTMLElement && !child.matches('br, svg, img')) {
          walk(child);
        }
      });
    };
    walk(el);
    el.removeAttribute('data-reveal');
    el.classList.add('wsplit');
    pending.push({ el, start: (h) => h.classList.add('wsplit-in') });
  });

  // 2. Numbers count up
  document.querySelectorAll<HTMLElement>('.stat b').forEach((b) => {
    const raw = (b.textContent ?? '').trim();
    if (!/^\d{1,3}$/.test(raw)) return;
    const n = Number(raw);
    b.textContent = '0';
    pending.push({
      el: b,
      start: () => {
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 1400);
          b.textContent = String(Math.round(n * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
    });
  });

  // 3. Photos unveil from the bottom as they arrive
  document
    .querySelectorAll<HTMLElement>('.photo-card .ph, .bento li > a, .panel-photo, .mosaic img, .feat-ph, .data-photo, .state-photo, .cover-wrap .cover')
    .forEach((el) => {
      el.classList.add('unveil');
      pending.push({ el, start: (p) => p.classList.add('on') });
    });

  // 4. Process lines draw while the section passes; 5. Parallax photos; 6. Marquees react to scrolling;
  // 7. Header steps aside while reading down and returns on the way up.
  const lines = Array.from(document.querySelectorAll<HTMLElement>('.steps, .flow'));
  const parallax = Array.from(document.querySelectorAll<HTMLElement>('.panel-photo img, .data-photo img, .hero-bg, .ph-head .bg'));
  const marquees = Array.from(document.querySelectorAll<HTMLElement>('.marquee'));
  const header = document.querySelector<HTMLElement>('[data-header]');
  const menuOpen = () =>
    !!document.querySelector('.mega:not([hidden]), #mobile-nav:not([hidden])') || !!header?.contains(document.activeElement);

  let lastY = window.scrollY;
  let headY = lastY;
  let speed = 0;
  let dir = 1;
  let running = false;

  const frame = () => {
    const y = window.scrollY;
    const dy = y - lastY;
    lastY = y;
    if (dy) dir = dy > 0 ? 1 : -1;
    speed += (Math.abs(dy) - speed) * 0.18;
    const vh = window.innerHeight;

    if (pending.length) {
      pending = pending.filter((p) => {
        if (p.el.getBoundingClientRect().top > vh * 0.92) return true;
        p.start(p.el);
        return false;
      });
    }

    lines.forEach((el) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--p', String(clamp((vh * 0.85 - r.top) / (r.height + vh * 0.3), 0, 1)));
    });

    parallax.forEach((img) => {
      const box = (img.parentElement ?? img).getBoundingClientRect();
      if (box.bottom < -vh || box.top > vh * 2) return;
      img.style.translate = `0 ${((box.top + box.height / 2 - vh / 2) * -0.08).toFixed(1)}px`;
    });

    const rate = dir * (1 + Math.min(speed * 0.12, 5));
    const skew = clamp(dir * speed * 0.12, -7, 7);
    marquees.forEach((m) => {
      m.style.transform = Math.abs(skew) > 0.05 ? `skewX(${(-skew).toFixed(2)}deg)` : '';
      m.querySelector('.marquee-track')
        ?.getAnimations()
        .forEach((a) => (a.playbackRate = rate));
    });

    if (header) {
      if (menuOpen() || y < 140 || y < headY - 6) {
        root.classList.remove('head-away');
        headY = y;
      } else if (y > headY + 6) {
        root.classList.add('head-away');
        headY = y;
      }
    }

    readProgress();

    if (speed > 0.05) requestAnimationFrame(frame);
    else {
      speed = 0;
      running = false;
      marquees.forEach((m) => (m.style.transform = ''));
    }
  };
  const kick = () => {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  };
  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', kick);
  // Carousel slides and filtered cards come into view without a page scroll
  document.addEventListener('click', () => setTimeout(kick, 60));
  kick();
}
