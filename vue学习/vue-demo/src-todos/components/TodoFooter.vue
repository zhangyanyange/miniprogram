<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelect"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 全部{{todos.length}}
        </span>
    <button v-show="completeCount" class="btn btn-danger" @click="deleteSelectItem">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        props:{
          todos:Array,
          isSelectAll:Function,
          deleteSelect:Function
        },
      computed:{
        completeCount(){
          return this.todos.reduce((total,todo)=>total+(todo.complete?1:0),0);
        },
        isSelect:{
          get(){
            return this.completeCount===this.todos.length;
          },
          set(value){
            this.isSelectAll(value)
          }
        }
      },
      methods:{
        deleteSelectItem(){
          this.deleteSelect();
        }
      }
    }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
