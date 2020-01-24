<template>
<div>
<div class="footer">
  <div>
    <h3>'D'INQuizitive</h3>
  </div>
  <div>
    <ul>PRODUCT
      <li>Quiz of the week</li>
      <li>Categories</li>
      <li>Events calendar</li>
    </ul>
  </div>
  <div>
    <ul>HELP
      <router-link to="aboutus" class="link"><li>About us</li></router-link>
      <li>Mission</li>
      <li>Contact us</li>
    </ul>
  </div>
</div>
<div class="footer-end">
  <p>Copyrights dinq.in</p>
  <p>Disclaimer</p>
  <p>Terms of service</p>
</div>
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
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-color: #070708;
  color: white;
  padding: 40px;
  margin-top: 20px;
}

.footer h3 {
  cursor: pointer;
  border-top: 3px solid #ff9933;
  border-bottom: 3px solid #138808;
  margin: 5px;
}

.footer-end {
  display: flex;
  justify-content: space-around;
  background-color: #070708;
  border-top: 1px solid #252c4a;
}

.link {
  text-decoration: none;
  color: white;
}
</style>
