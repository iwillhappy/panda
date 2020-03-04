<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="我的粉丝"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			
			<view class="my-share-detail">
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
			
					<!-- <view class="invite-ranking">
						<view class="rank-type ranking-total ranking-selected">名称/最后登录</view>
						<view class="rank-type">获得鼓励金（元）</view>
						<view class="rank-type">消息</view>
					</view> -->
					<view class="ranking-list">
						<view class="list-title">
							<view class="title-text">名称/最后登录</view>
							<view class="title-text selected">获得鼓励金（元）</view>
							<view class="title-text">消息</view>
						</view>
						<view class="rank-total">
							<view class="ranking-item">
								<view class="item-left">
									<image src="../../static/common/user-avator-small.png" class="avatar"></image>
									<view class="item-user">
										<view class="ranking-num">177****6578</view>
										<view class="user-id">917天前</view>
									</view>
								</view>
								<view class="get-money">315.15</view>
								<image src="../../static/common/mesg.png" class="mesg"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			
			
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
	@import url("my-fans.css");
</style>
