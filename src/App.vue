<script>
export default {
  // data() {
  //   return {
  //     mouseX: 0,
  //     mouseY: 0,
  //   };
  // },
  // computed: {
  //   circleStyle() {
  //     return {
  //       top: `${this.mouseY}px`,
  //       left: `${this.mouseX}px`,
  //       position: 'absolute',
  //       transform: 'translate(-50%, -50%)',
  //       backgroundColor: `hsl(${this.mouseX % 360}, 100%, 50%)`,
  //       width: '40px',
  //       height: '40px',
  //       borderRadius: '50%',
  //       pointerEvents: 'none',
  //       transition: 'transform 0.1s ease-out',
  //       zIndex: 99999999,
  //     };
  //   },
  // },
  // methods: {
  //   updateMousePosition(event) {
  //     this.mouseX = event.clientX;
  //     this.mouseY = event.clientY;
  //   },
  // },
};
</script>

<template>
  <RouterView />
</template>

<style scoped>
/* .circle {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
} */
</style>

