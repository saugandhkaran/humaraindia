<template>
<div><poll-card></poll-card></div>
</template>

<script>
import PollCard from '../components/shared/PollCard';
export default {
  name: 'Home',
  components: {
      'poll-card': PollCard
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
