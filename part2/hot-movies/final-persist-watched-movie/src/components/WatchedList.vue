<template>
  <ul class="list" v-for="movie in watched">
    <WatchedMovie :movie :key="movie.id" :handleDeleteWatchedMovie />
  </ul>
</template>

<script>
import WatchedMovie from '@/components/WatchedMovie.vue';

export default {
  // TODO: Delete event handler
  props: ['watched', 'handleDeleteWatchedMovie'],

  components: {
    WatchedMovie,
  },
};
</script>
