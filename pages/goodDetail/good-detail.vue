<template>
	<view class="content">
		<view class="top-edit">
			<image src="../../static/common/goos-back.png" class="goos-back" @click="goBack"></image>
			<image src="../../static/common/goos-edit.png" class="goos-edit"></image>
		</view>
		<swiper class="good-imgs" indicator-dots="true" autoplay="true" circular="true">
			<swiper-item v-for="(img,index) in goodsInfo.small_images.string" :key="index">
				<image :src="img" class="goos-img"></image>
			</swiper-item>
		</swiper>
		<!-- 优惠券 -->
		<view class="coupon">
			<image class="coupon-bg" src="../../static/common/coupon-bg.png"></image>
			<view class="coupon-detail" @click="goTaobao">
				<image src="../../static/common/coupon-detail.png" class="coupon-detail-bg"></image>
				<view class="coupon-num">
					<view class="num-top">
						<text class="icon">￥</text><text>{{coupon}}</text>
					</view>
					<view class="receive">立即领取</view>
				</view>
				<view class="coupon-time">
					<view class="start-time">生效时间：{{startTime}}</view>
					<view class="end-time">截止日期：{{endTime}}</view>
				</view>
			</view>
		</view>
		<!-- 商品标题 -->
		<view class="goos-title-block">
			<view class="good-title">
				<image src="../../static/common/taobao.png" class="name-icon"></image>
				<text class="good-name">{{goodsInfo.title}}</text>
			</view>
			<view class="good-coupon">
				<view class="after-coupon">券后价</view>
				<view class="price">
					<text class="money-icon">￥</text>
					{{goodsInfo.zk_final_price}}
				</view>
			</view>
			<view class="sale-volume">
				<view>{{goodsInfo.nick}}</view>
				<view>月销{{goodsInfo.volume}}</view>
			</view>
		</view>
		<!-- 推荐词 -->
		<view class="recommend">
			<image src="../../static/common/recommend-img.png" class="recommend-img"></image>
			<view class="recommend-text">
				击败同类店铺开机后给好几个好几个百分点尴哈哈哈肌肤光滑的肌肤的
				光伏发电个他与郭富城个好吃的
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="goods-info">
			<image src="../../static/common/goos-info.png" class="goos-info"></image>
			<view class="goods-desc-list">
				<image mode="widthFix" :src="item" v-for="(item,k) in goodsInfo.desc_images" :key="k" class="imgs"></image>
			</view>
			
		</view>
		<!-- 好物推荐 -->
		<view class="goods-info">
			<image src="../../static/common/recommend-title.png" class="goos-info"></image>
			<view class="recommend-list">
				<good v-for="(good,index) in recommendList" :key="index" 
				:goodsInfo="good" @goodsDetail="goodsDetail"
				></good>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="bottom-btn">
			<image src="../../static/common/collection-not.png" class="collection"></image>
			<view class="btn-block">
				<view class="share-btn">分享赚 ¥ {{yongjin}}</view>
				<view class="coupon-btn"  @click="goTaobao">领券省 ¥ {{coupon}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import good from '../../components/goods/good.vue'
	export default{
		name:"goodDetail",
		components:{
			good
		},
		data(){
			return{
				product_id:"",
				goodsInfo:"",
				coupon:'',
				startTime:"",
				endTime:"",
				recommendList:"",//推荐好物
				coupon_click_url:"",//高佣转链
				yongjin:"",
			}
		},
		onLoad(options) {
			this.coupon = options.coupon;
			if(options.startTime.indexOf('-')==-1){
				this.startTime = this.$CommonJS.getTime(options.startTime);
			}else{
				this.startTime = options.startTime;
			}
			if(options.endTime.inde==-1){
				this.endTime = this.$CommonJS.getTime(options.endTime);
			}else{
				this.endTime = options.endTime
			}
			
			
			const _this = this;
			//商品id
			uni.getStorage({
			    key: 'product_id',
			    success: function (res) {
			        //console.log(res.data);
							_this.getGoodsDetail(res.data);
							_this.getCouponClickUrl(res.data);//获取高佣转链链接
			    }
			});
			//佣金
			uni.getStorage({
			    key: 'yongjin',
			    success: function (res) {
						_this.yongjin = res.data;
			    }
			});
			
		},
		methods:{
			goTaobao(){
				window.location.href = this.coupon_click_url;
			},
			getGoodsDetail(id){
				//根据id获取商品详情
				const _this = this;
				uni.request({
					url:this.$API.URL + this.$API.tbk_item_detailinfo,
					data:{id:id},
					success(res) {
						console.log(res)
						if(res.data.success){
							if(res.data.msg.data.category_name.indexOf('/')==-1){
								_this.getRecommedList(res.data.msg.data.category_name);
							}else{
								_this.getRecommedList(res.data.msg.data.level_one_category_name.split('/')[0]);
							}
							
							_this.goodsInfo = res.data.msg.data;
						}
					}
				})
			},
			getCouponClickUrl(id){
				//高佣转链
				const _this = this;
				uni.request({
					url:this.$API.URL + this.$API.tbk_id_privilege,
					data:{id:id},
					success(res) {
						console.log(res)
						_this.coupon_click_url = res.data.msg.data.coupon_click_url;
					}
				})
			},
			getRecommedList(goodsName){
				//推荐好物
				const _this = this;
				uni.request({
					url:this.$API.URL + this.$API.tbk_super_search,
					data:{q:goodsName},
					success(res) {
						if(res.data.success){
							_this.recommendList = res.data.msg.data;
						}
					}
				})
			},
			goBack(){
				this.$CommonJS.navigateBack()
			},
			goodsDetail(coupon){
				//console.log(coupon)
				//商品详情
				this.$CommonJS.navigateTo('../goodDetail/good-detail?coupon='+coupon.coupon+'&startTime='+coupon.startTime+'&endTime='+coupon.endTime);
			},
		}
	}
</script>

<style>
	@import url("good-detail.css");
</style>
