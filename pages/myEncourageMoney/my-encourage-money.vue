<template>
	<view class="content">
		<image src="../../static/common/encourage-bg.png" class="share-bg"></image>
		
		<view class="message-title" :class="{'bgc':bgc}"> 
			<view class="posit">
				<!-- #ifdef H5 || APP-PLUS -->
				<image src="../../static/common/captial-back.png" class="goback" @tap="goback"></image>
				<!-- #endif -->
				<!-- <view class="posit-title"></view> -->
				<image src="../../static/common/encourage-icon.png" class="share-rule"></image>
			</view>
		</view>
		
		<view class="list-scroll-content">
			<view class="encourage-title">累计鼓励金（元）</view>
			<view class="encourage-total">1080.50</view>
			<view class="latey"><text class="latey-text">最新获得（元）</text>0.50</view>
			
			
			<view class="my-share-detail">
				<view class="encourage-block-title">
					<image src="../../static/common/encourage-left.png" class="encourage-img"></image>
					<image src="../../static/common/encourage-right.png" class="encourage-img"></image>
				</view>
				<view class="encourage-item">
					<view class="item-block">
						<image src="../../static/common/item-01.png" class="item-01"></image>
						<view class="item-text">待发放(元)</view>
						<view class="item-num">1080.50</view>
					</view>
					<view class="item-block">
						<image src="../../static/common/item-02.png" class="item-02"></image>
						<view class="item-text">已发放(元)</view>
						<view class="item-num">1080.50</view>
					</view>
					<view class="item-block">
						<image src="../../static/common/item-02.png" class="item-03"></image>
						<view class="item-text">好友贡献鼓励金(元)</view>
						<view class="item-num">1080.50</view>
					</view>
					<view class="item-block">
						<image src="../../static/common/item-04.png" class="item-04"></image>
						<view class="item-text">成功邀请好友</view>
						<view class="item-num">200</view>
					</view>
				</view>
				
				<view class="rank">
					<view class="rank-left">
						<view class="left-top">
							<text class="click-text">点击查看</text>鼓励金榜单
						</view>
						<image src="../../static/common/click-btn.png" class="click-btn"></image>
					</view>
					<image src="../../static/common/rank-img.png" class="rank-img"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		components:{
		},
		data () {
			return {
				bgc:false, //页面滚动顶部状态栏改变颜色
			}
		},
		onLoad(){
			this.bottomData = this.$Data.bottomData;
		},
		methods: {
			goback(){
				this.$CommonJS.navigateBack();
			}
		
		}
		
	}
</script>

<style>
	@import url("my-encourage-money.css");
</style>
