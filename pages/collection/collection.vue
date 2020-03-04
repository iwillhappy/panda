<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="我的收藏"></commonTitle>
			<view class="clear">清除</view>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<ygc-refresh
				@onRefresh="refreshList()" 
				@scrolltolower="addList()"
				:pullupLoadingType="loadingType">
				
				<uni-swipe-action>
					<uni-swipe-action-item v-for="(item,index) in swipeList" :options="item.options" :key="item.id" @change="swipeChange" @click="swipeClick($event,index)">
						<!-- <text class="cont">{{item.content}}</text> -->
						<view class="goods-block">
							<view class="goods-mainimg">
								<image class="goods-mainimg" src="../../static/common/shop-car-goodsImg.png"></image>
							</view>
							<view class="goods-info">
								<view class="goods-name">AIRFLOW气流冲煮师咖啡精品手冲咖啡壶细口长嘴304不锈钢家用咖啡</view>
								<view class="goods-price">
									<text class="money-tag">￥</text>
									<text class="price">278</text>
									<text class="old-price">￥300</text>
								</view>
							</view>
						</view>
					</uni-swipe-action-item>
				</uni-swipe-action>
				
				
			</ygc-refresh>
		</view>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	import ygcRefresh from '../../components/ygc-refresh/ygc-refresh.vue';
	import uniSwipeAction from '../../components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '../../components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default{
		components:{
			commonTitle,
			ygcRefresh,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data () {
			return {
				loadingType: 'more',
				swipeList: [
					{
						options: [{
							text: '添加',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}],
						id: 0,
						content: 'item1'
					}, {
						id: 1,
						options: [{
							text: '置顶'
						}, {
							text: '删除',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}],
						content: 'item2'
					}, {
						id: 2,
						options: [{
							text: '置顶'
						}, {
							text: '标记为已读',
							style: {
								backgroundColor: 'rgb(254,156,1)'
							}
						}, {
							text: '删除',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}],
						content: 'item3'
					}
				]
			}
		},
		mounted () {
		    console.log('mouted');
		},
		onLoad() {
		},
		methods: {
			/**
			 * 下拉刷新
			 */
			refreshList () {
			  console.log('下拉刷新');
			},
			/**
			 * 上拉加载
			 */
			addList() {
				console.log('上拉加载');
				this.loadingType = 'loading';
				setTimeout(() => {
					this.loadingType = 'more';
				}, 500);
				
			},
			//公告详情
			goMessageDetail(){
				this.$CommonJS.navigateTo('./messageDetail')
			}
			
		}
		
	}
</script>

<style>
	@import url("collection.css");
</style>
