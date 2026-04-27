<template>
  <label>
    <slot />
    <input type="number" :value="circleSizeAndAngle" @input="event => changeCircleSizeAndRotate(event.target.value)" />
  </label>
</template>

<script>
export default {
  props: ['changeCircleSizeAndRotate', 'circleSizeAndAngle'],
};
</script>
