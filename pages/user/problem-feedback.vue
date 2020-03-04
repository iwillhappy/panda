<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="问题反馈" :extext="extext"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<view class="question-type">
				<view class="question-title">问题类型</view>
				<view class="type-block">
					<view class="type-btn type-btn-selected">遇到问题</view>
					<view class="type-btn">功能建议</view>
				</view>
			</view>
			
			<view class="question-detail">
				<view class="question-title">问题说明</view>
				<view class="question-desc">
					<textarea class="desc-text" placeholder="请详细描述你的问题"/>
					<view class="img-box">
						<image src="../../static/common/pick-img.png" class="pick-img"></image>
					</view>
				</view>
			</view>
			
			<view class="contact">
				<view class="question-title">常用联系方式</view>
				<view class="contact-block">
					<input placeholder="QQ/微信/手机号" class="contact-input" />
				</view>
			</view>
			
			<view class="submit-btn">提交反馈</view>
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
				loadingType: 'more',
				extext:"历史反馈"
			}
		},
		onLoad() {
		},
		methods: {
			
		}
		
	}
</script>

<style>
	@import url("user-info.css");
</style>
