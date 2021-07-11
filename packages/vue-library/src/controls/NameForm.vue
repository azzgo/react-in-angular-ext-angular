<template>
  <div class="p-n" style="border: 1px orange solid">
    <label>name:</label>
    <input name="name" :value="value" @change="handleInputChange($event)" />
    <div>value: {{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    control: {
      type: Object,
    },
  },
  computed: {
    value() {
      return this.control?.value;
    },
  },
  methods: {
    handleInputChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>
