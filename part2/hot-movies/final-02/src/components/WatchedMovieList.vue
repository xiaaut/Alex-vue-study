<template>
  <div class="box">
    <button class="btn-toggle" @click="isOpen2 = !isOpen2">
      {{ isOpen2 ? '–' : '+' }}
    </button>
    <div v-if="isOpen2">
      <div class="summary">
        <h2>你看过的电影</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{{ watched.length }} 部</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{{ avgSc }}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{{ avgUserRating }}</span>
          </p>
        </div>
      </div>

      <ul class="list">
        <li v-for="movie of watched" :key="movie.id">
          <img :src="movie.img" :alt="`${movie.nm} Poster`" />
          <h3>{{ movie.nm }}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{{ movie.sc }}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{{ movie.userRating }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['watched', 'avgSc', 'avgUserRating', 'isOpen2', 'toggleOpen2'],
};
</script>
