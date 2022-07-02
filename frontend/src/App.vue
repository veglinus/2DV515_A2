<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
ul {
  list-style-type: none;
  padding-inline-start: 0;
}
a {
  color: #42b983;
}
#error {
  font-weight: bolder;
  color: red;
}
.center {
  margin-left: auto;
  margin-right: auto;
}

</style>
