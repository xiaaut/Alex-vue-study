<template>
  <van-card v-for="currentNew in news" :price="currentNew.source" :desc="currentNew.desc" :title="currentNew.title" :thumb="currentNew.imgList[0]" currency=""> </van-card>
</template>

<script setup>
defineProps(['news']);
</script>
