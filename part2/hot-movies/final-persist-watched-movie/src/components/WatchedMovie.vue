<template>
  <li>
    <img :src="movie.img" :alt="movie.nm + 'poster'" />
    <h3>{{ movie.nm }}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{{ movie.sc }}</span>
      </p>

      <button class="btn-delete" @click="handleDelete">X</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['movie', 'handleDeleteWatchedMovie'],

  methods: {
    handleDelete() {
      const movieId = this.movie.id;
      this.handleDeleteWatchedMovie(movieId);

      const watchedMovieList = JSON.parse(localStorage.getItem('watchedMovieList'));

      const filteredWatchedMovieList = watchedMovieList.filter(movie => movie.id !== movieId);

      localStorage.setItem('watchedMovieList', JSON.stringify(filteredWatchedMovieList));
    },
  },
};
</script>
