<template>
	<view class="share-box">
		<view class="share-text">
			健康挥洒的健康和丹江口市被大家看好所谓的苦海无边的那是悲剧
			健康挥洒的健康和丹江口市被大家看好所谓的苦海无边的那是悲剧
			健康挥洒的健康和丹江口市被大家看好所谓的苦海无边的那是悲剧
		</view>
		<view class="share-goods">
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
			<view class="goods-block">
				<image src="../../static/login/quan.png" class="goods-img"></image>
				<view class="goods-price">￥199.0</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"shareBox",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.share-box{
		width: calc(100% - 100upx);
		height: auto;
		padding: 0 50upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.share-text{
		width: 100%;
		font-size:14px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:40upx;
		color:rgba(17,23,57,1);
		opacity:1;
	}
	.share-goods{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 34upx;
		margin-bottom: 29upx;
	}
	.goods-block{
		width:214upx;
		height:214upx;
		background:rgba(240,243,247,1);
		opacity:1;
		position: relative;
		margin-right: 4upx;
		margin-bottom: 4upx;
	}
	.goods-block:nth-child(3n){
		margin:0;
	}
	.goods-img{
		width:214upx;
		height:214upx;
	}
	.goods-price{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 130upx;
		height: 50upx;
		text-align: center;
		line-height: 50upx;
		font-size: 14px;
		color: #FFFFFF;
		background: red;
	}
</style>
