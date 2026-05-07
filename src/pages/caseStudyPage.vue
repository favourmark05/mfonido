<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { caseStudies, featuredCaseStudies } from '@/Api/caseStudies.js'
import { projects } from '@/Api/projects.js'

const route = useRoute()
const router = useRouter()

const study = computed(() => caseStudies[route.params.slug])
const project = computed(() => {
  if (!study.value) return null
  const byUrl = projects.find((p) => p.url === study.value.url)
  if (byUrl) return byUrl
  const token = study.value.title.split(' ')[0].toLowerCase()
  return projects.find(
    (p) =>
      p.title.toLowerCase().includes(token) ||
      p.company.toLowerCase().includes(token),
  )
})

const nextStudy = computed(() => {
  if (!study.value) return null
  const idx = featuredCaseStudies.indexOf(study.value.slug)
  if (idx === -1) return null
  const nextSlug = featuredCaseStudies[(idx + 1) % featuredCaseStudies.length]
  return caseStudies[nextSlug]
})

const goBack = () => router.push('/')

onMounted(() => window.scrollTo(0, 0))
watch(
  () => route.params.slug,
  () => window.scrollTo(0, 0),
)
</script>

<template>
  <div v-if="study" class="case">
    <div class="case__topnav container">
      <button class="case__back link-underline" @click="goBack">
        <span aria-hidden="true">&larr;</span>
        Back to portfolio
      </button>
      <a :href="study.url" target="_blank" rel="noopener noreferrer" class="case__live">
        Visit live
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <header class="case__hero container">
      <p class="eyebrow case__eyebrow" v-reveal>Case study · {{ study.year }}</p>
      <h1 class="case__title font-display" v-reveal:80>{{ study.title }}</h1>
      <p class="case__headline" v-reveal:160>{{ study.headline }}</p>

      <dl class="case__meta" v-reveal:240>
        <div class="case__meta-row">
          <dt>Company</dt>
          <dd>{{ study.company }}</dd>
        </div>
        <div class="case__meta-row">
          <dt>Role</dt>
          <dd>{{ study.role }}</dd>
        </div>
        <div class="case__meta-row">
          <dt>Year</dt>
          <dd>{{ study.year }}</dd>
        </div>
        <div class="case__meta-row case__meta-row--stack">
          <dt>Stack</dt>
          <dd>
            <span v-for="t in study.stack" :key="t" class="pill">{{ t }}</span>
          </dd>
        </div>
      </dl>
    </header>

    <figure v-if="project?.image" class="case__media container" v-reveal>
      <img :src="project.image" :alt="study.title" />
    </figure>

    <section class="case__intro container">
      <p class="case__summary font-display" v-reveal>{{ study.summary }}</p>
    </section>

    <section class="case__sections container">
      <article
        v-for="(s, i) in study.sections"
        :key="s.heading"
        class="case__section"
        v-reveal="{ delay: i * 60 }"
      >
        <h2 class="case__section-heading">
          <span class="case__section-num font-mono">{{ String(i + 1).padStart(2, '0') }}</span>
          {{ s.heading }}
        </h2>
        <p v-if="s.kind === 'block'" class="case__section-body">{{ s.body }}</p>
        <ul v-else-if="s.kind === 'list'" class="case__section-list">
          <li v-for="item in s.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>

    <section v-if="nextStudy" class="case__next container">
      <router-link :to="`/case/${nextStudy.slug}`" class="case__next-link">
        <span class="eyebrow case__next-eyebrow">Next case study</span>
        <span class="case__next-title font-display">{{ nextStudy.title }}</span>
        <span class="case__next-arrow" aria-hidden="true">&rarr;</span>
      </router-link>
    </section>
  </div>

  <div v-else class="case__missing container">
    <p class="eyebrow">404</p>
    <h1 class="font-display case__missing-title">No such case study.</h1>
    <button class="btn btn-ghost" @click="goBack">Back to portfolio</button>
  </div>
</template>

<style scoped>
.case {
  padding-top: 7rem;
  padding-bottom: 6rem;
  max-width: 100%;
}

.case__topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}
.case__back {
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.case__live {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-bottom: 1px solid transparent;
  transition: border-color 220ms ease, color 220ms ease;
}
.case__live:hover {
  color: var(--color-accent-strong);
  border-bottom-color: var(--color-accent-strong);
}

.case__hero {
  max-width: 64rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
.case__eyebrow {
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  display: inline-block;
}
.case__title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--color-fg-strong);
  margin: 0 0 1.5rem;
}
.case__headline {
  font-size: clamp(1.05rem, 1.8vw, 1.4rem);
  line-height: 1.5;
  color: var(--color-fg-muted);
  margin: 0 0 2.5rem;
  max-width: 48rem;
}

.case__meta {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: 0;
}
@media (max-width: 720px) {
  .case__meta {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.case__meta-row {
  background: var(--color-bg-elev-1);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.case__meta-row dt {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-fg-subtle);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.case__meta-row dd {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-fg-strong);
  font-weight: 500;
}
.case__meta-row--stack {
  grid-column: 1 / -1;
}
.case__meta-row--stack dd {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.case__media {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
.case__media img {
  width: 100%;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  display: block;
}

.case__intro {
  max-width: 56rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
.case__summary {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.45;
  letter-spacing: -0.015em;
  color: var(--color-fg);
  font-style: italic;
  font-weight: 400;
  margin: 0;
}

.case__sections {
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
}
.case__section-heading {
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-fg-strong);
  margin: 0 0 1.25rem;
  letter-spacing: -0.015em;
}
.case__section-num {
  color: var(--color-accent-strong);
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.04em;
}
.case__section-body {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-fg-muted);
  margin: 0;
}
.case__section-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.case__section-list li {
  position: relative;
  padding-left: 1.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-fg-muted);
}
.case__section-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 12px;
  height: 1px;
  background: var(--color-accent);
}

.case__next {
  margin-top: clamp(4rem, 8vw, 6rem);
  padding-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid var(--color-border);
}
.case__next-link {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  text-decoration: none;
  color: inherit;
}
.case__next-eyebrow {
  grid-column: 1;
  grid-row: 1;
  color: var(--color-accent);
}
.case__next-title {
  grid-column: 1;
  grid-row: 2;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  letter-spacing: -0.025em;
  color: var(--color-fg-strong);
  margin-top: 0.4rem;
  transition: color 220ms ease;
}
.case__next-link:hover .case__next-title {
  color: var(--color-accent-strong);
}
.case__next-arrow {
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
  font-size: 1.5rem;
  color: var(--color-fg-subtle);
  transition: transform 320ms var(--ease-out-quart);
}
.case__next-link:hover .case__next-arrow {
  transform: translateX(8px);
  color: var(--color-accent-strong);
}

.case__missing {
  padding: 10rem 0;
  text-align: center;
}
.case__missing-title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 1rem 0 2rem;
  color: var(--color-fg-strong);
}
</style>
