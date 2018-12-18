<template>
	<div>
		图片 {{id}}
		<my-comment :cid='$route.query.id'></my-comment>
	</div>
</template>

<script>
	export default {
		name:'photo-detail',
		data() {
			return {
				
			};
		},
		created() {
			let id=this.$route.query.id;
		}
	}
</script>

<style>

</style>
