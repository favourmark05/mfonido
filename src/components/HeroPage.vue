<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__status" v-reveal>
        <span class="dot" aria-hidden="true" />
        <span class="hero__status-text">Available for mid-level/senior frontend roles</span>
      </div>

      <h1 class="hero__name" v-reveal:80>
        <span class="hero__name-line">Mfonido</span>
        <span class="hero__name-line hero__name-line--accent font-display">Mark.</span>
      </h1>

      <p class="hero__tagline" v-reveal:160>
        Senior Frontend Engineer &amp; Developer Advocate.
      </p>

      <p class="hero__lede" v-reveal:240>
        Six years building production interfaces for fintech, e-commerce, sport-betting, logistics, and developer
        platforms. I work in <span class="hero__hl">Vue, Nuxt, React, Next.js, Angular, and TypeScript</span> —
        and I care just as much about the people shipping the code as the code itself.
      </p>

      <div class="hero__ctas" v-reveal:320>
        <button class="btn btn-primary" @click="scrollTo('work')">
          See selected work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8m0 0L7 3m4 4l-4 4"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="btn btn-ghost" @click="scrollTo('contact')">Get in touch</button>
      </div>

      <div class="hero__meta" v-reveal:420>
        <span class="hero__meta-item">
          <span class="hero__meta-key">Based in</span>
          <span class="hero__meta-val">Lagos, Nigeria</span>
        </span>
        <span class="hero__meta-divider" aria-hidden="true" />
        <span class="hero__meta-item">
          <span class="hero__meta-key">Currently</span>
          <span class="hero__meta-val">Termii</span>
        </span>
        <span class="hero__meta-divider" aria-hidden="true" />
        <span class="hero__meta-item">
          <span class="hero__meta-key">Experience</span>
          <span class="hero__meta-val">6+ years</span>
        </span>
      </div>
    </div>

    <a class="hero__scroll" href="#about" @click.prevent="scrollTo('about')">
      <span class="hero__scroll-line" aria-hidden="true" />
      <span class="hero__scroll-label eyebrow">Scroll</span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
}

.hero__inner {
  max-width: 56rem;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.75rem 0.35rem 0.6rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-bg-elev-1);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-fg-muted);
  margin-bottom: 2rem;
}
.hero__status-text {
  letter-spacing: 0.01em;
}

.hero__name {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3.2rem, 10vw, 7.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--color-fg-strong);
}
.hero__name-line {
  display: block;
}
.hero__name-line--accent {
  font-style: italic;
  color: var(--color-fg);
}

.hero__tagline {
  margin: 1.75rem 0 0;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--color-fg);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.hero__lede {
  margin: 1.25rem 0 0;
  max-width: 42rem;
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-fg-muted);
}
.hero__hl {
  color: var(--color-fg-strong);
}

.hero__ctas {
  display: flex;
  gap: 0.75rem;
  margin-top: 2.25rem;
  flex-wrap: wrap;
}

.hero__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  flex-wrap: wrap;
}
.hero__meta-item {
  display: inline-flex;
  flex-direction: column;
  gap: 0.15rem;
}
.hero__meta-key {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-subtle);
}
.hero__meta-val {
  font-size: 0.95rem;
  color: var(--color-fg);
  font-weight: 500;
}
.hero__meta-divider {
  width: 1px;
  align-self: stretch;
  background: var(--color-border);
}

.hero__scroll {
  position: absolute;
  bottom: 2rem;
  right: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  color: var(--color-fg-muted);
  text-decoration: none;
}
.hero__scroll-line {
  display: block;
  width: 1px;
  height: 64px;
  background: linear-gradient(to bottom, transparent, var(--color-fg-faint), transparent);
  position: relative;
  overflow: hidden;
}
.hero__scroll-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, var(--color-accent), transparent);
  transform: translateY(-100%);
  animation: scroll-pulse 2.4s var(--ease-out-quart) infinite;
}
@keyframes scroll-pulse {
  0% {
    transform: translateY(-100%);
  }
  60% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@media (max-width: 640px) {
  .hero__scroll {
    display: none;
  }
  .hero__meta {
    gap: 0.75rem;
  }
  .hero__meta-divider {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero__scroll-line::after {
    animation: none;
  }
}
</style>
