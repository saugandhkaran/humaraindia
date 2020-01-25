<template>
<div class="poll-card">
  <h2>D Q-Poll</h2>
  <h2>{{poll[0].question}}</h2>
  <div class="poll-option">
    <div v-if="!selected">
      <div v-for="choice in poll[0].choices" :key="choice.id" class="options" :style="{ border: '2px solid' + choice.color }">
        <p @click="castPoll">{{choice.choice}}</p>
      </div>
    </div>
    <div v-if="selected">
      <div v-for="choice in poll[0].choices" :key="choice.id" class="result" :style="{ backgroundColor: choice.color, width: choice.vote_percent + '%' }">
        <p>{{choice.choice}} <b>{{choice.vote_percent}}%</b></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import qs from 'qs'
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
        choices: [],
        id: ''
      }],
      selected: false
    }
  },
  methods: {
    async getPollQuestion () {
      let result = await axios.get('https://dinq.in/rest/poll')
        .catch((err) => {
            alert(err);
        });
      if (result) {
          this.poll = result.data.poll;
      }
    },
    castPoll: async function(e) {
      let body = {
        id: this.poll[0].id,
        choice: e.target.innerHTML
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      let post = await axios.post('https://dinq.in/rest/poll', qs.stringify(body), config)
      .catch((err) => {
        alert(err)
      });
      if (post) {
        this.selected = true;
        this.poll = post.data.poll;
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
  margin-bottom: 20px;
}

.options {
  padding: 10px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
}

.result {
  padding: 10px;
  margin: 5px;
  width: 0px;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s;
}
</style>
