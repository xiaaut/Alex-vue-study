<template>
  <!-- <van-card v-for="currentNew in news" :price="currentNew.source" :desc="currentNew.desc" :title="currentNew.title" :thumb="currentNew.imgList[0]" currency=""> </van-card> -->
  <NewList :news></NewList>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getHotNews } from '../services/apiHotNew';
import NewList from './NewList.vue';

const news = ref([]);

onMounted(async () => {
  const data = await getHotNews();

  news.value = data;
});
</script>
