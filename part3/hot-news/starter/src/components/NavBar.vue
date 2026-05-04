<template>
  <van-nav-bar title="热点新闻" left-text="收藏" right-text="刷新" @click-right="handleRefresh" />
</template>

<script setup>
function handleRefresh() {
  console.log('refresh');
}
</script>
