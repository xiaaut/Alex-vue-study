<template>
  <TogglePurple @togglePurple="togglePurple" />

  <CircleColor :circleColor @changeCircleColor="changeCircleColor" />

  <!-- <CircleSize :changeCircleSize :circleSize>Circle Size</CircleSize>

  <CircleRotate :changeCircleRotate :circleAngle>Circle Rotate</CircleRotate> -->

  <CircleColorAndRotate :changeCircleSizeAndRotate="changeCircleSize" :circleSizeAndAngle="circleSize">Circle Size</CircleColorAndRotate>
  <CircleColorAndRotate :changeCircleSizeAndRotate="changeCircleRotate" :circleSizeAndAngle="circleAngle">Circle Rotate</CircleColorAndRotate>

  <Circle :circleClass :circleColor :circleStyle />
</template>

<script>
import TogglePurple from './components/TogglePurple.vue';
import CircleSize from './components/CircleSize.vue';
import CircleRotate from './components/CircleRotate.vue';
import Circle from './components/Circle.vue';
import CircleColor from './components/CircleColor.vue';
import CircleColorAndRotate from './components/CircleColorAndRotate.vue';

export default {
  data() {
    return {
      isPurple: false,
      circleColor: '',
      circleSize: 200,
      circleAngle: 0,
    };
  },

  methods: {
    togglePurple() {
      console.log('togglePurple ');
      this.isPurple = !this.isPurple;
    },

    changeCircleSize(value) {
      this.circleSize = value;
    },

    changeCircleRotate(value) {
      this.circleAngle = value;
    },

    changeCircleColor(value) {
      this.circleColor = value;
    },
  },

  computed: {
    circleClass() {
      return this.isPurple ? 'purple' : '';
    },

    circleStyle() {
      return {
        height: `${this.circleSize}px`,
        width: `${this.circleSize}px`,
        lineHeight: `${this.circleSize}px`,
        transform: `rotate(${this.circleAngle}deg)`,
      };
    },
  },

  components: {
    TogglePurple,
    CircleSize,
    CircleRotate,
    Circle,
    CircleColor,
    CircleColorAndRotate,
  },
};
</script>

<style scoped></style>
