<template>
  <div class="container">
    <div class="app-header">
      <prime-header></prime-header>
    </div>
    <div class="app-menu">
      <prime-menu></prime-menu>
    </div>
    <div class="app-content">
      <div id="root-view"></div>
    </div>
    <div class="help-taggle">
      <prime-help></prime-help>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
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
