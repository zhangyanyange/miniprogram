<template>
  <div>

  <router-link to="/About">about</router-link>
  <router-link to="/Home">home</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

    export default {
      name: "App"
    }
</script>

<style scoped>

</style>
