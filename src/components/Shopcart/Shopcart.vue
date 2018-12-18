<template>
	<div>
		购物车
		总价格：{{payment.price}}
		总数量:{{payment.num}}
	</div>
</template>
<script>
	import GoodsTool from '@/GoodsTool'
	export default {
		name: 'shopCart',
		data() {
			return {
				shopcart: []
			}
		},
		created() {

			let goodsList = GoodsTool.getVal('goodslist');
			// 获取对象中的所有 key， 逗号拼接  7,8,9
			let ids = Object.keys(goodsList).join(',');

			// 请求后台，获取购物车所有商品信息
			// 下面请求的链接，是本地 自己写的， 详见 36课 项目第五天-商品详情、购物车-下（2018.6.28）.mp4
			this.$axios.get('').
			then(res => {
				// 修改属性
				res.data.forEach(goods => {

				})

				//绑定页面
				this.shopcart = res.data;

			}).catch(err => {

			})
		},
		computed: {
			payment() {
				let price = 0;
				let num = 0; // 商品总数量
				this.shopcart.forEach(goods => {

					num += goods.num;
					price += goods.num * goods.sell_price;

				})
				return {
					price,
					num
				}
			}
		},

		beforeRouteLeave(to, from, next) {
			// 导航离开该组件的对应路由时调用
			// 可以访问组件实例 `this`
			if (confirm('确定离开吗？')) {
				let obj = {};
				this.shopcart.forEach(goods => {
					obj[goods.myd] = goods.num;
				})

				// 保存数据
				GoodsTool.saveVal(obj);
				next(); // 放行
			} else {
				next(false); //取消导航行为
			}
		}
	}
</script>
<style>

</style>
