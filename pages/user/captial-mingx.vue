<template>
	<view class="content">
		<view class="user-top">
			<view class="top-tool">
				<image src="../../static/common/captial-back.png" class="captial-back" @tap="goback"></image>
				<view class="captial-title">资金明细</view>
				<view class="cash">提现</view>
				<image src="../../static/common/captial-bg1.png" class="captial-bg1"></image>
				<image src="../../static/common/captial-bg2.png" class="captial-bg2"></image>
			</view>
		</view>
		
		<view class="user-bottom">
			<view class="bottom-type">
				<view class="capital-type">
					<view class="type-item">
						<view class="type-item-title">资金明细</view>
						<view class="type-item-num">886.52</view>
					</view>
					<view class="type-item">
						<view class="type-item-title">超级返本金（元）</view>
						<view class="type-item-num">1080.50</view>
					</view>
				</view>
				
				<view class="captial-nav">
					<view class="captial-nav-item" @tap='changeTab(0)' :class="{'captial-slected':currentIndex == 0}">鼓励金明细</view>
					<view class="captial-nav-item" @tap='changeTab(1)' :class="{'captial-slected':currentIndex == 1}">超级返明细</view>
				</view>
			</view>
			
			<scroll-view class="list-block" scroll-y="true">
				<swiper class="swiper" 
				:indicator-dots="indicatorDots" 
				:interval="interval" 
				:duration="duration" 
				@change="slideItem"
				:current="currentTab"
					>
					<swiper-item class="swiper-item">
						<view class="list-item">
							<view class="item-left">
								<view class="item-title">12月超级返推荐奖励（二级）</view>
								<view class="item-time">2020-01-22</view>
							</view>
							<view class="item-captial-num">9.5</view>
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view class="list-item">
							<view class="item-left">
								<view class="item-title">12月超级返推荐奖励（二级）</view>
								<view class="item-time">2020-01-22</view>
							</view>
							<view class="item-captial-num">10</view>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>
			
			
			
			
			
			
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				currentIndex:0,
				currentTab:0,  //sweiper所在页
			}
		},
		methods:{
			changeTab(index){
				this.currentTab = index;
			},
			//touch swipe-item
			slideItem(event){
				this.currentIndex = event.detail.current;
			},
			goback(){
				this.$CommonJS.navigateBack()
			},
			login(){
				uni.navigateTo({
				    url: '../login/login'
				})
			},
			register(){
				uni.navigateTo({
				    url: '../login/register'
				})
			}
		}
	}
</script>

<style>
	@import url("captial-mingx.css");
</style>
