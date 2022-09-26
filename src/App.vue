<template>
  <div>
    <NavBar />
    <Users />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import Users from './pages/Users.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Users
}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
