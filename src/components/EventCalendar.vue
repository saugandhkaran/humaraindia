<template>
<div>
<div class="event-calendar">
    <h3>Here are the list of upcoming quizes. Stay tuned!</h3>
    <div class="flex-table" v-for="event in eventList" :key="event.id" :style="{ backgroundColor: event.category_color }">
        <h3>{{event.date_time}} - {{event.choices}}</h3>
        <p>{{event.remarks}}</p>
    </div>
</div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EventCalendar',
  components: {
  },
  props: {
  },
  data() {
    return {
        eventList: []
    }
  },
  methods: {
      async getEventList () {
          const result = await axios.get('https://dinq.in/rest/send-timeline/')
          .catch((err) => {
              alert(err);
          })
          if (result) {
              this.eventList = result.data.timeline;
          }
      }
  },
  mounted() {
      this.getEventList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-calendar {
  min-height: 85vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}

.flex-table {
    border: 1px solid white;
    padding: 10px;
    padding-left: 30px;
    margin-bottom: 10px;
    border-radius: 6px;
    align-items: center;
}

</style>
