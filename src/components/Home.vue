<template>
	<div>
		Home
		<button @click='goNews'>通过编程式的导航页面</button>
    <div>
      3，使用   通过Vuex传值 --- {{this.$store.state.count}}
      -----{{this.$store.getters.computedCount}}
      <button @click="changeData()">改变传值</button>
    </div>
	</div>
</template>
<script>
// 1,引入
import store from '../vuex/store.js'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 2，注册
  store,
  methods:{
  	goNews(){
  		this.$router.push({path:'news'})
  		// this.$router.push({name:'news'})
  	},
    changeData(){
      this.$store.commit('inCount')  //触发state 里的数据
    }
  }
}
</script>