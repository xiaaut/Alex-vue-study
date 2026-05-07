<template>
  <van-card v-for="currentNew in news" :price="currentNew.source" :desc="currentNew.desc" :title="currentNew.title" :thumb="currentNew.imgList[0]" currency=""> </van-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getSportNews } from '../services/apiSportNew';

const news = ref([]);

onMounted(async () => {
  const data = await getSportNews();
  news.value = data.data;
});
</script>
