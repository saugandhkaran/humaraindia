<template>
<div class="header">
    <h3>humarabharat.in</h3>
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

</style>
