<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="关于熊猫优选"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<view class="app-qcode">
				<image src="../../static/common/about-panda.png" class="about-panda"></image>
				<image src="../../static/common/panda.png" class="panda"></image>
			</view>
			<view class="user-info-item">
				<view class="item-title">当前版本</view>
				<view class="item-right">
					<view class="user-text2">5.1.1</view>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">新版更新</view>
				<view class="item-right">
						<view class="user-text2">暂无更新</view>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">软件官网</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">服务条款</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">隐私条款</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">微信服务号</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">评价</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
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
				loadingType: 'more',
				
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
