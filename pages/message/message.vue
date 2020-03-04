<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="消息中心"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<ygc-refresh
				@onRefresh="refreshList()" 
				@scrolltolower="addList()"
				:pullupLoadingType="loadingType">
				
				<view class="message-item" @tap="goMessageDetail">
					<image src="../../static/common/message-icon.png" class="message-icon"></image>
					<view class="message-detail">
						<view class="msg-detail-title">
							<view class="big-title">公告</view>
							<view class="small-title">关于近期陆续发货的通知</view>
						</view>
						<view class="message-time">
							<view class="msg-time">2020-01-09</view>
							<image src="../../static/common/unread-msg.png" class="un-readMsg"></image>
						</view>
					</view>
				</view>
				
				<view class="message-item">
					<image src="../../static/common/message-icon.png" class="message-icon"></image>
					<view class="message-detail">
						<view class="msg-detail-title">
							<view class="big-title">公告</view>
							<view class="small-title">关于近期陆续发货的通知</view>
						</view>
						<view class="message-time">
							<view class="msg-time">2020-01-09</view>
							<image src="../../static/common/unread-msg.png" class="un-readMsg"></image>
						</view>
					</view>
				</view>
			</ygc-refresh>
		</view>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	import ygcRefresh from '../../components/ygc-refresh/ygc-refresh.vue';
	export default{
		components:{
			commonTitle,
			ygcRefresh
		},
		data () {
			return {
				loadingType: 'more',
				
			}
		},
		mounted () {
		    console.log('mouted');
		},
		onLoad() {
		},
		methods: {
			/**
			 * 下拉刷新
			 */
			refreshList () {
			  console.log('下拉刷新');
			},
			/**
			 * 上拉加载
			 */
			addList() {
				console.log('上拉加载');
				this.loadingType = 'loading';
				setTimeout(() => {
					this.loadingType = 'more';
				}, 500);
				
			},
			//公告详情
			goMessageDetail(){
				this.$CommonJS.navigateTo('./messageDetail')
			}
			
		}
		
	}
</script>

<style>
	@import url("message.css");
</style>
