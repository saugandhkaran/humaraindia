<template>
<div class="result-page">
    <h1 class="quiz-category--header">{{category.name}}</h1>
    <h3 class="page-title">Results</h3>
    <div class="flex-container">
    <h1>You scored <span class="highlight" :style="{color: $store.getters.category.category_color}">{{score.score}}</span>/{{score.total}}</h1>
    <router-link to="/categories" class="link">
        <button class="primary-button" :style="{backgroundColor: $store.getters.category.category_color}">Go back to categories</button>
    </router-link>
    <h2 class="share-header">Challenge your friends now!</h2>
    <div class="share-section">
        <div class="share facebook">
            <img src="../assets/fb.png" />
            <p>Share your score</p>
        </div>
        <div class="share twitter">
            <img src="../assets/twitter.png" />
            <p>Share your score</p>
        </div>
        <div class="share whatsapp">
            <img src="../assets/whatsapp.png" />
            <p>Share your score</p>
        </div>
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
          if (!this.category && !this.score) {
              this.$router.push('categories');
          }
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
    min-height: 85vh;
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

.share-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.share-header {
    margin-top: 80px;
}

.share {
    border: 1px solid white;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    margin: 20px;
}
.share img {
    width: 32px;
}
.facebook {
    background-color: #4267b2;
}

.twitter {
    background-color: #1da1f3;
}

.whatsapp {
    background-color: #339933;
}
.link {
    text-decoration: none;
}
</style>
