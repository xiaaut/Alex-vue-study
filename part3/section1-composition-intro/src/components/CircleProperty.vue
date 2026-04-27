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

<script>
export default {
  props: ["changeCircleProperty", "circleProperty"],
};
</script>
