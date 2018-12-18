<template>
	<div>
		详情页
		
	</div>
</template>
<script>
	export default{
		// name:'Detail',
		data(){
			return{
				msg:''
			}
		},
		mounted(){
			console.log(this.$route.params)
		}
	}
</script>