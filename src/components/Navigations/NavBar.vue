<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isOpen = ref(false)
const scrolled = ref(false)
const isHome = computed(() => route.path === '/')

const items = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Stack', target: 'stack' },
  { label: 'Work', target: 'work' },
  { label: 'Community', target: 'community' },
  { label: 'Open Source', target: 'open-source' },
  { label: 'Writing', target: 'writing' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 88
  window.scrollTo({ top, behavior: 'smooth' })
}

const handleClick = async (target) => {
  isOpen.value = false
  if (!isHome.value) {
    await router.push('/')
    requestAnimationFrame(() => scrollToId(target))
  } else {
    scrollToId(target)
  }
}

const goHome = async () => {
  isOpen.value = false
  if (!isHome.value) {
    await router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <button class="nav__brand" @click="goHome" aria-label="Go to top">
        <span class="nav__brand-mark">M</span>
        <span class="nav__brand-name">Mfonido Mark</span>
      </button>

      <nav class="nav__links" aria-label="Primary">
        <button
          v-for="i in items"
          :key="i.target"
          class="nav__link"
          @click="handleClick(i.target)"
        >
          {{ i.label }}
        </button>
      </nav>

      <div class="nav__actions">
        <a
          href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost nav__resume"
        >
          Résumé
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M5 9l5-5M10 4H6m4 0v4"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <button class="btn btn-primary nav__contact" @click="handleClick('contact')">
          Get in touch
        </button>
        <button
          class="nav__menu-btn"
          :aria-expanded="isOpen"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <span :class="['nav__menu-icon', { 'is-open': isOpen }]" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="mobile">
      <div v-if="isOpen" class="nav__mobile" @click.self="isOpen = false">
        <div class="nav__mobile-panel">
          <button
            v-for="i in items"
            :key="i.target"
            class="nav__mobile-link"
            @click="handleClick(i.target)"
          >
            {{ i.label }}
          </button>
          <div class="nav__mobile-actions">
            <a
              href="https://drive.google.com/file/d/1EjMYQEV6Asdltezw19S-aLy9bSIaWNFA/view"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost"
            >
              Résumé
            </a>
            <button class="btn btn-primary" @click="handleClick('contact')">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.85rem 0;
  transition:
    background-color 320ms var(--ease-out-quart),
    border-color 320ms var(--ease-out-quart),
    backdrop-filter 320ms var(--ease-out-quart);
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(10, 10, 11, 0.7);
  backdrop-filter: saturate(160%) blur(12px);
  -webkit-backdrop-filter: saturate(160%) blur(12px);
  border-bottom-color: var(--color-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand */
.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: var(--color-fg-strong);
}
.nav__brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--color-fg-strong);
  color: var(--color-bg);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.04em;
}
.nav__brand-name {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}
@media (max-width: 480px) {
  .nav__brand-name {
    display: none;
  }
}

/* Links */
.nav__links {
  display: none;
  align-items: center;
  gap: 0.25rem;
}
@media (min-width: 1024px) {
  .nav__links {
    display: flex;
  }
}
.nav__link {
  background: none;
  border: 0;
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition:
    color 220ms var(--ease-out-quart),
    background-color 220ms var(--ease-out-quart);
}
.nav__link:hover {
  color: var(--color-fg-strong);
  background: var(--color-bg-elev-1);
}

/* Actions */
.nav__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.nav__resume {
  display: none;
}
@media (min-width: 640px) {
  .nav__resume {
    display: inline-flex;
  }
}

.nav__contact {
  display: none;
}
@media (min-width: 1024px) {
  .nav__contact {
    display: inline-flex;
  }
}

/* Burger */
.nav__menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  cursor: pointer;
  color: var(--color-fg);
}
@media (min-width: 1024px) {
  .nav__menu-btn {
    display: none;
  }
}
.nav__menu-icon {
  position: relative;
  display: block;
  width: 16px;
  height: 1.5px;
  background: currentColor;
  transition: background 0ms 200ms;
}
.nav__menu-icon::before,
.nav__menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 16px;
  height: 1.5px;
  background: currentColor;
  transition:
    top 200ms 200ms,
    transform 200ms;
}
.nav__menu-icon::before {
  top: -5px;
}
.nav__menu-icon::after {
  top: 5px;
}
.nav__menu-icon.is-open {
  background: transparent;
}
.nav__menu-icon.is-open::before,
.nav__menu-icon.is-open::after {
  transition:
    top 200ms,
    transform 200ms 200ms;
  top: 0;
}
.nav__menu-icon.is-open::before {
  transform: rotate(45deg);
}
.nav__menu-icon.is-open::after {
  transform: rotate(-45deg);
}

/* Mobile panel */
.nav__mobile {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 11, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 90;
  padding-top: 88px;
  display: flex;
  justify-content: center;
}
.nav__mobile-panel {
  width: min(420px, calc(100% - 2.5rem));
  height: fit-content;
  background: var(--color-bg-elev-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.nav__mobile-link {
  background: none;
  border: 0;
  padding: 0.85rem 1rem;
  text-align: left;
  font-size: 1.05rem;
  color: var(--color-fg);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition:
    background-color 220ms var(--ease-out-quart),
    color 220ms var(--ease-out-quart);
  letter-spacing: -0.01em;
}
.nav__mobile-link:hover {
  background: var(--color-bg-elev-2);
  color: var(--color-fg-strong);
}
.nav__mobile-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.nav__mobile-actions .btn {
  flex: 1;
  justify-content: center;
}

.mobile-enter-active,
.mobile-leave-active {
  transition: opacity 240ms var(--ease-out-quart);
}
.mobile-enter-active .nav__mobile-panel,
.mobile-leave-active .nav__mobile-panel {
  transition:
    transform 320ms var(--ease-out-expo),
    opacity 240ms var(--ease-out-quart);
}
.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
}
.mobile-enter-from .nav__mobile-panel,
.mobile-leave-to .nav__mobile-panel {
  transform: translateY(-8px);
  opacity: 0;
}
</style>
