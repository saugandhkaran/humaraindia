<template>
<div class="result-page">
    <h1 class="quiz-category--header">{{category.name}}</h1>
    <h3 class="page-title">Results</h3>
    <div class="flex-container">
    <div>You scored <span class="highlight">{{score.score}}</span>/{{score.total}}</div>
    <div class="btn">
        <router-link to="/categories" class="link"><button class="primary-button">Try again</button></router-link>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Result',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {
        category: {},
        score: {}
    }
  },
  methods: {
      getScore () {
          this.category = this.$store.getters.category;
          this.score = this.$store.getters.score;
      }
  },
  mounted() {
    window.scrollTo(top);
    this.getScore();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}
.quiz-category--header {
    text-align: center;
}
.btn {
    margin-top: 40px;
}

.link {
    text-decoration: none;
}
</style>
