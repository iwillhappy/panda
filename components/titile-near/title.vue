<template>
	<view class="title-box">
		<image src="../../static/common/goback.png" class="goback" @tap="gobackPage"></image>
		<view class="title-text">{{title}}</view>
		<!-- <view class="extext">{{extext}}</view> -->
	</view>
</template>

<script>
	export default{
		name:"commonTitleNear",
		data(){
			return{
			}
		},
		props:{
			title:{
				type:String
			},
			extext:{
				type:String,
			}
		},
		methods:{
			gobackPage(){
				uni.navigateBack({
					delta:1,
					animationType:'slide-out-right'
				})
			}
		}
		
	}
</script>

<style>
	.title-box{
		width: 100%;
		height: 58upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.goback{
		position: absolute;
		width: 58upx;
		height: 58upx;
		left: 29upx;
		top: 0;
	}
	.title-text{
		font-size:20px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		color:rgba(244,99,122,1);
		opacity:1;
	}
	.extext{
		position: absolute;
		right: 29upx;
		top: 0;
		font-size:14px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		color:rgba(17,23,57,1);
		opacity:1;
	}
</style>
