<template>
  <main>
    <h1>Advices</h1>
    <p>{{ isLoading ? 'Loading...' : advice }}</p>
    <button @click="getAdvice" :disabled="isLoading">Get Advice</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      advice: "There's no advice yet",
      isLoading: false,
    };
  },

  methods: {
    async getAdvice() {
      this.isLoading = true;
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      // console.log(data);
      this.advice = data.slip.advice;
      this.isLoading = false;
    },
  },
};
</script>
