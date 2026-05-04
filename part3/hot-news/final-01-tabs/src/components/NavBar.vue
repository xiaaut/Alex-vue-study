<template>
  <van-nav-bar
    title="热点新闻"
    right-text="刷新"
    left-text="收藏"
    @click-right="handleRefresh"
  />
</template>

<script setup>
function handleRefresh() {
  window.location.reload();
}
</script>
