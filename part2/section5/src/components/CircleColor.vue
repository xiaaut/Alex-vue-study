<template>
  <select
    :value="circleColor"
    @change="(event) => $emit('change-circle-color', event.target.value)"
  >
    <option value="">White</option>
    <option value="text-black">Black</option>
    <option value="text-orange">Orange</option>
  </select>
</template>

<script>
export default {
  props: ["circleColor"],
  emits: ["change-circle-color"],
};
</script>
