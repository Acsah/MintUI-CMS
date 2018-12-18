<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='(img,index) in imgs' :key='index'>
				<img :src="img.img||img.src" alt="sddd">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../tem-img/psb.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		name: 'my-swipe',
		props: ['url'],
		data() {
			return {
				imgs: [],
			};
		},
		created() {
			this.$axios.get(this.url)
				.then(res => {
					this.imgs = res.data.message;
				})
				.catch(err => {
					console.log('轮播图获取异常:' + err)
				})
		}
	}
</script>

<style>
	.mint-swipe {
		height: 200px;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
