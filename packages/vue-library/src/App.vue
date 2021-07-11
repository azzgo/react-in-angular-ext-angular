<template>
  <div class="p-n" id="app">
    <h1>Vug Pages</h1>
    <p>React Loaded In Vug With ExtVug Component</p>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/form">Form</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.p-n {
  padding: 10px;
}

#app {
  display: block;
  border: red 1px solid;
}
</style>
