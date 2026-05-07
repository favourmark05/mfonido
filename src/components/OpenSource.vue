<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import { githubProfile, pinnedRepos, contributions } from '@/Api/openSource.js'
</script>

<template>
  <section id="open-source" class="oss container">
    <SectionHeader
      index="06"
      eyebrow="Open source"
      title="Code worth sharing — and worth contributing to."
      description="Open source is where I sharpen patterns, learn in public, and pay it forward to engineers earlier in their journey."
    />

    <div class="oss__profile" v-reveal>
      <div class="oss__profile-main">
        <div class="oss__profile-handle">
          <svg
            class="oss__profile-icon"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.96 10.96 0 015.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          <a
            :href="githubProfile.url"
            target="_blank"
            rel="noopener noreferrer"
            class="oss__profile-link"
          >
            github.com/{{ githubProfile.handle }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p class="oss__profile-blurb">{{ githubProfile.blurb }}</p>
      </div>

      <ul class="oss__contributions">
        <li v-for="c in contributions" :key="c.label" class="oss__contribution">
          <span class="oss__contribution-label">{{ c.label }}</span>
          <span class="oss__contribution-detail">{{ c.detail }}</span>
        </li>
      </ul>
    </div>

    <div class="oss__repos">
      <h3 class="oss__repos-title eyebrow" v-reveal>Pinned repositories</h3>
      <div class="oss__repos-grid">
        <a
          v-for="(r, i) in pinnedRepos"
          :key="r.name"
          :href="r.href"
          target="_blank"
          rel="noopener noreferrer"
          class="oss__repo card card-hover-lift"
          v-reveal="{ delay: i * 80 }"
        >
          <div class="oss__repo-head">
            <span class="oss__repo-name">
              <span v-if="r.org" class="oss__repo-org">{{ r.org.toLowerCase() }}/</span>{{ r.name }}
            </span>
            <span class="oss__repo-arrow" aria-hidden="true">↗</span>
          </div>
          <span v-if="r.badge" class="oss__repo-badge">
            <span class="dot oss__repo-badge-dot" aria-hidden="true" />
            {{ r.badge }}
          </span>
          <p class="oss__repo-description">{{ r.description }}</p>
          <div class="oss__repo-foot">
            <span class="oss__repo-language">
              <span class="oss__repo-language-dot" aria-hidden="true" />
              {{ r.language }}
            </span>
            <span class="oss__repo-stack">
              <span v-for="t in r.stack" :key="t" class="pill">{{ t }}</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.oss {
  padding-top: var(--section-gap-y);
  padding-bottom: var(--section-gap-y);
}

.oss__profile {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(1.75rem, 3vw, 2.5rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-bg-elev-1);
  margin-bottom: 3rem;
}
@media (max-width: 880px) {
  .oss__profile {
    grid-template-columns: 1fr;
  }
}

.oss__profile-handle {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  color: var(--color-fg);
}
.oss__profile-icon {
  color: var(--color-fg-muted);
}
.oss__profile-link {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--color-fg-strong);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 220ms var(--ease-out-quart);
}
.oss__profile-link:hover {
  border-bottom-color: var(--color-accent-strong);
  color: var(--color-accent-strong);
}
.oss__profile-blurb {
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-fg-muted);
  max-width: 36rem;
}

.oss__contributions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  align-self: center;
}
.oss__contribution {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-left: 1rem;
  border-left: 1px solid var(--color-accent);
}
.oss__contribution-label {
  font-size: 0.85rem;
  color: var(--color-fg-strong);
  font-weight: 500;
}
.oss__contribution-detail {
  font-size: 0.82rem;
  color: var(--color-fg-muted);
}

/* Repos */
.oss__repos-title {
  margin: 0 0 1.25rem;
  color: var(--color-accent-strong);
}
.oss__repos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 880px) {
  .oss__repos-grid {
    grid-template-columns: 1fr;
  }
}
.oss__repo {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  min-height: 200px;
}
.oss__repo-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}
.oss__repo-name {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-fg-strong);
  font-weight: 500;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.oss__repo-org {
  color: var(--color-fg-subtle);
  font-weight: 400;
}

.oss__repo-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent-strong);
  background: var(--color-accent-soft);
  border: 1px solid var(--color-accent-soft);
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  margin-bottom: 0.85rem;
}
.oss__repo-badge-dot {
  width: 5px;
  height: 5px;
  background: var(--color-accent-strong);
  animation: none;
  box-shadow: none;
}
.oss__repo-arrow {
  color: var(--color-fg-subtle);
  transition:
    color 220ms var(--ease-out-quart),
    transform 220ms var(--ease-out-quart);
}
.oss__repo:hover .oss__repo-arrow {
  color: var(--color-accent-strong);
  transform: translate(2px, -2px);
}
.oss__repo-description {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-fg-muted);
  margin: 0 0 1.25rem;
}
.oss__repo-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.oss__repo-language {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-fg-muted);
}
.oss__repo-language-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--color-accent);
}
.oss__repo-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
</style>
