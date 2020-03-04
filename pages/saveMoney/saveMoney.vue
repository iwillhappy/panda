<template>
	<view class="content">
		<view class="save-top-blcok">
			<view class="save-title">一年帮助十万人省下一个亿</view>
			<navigator url="../search/search" hover-class="none">
				<view class="save-search">
					<image src="../../static/common/search.png" class="save-search-icon"></image>
					<view class="save-search-input">请输入关键词/宝贝标题</view>
				</view>
			</navigator>
			
			<view class="save-tags">
				<view class="tag-item">口罩</view>
				<view class="tag-item">连衣裙</view>
				<view class="tag-item">酒精</view>
				<view class="tag-item">纸尿裤</view>
				<view class="tag-item">零食</view>
				<view class="tag-item">电动牙刷</view>
				<view class="tag-item">电动牙刷</view>
			</view>
		</view>
		<view class="save-tabBar">
			<view class="tabar-zhibo" :class="{'tabar-selected':isZhibo}" @tap="changeTabar">直播室</view>
			<view class="tabar-jiaocheng" :class="{'tabar-selected':isJiaocheng}" @tap="changeTabar">省钱教程</view>
		</view>
		<!-- 直播室 -->
		<scroll-view class="zhibo-block" v-if="isZhibo">
			<view class="zhibo-tag">
				<image class="tag-user" src="../../static/common/baseinfo-user.png"></image>
				<view class="tag-text">
					<text class="text-name">Nico</text>得了
					<text class="text-coin">0.66</text>鼓励金
				</view>
			</view>
		</scroll-view>
		<!-- 教程 -->
		<view class="jiaocheng-block" v-if="isJiaocheng">
			<view class="jisocheng-intrduce">
				<view class="intrduce-title"><image src="../../static/common/jiaocheng-title.png" class="jiaocheng-title"></image></view>
				<view class="intrduce-text">
					<view class="intrduce-text-detail">1.在手机淘宝APP内复制要购买的商品标题</view>
					<view class="intrduce-text-detail">2.在熊猫优选搜索商品并购买</view>
					<view class="intrduce-text-detail">3.确认收货后领取鼓励金</view>
				</view>
			</view>
			<view class="jiaocheng-step">
				<image src="../../static/common/step1.jpg" class="step1"></image>
				<image src="../../static/common/step2.jpg" class="step2"></image>
				<image src="../../static/common/step3.jpg" class="step3"></image>
				<image src="../../static/common/step4.jpg" class="step4"></image>
				<image src="../../static/common/step5.jpg" class="step5"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isZhibo:true,//直播
				isJiaocheng:false,//教程
				tabarIndex:1,
			}
		},
		methods:{
			//切换tabar
			changeTabar(){
				if(this.tabarIndex == 1){
					this.isZhibo = true;
					this.isJiaocheng = false;
					this.tabarIndex = 2;
				}else{
					this.isZhibo = false;
					this.isJiaocheng = true;
					this.tabarIndex = 1;
				}
					
			}
		}
	}
</script>

<style scoped>
	@import url("saveMoney.css");
</style>
