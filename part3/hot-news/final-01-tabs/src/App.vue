<template>
  <NavBar />

  <van-tabs v-model:active="activeTab">
    <van-tab title="热点" name="hot">内容 1</van-tab>
    <van-tab title="运动" name="sport">内容 2</van-tab>
    <van-tab title="金融" name="finance">内容 3</van-tab>
    <van-tab title="娱乐" name="entertainment">内容 4</van-tab>
  </van-tabs>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { ref } from "vue";

const activeTab = ref("hot");
</script>
