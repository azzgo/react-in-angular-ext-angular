<template>
  <div>
    <h2>Form Page</h2>
    <ReactVue :vueComps="comps" />
    <button @click="addNameForm()">Add Name Form</button>
  </div>
</template>

<script>
import NameForm from "../controls/NameForm.vue";

export default {
  data() {
    return {
      comps: [NameForm, NameForm],
    };
  },
  methods: {
    addNameForm() {
      this.comps = [...this.comps, NameForm];
    },
  },
};
</script>
