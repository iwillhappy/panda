<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitleNear title="熊猫优选"></commonTitleNear>
		</view>
		<!-- #endif -->
		<scroll-view  scroll-y="true" class="scroll-Y scroll-box">
			
			<view  class="scroll-view-item item-share">
				<!-- 分享源 -->
				<view class="share-user">
					<image src="../../static/common/share-user-img.png" class="share-user-img"></image>
					<view class="share-user-info">
						<view class="user-type">选品人：超级管理员</view>
						<view class="share-time">2020/02/04    18:12:20</view>
					</view>
					<navigator hover-class="none" url="./oneKeyShare">
						<image src="../../static/common/share-btn.png" class="share-btn"></image>
					</navigator>
					
				</view>
				<!-- 分享box -->
				<shareBox></shareBox>
				<!-- 专题页 -->
				<view class="special-page">
					<navigator url="../specialArea/specialArea?title='专题页详情'" hover-class="none">
						<image src="../../static/common/special-page-btn.png" class="special-page-btn"></image>
					</navigator>
					
				</view>
			</view>
			
			<view  class="scroll-view-item item-share">
				<!-- 分享源 -->
				<view class="share-user">
					<image src="../../static/common/share-user-img.png" class="share-user-img"></image>
					<view class="share-user-info">
						<view class="user-type">选品人：超级管理员</view>
						<view class="share-time">2020/02/04    18:12:20</view>
					</view>
					<image src="../../static/common/share-btn.png" class="share-btn"></image>
				</view>
				<!-- 分享box -->
				<shareBox></shareBox>
				<!-- 专题页 -->
				<view class="special-page">
					<navigator url="../specialArea/specialArea?title='专题页详情'" hover-class="none">
						<image src="../../static/common/special-page-btn.png" class="special-page-btn"></image>
					</navigator>
					
				</view>
			</view>
			
		</scroll-view>
	</view>
	
</template>

<script>
	import commonTitleNear from'../../components/titile-near/title.vue'
	import shareBox  from'../../components/share/share-box.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			commonTitleNear,
			shareBox
		}
	}
</script>

<style>
	@import url("optimization.css");
</style>
