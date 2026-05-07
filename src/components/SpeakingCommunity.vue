<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import { community, talks } from '@/Api/speaking.js'
</script>

<template>
  <section id="community" class="community container">
    <SectionHeader
      index="05"
      eyebrow="Leadership & community"
      title="Engineering is a team sport. So is the craft around it."
      description="Beyond the code, I invest in the people picking it up. I mentor, write, and speak — because the surface area of impact is rarely just the codebase."
    />

    <div class="community__grid">
      <!-- Communities -->
      <div class="community__col">
        <h3 class="community__col-title eyebrow" v-reveal>Communities</h3>
        <div class="community__list">
          <a
            v-for="(c, i) in community"
            :key="c.title"
            :href="c.href"
            target="_blank"
            rel="noopener noreferrer"
            class="community__card"
            v-reveal="{ delay: i * 80 }"
          >
            <div class="community__card-body">
              <h4 class="community__card-title">{{ c.title }}</h4>
              <p class="community__card-role font-mono">{{ c.role }}</p>
              <p class="community__card-summary">{{ c.summary }}</p>
            </div>
            <span class="community__card-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- Talks & writing -->
      <div class="community__col">
        <h3 class="community__col-title eyebrow" v-reveal>Talks & published writing</h3>
        <ol class="community__talks">
          <li
            v-for="(t, i) in talks"
            :key="t.title"
            class="community__talk"
            v-reveal="{ delay: i * 60 }"
          >
            <a :href="t.href" target="_blank" rel="noopener noreferrer" class="community__talk-link">
              <div class="community__talk-meta">
                <span class="community__talk-year font-mono">{{ t.year }}</span>
                <span class="community__talk-venue">{{ t.venue }}</span>
              </div>
              <h4 class="community__talk-title">{{ t.title }}</h4>
              <p class="community__talk-summary">{{ t.summary }}</p>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.community__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: clamp(2rem, 5vw, 4rem);
}
@media (max-width: 880px) {
  .community__grid {
    grid-template-columns: 1fr;
  }
}

.community__col-title {
  margin-bottom: 1.25rem;
  color: var(--color-accent-strong);
}

/* Community cards */
.community__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.community__card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-elev-1);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 280ms var(--ease-out-quart),
    background-color 280ms var(--ease-out-quart),
    transform 280ms var(--ease-out-quart);
}
.community__card:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-elev-2);
  transform: translateY(-2px);
}
.community__card-title {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.01em;
}
.community__card-role {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  color: var(--color-accent-strong);
  letter-spacing: 0.02em;
}
.community__card-summary {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-fg-muted);
}
.community__card-arrow {
  color: var(--color-fg-subtle);
  flex-shrink: 0;
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.community__card:hover .community__card-arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}

/* Talks */
.community__talks {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}
.community__talk {
  border-bottom: 1px solid var(--color-border);
}
.community__talk-link {
  display: block;
  padding: 1.25rem 0.5rem;
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-md);
  transition:
    background-color 220ms var(--ease-out-quart),
    padding 220ms var(--ease-out-quart);
}
.community__talk-link:hover {
  background: var(--color-bg-elev-1);
  padding-left: 1rem;
  padding-right: 1rem;
}
.community__talk-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  color: var(--color-fg-subtle);
  margin-bottom: 0.45rem;
}
.community__talk-year {
  color: var(--color-accent-strong);
}
.community__talk-venue {
  color: var(--color-fg-muted);
}
.community__talk-title {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.015em;
  transition: color 220ms var(--ease-out-quart);
}
.community__talk-link:hover .community__talk-title {
  color: var(--color-accent-strong);
}
.community__talk-summary {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-fg-muted);
}
</style>
