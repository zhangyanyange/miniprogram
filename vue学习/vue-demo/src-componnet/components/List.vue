<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="compons.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(compont,index) in compons" :key="index" :compont="compont" :index="index" :deleteCompont="deleteCompont"/>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item"
    export default {
      name: "List",
     props:['compons',"deleteCompont"],
      components: {
        Item
      }
    }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }


</style>
