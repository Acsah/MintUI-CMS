import Vue from 'vue'
import Router from 'vue-router'
// import News from '@/components/News'
// import Home from '@/components/Home'
// import Detail from '@/components/NewDetail'

//	路由懒加载
// const Foo = () => import('./Foo.vue')

const Home = () => import('@/components/Home/Home')
const Member = () => import('@/components/Member/Member')
const Shopcart = () => import('@/components/Shopcart/Shopcart')
const Search = () => import('@/components/Search/Search')
const NewsList = () => import('@/components/News/NewsList')
const NewsDetail = () => import('@/components/News/NewsDetail')
const PhotoList = () => import('@/components/photo/PhotoList')
const PhotoDetail = () => import('@/components/photo/PhotoDetail')
const GoodsList = () => import('@/components/Goods/GoodsList')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail')


Vue.use(Router)

export default new Router({
	// mode:'history',
	routes: [{
			path: '/',
			redirect: {
				name: 'Home'
			}
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/member',
			name: 'Member',
			component: Member
		},
		{
			path: '/shopcart',
			name: 'Shopcart',
			component: Shopcart
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/news/list',
			name: 'news.list',
			component: NewsList
		},
		{
			path: '/news/detail',
			name: 'news.detail',
			component: NewsDetail
		},
		{
			path: '/photo/list/:categoryId',
			name: 'photo.list',
			component: PhotoList
		},
		{
			path: '/photo/detail',
			name: 'photo.detail',
			component: PhotoDetail
		},
		{
			path: '/goods/list',
			name: 'goods.list',
			component: GoodsList
		},
		{
			path: '/goods/detail/:id', // id 写在path 上，而不是name 上
			name: 'goods.detail',
			component: GoodsDetail
		}
	]

})
