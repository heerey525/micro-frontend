<template>
  <div id="layout-wrapper">
    <div class="layout-header">头部导航</div>
    <router-link to="/sub-vue">sub-vue</router-link>
    <br />
    <router-link to="/sub-react">sub-react</router-link>
    <div id="root-view"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
