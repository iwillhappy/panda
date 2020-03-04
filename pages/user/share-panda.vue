<template>
	<view class="content">
		<image src="../../static/common/share-bg.png" class="share-bg"></image>
		
		<view class="message-title" :class="{'bgc':bgc}"> 
			<view class="posit">
				<!-- #ifdef H5 || APP-PLUS -->
				<image src="../../static/common/captial-back.png" class="goback" @tap="goback"></image>
				<!-- #endif -->
				<view class="posit-title">分享熊猫优品</view>
				<navigator url="../activityRules/activity-rules" hover-class="none">
					<image src="../../static/common/share-rule.png" class="share-rule"></image>
				</navigator>
				
			</view>
		</view>
		
		<view class="list-scroll-content">
			<image src="../../static/guide/panda.png" class="share-title"></image>
			<view class="share-box">
				<view class="share-box-top">
					<image src="../../static/common/share-user-icon.png" class="share-user-icon"></image>
					<view class="share-box-top-title">分享双方即可各获得相应鼓励金</view>
				</view>
				<image src="../../static/common/share-box-bottom.png" class="share-box-bottom"></image>
				<view class="share-btn" @tap="openShare"></view>
			</view>
			<image src="../../static/common/share-step.png" class="share-step"></image>
			<view class="share-step-block">
				<image src="../../static/common/share-step-detail.png" class="share-step-detail"></image>
			</view>
			<view class="my-share-detail">
				<view class="detail-title">我的邀请战绩</view>
				<view class="invite-detail">
					<view class="invite-item invite-frieds">
						<view class="invite-item-text">共邀请好友</view>
						<view class="invite-item-num">1000</view>
					</view>
					<view class="invite-item">
						<view class="invite-item-text">获得收益（元）</view>
						<view class="invite-item-num">1080.50</view>
					</view>
				</view>
				<navigator url="../myFans/my-fans" hover-class="none">
					<image src="../../static/common/check-detail-btn.png" class="check-detail-btn"></image>
				</navigator>
				
				<view class="detail-title invite-top">邀请排行榜</view>
				<view class="invite-ranking">
					<view class="rank-type ranking-total ranking-selected">总榜</view>
					<view class="rank-type">好友</view>
				</view>
				<view class="ranking-list">
					<view class="list-title">
						<view class="title-text">奖励排名</view>
						<view class="title-text">奖励金额（元）</view>
					</view>
					<view class="rank-total">
						<view class="ranking-item">
							<view class="item-left">
								<image src="../../static/common/user-avator-small.png" class="avatar"></image>
								<view class="item-user">
									<view class="ranking-num">No.1</view>
									<view class="user-id">177****6578</view>
								</view>
							</view>
							<view class="encourage-num">357.55</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<uni-popup ref="showshare" :type="type" @change="change">
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</view>
				</view>
				<text class="uni-share-btn" @click="cancel('share')">取消分享</text>
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
		data () {
			return {
				type: 'bottom',
				bottomData:[],
				bgc:false, //页面滚动顶部状态栏改变颜色
			}
		},
		onLoad(){
			this.bottomData = this.$Data.bottomData;
		},
		onPageScroll(e) {
			if(e.scrollTop == 0){
				this.bgc = false;
			}else{
				this.bgc = true;
			}
		   // console.log("滚动距离为：" + e.scrollTop);
		},
		methods: {
			goback(){
				this.$CommonJS.navigateBack();
			},
			openShare(){
				 this.$refs.showshare.open()
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			}
		}
		
	}
</script>

<style>
	@import url("share-panda.css");
</style>
