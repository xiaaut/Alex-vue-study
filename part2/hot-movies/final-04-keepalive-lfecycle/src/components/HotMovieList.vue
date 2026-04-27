<template>
  <li v-for="movie in hotMovies" :key="movie.id">
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
      hotMovies: [],
    };
  },

  async mounted() {
    const response = await fetch("/movieOnInfoList");
    const data = await response.json();

    this.hotMovies = data.movieList;
  },

  activated() {
    // gender a random array
    const randomArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    );
    console.log(randomArray);
  },
};
</script>
