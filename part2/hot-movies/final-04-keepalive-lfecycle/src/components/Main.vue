<template>
  <main class="main">
    <MovieList :isOpen1 :toggleOpen1 />

    <WatchedMovieList :isOpen2 :watched :toggleOpen2 :avgSc :avgUserRating />
  </main>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import WatchedMovieList from "./WatchedMovieList.vue";

const average = (arr) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

const tempWatchedData = [
  {
    id: "tt1375666",
    nm: "Inception",
    comingTitle: "2010",
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    sc: 8.8,
    userRating: 10,
  },
  {
    id: "tt0088763",
    nm: "Back to the Future",
    comingTitle: "1985",
    img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    sc: 8.5,
    userRating: 9,
  },
];

export default {
  data() {
    return {
      watched: tempWatchedData,
      isOpen1: true,
      isOpen2: true,
    };
  },

  methods: {
    toggleOpen1() {
      this.isOpen1 = !this.isOpen1;
    },

    toggleOpen2() {
      this.isOpen2 = !this.isOpen2;
    },
  },

  computed: {
    avgSc() {
      return average(this.watched.map((movie) => movie.sc));
    },

    avgUserRating() {
      return average(this.watched.map((movie) => movie.userRating));
    },
  },

  components: {
    MovieList,
    WatchedMovieList,
  },
};
</script>
