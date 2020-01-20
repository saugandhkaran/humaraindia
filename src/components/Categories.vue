<template>
<div>
    <h1 class="page-title">Categories</h1>
    <div class="flex-container">
    <div class="card"  @click="goToQuiz(category)">
      <img src="../assets/random.jpeg" class="card-image">
      <p class="card-heading">Wild card</p>
      <p class="card-content">Challenge yourself, by choosing a random category</p>
    </div>
    <div v-for="category in categories" :style="{backgroundColor: category.category_color}" :key="category" class="card" @click="goToQuiz(category)">
      <img v-if="category.id === 2" src="../assets/indian_politician.jpg" class="card-image">
      <img v-if="category.id === 1" src="../assets/constitution.jpg" class="card-image">
      <p class="card-heading">{{category.name}}</p>
      <p class="card-content">{{category.description}}</p>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Categories',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {
        categories: []
    }
  },
  methods: {
      async getAllCategories () {
        let result = await axios.get('https://cors-anywhere.herokuapp.com/http://64.225.70.15/rest/categories')
          .catch((err) => {
              alert(err);
          })
          this.categories = result.data.categories;
      },
      goToQuiz (category) {
          this.$store.commit('setCategory', category);
          this.$router.push('/quiz');
      }
  },
  mounted() {
    window.scrollTo(top);
    this.getAllCategories();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.page-title {
    text-align: center;
}
.card {
    background-color: #838bb3;
    width: 300px;
    height: 400px;
    border: 1px solid white;
    border-radius: 4px; 
    margin-bottom: 20px;
    margin: 10px;
    cursor: pointer;
}

.card .card-image {
    width: 300px;
    height: 168px;
}
.card .card-heading {
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
}

.card .card-content {
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
}

</style>
