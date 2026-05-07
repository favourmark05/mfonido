<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const visible = ref(false)

const onMove = (e) => {
  x.value = e.clientX
  y.value = e.clientY
  visible.value = true
}
const onLeave = () => {
  visible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseleave', onLeave)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseleave', onLeave)
})
</script>

<template>
  <div class="app-shell">
    <div
      class="ambient-glow"
      :style="{ left: x + 'px', top: y + 'px', opacity: visible ? 1 : 0 }"
    />
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
.app-shell {
  position: relative;
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-fg);
  isolation: isolate;
  overflow: hidden;
}

/* Subtle cursor-following glow — replaces the rainbow effect */
.ambient-glow {
  position: fixed;
  width: 540px;
  height: 540px;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(110, 122, 250, 0.12) 0%,
    rgba(110, 122, 250, 0.05) 35%,
    rgba(110, 122, 250, 0) 70%
  );
  filter: blur(20px);
  transition: opacity 600ms ease;
  z-index: 0;
  mix-blend-mode: screen;
}

@media (max-width: 768px) {
  .ambient-glow {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ambient-glow {
    display: none;
  }
}

/* Page transition — soft cross-fade */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 400ms var(--ease-out-expo),
    transform 400ms var(--ease-out-expo);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
