<script setup>
import { computed } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'
import { projects } from '@/Api/projects.js'
import { caseStudies, featuredCaseStudies } from '@/Api/caseStudies.js'

// Surface featured case studies as the lead block, then the rest of the
// projects from projects.js as a secondary list.
//
// Match each case study to its underlying project by URL (most reliable —
// title and company both drift). Fall back to a token search on title or
// company so new case studies still hook up without needing exact URL parity.
const matchProject = (cs) => {
  if (!cs) return null
  const byUrl = projects.find((p) => p.url === cs.url)
  if (byUrl) return byUrl
  const token = cs.title.split(' ')[0].toLowerCase()
  return projects.find(
    (p) =>
      p.title.toLowerCase().includes(token) ||
      p.company.toLowerCase().includes(token),
  )
}

const featured = computed(() =>
  featuredCaseStudies.map((slug) => {
    const cs = caseStudies[slug]
    const project = matchProject(cs)
    return {
      slug,
      title: cs.title,
      headline: cs.headline,
      company: cs.company,
      year: cs.year,
      role: cs.role,
      stack: cs.stack,
      url: cs.url,
      linkText: cs.linkText,
      image: project?.image,
    }
  }),
)

const otherProjects = computed(() => {
  const featuredUrls = new Set(
    featuredCaseStudies
      .map((slug) => matchProject(caseStudies[slug])?.url)
      .filter(Boolean),
  )
  return projects.filter((p) => !featuredUrls.has(p.url))
})
</script>

<template>
  <section id="work" class="work container">
    <SectionHeader
      index="04"
      eyebrow="Selected work"
      title="Three projects worth a closer look."
      description="Deep dives into the work I’m proudest of — the problem, the approach, and the decisions that mattered. The full project archive is one click away."
    />

    <!-- Featured case studies -->
    <div class="work__featured">
      <article
        v-for="(p, i) in featured"
        :key="p.slug"
        class="work__feature"
        v-reveal="{ delay: i * 80 }"
      >
        <router-link :to="`/case/${p.slug}`" class="work__feature-inner">
          <div class="work__feature-media">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
            <div v-else class="work__feature-media-fallback" aria-hidden="true">
              {{ p.title.slice(0, 2).toUpperCase() }}
            </div>
            <div class="work__feature-media-overlay" />
          </div>

          <div class="work__feature-body">
            <div class="work__feature-meta">
              <span class="font-mono">{{ p.year }}</span>
              <span class="work__feature-meta-divider" aria-hidden="true">·</span>
              <span>{{ p.company }}</span>
              <span class="work__feature-meta-divider" aria-hidden="true">·</span>
              <span>{{ p.role }}</span>
            </div>

            <h3 class="work__feature-title font-display">{{ p.title }}</h3>
            <p class="work__feature-headline">{{ p.headline }}</p>

            <div class="work__feature-stack">
              <span v-for="t in p.stack" :key="t" class="pill">{{ t }}</span>
            </div>

            <span class="work__feature-cta">
              Read the case study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7h8m0 0L7 3m4 4l-4 4"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </router-link>
      </article>
    </div>

    <!-- Other projects -->
    <div class="work__more" v-if="otherProjects.length">
      <div class="work__more-head" v-reveal>
        <h3 class="work__more-title eyebrow">Also recently</h3>
      </div>
      <ul class="work__more-list">
        <li
          v-for="(p, i) in otherProjects"
          :key="p.title"
          v-reveal="{ delay: i * 60 }"
          class="work__more-item"
        >
          <a
            :href="p.url"
            target="_blank"
            rel="noopener noreferrer"
            class="work__more-link"
          >
            <span class="work__more-year font-mono">{{ p.year }}</span>
            <span class="work__more-name">{{ p.title }}</span>
            <span class="work__more-company">{{ p.company }}</span>
            <span class="work__more-tech">
              <span v-for="t in p.technology.slice(0, 3)" :key="t" class="pill">{{ t }}</span>
            </span>
            <span class="work__more-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="work__archive" v-reveal>
      <router-link to="/catalog" class="link-underline">
        View the full project archive
        <span aria-hidden="true">&rarr;</span>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.work__featured {
  display: grid;
  gap: 1.25rem;
}
.work__feature {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-bg-elev-1);
  transition:
    border-color 320ms var(--ease-out-quart),
    background-color 320ms var(--ease-out-quart),
    transform 320ms var(--ease-out-quart);
}
.work__feature:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
}
.work__feature-inner {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  text-decoration: none;
  color: inherit;
}
@media (max-width: 880px) {
  .work__feature-inner {
    grid-template-columns: 1fr;
  }
}

.work__feature-media {
  position: relative;
  background: var(--color-bg-elev-2);
  overflow: hidden;
  min-height: 280px;
}
.work__feature-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 800ms var(--ease-out-expo);
}
.work__feature:hover .work__feature-media img {
  transform: scale(1.04);
}
.work__feature-media-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--color-fg-faint);
}
.work__feature-media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(10, 10, 11, 0.0) 40%,
    rgba(10, 10, 11, 0.45) 100%
  );
  pointer-events: none;
}

.work__feature-body {
  padding: clamp(1.75rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.work__feature-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.78rem;
  color: var(--color-fg-subtle);
  letter-spacing: 0.02em;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
}
.work__feature-meta-divider {
  color: var(--color-fg-faint);
}

.work__feature-title {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  line-height: 1.1;
  color: var(--color-fg-strong);
  margin: 0 0 0.85rem;
  letter-spacing: -0.025em;
}
.work__feature-headline {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-fg-muted);
  margin: 0 0 1.5rem;
  max-width: 38rem;
}

.work__feature-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.work__feature-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--color-accent-strong);
  letter-spacing: 0.01em;
  font-weight: 500;
}
.work__feature-cta svg {
  transition: transform 320ms var(--ease-out-quart);
}
.work__feature:hover .work__feature-cta svg {
  transform: translateX(3px);
}

/* Other projects list */
.work__more {
  margin-top: 4rem;
}
.work__more-head {
  margin-bottom: 1.25rem;
}
.work__more-title {
  margin: 0;
  color: var(--color-accent-strong);
}
.work__more-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--color-border);
}
.work__more-item {
  border-bottom: 1px solid var(--color-border);
}
.work__more-link {
  display: grid;
  grid-template-columns: 80px minmax(0, 2fr) minmax(0, 1.5fr) minmax(0, 2fr) 24px;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem;
  text-decoration: none;
  color: inherit;
  transition:
    background-color 220ms var(--ease-out-quart),
    padding 220ms var(--ease-out-quart);
  border-radius: var(--radius-md);
}
.work__more-link:hover {
  background: var(--color-bg-elev-1);
  padding-left: 1rem;
  padding-right: 1rem;
}
.work__more-year {
  font-size: 0.78rem;
  color: var(--color-fg-subtle);
}
.work__more-name {
  font-size: 1rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  letter-spacing: -0.01em;
}
.work__more-company {
  font-size: 0.85rem;
  color: var(--color-fg-muted);
}
.work__more-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: flex-end;
}
.work__more-arrow {
  color: var(--color-fg-subtle);
  text-align: right;
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.work__more-link:hover .work__more-arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .work__more-link {
    grid-template-columns: 60px 1fr 24px;
    grid-template-rows: auto auto;
    row-gap: 0.35rem;
  }
  .work__more-company {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .work__more-tech {
    display: none;
  }
}

.work__archive {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}
</style>
