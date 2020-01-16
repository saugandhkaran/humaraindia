<template>
<div class="header">
  <router-link to="/categories" class="link" ><h3>humarabharat.in</h3></router-link>
</div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
}

.header h3 {
  cursor: pointer;
  border-top: 3px solid #ff9933;
  border-bottom: 3px solid #138808;
  margin: 5px;

}
.link {
    text-decoration: none;
    color: white;
}

</style>
