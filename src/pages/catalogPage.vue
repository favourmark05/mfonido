<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/Api/projects.js'

const router = useRouter()
const goBack = () => router.push('/')

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div class="catalog">
    <div class="catalog__topnav container">
      <button class="catalog__back link-underline" @click="goBack">
        <span aria-hidden="true">&larr;</span>
        Back to portfolio
      </button>
    </div>

    <header class="catalog__header container">
      <p class="eyebrow catalog__eyebrow">Archive</p>
      <h1 class="catalog__title font-display">Every project, on the record.</h1>
      <p class="catalog__lede">
        A complete index of work — across fintech, e-commerce, sports, developer platforms, and
        the occasional personal project. Sorted by year, newest first.
      </p>
    </header>

    <section class="catalog__table container" aria-label="Project archive">
      <div class="catalog__row catalog__row--head">
        <span>Year</span>
        <span>Project</span>
        <span>Made at</span>
        <span>Stack</span>
        <span>Link</span>
      </div>
      <a
        v-for="(p, i) in projects"
        :key="i"
        :href="p.url"
        target="_blank"
        rel="noopener noreferrer"
        class="catalog__row catalog__row--item"
      >
        <span class="catalog__cell catalog__cell--year font-mono">{{ p.year }}</span>
        <span class="catalog__cell catalog__cell--title">{{ p.title }}</span>
        <span class="catalog__cell catalog__cell--company">{{ p.company }}</span>
        <span class="catalog__cell catalog__cell--stack">
          <span v-for="t in p.technology" :key="t" class="pill">{{ t }}</span>
        </span>
        <span class="catalog__cell catalog__cell--link">
          {{ p.linkText }}
          <span aria-hidden="true">↗</span>
        </span>
      </a>
    </section>
  </div>
</template>

<style scoped>
.catalog {
  padding-top: 7rem;
  padding-bottom: 6rem;
  min-height: 100vh;
}

.catalog__topnav {
  margin-bottom: 3rem;
}
.catalog__back {
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.catalog__header {
  margin-bottom: 4rem;
  max-width: 60rem;
}
.catalog__eyebrow {
  color: var(--color-accent);
  margin-bottom: 1rem;
  display: inline-block;
}
.catalog__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-fg-strong);
  margin: 0 0 1.25rem;
}
.catalog__lede {
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-fg-muted);
  margin: 0;
  max-width: 44rem;
}

/* Table */
.catalog__table {
  border-top: 1px solid var(--color-border);
}
.catalog__row {
  display: grid;
  grid-template-columns: 80px minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition:
    background-color 220ms var(--ease-out-quart),
    padding 220ms var(--ease-out-quart);
}
.catalog__row--head {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-fg-subtle);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.catalog__row--head:hover {
  background: transparent;
}
.catalog__row--item:hover {
  background: var(--color-bg-elev-1);
  padding-left: 1rem;
  padding-right: 1rem;
}
.catalog__cell {
  font-size: 0.95rem;
  min-width: 0;
}
.catalog__cell--year {
  color: var(--color-fg-subtle);
  font-size: 0.85rem;
}
.catalog__cell--title {
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.01em;
}
.catalog__row--item:hover .catalog__cell--title {
  color: var(--color-accent-strong);
}
.catalog__cell--company {
  color: var(--color-fg-muted);
  font-size: 0.9rem;
}
.catalog__cell--stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.catalog__cell--link {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-fg-muted);
  text-align: right;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: flex-end;
}

/* Mobile */
@media (max-width: 880px) {
  .catalog__row--head {
    display: none;
  }
  .catalog__row {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'year link'
      'title title'
      'company company'
      'stack stack';
    gap: 0.4rem 1rem;
    padding: 1.25rem 0.5rem;
  }
  .catalog__cell--year {
    grid-area: year;
  }
  .catalog__cell--title {
    grid-area: title;
    font-size: 1.05rem;
  }
  .catalog__cell--company {
    grid-area: company;
  }
  .catalog__cell--stack {
    grid-area: stack;
    margin-top: 0.4rem;
  }
  .catalog__cell--link {
    grid-area: link;
  }
}
</style>
