<template>
  <li :key="movie.id" @click="handleSelectMovie(movie.id)">
    <img :src="movie.img" :alt="movie.nm + 'poster'" />
    <h3>{{ movie.nm }}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{{ movie.rt }}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["movie", "handleSelectMovie"],
};
</script>
