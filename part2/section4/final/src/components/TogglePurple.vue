<template>
  <label> <input type="checkbox" @change="$emit('toggle-purple')" /> Purple </label>
</template>

<script>
export default {
  // props: ['togglePurple']
  emits: ['toggle-purple'],
};
</script>
