<template>
  <div id="app">
    <h1>Hello from Vue.js!</h1>
    <button @click="fetchData">Fetch Data from Node.js</button>
    <p>message: {{ message }}</p>
    <button @click="handleResetMessage">Reset message</button>
    <hr>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    handleResetMessage() {
      this.message = '';
    },
    async fetchData() {
      try {
        const response = await fetch('/api/greeting');
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
