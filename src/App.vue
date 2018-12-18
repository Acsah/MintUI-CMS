<template>
	<div id="app">
		<mt-header title="固定在顶部" ref='appHeader'></mt-header>
		<!-- <router-link to='/home'>首页</router-link> -->
		<!-- <router-link to='/news'>新闻列表</router-link> -->
		<!-- 查询字符串的方式传参  ,query:{id:1}-->
		<!-- <router-link :to="{name:'Home'}">首页</router-link> -->
		<!-- 以 / 开头  ,params:{name:'abc'}-->
		<!-- <router-link :to="{name:'News'}">新闻列表</router-link> -->

		<!-- 给 router-view 添加过渡效果 -->
		<transition name="rv" mode="out-in">
			<!-- /*全局一次性控制 router-view 样式 <==> 给每个页面的div 单独加样式*/ -->
			<router-view class='templ' :appRefs="$refs" />
		</transition>


		<mt-tabbar v-model="selected" ref='appFooter'>
			<mt-tab-item id="home">
				<img @click='changeHash' slot="icon" src="./assets/img/首页.png" height="200" width="209">
				首页
			</mt-tab-item>
			<mt-tab-item id="member">
				<img @click='changeHash' slot="icon" src="./assets/img/VIP.png" height="200" width="200">
				会员
			</mt-tab-item>
			<mt-tab-item id="shopcart">
				<img @click='changeHash' slot="icon" src="./assets/img/购物车 .png" height="200" width="200">
				购物车
				<mt-badge class='badge' size="normal" type="error">{{cartNum}}</mt-badge>
			</mt-tab-item>
			<mt-tab-item id="search">
				<img @click='changeHash' slot="icon" src="./assets/img/查找.png" height="200" width="200">
				查找
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	import EventBus from './EventBus'
	export default {
		name: 'App',
		data() {
			return {
				selected: true,
				cartNum: 0

			}
		},
		created() {
			EventBus.$on('addNum', num => {
				console.log(num);
				this.cartNum += num;
			})
		},
		methods: {
			changeHash() {
				// 该调用早于了 子组件赋值给父组件的selected
				this.$nextTick(function() {
					// 在vue完成渲染任务以后的行为
					this.$router.push({
						name: this.selected
					})
				})
			}
		},
		watch: {
			selected(newV, oldV) {
				// console.log(oldV)

				this.$router.push(newV)
			}
		}
	}
</script>
<style>
	mt-tabbar {
		bottom: 0;
		display: fixed;
	}

	.badge {
		z-index: 1;
		position: absolute;
		top: -0.1rem;
		margin-left: -1rem;
	}

	.rv-enter-active,
	.rv-leave-active {
		transition: opacity .3s ease;
	}

	.rv-enter,
	.rv-leave-to

	/* .component-fade-leave-active for below version 2.1.8 */
		{
		opacity: 0;
	}
</style>
