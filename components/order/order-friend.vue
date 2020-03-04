<template>
	<view class="system-coin">
		<view class="order-danhao">
			<view class="order-num">
				此订单为您邀请的<text class="xiaji">下级</text>购买
			</view>
			<view class="order-time">2020-02-18 12:24:23</view>
		</view>
		<view class="s-top">
			<image src="../../static/common/order-friend.png" class="order-shop-icon"></image>
			<view class="order-shop-text">
				<view class="coin-source">好友确认收货16天后,鼓励金自动发放至您的钱包</view>
				<view class="xishou-btn">邀请好友</view>
			</view>
		</view>
		<view class="nocoin-block">
			<view class="nocoin-text">已成功获得：<text class="xiaji">0.42</text></view>
			<view class="coin-status">完成后发放</view>
		</view>
		<view class="order-cost">
			<view class="cost-num">支付金额：¥</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"orderFriend",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.system-coin{
		width:660upx;
		height:auto;
		background:rgba(255,255,255,1);
		box-shadow:0px 9upx 27upx rgba(0,0,0,0.16);
		opacity:1;
		border-radius:18upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10upx 0;
		padding-bottom: 10upx;
	}
	.order-danhao{
		width: calc(100% - 72upx);
		height: 60upx;
		border-bottom: 1px solid #F0F3F7;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 36upx 0 36upx;
	}
	.order-num{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(17,23,57,1);
		opacity:1;
	}
	.order-time{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(177,184,193,1);
		opacity:1;
	}
	.xiaji{
		color: #F47F2A;
	}
	.s-top{
		width: 100%;
		min-height: 152upx;
		height: auto;
		border-bottom: 1px solid #F0F3F7;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.order-shop-icon{
		width: 96upx;
		height: 96upx;
		margin: 0 20upx 0 36upx;
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
	.nocoin-block{
		width: calc(100% - 72upx);
		height: 60upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 36upx 0 36upx;
		border-bottom: 1px solid #F0F3F7;
	}
	.nocoin-text{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:25upx;
		color:rgba(17,23,57,1);
		opacity:1;
	}
	.nocon-delete{
		padding: 4px 20upx;
		background: #F4637A;
		border-radius: 50upx;
		font-size: 12px;
		color: #FFFFFF;
	}
	.order-cost{
		width: calc(100% - 72upx);
		height: 60upx;
		padding: 0 36upx 0 36upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.cost-num{
		font-size:14px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		line-height:31upx;
		color:rgba(244,159,42,1);
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
