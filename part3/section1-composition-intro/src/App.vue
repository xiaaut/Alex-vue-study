<template>
  <TogglePurple @togglePurple="togglePurple" />

  <CircleColor :circleColor @changeCircleColor="changeCircleColor" />

  <CircleProperty :circleProperty="circleSize" :changeCircleProperty="changeCircleSize">Circle Size</CircleProperty>

  <CircleProperty :circleProperty="circleAngle" :changeCircleProperty="changeCircleRotate">Circle Rotate</CircleProperty>

  <Circle :circleClass :circleColor :circleStyle />
</template>

<script>
import { ref } from 'vue';

import TogglePurple from './components/TogglePurple.vue';
import Circle from './components/Circle.vue';
import CircleColor from './components/CircleColor.vue';
import CircleProperty from './components/CircleProperty.vue';

export default {
  setup() {
    const isPurple = ref(false);
    const circleColor = ref('');
    const circleSize = ref(200);
    const circleAngle = ref(0);

    function togglePurple() {
      // console.log('togglePurple ');
      isPurple.value = !this.isPurple;
    }

    function changeCircleSize(value) {
      circleSize.value = value;
    }

    function changeCircleRotate(value) {
      circleAngle.value = value;
    }

    function changeCircleColor(value) {
      circleColor.value = value;
    }

    return {
      isPurple,
      circleColor,
      circleSize,
      circleAngle,

      togglePurple,
      changeCircleSize,
      changeCircleRotate,
      changeCircleColor,
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
    Circle,
    CircleColor,
    CircleProperty,
  },
};
</script>

<style scoped></style>
