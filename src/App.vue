<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  mounted() {
    if(localStorage.getItem("userType") == null) {
      this.$router.replace('/login');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
