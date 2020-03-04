<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="订单找回"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<view class="order-back-edit">
				<image src="../../static/common/order-back-01.png" class="order-back-bg"></image>
				<view class="order-back-block">
					<view class="order-back-title">输入订单编号找回订单</view>
					<view class="small-text">（此处仅支持真实网购订单补录）</view>
					<input type="text" placeholder="请输入淘宝订单编号" class="order-back-input"/>
					<image src="../../static/common/order-back-btn.png" class="order-back-btn"></image>
				</view>
			</view>
			<image src="../../static/common/order-back-step.png" class="order-back-step"></image>
			<view class="step">
				一·点击<text class="color-pink">「进入淘宝」 </text> 订单按钮，进入淘宝
				<text class="color-pink">「我的订单」</text>        
			</view>
			<image src="../../static/common/order-back-step-01.png" class="order-back-setp-01"></image>
		</view>
		
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	export default{
		components:{
			commonTitle
		},
		data () {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			
		}
		
	}
</script>

<style>
	@import url("order-back.css");
</style>
