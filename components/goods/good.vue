<template>
	<view class="goods"
	@tap="goodsInfo.coupon?
	goodDetail(goodsInfo.num_iid,goodsInfo.coupon,goodsInfo.coupon_start_time,goodsInfo.coupon_end_time):
	goodDetail(goodsInfo.itemid,goodsInfo.couponmoney,goodsInfo.couponstarttime,goodsInfo.couponendtime)">
		<image :src="goodsInfo.pict_url || goodsInfo.itempic" class="good-img"></image>
		<view class="good-name">{{goodsInfo.short_title || goodsInfo.itemshorttitle}}</view>
		<view class="good-shop">
			<image src="../../static/common/taobao.png" class="good-source-icon"></image>
			<view class="good-shopname">{{goodsInfo.shop_title || goodsInfo.shopname}}</view>
			<view class="good-quan">￥{{goodsInfo.coupon || goodsInfo.couponmoney}}券</view>
		</view>
		<view class="good-price">
			<view class="after-quan">券后价￥<text class="quan-detail">{{  goodsInfo.itemendprice?goodsInfo.itemendprice: calculation(goodsInfo.reserve_price,goodsInfo.coupon)}}</text></view>
			<!-- <view class="quan-detail">12</view> -->
			<view class="zhuang">
				<view class="coin">￥</view>
				<view class="zhuang-detail">{{ goodsInfo.tkmoney? calculationRateHot(goodsInfo.tkmoney):calculationRate(goodsInfo.reserve_price,goodsInfo.commission_rate)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"good",
		data(){
			return{
				yongjin:""
			}
		},
		props:{
			goodsInfo:{
				type:Object,
			}
		},
		
		methods:{
			goodDetail(id,num,startTime,endTime){
				var _this = this;
				const coupon = {
					coupon:num,
					startTime:startTime,
					endTime:endTime
				}
				//console.log(coupon)
				uni.setStorage({
				    key: 'yongjin',
				    data: this.yongjin
				});
				//商品详情
				uni.setStorage({
				    key: 'product_id',
				    data: id,
				    success: function () {
							_this.$emit('goodsDetail',coupon);
				    }
				});
				
			},
			calculationRateHot(tkmoney){
				//推荐商品计算佣金
				const num = tkmoney * 0.8;
				if(Math.floor(num) == num){
					this.yongjin = num;
					return num
				}else{
					this.yongjin = num.toFixed(2);
					return num.toFixed(2)
				}
				
			},
			calculation(reserve_price,coupon){
				//计算券后价
				const num = reserve_price - coupon;
				if(Math.floor(num) == num){
					return num
				}else{
					return num.toFixed(2);
				}
				
			},
			calculationRate(reserve_price,commission_rate){
				//计算佣金
				const num = reserve_price * (commission_rate / 100/100) * 0.8;
				if(Math.floor(num) == num){
					this.yongjin = num;
					return num
				}else{
					this.yongjin = num.toFixed(2);
					return num.toFixed(2)
				}
			}
		}
	}
</script>

<style>
	@import url("good.css");
</style>
