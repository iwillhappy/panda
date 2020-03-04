<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="设置"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<navigator url="./about-panda" hover-class="none" style="width: 100%;">
				<view class="user-info-item">
					<view class="item-title">关于熊猫优选</view>
					<view class="item-right">
						<image src="../../static/common/question-icon.png" class="question-icon"></image>
					</view>
				</view>
			</navigator>
			
			<navigator url="./problem-feedback" hover-class="none" style="width: 100%;">
				<view class="user-info-item">
					<view class="item-title">问题反馈</view>
					<view class="item-right">
						<image src="../../static/common/question-icon.png" class="question-icon"></image>
					</view>
				</view>
			</navigator>
			
			<navigator url="./edit-pwd" hover-class="none" style="width: 100%;">
				<view class="user-info-item">
					<view class="item-title">修改密码</view>
					<view class="item-right">
						<image src="../../static/common/question-icon.png" class="question-icon"></image>
					</view>
				</view>
			</navigator>
			
			<view class="user-info-item" @tap="clearStroge">
				<view class="item-title">清除缓存</view>
				<view class="item-right">
					<image src="../../static/common/question-icon.png" class="question-icon"></image>
				</view>
			</view>
			
			<view class="app-qcode">
				<view class="log-out">
					退出登录
				</view>
			</view>
		</view>
		
		<!-- 清除缓存 -->
		<view class="clear-localstorge" v-if="isclear">
			<view class="tip-block">
				<view class="title">温馨提示</view>
				<view class="msg">清除缓存成功</view>
				<view class="commit-btn" @tap="clearSuccess">确认</view>
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
				isclear:false,
				
			}
		},
		onLoad() {
		},
		methods: {
			clearStroge(){
				//清除缓存
				this.isclear = true;
			},
			clearSuccess(){
				//清除缓存成功
				this.isclear = false;
			}
		}
		
	}
</script>

<style>
	@import url("user-info.css");
</style>
