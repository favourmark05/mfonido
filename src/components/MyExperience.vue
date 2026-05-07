<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import { experience } from '@/Api/experience.js'
</script>

<template>
  <section id="experience" class="experience container">
    <SectionHeader
      index="02"
      eyebrow="Experience"
      title="Where I’ve shipped — and what I shipped there."
      description="Six years of building production frontends across fintech, payments, e-commerce, and developer platforms. Each role pushed the bar on craft, performance, and the experience of the engineers around me."
    />

    <ol class="timeline">
      <li
        v-for="(role, i) in experience"
        :key="role.company"
        class="timeline__item"
        v-reveal="{ delay: i * 60 }"
      >
        <div class="timeline__rail" aria-hidden="true">
          <div class="timeline__dot" />
          <div class="timeline__line" v-if="i !== experience.length - 1" />
        </div>

        <article class="timeline__card">
          <header class="timeline__head">
            <div class="timeline__head-main">
              <h3 class="timeline__role">{{ role.role }}</h3>
              <a
                class="timeline__company link-underline"
                :href="role.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ role.company }}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div class="timeline__head-meta">
              <span class="timeline__period font-mono">{{ role.period }}</span>
              <span class="timeline__location">{{ role.location }}</span>
            </div>
          </header>

          <p class="timeline__summary">{{ role.summary }}</p>

          <ul class="timeline__highlights">
            <li v-for="h in role.highlights" :key="h">{{ h }}</li>
          </ul>

          <div class="timeline__stack">
            <span v-for="t in role.stack" :key="t" class="pill">{{ t }}</span>
          </div>
        </article>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.timeline__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 1.25rem;
  padding-bottom: 2.5rem;
}
.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__rail {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
}
.timeline__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--color-bg);
  border: 2px solid var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-accent-soft);
  flex-shrink: 0;
  z-index: 1;
}
.timeline__line {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, var(--color-accent-soft), var(--color-border));
  margin-top: 0.5rem;
  min-height: 2rem;
}

.timeline__card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.75rem;
  background: var(--color-bg-elev-1);
  transition:
    border-color 280ms var(--ease-out-quart),
    background-color 280ms var(--ease-out-quart);
}
.timeline__card:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-elev-2);
}

.timeline__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
}
.timeline__head-main {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.timeline__role {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-fg-strong);
  margin: 0;
  letter-spacing: -0.01em;
}
.timeline__company {
  font-size: 0.92rem;
  color: var(--color-fg-muted);
  text-decoration: none;
}
.timeline__head-meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.timeline__period {
  font-size: 0.78rem;
  color: var(--color-accent-strong);
  letter-spacing: 0.02em;
}
.timeline__location {
  font-size: 0.78rem;
  color: var(--color-fg-subtle);
}

.timeline__summary {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-fg);
  margin: 0 0 1rem;
}

.timeline__highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.timeline__highlights li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-fg-muted);
}
.timeline__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 8px;
  height: 1px;
  background: var(--color-fg-faint);
}

.timeline__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 640px) {
  .timeline__head {
    flex-direction: column;
  }
  .timeline__head-meta {
    text-align: left;
    flex-direction: row;
    gap: 0.75rem;
  }
  .timeline__card {
    padding: 1.25rem 1rem;
  }
}
</style>
