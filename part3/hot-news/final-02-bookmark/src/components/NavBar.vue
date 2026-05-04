<template>
  <van-nav-bar title="热点新闻" :left-text="leftText" right-text="刷新" @click-right="handleRefresh" @click-left="toggleShowBookmark" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['showBookmark', 'toggleShowBookmark']);

const leftText = computed(() => (props.showBookmark ? '返回' : '收藏'));
function handleRefresh() {
  console.log('refresh');
}
</script>
