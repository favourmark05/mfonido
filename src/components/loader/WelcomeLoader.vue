<script setup>
import { computed } from 'vue'

const period = computed(() => {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return 'Morning'
  if (h >= 12 && h < 17) return 'Afternoon'
  return 'Evening'
})
</script>

<template>
  <output class="welcome" aria-live="polite">
    <div class="bg-grain" aria-hidden="true" />

    <div class="welcome__inner">
      <p class="welcome__eyebrow eyebrow">Welcome</p>

      <h1 class="welcome__greeting font-display">
        <span class="welcome__word welcome__word--1">Good</span>
        <span class="welcome__word welcome__word--2 welcome__period">{{ period }}<span aria-hidden="true">.</span></span>
      </h1>

      <div class="welcome__sig">
        <span class="welcome__sig-rule" aria-hidden="true" />
        <span class="welcome__sig-name font-mono">Mfonido Mark</span>
      </div>
    </div>

    <div class="welcome__progress" aria-hidden="true">
      <span class="welcome__progress-bar" />
    </div>
  </output>
</template>

<style scoped>
.welcome {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
}

.welcome__inner {
  text-align: left;
  max-width: 56rem;
  width: 100%;
  position: relative;
  z-index: 1;
}

.welcome__eyebrow {
  display: inline-flex;
  align-items: center;
  color: var(--color-accent);
  margin: 0 0 1.5rem;
  opacity: 0;
  animation: fade-in 600ms var(--ease-out-expo) forwards;
  animation-delay: 200ms;
}
.welcome__eyebrow::before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 1px;
  background: currentColor;
  margin-right: 0.75rem;
  transform: scaleX(0);
  transform-origin: left;
  animation: rule-in 700ms var(--ease-out-expo) forwards;
  animation-delay: 200ms;
}

.welcome__greeting {
  font-size: clamp(3rem, 11vw, 8rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--color-fg-strong);
  margin: 0;
  font-weight: 400;
}

.welcome__word {
  display: inline-block;
  opacity: 0;
  transform: translateY(28px);
  animation: word-in 900ms var(--ease-out-expo) forwards;
}
.welcome__word--1 {
  animation-delay: 350ms;
  margin-right: 0.35em;
}
.welcome__word--2 {
  animation-delay: 600ms;
}
.welcome__period {
  font-style: italic;
  color: var(--color-fg);
}

.welcome__sig {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2.5rem;
  opacity: 0;
  animation: fade-in 600ms var(--ease-out-expo) forwards;
  animation-delay: 1100ms;
}
.welcome__sig-rule {
  display: inline-block;
  width: 36px;
  height: 1px;
  background: var(--color-fg-faint);
}
.welcome__sig-name {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
}

.welcome__progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--color-border);
}
.welcome__progress-bar {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(
    to right,
    var(--color-accent),
    var(--color-accent-strong)
  );
  animation: progress 5.6s var(--ease-out-quart) forwards;
  animation-delay: 100ms;
  box-shadow: 0 0 12px var(--color-accent-glow);
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
@keyframes rule-in {
  to {
    transform: scaleX(1);
  }
}
@keyframes word-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .welcome__eyebrow,
  .welcome__word,
  .welcome__sig {
    opacity: 1;
    transform: none;
    animation: none;
  }
  .welcome__progress-bar {
    animation-duration: 6s;
    animation-timing-function: linear;
  }
}
</style>
