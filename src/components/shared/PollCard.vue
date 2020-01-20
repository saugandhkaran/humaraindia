<template>
<div class="poll-card">
  <h2>D Q-Poll</h2>
  <h2>{{poll[0].question}}</h2>
  <div class="poll-option">
    <div v-for="choice in poll[0].choices" :key="choice.id" class="options" :style="{ border: '2px solid' + choice.color }">
      <p>{{choice.choice}}</p>
    </div>
    <div v-for="choice in poll[0].choices" :key="choice.id" class="options" :style="{ backgroundColor: choice.color, width: choice.count + '%' }">
      <p>{{choice.choice}}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PollCard',
  components: {
  },
  data() {
    return {
      poll: [{
        question: '',
        color: '',
        choices: []
      }]
    }
  },
  methods: {
    async getPollQuestion () {
      let result = await axios.get('https://cors-anywhere.herokuapp.com/http://64.225.70.15/rest/post-poll/1')
        .catch((err) => {
            alert(err);
        });
      if (result) {
          this.poll = result.data.poll;
      }
    }
  },
  created () {
    this.getPollQuestion();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poll-card {
  max-width: 500px;
}

.options {
  padding: 10px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
}

</style>
