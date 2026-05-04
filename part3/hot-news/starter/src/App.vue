<template>
  <NavBar></NavBar>

  <van-tabs v-model:active="currentComponent">
    <van-tab title="热点" name="Hot"></van-tab>
    <van-tab title="运动" name="Sport"></van-tab>
    <van-tab title="金融" name="Finance"></van-tab>
    <van-tab title="娱乐" name="Entertainment"></van-tab>
  </van-tabs>

  <component :is="componentMap[currentComponent]"></component>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import Hot from './components/Hot.vue';
import Sport from './components/Sport.vue';
import Finance from './components/Finance.vue';
import Entertainment from './components/Entertainment.vue';

const currentComponent = ref('Hot');
const componentMap = {
  Hot: Hot,
  Sport,
  Finance,
  Entertainment,
};
</script>

<style lang="scss" scoped></style>
