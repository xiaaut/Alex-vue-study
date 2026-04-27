<template>
  <label> <input type="checkbox" @change="$emit('toggle-purple')" /> Purple </label>
</template>

<script setup>
defineEmits(['toggle-purple']);
</script>
