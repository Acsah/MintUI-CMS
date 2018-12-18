<template>
	<div>
		<nav-bar title='新闻列表'></nav-bar>
		<!-- {{'20181008'|converTime('MMMM Do YYYY, h:mm:ss a')}} -->
		<ul v-if="newsList">
			<li v-for='news in newsList' :key='news.id'>
				<router-link :to="{name:'news.detail',query:{id:news.id}}">
					<img :src="news.img_url" alt="">
					<div class="short-info">
						<span>{{news.title}}</span>
						<div>
							<p>点击数：{{news.click}}</p>
							<p>发表时间：{{news.add_time}}</p>
						</div>
					</div>
				</router-link>

			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'news-list',
		data() {
			return {
				newsList: []
			}
		},
		created() {
			this.$axios.get('getnewslist')
				.then(res => {
					this.newsList = res.data.message;
				})
				.catch(err => {
					console.log('新闻列表获取异常：' + err)
				})
		}
	}
</script>
<style scoped>
	li {
		border-bottom: 0.5px solid #ccc;
		height: 70px;
	}

	li img {
		width: 50px;
		height: 50px;
	}

	li .short-info {
		display: inline-block;
	}
</style>
