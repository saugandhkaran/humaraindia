<template>
<div>
  <div class="section">
    <p>So you think you know <span class="highlight">India</span>?</p>
    <img style="width: 100%" src="../assets/landing.png"/>
  </div>
  <div class="section">
    <p>Be <span class="highlight">DINQ</span>uisitive | Explore <span class="highlight">India</span></p>
  </div>
  <div class="section" style="margin-bottom: 40px;">
    <div class="section-half">
      <img style="width: 100%"  src="../assets/fact_check.png"/>
      <p>Fact check your politicians!
      <br>They often lie</p>
    </div>
    <div class="third-section--right"><poll-card></poll-card></div>
  </div>
  <div class="section">
    <p>No <span class="highlight">Drama</span>, No <span class="highlight">Propaganda</span>, only <span class="highlight">FACTS</span> !</p>
  </div>
  <div class="section">
    <div>
      <p><span class="highlight">UPSC</span>, 
      <span class="highlight">SSC</span> OR 
      <span class="highlight">STATE PSC</span> ASPIRANT?</p>
      <p>A fun and interesting place to <span class="highlight">learn</span></p>
    </div>
    <div class="third-section--left">
      <img style=" width: 100%;" src="../assets/upsc.png" />
    </div>
  </div>
  </div>
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
.landing-page {
  margin-top: 20px;
  width: 100%;
}

.section {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  min-height: 30vh;
  /* border: 4px solid #f2f600; */
  justify-content: space-around;
  align-items: center
}

.section p {
    font-size: 1.5em;
}

.highlight {
  color: #f2f600;
}
</style>
