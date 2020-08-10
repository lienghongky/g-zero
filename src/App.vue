<template>
  <div id="app" class="p-0 m-0">
    <router-view class="h-screen" />
  </div>
</template>
<script>
export default {
  mounted(){
    window.scrollTo(0,1)
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
}
html,body{
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
}
a {
    text-decoration: none;
}
</style>
