<template>
	<div>
		<nav-bar title='图文列表'></nav-bar>
		<!-- {{'20181008'|converTime('MMMM Do YYYY, h:mm:ss a')}} -->
		<div class="photo-header">
			<ul>
				<li v-for="c in categorys" :key='c.id'>
					<a @click="loadImgsByCategoryId(c.id)" href="javascript:;">{{c.title}}</a>
				</li>

			</ul>
		</div>
		<div class="photo-list">
			<ul>
				<li v-for='img in imgsList' :key='img.id'>
					<router-link :to="{name:'photo-detail',query:{id:img.id}}">
						<img v-lazy="img.img_url" alt="">
						<span>{{img.title}}</span><br>
						<span>{{img.zhaiyao}}</span>
					</router-link>
				
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'photo-list',
		data() {
			return {
				imgsList: [],
				categorys: []
			}
		},
		created() {
			// 1，获取路由参数
			let categoryId = this.$route.params.categoryId
			console.log(categoryId)

			//2，通过url 拼接路由参数发请求
			// 3， 通过Id 获取图片数据
			this.getImgsById(categoryId);

			//根据id 获取分类信息
			this.$axios.get('/getimgcategory').then(res => {
				this.categories = res.data.message;

				//	向数组的第一个元素添加 全部
				this.categories.unshift({
					id: 0,
					title: '全部'
				})
			}).catch(err => {
				console.log('获取分类信息失败：' + err);
			})
		},
		// 通过点击分类信息/改变地址栏参数，参数改变时触发
		beforeRouteUpdate(to, from, next) {
			// 在当前路由改变，但是该组件被复用时调用
			// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
			// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
			// 可以访问组件实例 `this`
			console.log(to)
			// 路由复用，参数改变触发
			//参数指的是 query||params
			this.getImgsById(to.params.categoryId)
			next(); // 放行
		},
		methods: {
			// 改变参数
			loadImgsByCategoryId(categoryId) {
				//路由不变，参数变化
				this.$route.push({
					name: 'photo-list',
					params: {
						categoryId:categoryId
					}
				})

			},
			// 通过Id 获取图片数据
			getImgsById(id) {
				this.$axios.get('getimages/' + id)
					.then(res => {
						this.imgsList = res.data.message;
						if (imgsList.length == 0) {
							this.$toast({
								message: '操作成功',
								iconClass: 'icon icon-success'
							});
						}
					})
					.catch(err => {
						console.log('图片列表获取异常：' + err)
						this.$toast({
							message: '图片列表获取异常',
							iconClass: 'icon icon-success'
						});
					})
			}

		}
	}
</script>
<style scoped>
	li {
		float: left;

	}

	.photo-list img {
		width: 100%;
		height: 100%;

	}

	image[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
</style>
