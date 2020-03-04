<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="个人资料"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<view class="user-info-item">
				<view class="item-title">头像</view>
				<view class="item-right">
					<image src="../../static/common/user-avator-small.png" class="user-avator-small"></image>
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">用户ID</view>
				<view class="item-right">
					<view class="user-text">7290091</view>
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">昵称</view>
				<view class="item-right">
					<view class="user-text">Nico</view>
					<view class="user-text2">13/16</view>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">手机号</view>
				<view class="item-right">
					<view class="user-text2">15921752419</view>
				</view>
			</view>
			
			<view class="user-info-item">
				<view class="item-title">填写邀请人</view>
				<view class="item-right">
					
				</view>
			</view>
			
			<view class="app-qcode">
				<view class="qcode-text">面对面扫描下载安装</view>
				<image src="../../static/common/sign-success.png" class="qcode-img"></image>
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
