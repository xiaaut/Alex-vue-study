<template>
  <div class="circle" :class="[circleClass, circleColor]" :style="circleStyle">
    Hi!
  </div>
</template>

<script setup>
defineProps(["circleClass", "circleColor", "circleStyle"]);
</script>
