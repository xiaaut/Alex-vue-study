<template>
  <div class="box">
    <button class="btn-toggle" @click="toggleOpen1">
      {{ isOpen1 ? '热映中' : '即将上映' }}
    </button>
    <ul class="list" v-if="isOpen1">
      <HotMovieList></HotMovieList>
    </ul>
    <ul class="list" v-else">
      <ComingMvieList></ComingMvieList>
    </ul>
  </div>
</template>
<script>
import HotMovieList from './HotMovieList.vue';
import ComingMvieList from './ComingMvieList.vue';

export default {
  props: ['isOpen1', 'toggleOpen1'],
  components: {
    HotMovieList,
    ComingMvieList,
  },
};
</script>
