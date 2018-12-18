<template>
	<div>

		<nav-bar title='商品详情'></nav-bar>
		<!-- 公共轮播图 -->
		<my-swipe url='getthumimages'></my-swipe>
		<ul class="contents">
			<li>
				<mt-button plain size="large" type="primary" @click='showPhotoDetail'>图文介绍</mt-button>
			</li>
			<li>
				<mt-button plain size="large" type="danger">商品评论</mt-button>
			</li>
		</ul>
		<div class="btns">
			<mt-button type="danger">立即购买</mt-button>

			<mt-button type="primary" @click='addCart'>加入购物车</mt-button>

			<transition name="ball" @after-enter='afterEnter'>
				<div class="ball" v-show="isExit"></div>
			</transition>
		</div>
	</div>
</template>

<script>
	import EventBus from '@/EventBus'
	export default {
		name: 'goods-detail',
		data() {
			return {
				isExit: false, //是否显示小球
				id: '',
			};
		},
		created() {
			id = this.$route.query.id;
		},
		methods: {
			addCart() {
				this.isExit = true;
			},
			afterEnter() {
				this.isExit = false; // 移除元素
				// 通知 App.vue 增加商品数量
				EventBus.$emit('addNum', 1)
			},
			showPhotoDetail() {
				this.$router.push({
					name: 'photo-detail',
					query: {
						id: this.id
					}
				})
			}
		},
		
	}
</script>

<style>
	.contents {
		padding: 1rem;

	}

	.contents li {
		margin: 1rem;
	}

	.btns {
		position: absolute;
		bottom: 6rem;
		text-align: right;
		width: 98%;
	}

	.ball {
		z-index: 999;
		position: absolute;
		display: inline-block;
		border-radius: 50%;
		background-color: red;
		width: 2rem;
		height: 2rem;
		top: -1rem;
		right: 9rem;

	}

	/* // 小球进去时间段的动画 */
	.ball-enter-active {
		animation: bounce-in 1s;
	}

	@keyframes bounce-in {
		0% {
			transform: translate3d(0, 0, 0);
		}

		30% {
			transform: translate3d(7rem, -7rem, 0);
		}

		50% {
			transform: translate3d(8rem, -8rem, 0);
		}

		60% {
			transform: translate3d(11rem, -7rem, 0);
		}

		75% {
			transform: translate3d(12rem, -3rem, 0);
		}

		100% {
			transform: translate3d(24rem, 3rem, 0);
		}
	}

	.ball-enter,
	.ball-leave-to

	/* 移开之前，透明度设置为0，避免闪 */
	/* .fade-leave-active below version 2.1.8 */
		{
		opacity: 0;
	}
</style>
