<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitleNear title="一键分享"></commonTitleNear>
		</view>
		<!-- #endif -->
		<scroll-view  scroll-y="true" class="scroll-Y scroll-box">
			
			<view  class="scroll-view-item item-share">
				<!-- 分享 -->
				<view class="share-block">
					<view class="share-block-text">
						熊猫优选的商品图片经过特别优化，分享到微信朋友圈可获
						 得最佳效果
					</view>
					<view class="share-button" @tap="openShare">分享</view>
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
			<!-- 分享 -->
			<uni-popup ref="showshare" :type="type" @change="change">
				<view class="uni-share">
					<text class="uni-share-title">分享到</text>
					<view class="uni-share-content">
						<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
							<view class="uni-share-content-image">
								<image :src="item.icon" class="content-image" mode="widthFix" />
							</view>
							<text class="uni-share-content-text">{{ item.text }}</text>
						</view>
					</view>
					<text class="uni-share-btn" @click="cancel('share')">取消分享</text>
				</view>
			</uni-popup>
			
		</scroll-view>
	</view>
	
</template>

<script>
	import commonTitleNear from'../../components/titile-near/title.vue'
	import shareBox  from'../../components/share/share-box.vue'
	import uniPopup  from'../../components/uni-popup/uni-popup.vue'
	export default{
		data(){
			return{
				type: 'bottom',
				bottomData:[]
			}
		},
		components:{
			commonTitleNear,
			shareBox,
			uniPopup
		},
		onLoad(){
			this.bottomData = this.$Data.bottomData;
		},
		methods:{
			openShare(){
				 this.$refs.showshare.open()
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			}
		}
	}
</script>

<style>
	@import url("optimization.css");
</style>
