<template>
<div>
<Header></Header>
  <div id="app">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from './components/shared/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body {
  background-color: #252c4a;
  color: #fefeff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,h2,h3 {
  /* color: #838bb3; */
}

div {
  margin: 0;
  padding: 0;
}
.primary-button {
    padding: 15px 40px;
    border-radius: 6px;
    color: white;
    font-size: 1.2em;
    background-color: #234634;
    bordeR: 2px solid white;
}
.highlight {
    color: #838bb3;
    font-size: 1.3em;
    font-weight: bold;
}
#app {
}
</style>
