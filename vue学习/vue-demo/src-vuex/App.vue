<template>
  <div>
 <p>click is {{count}} 次，点击次数为{{isDouble}}</p>
  <button @click="inCrease">增加1</button>
  <button @click="deCrease">减少1</button>
  <button @click="inCreaseIfOdd">如果为奇数加1</button>
  <button @click="inCreaseAsny">异步加1</button>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from "vuex"
    export default {
      name: "App",
      computed:{
        ...mapState(['count']),
        ...mapGetters(['isDouble'])
        // isDouble(){
        //   return this.$store.getters.isDouble;
        // }
      },
      methods:{
        ...mapActions(["inCrease","deCrease","inCreaseIfOdd","inCreaseAsny"])
        // inCrease(){
        //   this.$store.dispatch("inCrease")
        // },
        // deCrease(){
        //   this.$store.dispatch("deCrease")
        // },
        // inCreaseIfOdd(){
        //   this.$store.dispatch("inCreaseIfOdd")
        // },
        // inCreaseAsny(){
        //   this.$store.dispatch("inCreaseAsny")
        // },
      }
    }
</script>

<style scoped>

</style>
