<template>
  <div id="app">
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <Add :addCompons="addCompons"/>
    <List :compons="compons" :deleteCompont="deleteCompont"/>
    </div>
    </div>
  </div>

</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  components: {
    Add,
    List
  },
  data(){
    return {
      "compons":[
        {name:"张三",content:"一般"},
        {name:"李四",content:"一一般"},
        {name:"王五",content:"一般般"}
      ]
    }
  },
  methods:{
    addCompons(compont){
      this.compons.unshift(compont)
    },
    deleteCompont(index){
      this.compons.splice(index,1);
    }
  }
}
</script>

<style>

</style>
