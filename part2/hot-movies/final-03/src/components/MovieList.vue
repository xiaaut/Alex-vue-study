<template>
  <div class="box">
    <button class="btn-toggle" @click="toggleComponent">
      {{ isOpen1 ? '热映中' : '即将上映' }}
    </button>
    <!-- <ul class="list" v-show="isOpen1">
      <HotMovieList></HotMovieList>
    </ul>
    <ul class="list" v-show="!isOpen1">
      <ComingMovieList></ComingMovieList>
    </ul> -->
    <ul class="list">
      <KeepAlive>
        <component :is="currentComponent"></component>
      </KeepAlive>
    </ul>
  </div>
</template>
<script>
import HotMovieList from './HotMovieList.vue';
import ComingMovieList from './ComingMovieList.vue';

export default {
  props: ['isOpen1', 'toggleOpen1'],

  data() {
    return {
      currentComponent: 'HotMovieList',
    };
  },

  methods: {
    toggleComponent() {
      this.currentComponent = this.currentComponent === 'HotMovieList' ? 'ComingMovieList' : 'HotMovieList';
    },
  },

  components: {
    HotMovieList,
    ComingMovieList,
  },
};
</script>
