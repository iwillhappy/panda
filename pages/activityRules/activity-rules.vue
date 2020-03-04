<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="活动规则"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<image src="../../static/common/activity-rules.png" class="activity-rules"></image>
			<!-- 注意事项 -->
			<view class="cash-tips">
				<view class="tips-title">活动规则</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						好友需要通过你的分享的专属二维码或专属链接注册
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
					好友通过熊猫优选产生的每一笔鼓励金（自己购买，或者分享淘口令
					给他人产生购买）你都可以获得相应鼓励金奖励，不设上限；
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						奖励由熊猫优选额外提供，不影响好友的鼓励金收入；
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						禁止通过作弊手段进行虚假邀请骗取奖励，如有发现将取消其奖励并
						酌情处罚
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						在法律允许范围内，熊猫优选保留对邀请活动的解释权。
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
	@import url("activity-rules.css");
</style>
