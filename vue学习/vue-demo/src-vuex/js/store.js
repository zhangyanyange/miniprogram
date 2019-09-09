import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state={
  count:0
}

const mutations={
  INCREASE(state){
      state.count++;
    },
   DECREASE(state){
    state.count--;
  }
}

const actions={
  inCrease({commit}){
    commit('INCREASE')
  },
  deCrease({commit}){
    commit('DECREASE')
  },
  inCreaseIfOdd({commit,state}){
    if(state.count%2===1){
      commit('INCREASE')
    }
  },
  inCreaseAsny({commit}){
    setTimeout(()=>{
      commit('INCREASE')
    },1000)
  }
}

const getters={
  isDouble(state){
    return state.count%2===0?"偶数":"奇数"
  }
}

export default new Vuex.Store({
  state,//状态函数
  mutations,//更新状态函数
  actions,//动作函数
  getters//计算属性
})
