<template>
  <div>
    <h3>{{section}}</h3>
    <div class="box">
      <vs-button size="large"
        v-for="baseline in baselines"
        v-if="isInSection(baseline)"
        :name="baseline.name"
        target :href="{url: baseline.path}"
      >{{baseline.name}}
       <slot></slot></vs-button>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    section: {
      type: String,
      required: true
    },
    baselines: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInSection(baseline) {
      return baseline.sections.includes(this.section);
    }
  }
};
</script>

<style scoped>

.box {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
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