<template>
	<view class="content">
		<view class="user-top">
			<view class="top-tool">
				<navigator url="../newDriver/newDriver" hover-class="none">
					<image src="../../static/common/tool-msg.png" class="tool-msg"></image>
				</navigator>
				<navigator url="../user/setting" hover-class="none">
					<image src="../../static/common/tool-seting.png" class="tool-seting"></image>
				</navigator>
			</view>
			<view class="user-info">
				<navigator url="../user/user-info">
					<image src="../../static/common/user-avator.png" class="user-avator"></image>
				</navigator>
				
				<view class="user-info-block">
					<view class="nick-name">Nico</view>
					<view class="user-id">ID：7290091</view>
				</view>
			</view>
			<image src="../../static/common/earn-money-me.png" class="earn-money"></image>
		</view>
		
		<view class="user-bottom">
			<view class="user-baseInfo">
				<navigator url="../user/captial-mingx" hover-class="none">
					<view class="baseInfo-item">
						<view class="capital-title">资金明细</view>
						<view class="capital-num">886</view>
					</view>
				</navigator>
				<navigator url="../user/share-panda" hover-class="none">
					<view class="baseInfo-item">
						<view class="capital-title">好友贡献鼓励金</view>
						<view class="capital-num">1080.50</view>
					</view>
				</navigator>
				<navigator url="../myFans/my-fans" hover-class="none">
					<view class="baseInfo-item">
						<view class="capital-title">好友数</view>
						<view class="capital-num">252</view>
					</view>
				</navigator>
			</view>
			
			<view class="user-order">
				<view class="order-title">我的订单</view>
				<image src="../../static/common/question-icon.png" class="question-icon"></image>
			</view>
			<view class="user-order">
				<view class="order-title">更新联盟会话</view>
				<image src="../../static/common/question-icon.png" class="question-icon"></image>
			</view>
			
			<view class="tab-block">
				<view class="tab-item" @tap="goShopCar">
					<image class="tab-icon" src="../../static/common/me-01.png"></image>
					<view class="tab-text">购物车</view>
				</view>
				<view class="tab-item" @tap="goCollection">
					<image class="tab-icon" src="../../static/common/me-02.png"></image>
					<view class="tab-text">收藏宝贝</view>
				</view>
				<view class="tab-item" @tap="orderBack">
					<image class="tab-icon" src="../../static/common/me-03.png"></image>
					<view class="tab-text">订单补录</view>
				</view>
				<view class="tab-item" @tap="goBrowseFootprints">
					<image class="tab-icon" src="../../static/common/me-04.png"></image>
					<view class="tab-text">浏览足迹</view>
				</view>
			</view>
			
			<view class="nav-block">
				<view class="nav-item" @tap="goSharePanda">
					<image src="../../static/common/nav-01.png" class="nav-icon"></image>
					<view class="nav-text">分享熊猫优选</view>
				</view>
				<view class="nav-item">
					<image src="../../static/common/nav-02.png" class="nav-icon"></image>
					<view class="nav-text">专属海报</view>
				</view>
				<view class="nav-item">
					<image src="../../static/common/nav-03.png" class="nav-icon"></image>
					<view class="nav-text">专属链接</view>
				</view>
				<view class="nav-item" @tap="goEncourageMoney">
					<image src="../../static/common/nav-04.png" class="nav-icon"></image>
					<view class="nav-text">我的鼓励金</view>
				</view>
				<view class="nav-item" @tap="goCash">
					<image src="../../static/common/nav-05.png" class="nav-icon"></image>
					<view class="nav-text">提现</view>
				</view>
				<view class="nav-item" @tap="goNewDriver">
					<image src="../../static/common/nav-06.png" class="nav-icon"></image>
					<view class="nav-text">帮助中心</view>
				</view>
				<view class="nav-item">
					<image src="../../static/common/nav-07.png" class="nav-icon"></image>
					<view class="nav-text">取消授权</view>
				</view>
				<view class="nav-item">
				</view>
			</view>
		</view>
		
		<!-- 订单补录 -->
		<uni-popup ref="showshare" :type="type" @change="change" style="z-index: 999;">
			<view class="uni-share">
				<view class="tip-block">
					<view class="title">温馨提示</view>
					<view class="msg">超级返订单通过此位置补录无效，请在超级返订单位置补录若有疑问，微信联系：XXXXXX</view>
					<view class="commit-btn" @tap="cancel('share')">确认</view>
				</view>
				<!-- <text class="uni-share-btn" @click="cancel('share')">取消分享</text> -->
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup  from'../../components/uni-popup/uni-popup.vue'
	export default{
		components:{
			uniPopup
		},
		data(){
			return{
					type: 'center',
			}
		},
		methods:{
			goEncourageMoney(){
				//我的鼓励金
				this.$CommonJS.navigateTo('../myEncourageMoney/my-encourage-money')
			},
			orderBack(){
				//订单补录
				this.openOrder();
			},
			goBrowseFootprints(){
				//浏览足迹
				this.$CommonJS.navigateTo('../browseFootprints/browse-footprints')
			},
			goCollection(){
				//收藏夹
				this.$CommonJS.navigateTo('../collection/collection')
			},
			goShopCar(){
				//购物车
				this.$CommonJS.navigateTo('../shopCar/shop-car');
			},
			goNewDriver(){
				this.$CommonJS.navigateTo('../newDriver/newDriver');
			},
			goCash(){
				//提现
				this.$CommonJS.navigateTo('../user/cash-withdrawal');
			},
			goSharePanda(){
				//分享熊猫油品
				this.$CommonJS.navigateTo('../user/share-panda');
			},
			login(){
				uni.navigateTo({
				    url: '../login/login'
				})
			},
			register(){
				uni.navigateTo({
				    url: '../login/register'
				})
			},
			openOrder(){
				 this.$refs.showshare.open()
			},
			cancel(type) {
				this.$refs['show' + type].close();
				this.$CommonJS.navigateTo('../orderBack/order-back')
			},
			change(e) {
				console.log('是否打开:' + e.show)
			}
		}
	}
</script>

<style>
	@import url("me.css");
</style>
