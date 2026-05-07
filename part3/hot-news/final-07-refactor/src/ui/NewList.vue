<template>
  <van-card v-for="currentNew in news" :price="currentNew.source" :desc="currentNew.desc" :title="currentNew.title" :thumb="currentNew.imgList[0]" currency="">
    <template #footer>
      <van-tag size="small" type="primary">收藏</van-tag>
      <van-tag size="small">隐藏</van-tag>
    </template>
  </van-card>
</template>

<script setup>
defineProps(['news']);
</script>
