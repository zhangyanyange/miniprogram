<template>
  <div>
 <router-link to="/Home/File">File</router-link>
  <router-link to="/Home/News">News</router-link>
    <keep-alive>
  <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
