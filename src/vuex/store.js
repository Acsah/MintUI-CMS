import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


var state = {
  count: 1
}

var mutations = {
  inCount() {
    ++this.state.count;
  }
}

// state里面的count数据的时候会触发 getters里面的方法
var getters={
	computedCount:(state)=>{
		return state.count*2
	}
}


const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store;
