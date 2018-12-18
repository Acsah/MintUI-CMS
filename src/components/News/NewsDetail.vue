<template>
	<div>
		<nav-bar title='新闻详情'></nav-bar>
	</div>
</template>
<script>
	export default {
		name: 'news.detail',
		data() {
			return {
				newsDetail: {}, //新闻详情
			}
		},
		created() {
			// 获取路由查询字符串 Id
			let id = this.$route.query.id;

			this.$axios.get('getnew/' + id).then(res => {
				this.newsDetail = res.data.message[0];

			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>
