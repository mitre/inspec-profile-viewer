<template>
  <div>
   
 <vs-button size="ls" @click="reroute" class="button">
      <slot></slot>
    </vs-button>
  </div>
</template>

<script>

export default {
  props: {
    route: String
  },
  methods: {
    reroute(event) {
      if (this.route == null) {
        alert(
          "The specific route hasn't been found. You will be redirected to a list of the baselines."
        );
      } else {
        this.$router.push("/Baselines/" + this.route);
      }
    }
  }
};
</script>

<style scoped>

button {
  background-color: red;
  border: 1px solid blue; /* Blue border */
  color: white; /* White text */
  padding: 10px 10px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  font-size: 16px;
  display: inline-block;
  height: 70px;
  width: 20vw;
  margin: 5px;
}
.button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}
/* Add a background color on hover */
.button:hover {
  background-color: rgb(66, 80, 109);
}
</style>