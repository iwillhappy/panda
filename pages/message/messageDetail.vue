<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="公告详情"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content nopadding">
			<view class="messageDetail">
				<view class="notice">关于延长返款时间的通知</view>
				<view class="notice-time">
					<view class="notice-time-day">2020/01/31</view>
					<view class="notice-time-hours">22:42:09</view>
				</view>
				<view class="notice-text">
					受肺炎疫情影响，快递发货延迟，位保证平台健康稳定
					的发展，即日起超级烦默认返款时间有7天延长至10天，
					请大家切勿由于返款问题联系商家，有问题及时联系微
					信公众号咨询。感谢大家理解，新的一年我们会以更优
					质的礼品回馈大家！
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
		},
		components:{
			commonTitle
		}
	}
</script>

<style>
	@import url("message.css");
</style>
