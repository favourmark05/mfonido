<script setup>
import SectionHeader from './ui/SectionHeader.vue'

const stats = [
  { value: '6+', label: 'Years shipping production frontends' },
  { value: '15+', label: 'Apps released across fintech, e-commerce, sports' },
  { value: '13', label: 'Long-form articles published' },
  { value: '3', label: 'Communities actively contributing to' },
]

const principles = [
  {
    title: 'Engineer for the team that comes after',
    body: 'Senior code is read and edited far more than it is written. I optimise for the next engineer — explicit names, small surfaces, narrow seams.',
  },
  {
    title: 'Design systems are accelerants',
    body: 'A coherent component library is leverage. I treat design tokens, accessibility, and component contracts as core engineering work, not afterthought polish.',
  },
  {
    title: 'Communicate the why',
    body: 'I document decisions, write clear PR descriptions, and write technically — both for my team and for the broader community.',
  },
]
</script>

<template>
  <section id="about" class="about container">
    <SectionHeader
      index="01"
      eyebrow="About"
      title="A frontend engineer with a builder’s instinct, ownership mindset, and a writer’s ear."
    />

    <div class="about__grid">
      <div class="about__copy">
        <p v-reveal>
          I’m a Senior Frontend Engineer and Developer Advocate working primarily in
          <strong>Vue, Nuxt, React, Next.js, Angular, and TypeScript</strong>. The last six years have taken me
          across <strong>fintech, e-commerce, sports, and developer platforms</strong> — building
          interfaces that have to be fast, accessible, and trustworthy under real customer load.
        </p>
        <p v-reveal:80>
          I care about the stack <em>and</em> the people on the other side of it. I write and
          speak about clean code, error messaging, debouncing, and getting started in tech. I
          mentor engineers through GDSC, GDG, and Open Source Community Africa, and I’ve
          organised meetups and contributed to open source consistently since 2020.
        </p>
        <p v-reveal:160>
          What I’m looking for: senior product roles where craft, design systems, and developer
          experience are taken seriously — and where shipping well actually matters.
        </p>
      </div>

      <aside class="about__stats">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="about__stat"
          v-reveal="{ delay: i * 80 }"
        >
          <div class="about__stat-value font-display">{{ s.value }}</div>
          <div class="about__stat-label">{{ s.label }}</div>
        </div>
      </aside>
    </div>

    <div class="about__principles">
      <div class="about__principles-eyebrow eyebrow" v-reveal>How I work</div>
      <div class="about__principles-grid">
        <article
          v-for="(p, i) in principles"
          :key="p.title"
          class="about__principle"
          v-reveal="{ delay: i * 100 }"
        >
          <div class="about__principle-num font-mono">0{{ i + 1 }}</div>
          <h3 class="about__principle-title">{{ p.title }}</h3>
          <p class="about__principle-body">{{ p.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.about__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
}
@media (max-width: 880px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}

.about__copy p {
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.75;
  color: var(--color-fg-muted);
  margin: 0 0 1.25rem;
}
.about__copy p:last-child {
  margin-bottom: 0;
}
.about__copy strong {
  color: var(--color-fg-strong);
  font-weight: 500;
}
.about__copy em {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  color: var(--color-fg);
}

.about__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  align-self: start;
}
.about__stat {
  background: var(--color-bg);
  padding: 1.5rem 1.25rem;
}
.about__stat-value {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 400;
  color: var(--color-fg-strong);
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}
.about__stat-label {
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  line-height: 1.4;
}

.about__principles {
  margin-top: clamp(3.5rem, 8vw, 6rem);
  padding-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid var(--color-border);
}
.about__principles-eyebrow {
  margin-bottom: 1.75rem;
  color: var(--color-accent);
}
.about__principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 3vw, 2.5rem);
}
@media (max-width: 880px) {
  .about__principles-grid {
    grid-template-columns: 1fr;
  }
}
.about__principle {
  position: relative;
}
.about__principle-num {
  font-size: 0.78rem;
  color: var(--color-fg-subtle);
  margin-bottom: 0.85rem;
  letter-spacing: 0.04em;
}
.about__principle-title {
  font-size: 1.05rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  margin: 0 0 0.65rem;
  letter-spacing: -0.01em;
}
.about__principle-body {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-fg-muted);
  margin: 0;
}
</style>
