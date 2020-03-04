<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="top-search">
			<image class="left" src="../../static/common/left.png" @tap="goSignIn"></image>
			<view class="center">
				<image src="../../static/common/search.png" class="search-icon"></image>
				<input type="text" disabled="disabled" placeholder="复制宝贝标题快速搜索" @tap="gosearch" class="uni-input search-input" placeholder-class="input-placeholder" />
			</view>
			<image class="right" src="../../static/common/right.png" @tap="goMessage"></image>
		</view>
		
		<scroll-view  scroll-y="true" 
		class="scroll-Y scroll-box"
		 @scroll="scroll" 
		 lower-threshold="100" 
		 :scroll-top="scrollTop"
		 @scrolltolower="loadMore">
			<!-- swiper -->
			<view class="page-section swiper">
				<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval" :duration="duration">
								<!-- <swiper-item>
									<image src="../../static/common/home-swiper-pic1.png" @tap="goNewDriver"></image>
								</swiper-item> -->
								<swiper-item>
									<image src="../../static/common/banner-02.png"></image>
								</swiper-item>
						</swiper>
				</view>
			</view>
			<!-- 4个分类 -->
			<view class="four-classification">
				<image src="../../static/common/classification-goods.png" class="classification-goods" @tap="goGoodsClassification"></image>
				<image src="../../static/common/classification-superfan.png" class="classification-superfan"></image>
				<image src="../../static/common/classification-99b.png" class="classification-99b" @tap="goSpecialArea"></image>
				<image src="../../static/common/classification-newuser.png" class="classification-newuser" @tap="goNewDriver"></image>
			</view>
			
			<!-- 充话费送小孩 -->
			<view class="echarge">
				<image src="../../static/common/recharge-icon.png" class="recharge-icon"></image>
				<view class="recharge-text">
					充话费、Q币等虚拟商品也能获得鼓励金哦！
				</view>
			</view>
			
			<!-- nav-bar -->
			<view class="scroll-navbar-box" :class="isFixed? 'isfixed' : ''">
				<view class="scroll-view_H">
					<view class="nav-bar-item "
					v-for="(item,k) in goodsClass" 
					:key="k"
					:class="{'selected-bar':currentIndex == k}"
					@tap.prevent="getGoodList(item,k,'initPage')"
					>{{item}}</view>
				</view>
			</view>
			
			<!-- 商品列表 -->
			<view class="goods-list">
				<good v-for="(item,index) in goodList" :key="index" :goodsInfo="item" @goodsDetail="goodsDetail"></good>
			</view>
			
		</scroll-view>
	
		
	</view>
</template>

<script>
	import good from '../../components/goods/good.vue'
	export default {
		data() {
			return {
				currentIndex:0,  //Nav-bar,选中id
				currentGoodsClass:"推荐",
				//navList:[],
				indicatorDots: false,
				autoplay: true,
				circular:true,
				interval: 2000,
				duration: 500,
				isFixed:false,
				page_no:1,//当前页数
				goodList:[],//商品列表
				goodsClass:["推荐"],//商品分类
				scrollTop:-1,//回到顶部标识
				noData:false, //加载更多数据标识
			}
		},
		components:{
			good
		},
		onLoad(){
			this.loadExecution();
			//this.navList =this.$Data.HomeNavBar;
			//推荐商品
			this.getGoodList();
			//获取商品分类
			this.getGoodsClass();
		},
		methods: {
			goodsDetail(coupon){
				//console.log(coupon)
				//商品详情
				this.$CommonJS.navigateTo('../goodDetail/good-detail?coupon='+coupon.coupon+'&startTime='+coupon.startTime+'&endTime='+coupon.endTime);
			},
			//商品分类
			getGoodsClass(){
				const self = this;
				uni.request({
				    url: this.$API.URL + this.$API.spk_cate, 
				    success: (res) => {
							const d = res.data.msg.data;
							d.map(item => {
								self.goodsClass.push(item.name)
							})
							//console.log(self.goodsClass)
				    }
				});
			},
			//商品分页
			loadMore(){
				this.getGoodList()
			},
			//推荐商品
			getGoodList(name,index,initPage){
				//console.log(name)
				if(initPage){
					this.currentGoodsClass = name;
					this.page_no = 1;//初始化页数
					this.noData = false; // 将判断有无数据标识初始化
					this.scrollTop = 0; //回到顶部
				}
				if(index){
					this.currentIndex = index; //当前选中标识
				}
				var self = this;
				var url = ""; //定义url,推荐和其他类目不是一个接口
				var data = ""; //请求参数
				if(this.currentGoodsClass == "推荐" || name == "推荐"){
					//推荐商品		
					this.currentIndex = 0;
					url = this.$API.URL + this.$API.spk_top;
					data = {min_id:this.page_no};
				}else{
					
					url = this.$API.URL + this.$API.tbk_super_search;
					data = {q:this.currentGoodsClass,page_no:this.page_no};
				}
				if(!this.noData){
					//如果没有数据，则停止访问接口，再次请求数据
					uni.request({
					    url: url,
							data:data,
					    success: (res) => {
								const d = res.data.msg;
								console.log(d)
								if(d.code == 200){
									if(name){
										self.goodList = []; //如name存在，说明是从新加载类目商品，置空，否则为分页
									}
									d.data.map(item => {
										self.goodList.push(item)
									})
									self.page_no ++;
									self.scrollTop = -1; //回到顶部标识
								}else{
									self.noData = true;
								}
								
					    }
					});
				}
				
			},
			//9.9包邮
			goSpecialArea(){
				this.$CommonJS.navigateTo('../specialArea/specialArea');
			},
			//新手上路
			goNewDriver(){
				this.$CommonJS.navigateTo('../newDriver/newDriver');
			},
			//商品分类
			goGoodsClassification(){
				this.$CommonJS.navigateTo('../goodsClassification/goodsClassification');
			},
			//签到中心
			goSignIn(){
				this.$CommonJS.navigateTo('../signIn/signin');
			},
			//消息中心
			goMessage:function(){
				this.$CommonJS.navigateTo('../message/message');
			},
			//搜索页面
			gosearch:function(){
				this.$CommonJS.navigateTo('../search/search');
			},
			//导航栏固定在顶部
			scroll:function(event){
				//console.log(event.detail)
				if(event.detail.scrollTop >219){
					this.isFixed = true;
				}else{
					this.isFixed = false;
				}
			},
			loadExecution: function(){
				/**
				 * 获取本地存储中launchFlag的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				const value = uni.getStorageSync('launchFlag');
				if(value){
					uni.switchTab({
					    url: '/pages/home/home'
					});
				}else{
					uni.navigateTo({
						url: '/pages/guide/guide'
					})
				}
			}
		}
	}
</script>
<style>
		@import "home.css";
</style>
