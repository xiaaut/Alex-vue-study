<template>
  <TogglePurple @togglePurple="togglePurple" />

  <CircleColor :circleColor @changeCircleColor="changeCircleColor" />

  <CircleProperty :circleProperty="circleSize" :changeCircleProperty="changeCircleSize">Circle Size</CircleProperty>

  <CircleProperty :circleProperty="circleAngle" :changeCircleProperty="changeCircleRotate">Circle Rotate</CircleProperty>

  <Circle :circleClass :circleColor :circleStyle />
</template>

<script setup>
import { ref, computed } from 'vue';
import TogglePurple from './components/TogglePurple.vue';
import Circle from './components/Circle.vue';
import CircleColor from './components/CircleColor.vue';
import CircleProperty from './components/CircleProperty.vue';
import { useTogglePurple } from './hooks/togglePurple.js';
import { useCircleSize } from './hooks/circleSize.js';
import { useCircleColor } from './hooks/circleColor.js';
import { useCircleAngle } from './hooks/circleAngle.js';

const { isPurple, togglePurple } = useTogglePurple();

const circleClass = computed(() => {
  return isPurple.value ? 'purple' : '';
});

// const circleSize = ref(200);
// function changeCircleSize(value) {
//   circleSize.value = value;
// }

const { circleSize, changeCircleSize } = useCircleSize();

// const circleAngle = ref(0);
// function changeCircleRotate(value) {
//   circleAngle.value = value;
// }

const { circleAngle, changeCircleRotate } = useCircleAngle();

// const circleColor = ref('');
// function changeCircleColor(value) {
//   circleColor.value = value;
// }

const { circleColor, changeCircleColor } = useCircleColor();

const circleStyle = computed(() => {
  return {
    height: `${circleSize.value}px`,
    width: `${circleSize.value}px`,
    lineHeight: `${circleSize.value}px`,
    transform: `rotate(${circleAngle.value}deg)`,
  };
});
</script>

<style scoped></style>
