<template>
<div>
  文件
  <input type="text">
  <router-link :to="`/Home/File/message/${message}`">跳转</router-link>
  <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "File",
      data(){
          return {
            message:"111"
          }
      }
    }
</script>

<style scoped>

</style>
