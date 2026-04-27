<template>
  <label>
    <slot />
    <input
      type="number"
      :value="circleProperty"
      @input="(event) => changeCircleProperty(event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps(["changeCircleProperty", "circleProperty"]);
</script>
