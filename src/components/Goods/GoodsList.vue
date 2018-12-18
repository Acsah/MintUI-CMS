<template>
	<div :style="{height:boxHeight}">

		<nav-bar title='商品列表'></nav-bar>
		<!-- :auto-fill='false' 不去自动填充 -->
		<mt-loadmore :auto-fill='false' :bottom-method="loadBottom" :bottom-all-loaded="isAllLoaded" ref="loadmore"
		 @top-status-change="handleTopChange" style='margin-bottom: 55px;'>
			<ul>
				<li v-for="item in list" :key='item'>
					<router-link :to="{name:'goods.detail',params:{id:item}}">
						<div class="goods-wrap">
							{{ item }}
						</div>
					</router-link>
				</li>
			</ul>
			<div slot="top" class="mint-loadmore-top">
				<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓下拉</span>
				<span v-show="topStatus === 'loading'">Loading...</span>
			</div>
		</mt-loadmore>
	</div>
</template>

<script>
	export default {
		name: 'goods-list',
		props: ['appRefs'],
		data() {
			return {
				list: [1, 2, 3, 4, 5, 6, 7],
				allLoaded: false,
				topStatus: '',
				page: 1,
				goodsList: [],
				isAllLoaded: false,
				boxHeight: 0, // 父容器的高度
			};
		},
		created() {
			this.page = this.$route.query.id || '1';
			this.loadByPage();
		},
		mounted() {
			let headerHeight = this.appRefs.appHeader.$el.offsetHeight;
			let footerHeight = this.appRefs.appFooter.$el.offsetHeight;

			// 中间高度（loadmore 父元素的高度）=设备高度-头部高-底部高
			this.boxHeight = document.body.clientHeight - headerHeight - footerHeight;


		},
		methods: {
			handleTopChange(status) {
				this.topStatus = status;
				console.log(status)
			},

			loadTop() {
				console.log('触发下拉')
				// 加载更多数据

				//手动调用 loadmore 的 onTopLoaded 事件,在加载数据后需要对组件进行一些重新定位的操作。
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
				console.log('触发上拉')
				this.contatPage();
			},
			loadByPage() {
				this.$axios.get('getgoods?pageindex=' + this.page)
					.then(res => {
						this.goodsList = res.data.message;
						this.page++;
					})
					.catch(err => {
						console.log('获取商品列表失败：' + err);
					})
			},
			contatPage() {
				this.$axios.get('getgoods?pageindex=' + this.page)
					.then(res => {
						if (res.data.message.length == 0) {
							this.$toast('没有更多数据了!')
							//若数据已全部获取完毕 禁止loadmore 的函数调用
							this.isAllLoaded = true;
						}
						this.goodsList = this.goodsList.concat(res.data.message);

						this.$refs.loadmore.onBottomLoaded(); //通过元素重新定位，给list 加元素，直到加满为止
						this.page++;
					})
					.catch(err => {
						console.log('获取商品列表失败：' + err);
					})
			}
		},
	}
</script>

<style>
	.goods-wrap {
		height: 5rem;
		text-align: center;
		line-height: 5rem;
	}
</style>
