<template>
	<view class="content">
		<view class="page-section swiper">
				<view class="page-section-spacing">
						<swiper class="swiper" 
						:indicator-dots="indicatorDots" 
						loop="true" circular="true" 
						:autoplay="autoplay" 
						:interval="interval" 
						:duration="duration">
								<swiper-item class="box" v-for="(item,index) in list" :key="index">
									<view class="big-title">{{item.bigTitle}}</view>
									<view class="small-title">{{item.smallTitle}}</view>
									<image :src="item.mainPic" class="mainPic"></image>
									<image src="../../static/login/panda.png" class="panda"></image>
								</swiper-item>
						</swiper>
				</view>
		</view>
		<view class="login-btn">
			<image class="wx-login-icon" src="../../static/login/wx-login-icon.png"></image>
			<view class="wx-login-text">微信免注册登录</view>
		</view>
		<view class="login-type-content">
			<view class="login-type">手机/账号登录</view>
			<view class="register-btn">
				<image class="register-icon" src="../../static/login/register-icon.png"></image>
				<view class="register-text">注册领新人礼</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import swiperItem from'../../components/login/swiper.vue'
	
	export default {
		data() {
				return {
						background: ['color1', 'color2', 'color3'],
						indicatorDots: true,
						autoplay: true,
						interval: 2000,
						duration: 500,
						bigTitle:"送鼓励金",
						smallTitle:"笔笔都送鼓励金",
						mainPic:'../../static/guide/Illustration.png',
						list:[
							{
								bigTitle:"购物先领券",
								smallTitle:"网购之前先搜券",
								mainPic:'../../static/login/quan.png',
							},
							{
								bigTitle:"送鼓励金",
								smallTitle:"笔笔都送鼓励金",
								mainPic:'../../static/login/coin.png',
							},
							{
								bigTitle:"分享赚钱",
								smallTitle:"帮人省 自己赚 赠人玫瑰 手有余香",
								mainPic:'../../static/login/share.png',
							},
							{
								bigTitle:"首单有礼",
								smallTitle:"完成首单即可提现",
								mainPic:'../../static/login/gift.png',
							},
						]
				}
		},
		components: {
			//swiperItem
		},
		methods: {
			 
		}
	}
</script>

<style>
	@import url("login.css");
</style>
