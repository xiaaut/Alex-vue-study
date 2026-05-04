<template>
  <van-card v-for="currentNew in news" :price="currentNew.source" :desc="currentNew.desc" :title="currentNew.title" :thumb="currentNew.imgList[0]" currency=""> </van-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const news = ref([]);

onMounted(async () => {
  const response = await fetch('https://www.mxnzp.com/api/news/list/v2?typeId=532&page=1&app_id=olpiqhhnmkcvurhh&app_secret=foBKB2xqeWKRZRoDsGzYZaMcLMD9Ugw2');

  const data = await response.json();
  news.value = data.data;
});
</script>
