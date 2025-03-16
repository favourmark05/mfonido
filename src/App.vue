<script setup>
import { ref, computed } from 'vue';

// Pointer light state
const mouseX = ref(0);
const mouseY = ref(0);
const pointerSize = ref(1000); // Size of the light effect in pixels

// Container reference to track mouse position
const appContainer = ref(null);

// Handle mouse movement
const handleMouseMove = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// Computed style for the pointer light
const pointerStyle = computed(() => {
  return {
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`,
    width: `${pointerSize.value}px`,
    height: `${pointerSize.value}px`,
    transform: 'translate(-50%, -50%)'
  };
});
</script>

<template>
  <div class="app-container" @mousemove="handleMouseMove" ref="appContainer">
    <div class="pointer-light" :style="pointerStyle"></div>
    <RouterView />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.pointer-light {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.3) 0%,    /* blue-500 with 30% opacity */
    rgba(59, 130, 246, 0.1) 40%,   /* blue-500 with 10% opacity */
    rgba(59, 130, 246, 0) 70% 
  );
  z-index: 1000;
}
</style>
