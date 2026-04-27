<template>
  <Navbar>
    <Logo />
  </Navbar>

  <Main>
    <Box closeString="热映中" openString="即将上映" :handleSwitchComponent="handleSwitchComponent">
      <Loading v-show="isLoading" />
      <MovieList v-show="!isLoading" :movies :handleSelectMovie />
    </Box>

    <Box>
      <section v-if="!selectedId">
        <WatchedSummary :watched />
        <WatchedList :watched :handleDeleteWatchedMovie />
      </section>

      <MovieDetail v-else :selectedId :onCloseMovie="handleCloseMovie" :onAddWatched="handleAddWatched" :watched />
    </Box>
  </Main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Logo from '@/components/Logo.vue';
import Main from './components/Main.vue';
import Box from './components/Box.vue';
import Loading from './components/Loading.vue';
import MovieList from './components/MovieList.vue';
import WatchedSummary from './components/WatchedSummary.vue';
import WatchedList from './components/WatchedList.vue';
import MovieDetail from './components/MovieDetail.vue';

// const tempWatchedList = [
//   {
//     id: 1294273,
//     img: "https://p0.pipi.cn/mediaplus/friday_image_fe/0fa334520515c28b0793b67ea7fad03b546ff.jpg?imageMogr2/quality/80",
//     nm: "哪吒之魔童闹海",
//     rt: "2025-01-29",
//     sc: 9.8,
//   },
// ];

export default {
  data() {
    return {
      hotMovies: [],
      comingMovies: [],
      watched: [],
      isLoading: false,

      componentName: 'Hot',

      selectedId: null,
    };
  },

  methods: {
    handleSelectMovie(id) {
      if (id === this.selectedId) {
        this.selectedId = null;
        return;
      }

      this.selectedId = id;
    },

    handleDeleteWatchedMovie(id) {
      this.watched = this.watched.filter(movie => movie.id !== id);
    },

    handleCloseMovie() {
      this.selectedId = null;
    },

    handleAddWatched(movie) {
      this.watched.push(movie);
    },

    handleSwitchComponent() {
      this.componentName = this.componentName === 'Hot' ? 'Coming' : 'Hot';
    },
  },

  computed: {
    movies() {
      return this.componentName === 'Hot' ? this.hotMovies : this.comingMovies;
    },
  },

  components: {
    Navbar,
    Logo,
    Main,
    Box,
    Loading,
    MovieList,
    WatchedSummary,
    WatchedList,
    MovieDetail,
  },

  async mounted() {
    this.isLoading = true;

    const hotMovieResponse = await fetch('/movieOnInfoList');
    const hotMovieData = await hotMovieResponse.json();

    const comingMovieResponse = await fetch('/comingList');
    const comingMovieData = await comingMovieResponse.json();

    this.hotMovies = hotMovieData.movieList;
    this.comingMovies = comingMovieData.coming;

    // Load watched movies from Local storage
    const watchedMovieList = localStorage.getItem('watched-movie-list');
    if (!watchedMovieList) {
      localStorage.setItem('watched-movie-list', JsoN.stringify([]));
    } else {
      this.watched = JsoN.parse(watchedMovieList);
      this.isLoading = false;
    }

    this.isLoading = false;
  },
};
</script>
