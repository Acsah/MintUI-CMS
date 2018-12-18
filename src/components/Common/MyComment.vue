<template>
	<div>
		<textarea :value="newComment" placeholder="评论内容" />
		<mt-button size="large" type="primary" @click='sendConmment'>发表评论</mt-button>
		<mt-button size="large" plain @click='loadMore(page)'>加载更多</mt-button>
	</div>
</template>

<script>
	export default {
		name: 'my-comment',
		data() {
			return {
				page: 1, //当前页
				msgs: [] ,//消息
				newComment:''
			};
		},
		props: ['cid'], // 要查对哪个图片或新闻进行评论的Id
		created() {
			// url 中获取要查询的页码数 ,如果没有，默认为 1
			this.page = this.$route.query.page || '1';
			// 第一次加载，不传，默认
			this.loadMore();

		},
		methods: {
			// 传参，表示页面点击按钮，数据追加
			//不传参，表示第一次加载或者刷新页面的时候
			loadMore(page) {
				this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
					.then(res => {

						if (res.data.message.length == 0) {
							this.$toast('没有数据了!');
						}
						if (page) {
							this.msgs = this.msgs.concat(res.data.message);
						} else {
							this.msgs = res.data.message;
						}

						this.page++;
					})
					.catch(err => {
						console.log('获取评论失败：' + err);
					})
			},
			// 发布评论
			sendConmment(){
				if(this.newComment.trim()===''){
					return this.$toast('请输入评论内容！');
				}
				this.$axios.post('postcomment/'+this.cid,'content='+this.newComment)
							.then(res=>{
								// 发布评论成功之后，清空
								this.newComment='';
								// 加载第一页数据
								this.page=1;
								this.loadMore();
							})
							.catch(err => {
								console.log('发布评论失败：' + err);
							})
				
			}
		},
	}
</script>

<style>

</style>
