<template>
  <TogglePurple :togglePurple="togglePurple"></TogglePurple>

  <CircleColor :changeCircleColor="changeCircleColor" :circleColor="circleColor"></CircleColor>

  <CircleSize :changeCircleSize="changeCircleSize" :circleSize="circleSize"></CircleSize>

  <CircleRotate :changeCircleRotate="changeCircleRotate" :circleAngle="circleAngle"> </CircleRotate>

  <Circle :circleClass="circleClass" :circleColor="circleColor" :circleStyle="circleStyle"> </Circle>
</template>

<script>
import CircleSize from './components/CircleSize.vue';
import TogglePurple from './components/TogglePurple.vue';
import CircleRotate from './components/CircleRotate.vue';
import Circle from './components/Circle.vue';
import CircleColor from './components/CircleColor.vue';

export default {
  components: {
    TogglePurple,
    CircleSize,
    CircleRotate,
    Circle,
    CircleColor,
  },
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
};
</script>

<style scoped></style>
