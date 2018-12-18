// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import store from './vuex/store.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 自定义样式
import './assets/css/global.css'
//添加自定义Ul li
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
import MyComment from '@/components/Common/MyComment'
import MySwipe from '@/components/Common/MySwipe'

//添加公共组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Vue.component(MyComment.name, MyComment)
Vue.component(MySwipe.name, MySwipe)



// 引入第三方 日期处理类库
import Moment from 'moment'

// 添加公共日期过滤器
Vue.filter('converTime', function(data, formatStr) {
	return Moment(data).format(formatStr);
})
// 返回相对时间
Vue.filter('relativeTime', function(previousTime) {
	return Moment(previousTime).fromNow()
})
// 处理字符串过长的过滤器
Vue.filter('converStr', function(str, count) {
	return str.substring(0, count) + '...';
})



// 设置中文显示
Moment.locale('zh-cn');



/*
	安装其他插件的时候，可以直接在 main.js 中引入并 Vue.use()，
	但是 axios 并不能 use，只能每个需要发送请求的组件中即时引入

	为了解决这个问题，有两种开发思路，
	一是在引入 axios 之后，修改原型链，
	二是结合 Vuex，封装一个 aciton。
*/

// 配置Axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'https://www.xxx'
Vue.prototype.$axios = Axios


// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function(config) {
	MintUI.Indicator.open({
		text: '加载中...',
		spinnerType: 'fading-circle'
	});

	return config;
})

Axios.interceptors.response.use(function(response) {
	// response.config 类似于上面的config
	MintUI.Indicator.close();
	return response;
})


Vue.use(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	VueResource,
	store,
	components: {
		App
	},
	template: '<App/>'
})
