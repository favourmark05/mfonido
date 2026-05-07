// v-reveal directive
// Uses IntersectionObserver to add `is-visible` once the element scrolls into view.
// Honour prefers-reduced-motion: reveal immediately.
//
// Usage:
//   <div v-reveal>...</div>
//   <div v-reveal:80>...</div>          // delay in ms
//   <div v-reveal="{ delay: 120 }">...</div>

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null

function ensureObserver() {
  if (observer || typeof window === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  return observer
}

function resolveDelay(binding) {
  if (typeof binding.value === 'number') return binding.value
  if (binding.value && typeof binding.value.delay === 'number') return binding.value.delay
  if (binding.arg) {
    const n = Number(binding.arg)
    if (!Number.isNaN(n)) return n
  }
  return 0
}

export const revealDirective = {
  mounted(el, binding) {
    el.dataset.reveal = ''
    const delay = resolveDelay(binding)
    if (delay > 0) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (reduceMotion) {
      el.classList.add('is-visible')
      return
    }

    const obs = ensureObserver()
    if (!obs) {
      el.classList.add('is-visible')
      return
    }
    obs.observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
