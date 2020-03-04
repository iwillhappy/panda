<template>
	<view class="top-nav">
		<view class="top-nav-item" :class="{'top-nav-selected':currentIndex == 0}" @tap="sortList(0)">综合</view>
		<view class="top-nav-item" :class="{'top-nav-selected':currentIndex == 4}" @tap="sortList(4)">销量</view>
		<view class="top-nav-item" :class="{'top-nav-selected':currentIndex == 3}" @tap="sortList(3)">优惠券</view>
		<view class="top-nav-item" :class="{'top-nav-selected':currentIndex == 5}" @tap="sortList(5)">佣金</view>
	</view>
</template>

<script>
	export default{
		name:"topNav",
		data(){
			return{
				currentIndex:0,//选择表示
			}
		},
		methods:{
			sortList(n){
				this.currentIndex = n;
				this.$emit('sortList',n);
			}
		}
	}
</script>

<style>
	.top-nav{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.top-nav-item{
		height: 40upx;
		opacity:1;
		border-radius:24upx;
		text-align: center;
		font-size: 14px;
		padding: 0 18upx;
		line-height: 40upx;
		color: #6B778D;
	}
	.top-nav-selected{
		background:rgba(244,99,122,1);
		color: #FFFFFF;
	}
</style>
