<template>
  <div class="box">
    <button class="btn-toggle" @click="toggleOpen1">
      {{ isOpen1 ? '热映中' : '即将上映' }}
    </button>
    <ul class="list" v-if="isOpen1">
      <li v-for="movie in movies" :key="movie.id">
        <img :src="movie.img" :alt="`${movie.nm} poster`" />
        <h3>{{ movie.nm }}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{{ movie.comingTitle }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['movies', 'isOpen1', 'toggleOpen1'],
};
</script>
