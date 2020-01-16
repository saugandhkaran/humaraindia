<template>
<div class="quiz-page">
    <h1 class="quiz-category--header">{{category.name}}</h1>
    <div v-if="!answering" class="question-section">
        <h3 class="question-counter"><span class="highlight">Question {{counter + 1}}</span>/{{ questions.length }}</h3>
        <h4 class="question">{{questions[counter].question}}</h4>
        <p v-for="options in questions[counter].choices" :key="options" class="options" @click="checkAnswer">{{options}}</p>
    </div>
    <div v-if="answering" class="result-section">
        <h2 v-if="status === 'correct'">CORRECT!</h2>
        <h2 v-if="status === 'wrong'">OOPS! The correct answer is <span class="highlight">{{questions[counter].solution[0]}}</span></h2>
        <p v-html="questions[counter].explanation[0]"></p>
        <b v-if="questions[counter].quotes">Excerpt:</b>
        <p v-html="questions[counter].quotes[0]"></p>
        <div class="result-next-button">
        <button class="primary-button" v-if="counter + 1 < questions.length" @click="nextQuestion()">NEXT</button>
        <button class="primary-button" v-if="counter + 1 === questions.length" @click="showResult()">SHOW RESULTS</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Quiz',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {
        questions: [],
        category: {},
        counter: 0,
        answering: false,
        status: '',
        score: 0
    }
  },
  methods: {
      async setQuiz () {
        this.category = this.$store.getters.category;
          if (this.category) {
              let result = await axios.get('https://cors-anywhere.herokuapp.com/http://64.225.70.15/rest/questions/' + this.category.id)
                .catch((err) => {
                    alert(err);
                });
                if (result) {
                    this.questions = result.data.questions;
                }
          } else {
              this.$router.push('/categories');
          }
      },
      checkAnswer: function(e) {
          this.answering = true;
          if (this.questions[this.counter].solution[0] === e.target.innerHTML) {
              this.status = 'correct';
              this.score++;
          } else {
              this.status = 'wrong';
          }
      },
      nextQuestion () {
          this.answering = false;
          this.status = '';
          this.counter++;
      },
      showResult () {
          let result = {
              score: this.score,
              total: this.questions.length
          }
          this.$store.commit('setScore', result);
          this.$router.push('/result');
      }
  },
  mounted() {
    window.scrollTo(top);
    this.setQuiz();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.quiz-category--header {
    text-align: center;
}
.question-counter {
    border-bottom: 1px dotted #838bb3;
    padding-bottom: 10px;
}



.options {
    border: 2px solid #234634;
    padding: 15px 20px;
    border-radius: 6px;
    cursor: pointer;
}

.options:hover {
    background-color: #234634;
    color: white;
}

.result-next-button {
    text-align: center;
    margin-top: 80px;
}

</style>
