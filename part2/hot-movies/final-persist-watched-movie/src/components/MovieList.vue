<template>
  <ul class="list list-movies">
    <Movie v-for="movie in movies" :key="movie.id" :movie :handleSelectMovie />
  </ul>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  props: ["movies", "handleSelectMovie"],

  components: {
    Movie,
  },
};
</script>
