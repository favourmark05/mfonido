<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import { writings } from '@/Api/writings.js'

const featured = writings.slice(0, 5)
</script>

<template>
  <section id="writing" class="writing container">
    <SectionHeader
      index="07"
      eyebrow="Writing"
      title="Words I’ve put into the world."
      description="Long-form essays on engineering practice, communication, and community — published on dev.to and the Remita engineering blog."
    />

    <ol class="writing__list" v-reveal>
      <li v-for="w in featured" :key="w.title" class="writing__item">
        <a :href="w.url" target="_blank" rel="noopener noreferrer" class="writing__link">
          <span class="writing__year font-mono">{{ w.year }}</span>
          <span class="writing__title">{{ w.title }}</span>
          <span class="writing__venue">{{ w.linkText }}</span>
          <span class="writing__arrow" aria-hidden="true">↗</span>
        </a>
      </li>
    </ol>

    <div class="writing__archive" v-reveal>
      <router-link to="/writing" class="link-underline">
        Read every essay
        <span aria-hidden="true">&rarr;</span>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.writing {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.writing__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}
.writing__item {
  border-bottom: 1px solid var(--color-border);
}
.writing__link {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) auto 24px;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 0.5rem;
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-md);
  transition:
    background-color 220ms var(--ease-out-quart),
    padding 220ms var(--ease-out-quart);
}
.writing__link:hover {
  background: var(--color-bg-elev-1);
  padding-left: 1rem;
  padding-right: 1rem;
}
.writing__year {
  font-size: 0.8rem;
  color: var(--color-fg-subtle);
  letter-spacing: 0.02em;
}
.writing__title {
  font-size: 1.05rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
  transition: color 220ms var(--ease-out-quart);
}
.writing__link:hover .writing__title {
  color: var(--color-accent-strong);
}
.writing__venue {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-fg-muted);
}
.writing__arrow {
  color: var(--color-fg-subtle);
  text-align: right;
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.writing__link:hover .writing__arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .writing__link {
    grid-template-columns: 60px 1fr 24px;
    grid-template-rows: auto auto;
    row-gap: 0.35rem;
  }
  .writing__venue {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .writing__title {
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .writing__arrow {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: center;
  }
}

.writing__archive {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}
</style>
