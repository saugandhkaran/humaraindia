<template>
<div class="categories">
    <modal v-if="showModal" @close-name-modal="closeModal"></modal>
    <h1 class="page-title">Welcome {{name}}, Choose your category</h1>
    <div class="flex-container">
    <div class="card"  @click="goToQuiz(category)">
      <img src="../assets/random.jpeg" class="card-image">
      <p class="card-heading">Wild card</p>
      <p class="card-content">Challenge yourself, by choosing a random category</p>
    </div>
    <div v-for="category in categories" :style="{backgroundColor: category.category_color}" :key="category" class="card" @click="goToQuiz(category)">
      <img v-if="category.id === 2" src="../assets/indian_politician.jpg" class="card-image">
      <img v-if="category.id === 1" src="../assets/constitution.jpg" class="card-image">
      <div v-if="category.latest" class="banner-cover">
        <div class="banner">LATEST</div>
      </div>
      <p class="card-heading">{{category.name}}</p>
      <p class="card-content">{{category.description}}</p>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Modal from './shared/Modal'
export default {
  name: 'Categories',
  components: {
    'modal': Modal
  },
  props: {
    game: String,
  },
  data() {
    return {
        categories: [],
        name: '',
        showModal: false
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
        if (this.name) {
          this.$store.commit('setCategory', category);
          this.$router.push('/quiz');
        } else {
          this.showModal = true;
        }
      },
      getName () {
        this.name = localStorage.getItem('dinquser');
      },
      closeModal: function() {
        this.getName();
        this.showModal = false;
      }
  },
  mounted() {
    window.scrollTo(top);
    this.getAllCategories();
  },
  created() {
    this.getName();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories {
  min-height: 90vh;
}
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
.card .banner {
  text-align: center;
  font-weight: bold;
  color: rgba(189, 189, 189, 0.1);
  background: -webkit-gradient(linear, left top, right top, from(rgb(189, 189, 189, 0.1)), to(rgb(189, 189, 189, 0.1)), color-stop(0.5, #fff));
  background: -moz-gradient(linear, left top, right top, from(rgb(189, 189, 189, 0.1)), to(rgb(189, 189, 189, 0.1)), color-stop(0.5, #fff));
  background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff));
  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: banner;
  -moz-animation-name: banner;
  animation-name: banner;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
}
@-moz-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-webkit-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-o-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}

.banner-cover {
  background-color: rgba(179, 27, 27, 0.8);
  padding: 9px;
  margin-top: -46px;
  position: relative;
}
</style>
