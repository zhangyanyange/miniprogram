import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../Views/Home"
import About from "../Views/About"
import News from "../Views/News"
import File from "../Views/File"
import Message from "../Views/Message"

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
  {
    path:"/About",
    component:About
  },
  {
    path:"/Home",
    component:Home,
    children:[
      {
        path:"/Home/File",
        component:File,
        children: [
          {
            path:"/Home/File/message/:id",
            component:Message
          }
        ]
      },
      {
        path:"News",
        component:News
      },{
        path:"",
        redirect:"/Home/File"
      }
    ]
  },
    {
      path:"",
      redirect:"/About"
    }
]})
