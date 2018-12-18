<template>
	<div>
		<!-- 上面是轮播图，下面是九宫格 -->
		<!-- 		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='(img,index) in imgs' :key='index'>
				<img :src="img.img" alt="sddd">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../tem-img/psb.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe> -->

		<!-- 轮播图公共组件 -->
		<my-swipe url='getlunbo'></my-swipe>

		<div>
			<my-ul>
				<my-li v-for='(grid,index) in grids' :key='index'>
					<router-link :to="grid.router">
						<span :class="grid.className"></span>
						<div>{{grid.title}}</div>
					</router-link>
				</my-li>
			</my-ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'home',
		data() {
			return {
				imgs: [], //轮播图数据
				grids: [{
						className: 'cms-news',
						title: '新闻咨询',
						router: {
							name: 'news.list'
						}
					},
					{
						className: 'cms-imgs',
						title: '图文分享',
						router: {
							name: 'photo.list',
							params: {
								categoryId: 0
							}
						}
					},
					{
						className: 'cms-news',
						title: '商品列表',
						router: {
							name: 'goods.list',
							query: {
								id: '1'
							}
						}
					},
					{
						className: 'cms-news',
						title: '新闻咨询',
						router: {
							name: 'news.list'
						}
					},
					{
						className: 'cms-news',
						title: '新闻咨询',
						router: {
							name: 'news.list'
						}
					},
					{
						className: 'cms-news',
						title: '新闻咨询',
						router: {
							name: 'news.list'
						}
					}
				]
			}
		},
		created() {
			// 			this.$axios.get('getlunbo')
			// 				.then(res => {
			// 					this.imgs = res.data.message;
			// 				})
			// 				.catch(err => {
			// 					console.log('轮播图获取异常:' + err)
			// 				})
		}
	}
</script>
<style scoped>
	.cms-news {
		background-image: url('../../assets/img/新闻公告.png');
	}

	.cms-imgs {
		background-image: url('../../assets/img/图文.png');
	}
</style>
