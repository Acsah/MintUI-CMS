<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li v-for='(item,key) in list'>
				<router-link :to="'detail/'+key">{{key}}-----{{item}}</router-link>
			</li>
		</ul>
		<div>
			通过vuex改变传值： {{this.$store.state.count}}
		</div>

	</div>
</template>

<script>
	import store from '../vuex/store.js'

	export default {
		name: 'News',
		data() {
			return {
				msg: 'News.vue',
				list: ['1111111', '2222222', '33333333']
			}
		},
		store,
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		/*display: inline-block;*/
		margin: 10px;
	}

	a {
		color: #42b983;
	}
</style>
