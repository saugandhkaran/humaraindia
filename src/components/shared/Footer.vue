<template>
<div class="footer">
Copyright dinq.in
</div>
</template>

<script>
export default {
  name: 'Footer',
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
.footer {
  display: flex;
  justify-content: space-between;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #070708;
  color: white;
}

</style>
