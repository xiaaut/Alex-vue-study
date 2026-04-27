<template>
  <li v-for="movie in comingMovies" :key="movie.id">
    <img :src="movie.img" :alt="`${movie.nm} poster`" />
    <h3>{{ movie.nm }}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{{ movie.comingTitle }}</span>
      </p>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      comingMovies: [],
    };
  },

  async mounted() {
    const response = await fetch('/comingList');
    const data = await response.json();

    // console.log(data.movieList);
    this.comingMovies = data.coming;
  },
};
</script>
