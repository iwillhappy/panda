<template>
	<view class="container999" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd">
		<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<view class='nav'>
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<view class="order-help">
			<view class="help-text">下单后看不到订单怎么办？</view>
			<image src="../../static/common/icon-turn.png" class="icon-turn"></image>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper class="swiper-block" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view class="scroll-block"
					scroll-y="true"
					@scrolltolower="lower1"
					scroll-with-animation 
					:scroll-into-view="toView">
					<view class='content'>
						<!-- <view class='card' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index">
							{{item}}
						</view> -->
						<systemCoin></systemCoin>
						<orderMe></orderMe>
						<orderFriend></orderFriend>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
const util = require('../../util/util.js');
import refresh from '../../components/order/refresh.vue';
import navTab from '../../components/order/navTab.vue';
import tabBar4 from '../../components/order/tabBar4.vue';

import systemCoin from'../../components/order/system-coin.vue';
import orderMe from'../../components/order/order-me.vue';
import orderFriend from'../../components/order/order-friend.vue';
export default {
	components: {refresh,navTab,tabBar4,systemCoin,orderMe,orderFriend},
	data() {
		return {
			currentPage:'index',
			toView:'',//回到顶部id
			tabTitle:['我的','好友','失效'], //导航栏格式 --导航栏组件
			currentTab: 0, //sweiper所在页
			pages:[1,1,1,1], //第几个swiper的第几页
			list: [[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],['2233','4234','13144','324244']] //数据格式
		};
	},
	onLoad(e) {
		
	},
	onShow() {},
	onHide() {},
	methods: {
		toTop(){
			this.toView = ''
			setTimeout(()=>{
				this.toView = 'top' + this.currentTab
			},10)
		},
		changeTab(index){
			this.currentTab = index;
		},
		// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
		isRequest() {
			return new Promise((resolve, reject) => {
				this.pages[this.currentTab]++
				var that = this
				setTimeout(() => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: `请求第${that.currentTab + 1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
					})
					let newData = ['新数据1','新数据2','新数据3']
					resolve(newData)
				}, 1000)
			})
		},
		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current //获取索引
			this.$refs.navTab.longClick(index);
		},
		// 加载更多 util.throttle为防抖函数
		lower1: util.throttle(function(e) {
		console.log(`加载${this.currentTab}`)//currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
		uni.showLoading({
			title: '加载中',
			mask:true
		})
			this.isRequest().then((res)=>{
				let tempList = this.list
				tempList[this.currentTab] = tempList[this.currentTab].concat(res)
				console.log(tempList)
				this.list = tempList
				this.$forceUpdate() //二维数组，开启强制渲染
			})
		}, 300),
		// 刷新touch监听
		refreshStart(e) {
			this.$refs.refresh.refreshStart(e);
		},
		refreshMove(e){
			this.$refs.refresh.refreshMove(e);
		},
		refreshEnd(e) {
			this.$refs.refresh.refreshEnd(e);
		},
		isRefresh(){
				setTimeout(() => {
					uni.showToast({
						icon: 'success',
						title: '刷新成功'
					})
					this.$refs.refresh.endAfter() //刷新结束调用
				}, 1000)
		}
	}
};
</script>

<style>
		@import url("order.css");
</style>
