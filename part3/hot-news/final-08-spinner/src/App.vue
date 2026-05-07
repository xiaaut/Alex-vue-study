<template>
  <NavBar :toggleShowBookmark :showBookmark></NavBar>

  <div v-show="!showBookmark">
    <van-tabs v-model:active="currentComponent">
      <van-tab title="热点" name="Hot"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
      <van-tab title="金融" name="Finance"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
    </van-tabs>

    <KeepAlive>
      <component :is="componentMap[currentComponent]"></component>
    </KeepAlive>

    <van-back-top></van-back-top>
  </div>

  <Bookmark v-show="showBookmark"></Bookmark>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '@/ui/NavBar.vue';
import Hot from './refactor/hot/Hot.vue';
import Sport from './refactor/sport/Sport.vue';
import Finance from './refactor/finance/Finance.vue';
import Entertainment from './refactor/entertainment/Entertainment.vue';
import Bookmark from './refactor/bookmark/Bookmark.vue';
import { useBookmark } from './composables/bookmark';

const currentComponent = ref('Hot');
const componentMap = {
  Hot: Hot,
  Sport,
  Finance,
  Entertainment,
};

// const showBookmark = ref(false);
// function toggleShowBookmark() {
//   showBookmark.value = !showBookmark.value;
// }

const { showBookmark, toggleShowBookmark } = useBookmark();
</script>

<style lang="scss" scoped></style>
