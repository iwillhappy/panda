<template>
	<view class="system-coin">
		<view class="s-top">
			<image src="../../static/common/order-shop-icon.png" class="order-shop-icon"></image>
			<view class="order-shop-text">
				<view class="coin-source">使用熊猫优选完成首笔订单即可获得奖励</view>
				<view class="xishou-btn">新手奖励</view>
			</view>
		</view>
		<view class="s-bottom">
			<view class="coin-num">奖励鼓励金：1</view>
			<view class="coin-status">完成后发放</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"systemCoin",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.system-coin{
		width:660upx;
		height:223upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 9upx 27upx rgba(0,0,0,0.16);
		opacity:1;
		border-radius:18upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10upx 0;
	}
	.s-top{
		width: 100%;
		height: 152upx;
		border-bottom: 1px solid #F0F3F7;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.order-shop-icon{
		width: 96upx;
		height: 96upx;
		margin: 0 20upx 0 51upx;
	}
	.order-shop-text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.coin-source{
		height:25upx;
		font-size:13px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(17,23,57,1);
		opacity:1;
		margin-bottom: 33upx;
	}
	.xishou-btn{
		font-size: 12px;
		padding: 4upx 10upx;
		color: #F49F2A;
		border-radius: 20upx;
		border: 1px solid #F49F2A;
	}
	.s-bottom{
		width: calc(100% - 87upx);
		height: 71upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 36upx 0 51upx;
	}
	.coin-num{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(177,184,193,1);
		opacity:1;
	}
	.coin-status{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(244,99,122,1);
		opacity:1;
	}
</style>
