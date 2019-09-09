<template>
  <mt-button size="large"  @click.native="toast" icon="back"  type="primary">按钮</mt-button>
</template>

<script>

    export default {
        name: "App",
        methods:{
          toast(){
            alert("xxx")
          }
        }
    }
</script>

<style scoped>

</style>
