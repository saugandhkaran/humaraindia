<template>
<div>
<Header></Header>
  <div id="app">
    <router-view></router-view>
  </div>
<Footer></Footer>
</div>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
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
    padding: 10px 40px;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    font-size: 1.2em;
    background-color: #234634;
    bordeR: 1px solid #3b4b96;
}
.highlight {
    color: #838bb3;
    font-size: 1.3em;
    font-weight: bold;
}
#app {
  max-width: 1366px;
  margin: 0 auto;
}
</style>
