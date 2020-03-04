<template>
	<view class="content">
		<view class="search-top">
			<!-- #ifdef H5 || APP-PLUS -->
			<view class="search-title">搜索</view>
			<!-- #endif -->
			<view class="search-box">
				<image src="../../static/common/search.png" class="search-icon"></image>
				<input type="text" placeholder="复制宝贝标题快速搜索" 
				 confirm-type="search"
				 @input="searchInput"
				 :value="searchKey"
				 :focus="focus"
				 @confirm="search"
				 class="uni-input search-input" placeholder-class="input-placeholder" />
				 <image src="../../static/common/close.png" class="close-btn" v-if="isShow" @tap="clearInput"></image>
			</view>
		</view>
		
		<!-- <view class="search-history">
			<view class="history-goods">最近浏览的商品</view>
			<view class="clear-btn">清除</view>
		</view>
		<view class="scroll-history">
			<scroll-view class="scroll-view_H" scroll-x="true" show-scrollbar="false">
					<view class="history-item">
						<view class="item-box">
							<image src="../../static/common/good-icon.png" class="good-icon"></image>
							<view class="goods-info">
								<view class="good-name">Red Cotton Scarf</view>
								<view class="good-price">
									<view class="price">¥11.00</view>
									<view class="discount">-¥5.00</view>
								</view>
							</view>
						</view>
					</view>
			</scroll-view>
		</view> -->
		<view class="search-history">
			<view class="history-goods">精选智能推荐</view>
			<view class="clear-btn" @tap="getSearchKyeList">换一批</view>
		</view>
		<view class="search-keyword">
			<view class="keyword-item" 
			v-for="(item,index) in searchKeyList" 
			:key="index"
			@tap="saveKey(item.key)"
			>{{item.key}}</view>
		</view>
		<!-- 搜索列表 -->
		<searchList v-if="isSearchList"></searchList>
	</view>
</template>

<script>
	import searchList from'../../components/search/searchlist.vue'
	export default{
		data(){
			return{
				isShow:false,
				searchKey:"",
				focus:false,
				searchList:[],
				isSearchList:false,
				searchKeyList:[],//搜索关键词
				pageIndex:1, //当前页数
			}
		},
		components:{
			searchList
		},
		computed:{
			count(){
				return this.$store.state.userName
			}
		},
		onLoad(){
			this.getSearchKyeList();
		},
		methods:{
			//搜索关键词
			getSearchKyeList(){
				const self = this;
				uni.request({
					url:this.$API.URL + this.$API.getKeywords,
					data:{pageIndex:this.pageIndex},
					success(res) {
						console.log(res)
						self.searchKeyList = res.data.data;
						self.pageIndex ++; 
					}
				})
			},
			//根据关键词搜索
			saveKey(key){
				const _this = this;
				uni.hideKeyboard()
				 uni.setStorage({
				     key: 'search_key',
				     data: key,
				     success: function () {
				         _this.$CommonJS.navigateTo('./searchDetail');
				     }
				 });
			},
			searchInput:function(event){
				//console.log(event.detail)
				//清除按钮
				if(event.detail.value!=''){
					this.isShow = true;
					this.searchKey = event.detail.value;
					//this.isSearchList = true;
				}else{
					this.isShow = false;
					this.searchKey = '';
					//this.isSearchList = false;
				}
			},
			clearInput:function(){
				//清空输入框
				this.searchKey = '';
				this.isShow = false;
				this.focus = true;
				//this.isSearchList = false;
			},
			search:function(event){
				const _this = this;
				//搜索
				//console.log(event.detail.value);
				const q = event.detail.value;
				uni.hideKeyboard()
				 uni.setStorage({
				     key: 'search_key',
				     data: q,
				     success: function () {
								
				         _this.$CommonJS.navigateTo('./searchDetail');
				     }
				 });
			
				
			}
		}
	}
</script>

<style scoped>
	@import url("search.css");
</style>
