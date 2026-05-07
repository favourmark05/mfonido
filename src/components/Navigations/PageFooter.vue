<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/favourmark05',
    handle: 'favourmark05',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mark-mark-74294a3a5/',
    handle: 'mark-mark',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/MfonidoMark',
    handle: '@MfonidoMark',
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/favourmark05',
    handle: 'favourmark05',
  },
]
</script>

<template>
  <footer id="contact" class="footer">
    <div class="footer__cta container">
      <p class="footer__cta-eyebrow eyebrow" v-reveal>Let’s talk</p>
      <h2 class="footer__cta-title font-display" v-reveal:80>
        Have a mid-level/senior frontend role, a hard product problem,
        <span class="footer__cta-emph">or just want to chat?</span>
      </h2>
      <p class="footer__cta-lede" v-reveal:160>
        I’m open to mid-level/senior product roles, advisory engagements, and high-impact contract work.
        The fastest way to reach me is email — I read every message.
      </p>

      <div class="footer__cta-actions" v-reveal:240>
        <a href="mailto:mfonidomark@gmail.com" class="btn btn-primary">
          mfonidomark@gmail.com
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8m0 0L7 3m4 4l-4 4"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          View résumé
        </a>
      </div>
    </div>

    <div class="footer__divider container">
      <div class="hairline" />
    </div>

    <div class="footer__bottom container">
      <div class="footer__brand">
        <span class="footer__brand-mark">M</span>
        <span class="footer__brand-name">Mfonido Mark</span>
      </div>

      <ul class="footer__socials">
        <li v-for="s in socials" :key="s.label">
          <a :href="s.href" target="_blank" rel="noopener noreferrer" class="footer__social-link">
            <span class="footer__social-label">{{ s.label }}</span>
            <span class="footer__social-handle font-mono">{{ s.handle }}</span>
            <span class="footer__social-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>

      <div class="footer__meta">
        <span class="font-mono">© {{ year }} Mfonido Mark</span>
        <span class="font-mono footer__meta-faint">Built with Vue 3 · Tailwind 4 · Vite</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  margin-top: clamp(4rem, 10vw, 8rem);
  padding-top: clamp(4rem, 10vw, 7rem);
  padding-bottom: 2.5rem;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-accent) 50%,
    transparent
  );
  opacity: 0.6;
}

.footer__cta {
  text-align: left;
  max-width: 64rem;
  padding-bottom: clamp(3.5rem, 7vw, 6rem);
}

.footer__cta-eyebrow {
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  display: inline-block;
}

.footer__cta-title {
  font-size: clamp(2rem, 5.5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-fg-strong);
  margin: 0 0 1.5rem;
  max-width: 22ch;
}
.footer__cta-emph {
  font-style: italic;
  color: var(--color-fg-muted);
}

.footer__cta-lede {
  margin: 0 0 2rem;
  max-width: 36rem;
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.7;
  color: var(--color-fg-muted);
}

.footer__cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer__divider {
  margin-bottom: 2.5rem;
}

.footer__bottom {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  align-items: start;
  gap: clamp(2rem, 5vw, 4rem);
}
@media (max-width: 880px) {
  .footer__bottom {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.footer__brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--color-fg-strong);
  color: var(--color-bg);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.04em;
}
.footer__brand-name {
  font-size: 0.95rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.footer__socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem 1.25rem;
}
@media (min-width: 640px) {
  .footer__socials {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.footer__social-link {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  text-decoration: none;
  color: var(--color-fg-muted);
  border-bottom: 1px solid transparent;
  transition: border-color 220ms var(--ease-out-quart);
}
.footer__social-link:hover {
  border-bottom-color: var(--color-accent-strong);
}
.footer__social-label {
  font-size: 0.85rem;
  color: var(--color-fg);
  grid-column: 1;
}
.footer__social-handle {
  font-size: 0.75rem;
  color: var(--color-fg-subtle);
  grid-column: 1;
  grid-row: 2;
}
.footer__social-arrow {
  color: var(--color-fg-subtle);
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.footer__social-link:hover .footer__social-arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}

.footer__meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--color-fg-muted);
}
@media (max-width: 880px) {
  .footer__meta {
    text-align: left;
  }
}
.footer__meta-faint {
  color: var(--color-fg-subtle);
}
</style>
