<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
}
</script>




<style scoped>
*{
  margin: 0;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #cccccc;
  height: 100%;
}

h1 {
  padding-top: 60px;
  font-weight: normal;
}

h3 {
  font-weight: normal;
}


</style>
