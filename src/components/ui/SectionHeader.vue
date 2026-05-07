<script setup>
defineProps({
  index: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <header class="section-header">
    <div class="section-header__meta" v-reveal>
      <span class="section-header__index">{{ index }}</span>
      <span class="eyebrow">{{ eyebrow }}</span>
      <span class="section-header__rule" aria-hidden="true" />
    </div>
    <h2 class="section-header__title font-display" v-reveal:80>{{ title }}</h2>
    <p v-if="description" class="section-header__description" v-reveal:140>
      {{ description }}
    </p>
  </header>
</template>

<style scoped>
.section-header {
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  max-width: 56rem;
}
.section-header__meta {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}
.section-header__index {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 0.04em;
}
.section-header__rule {
  flex: 1;
  height: 1px;
  background: var(--color-border);
  max-width: 220px;
}
.section-header__title {
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.05;
  color: var(--color-fg-strong);
  margin: 0;
  letter-spacing: -0.025em;
}
.section-header__description {
  margin: 1.25rem 0 0;
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.7;
  color: var(--color-fg-muted);
  max-width: 44rem;
}
</style>
