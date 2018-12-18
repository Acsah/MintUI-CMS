<template>
	<div>
		<h1 @click='goBack'>&nbsp < </h1>
		<h2>{{title}}</h2>
	</div>
</template>
<script>
	export default{
		name:'nav-bar',
		props:['title'],
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	h1,h2{
		display: inline-block;
	}
</style>