<template>
  <label>
    Circle Rotate
    <input type="number" :value="circleAngle" @input="event => changeCircleRotate(event.target.value)" />
  </label>
</template>
<script>
export default {
  props: ['changeCircleRotate', 'circleAngle'],
};
</script>
