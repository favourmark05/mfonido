<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import IconAngular from './icons/IconAngular.vue'
import IconVue from './icons/IconVue.vue'
import IconNuxt from './icons/IconNuxt.vue'
import IconReact from './icons/IconReact.vue'
import IconNextjs from './icons/IconNextjs.vue'
import IconTypescript from './icons/IconTypescript.vue'
import IconJs from './icons/IconJs.vue'
import IconHtml from './icons/IconHtml.vue'
import IconCss from './icons/IconCss.vue'
import IconScss from './icons/IconScss.vue'
import IconTailwind from './icons/IconTailwind.vue'
import IconBootstrap from './icons/IconBootstrap.vue'
import IconNode from './icons/IconNode.vue'
import IconFirebase from './icons/IconFirebase.vue'
import IconGithub from './icons/IconGithub.vue'
import IconFigma from './icons/IconFigma.vue'
import IconNotion from './icons/IconNotion.vue'
import IconTrello from './icons/IconTrello.vue'

const groups = [
  {
    label: 'Frameworks & languages',
    items: [
      { name: 'Vue 3', icon: IconVue },
      { name: 'Nuxt', icon: IconNuxt },
      { name: 'React', icon: IconReact },
      { name: 'Next.js', icon: IconNextjs },
      { name: 'Angular', icon: IconAngular },
      { name: 'TypeScript', icon: IconTypescript },
      { name: 'JavaScript', icon: IconJs },
      { name: 'Node.js', icon: IconNode },
    ],
  },
  {
    label: 'Styling & UI',
    items: [
      { name: 'Tailwind', icon: IconTailwind },
      { name: 'SCSS', icon: IconScss },
      { name: 'CSS', icon: IconCss },
      { name: 'HTML', icon: IconHtml },
      { name: 'Bootstrap', icon: IconBootstrap },
    ],
  },
  {
    label: 'Platform & tooling',
    items: [
      { name: 'Git / GitHub', icon: IconGithub },
      { name: 'Firebase', icon: IconFirebase },
      { name: 'Figma', icon: IconFigma },
      { name: 'Notion', icon: IconNotion },
      { name: 'Trello', icon: IconTrello },
    ],
  },
]
</script>

<template>
  <section id="stack" class="stack container">
    <SectionHeader
      index="03"
      eyebrow="Stack"
      title="The toolbox I reach for."
      description="Six years of writing production code has refined what I trust to ship — and what I’d advocate for on a senior team. I’m comfortable picking up adjacent tools when the work demands it."
    />

    <div class="stack__groups">
      <div
        v-for="(group, gi) in groups"
        :key="group.label"
        class="stack__group"
        v-reveal="{ delay: gi * 100 }"
      >
        <h3 class="stack__group-label eyebrow">{{ group.label }}</h3>
        <ul class="stack__list">
          <li v-for="item in group.items" :key="item.name" class="stack__item">
            <span class="stack__icon">
              <component :is="item.icon" />
            </span>
            <span class="stack__name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.stack__groups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
@media (max-width: 880px) {
  .stack__groups {
    grid-template-columns: 1fr;
  }
}

.stack__group {
  background: var(--color-bg);
  padding: 1.75rem;
}
.stack__group-label {
  margin-bottom: 1.25rem;
  color: var(--color-accent-strong);
  display: block;
}

.stack__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1rem;
}
@media (min-width: 1024px) {
  .stack__list {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 1280px) {
  .stack__list {
    grid-template-columns: 1fr 1fr;
  }
}

.stack__item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  background: var(--color-bg-elev-1);
  transition:
    border-color 220ms var(--ease-out-quart),
    background-color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.stack__item:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-elev-2);
  transform: translateY(-1px);
}

.stack__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--color-fg-muted);
}
.stack__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.stack__name {
  font-size: 0.9rem;
  color: var(--color-fg);
  font-weight: 500;
  letter-spacing: -0.005em;
}
</style>
