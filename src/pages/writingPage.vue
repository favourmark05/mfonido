<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { writings } from '@/Api/writings.js'

const router = useRouter()
const goBack = () => router.push('/')

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div class="writings">
    <div class="writings__topnav container">
      <button class="writings__back link-underline" @click="goBack">
        <span aria-hidden="true">&larr;</span>
        Back to portfolio
      </button>
    </div>

    <header class="writings__header container">
      <p class="eyebrow writings__eyebrow">Writing</p>
      <h1 class="writings__title font-display">Every essay, in one place.</h1>
      <p class="writings__lede">
        Long-form writing on engineering practice, communication, technical writing, and
        community. Twelve essays and counting, published since 2020.
      </p>
    </header>

    <section class="writings__list container" aria-label="Writing archive">
      <a
        v-for="(w, i) in writings"
        :key="i"
        :href="w.url"
        target="_blank"
        rel="noopener noreferrer"
        class="writings__row"
      >
        <span class="writings__year font-mono">{{ w.year }}</span>
        <span class="writings__title-cell">{{ w.title }}</span>
        <span class="writings__venue font-mono">{{ w.linkText }}</span>
        <span class="writings__arrow" aria-hidden="true">↗</span>
      </a>
    </section>
  </div>
</template>

<style scoped>
.writings {
  padding-top: 7rem;
  padding-bottom: 6rem;
  min-height: 100vh;
}

.writings__topnav {
  margin-bottom: 3rem;
}
.writings__back {
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.writings__header {
  margin-bottom: 4rem;
  max-width: 60rem;
}
.writings__eyebrow {
  color: var(--color-accent);
  margin-bottom: 1rem;
  display: inline-block;
}
.writings__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-fg-strong);
  margin: 0 0 1.25rem;
}
.writings__lede {
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-fg-muted);
  margin: 0;
  max-width: 44rem;
}

.writings__list {
  border-top: 1px solid var(--color-border);
}
.writings__row {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) auto 24px;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 0.5rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition:
    background-color 220ms var(--ease-out-quart),
    padding 220ms var(--ease-out-quart);
}
.writings__row:hover {
  background: var(--color-bg-elev-1);
  padding-left: 1rem;
  padding-right: 1rem;
}
.writings__year {
  font-size: 0.8rem;
  color: var(--color-fg-subtle);
}
.writings__title-cell {
  font-size: 1.05rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.4;
}
.writings__row:hover .writings__title-cell {
  color: var(--color-accent-strong);
}
.writings__venue {
  font-size: 0.8rem;
  color: var(--color-fg-muted);
}
.writings__arrow {
  color: var(--color-fg-subtle);
  text-align: right;
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.writings__row:hover .writings__arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .writings__row {
    grid-template-columns: 60px 1fr 24px;
    grid-template-rows: auto auto;
    row-gap: 0.35rem;
  }
  .writings__venue {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .writings__title-cell {
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .writings__arrow {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: center;
  }
}
</style>
