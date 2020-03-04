<template>
	<view class="content">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:duration="duration">
			<swiper-item>
				<view class="swiper-item">
					<view class="item-content">
						<view class="content-main">
							<image class="guide-title" src="../../static/guide/panda.png"></image>
							<image class="guide-img" src="../../static/guide/Illustration.png"></image>
							<view class="guide-freetext">每日限量领取免费礼品</view>
							<view class="guide-Coupon">每日限量领取免费礼品</view>
							<image class="start" src="../../static/guide/start.png" @tap="launchFlag()"></image>
						</view>
					</view>
				</view>
			</swiper-item>			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
						key: 'launchFlag',
						data: true,
				});
				uni.switchTab({
					url:'../home/home'
				});
				
			}
		}
	}
</script>
<style>
	@import url("guide.css");
</style>
