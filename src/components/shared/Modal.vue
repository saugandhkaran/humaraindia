<template>
<div class="">
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close" @click="close()">&times;</span><br><br>
        <h3>We would like to know your name.</h3>
        <input type="text" v-model="name"/><br>
        <p v-if="errors.length > 0" class="error">{{errors[0]}} </p>
        <br>
        <button class="primary-button" @click="saveName()">Confirm</button>
        <p>This would help us to create your sharing tags!</p>
    </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {
        name: '',
        errors: []
    }
  },
  methods: {
      close () {
          this.$emit('close-name-modal', true);
      },
      saveName () {
          this.errors = [];
          if (!this.name) {
              this.errors.push('Please enter a name');
              return;
          }
          localStorage.setItem('dinquser', this.name);
          this.$emit('close-name-modal', true);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Modal Content/Box */
.modal-content {
  text-align: center;
  background-color: #252c4a;
  padding: 20px;
  border-radius: 6px;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.error {
    color: red;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>
