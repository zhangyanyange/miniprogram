<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--事件回调-->
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :isSelectAll="isSelectAll" :deleteSelect="deleteSelect"/>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
    export default {
        name: "App",
        components:{
          TodoHeader,
          TodoList,
          TodoFooter
        },
        mounted(){
          PubSub.subscribe("deleteTodo",(msg,index)=>{
            this.todos.splice(index,1)
        })
        },
        data(){
          return {
            todos: [{'title':"吃饭","complete":false},
              {'title':"睡觉","complete":true},
              {'title':"打豆豆","complete":false}]
          }
        },
      methods:{
          addTodo(todo){
            this.todos.unshift(todo);
          },
          isSelectAll(check){
            this.todos.forEach((todo)=>todo.complete=check);
          },
        deleteSelect(){
            this.todos=this.todos.filter((todo)=>!todo.complete);
        }
      }
    }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
