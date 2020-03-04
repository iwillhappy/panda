<template>
	<view class="search-detail">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="search-detail-top">			
			<image src="../../static/common/goback.png" class="goback" @tap="goback"></image>
			<view class="search-box" @tap="goSearch">
				<image src="../../static/common/search.png" class="search-icon"></image>
				<input type="text" placeholder="复制宝贝标题快速搜索" 
				disabled="disabled"
				 confirm-type="search"
				 class="uni-input search-input" placeholder-class="input-placeholder"  />
				 <image src="../../static/common/close.png" class="close-btn" v-if="isShow"></image>
			</view>
		</view>
		<!-- #endif -->
		<!-- 搜索列表 -->
		<view class="classification-box">
			<!-- 左侧导航 -->
			<scroll-view  scroll-y="true" class="left-bar">
				<view class="goods-item" 
				 @tap="selectGoods(index)"
				 :class="{'slected-nav':currentIndex == index}"
				 v-for="(leftBar,index) in goodsList" :key="index">
				 {{leftBar.name}}
				 </view>
			</scroll-view>
			<!-- 右侧内容区 -->
			<scroll-view scroll-y="true" class="rigth-content">
				<view class="content-view">
						<view class="goods-box" v-for="(goods,index) in currentData" :key="index" @click="getList(goods.name)">
							<image :src="goods.icon" class="goods-mainImg"></image>
							<view class="goods-name">{{goods.name}}</view>
						</view>
						
					
				</view>
			
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isShow:false,
				currentIndex:0, //当前左侧被选择的id
				goodsList:[], //全部分类，包括一二级类目
				currentData:[], //二级类目
					
			}
		},
		onLoad(){
			this.getClass();
		},
		methods:{
			getList(key){
				//根据二级类目查询商品
				const _this = this;
				uni.hideKeyboard()
				 uni.setStorage({
				     key: 'search_key',
				     data: key,
				     success: function () {
				         _this.$CommonJS.navigateTo('../search/searchDetail');
				     }
				 });
			},
			getClass(){
				//获取类目
				uni.request({
				    url: this.$API.URL + this.$API.spk_cate, 
				    success: (res) => {
							const d = res.data.msg.data;
								//console.log(d)
								this.goodsList = d;
								this.currentData = d[0].child; //c初始化右侧列表
				    }
				});
			},
			goSearch(){
				//搜索
				this.$CommonJS.navigateTo('../search/search')
			},
			selectGoods(index){
				//左侧导航切换
				this.currentIndex = index;
				//显示右侧内容
				this.currentData = this.goodsList[index].child;
			},
			
			goback:function(){
				//返回按钮
				this.$CommonJS.navigateBack();
			}
		}
	}
</script>

<style scoped>
	@import url("goodsClassification.css");
</style>
