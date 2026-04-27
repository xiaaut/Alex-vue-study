<template>
  <div class="box">
    <button class="btn-toggle" @click="toggleComponent">
      {{ currentComponent === "HotMovieList" ? "热映中" : "即将上映" }}
    </button>

    <ul class="list">
      <KeepAlive>
        <component :is="currentComponent"></component>
      </KeepAlive>
    </ul>
  </div>
</template>

<script>
import ComingMovieList from "./ComingMovieList.vue";
import HotMovieList from "./HotMovieList.vue";

export default {
  props: ["isOpen1", "toggleOpen1"],

  data() {
    return {
      currentComponent: "HotMovieList",
    };
  },

  methods: {
    toggleComponent() {
      this.currentComponent =
        this.currentComponent === "HotMovieList"
          ? "ComingMovieList"
          : "HotMovieList";
    },
  },

  components: {
    HotMovieList,
    ComingMovieList,
  },
};
</script>
