<template>
	<li>
		<slot></slot>
	</li>
</template>
<script>
	export default {
		name: 'my-li'
	}
</script>
<style>
	li {
		list-style: none;
		float: left;
		width: 33.3%;
		height: 80px;
		text-align: center;
	}

	li span {
		display: inline-block;
		background-repeat: round;
		height: 40px;
		width: 40px;
	}
</style>
