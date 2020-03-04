<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="帮助与咨询"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content nopadding">
			<!-- 六大板块 -->
			<view class="help-block">
				<view class="block-item" @tap="goQuestionDetail">
					<image src="../../static/common/img01.png" class="item-img01"></image>
					<view class="item-text">软件使用问题</view>
				</view>
				<view class="block-item">
					<image src="../../static/common/img02.png" class="item-img02"></image>
					<view class="item-text">关于钱包问题</view>
				</view>
				<view class="block-item">
					<image src="../../static/common/img03.png" class="item-img03"></image>
					<view class="item-text">好友相关问题</view>
				</view>
				<view class="block-item">
					<image src="../../static/common/img04.png" class="item-img04"></image>
					<view class="item-text">订单明细问题</view>
				</view>
				<view class="block-item">
					<image src="../../static/common/img05.png" class="item-img05"></image>
					<view class="item-text">信用相关问题</view>
				</view>
				<view class="block-item">
					<image src="../../static/common/img01.png" class="item-img05"></image>
					<view class="item-text">分享商品问题</view>
				</view>
			</view>
			<!-- 背景图 -->
			<image src="../../static/common/newDriver-bg.png" class="newDriver-bg"></image>
			<!-- 常见问题 -->
			<view class="question">常见问题</view>
			<view class="question-block">
				<view class="question-detail">
					<view class="question-text">熊猫优选自购省钱视频教程</view>
					<image class="qusetion-icon" src="../../static/common/question-icon.png"></image>
				</view>
				<view class="question-detail">
					<view class="question-text">熊猫优选自购省钱视频教程</view>
					<image class="qusetion-icon" src="../../static/common/question-icon.png"></image>
				</view>
				<view class="question-detail">
					<view class="question-text">熊猫优选自购省钱视频教程</view>
					<image class="qusetion-icon" src="../../static/common/question-icon.png"></image>
				</view>
			</view>
		</view>	
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	export default{
		name:"signIn",
		data(){
			return{
			
			}
		},
		components:{
			commonTitle
		},
		methods:{
			//问题详情
			goQuestionDetail(){
				this.navigateTo(1,'软件使用问题')
			},
			navigateTo(id,title){
				uni.navigateTo({
					url:'./questionDetail?id='+ id +'&title='+ title,
					animationType:'slide-in-right'
				})
			}
		}
	}
</script>

<style>
	@import url("newDriver.css");
</style>
