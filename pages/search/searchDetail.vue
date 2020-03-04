<template>
	<view class="search-detail">
		<view class="search-detail-top">
			<!-- #ifdef H5 || APP-PLUS -->
			<image src="../../static/common/goback.png" class="goback" @tap="goback"></image>
			<!-- #endif -->
			<view class="search-box" @tap="goSearch">
				<image src="../../static/common/search.png" class="search-icon"></image>
				<input type="text" placeholder="复制宝贝标题快速搜索" 
				 disabled="disabled"
				 confirm-type="search"
				 class="uni-input search-input" placeholder-class="input-placeholder" />
				 <image src="../../static/common/close.png" class="close-btn" v-if="isShow" ></image>
			</view>
		</view>
		<!-- 筛选 -->
		<view class="select-type">
			<view class="select-item">
				<view class="select-new selectd-item">最新</view>
			</view>
			<view class="select-item">
				<view class="select-new">价格</view>
			</view>
			<view class="select-item">
				<view class="select-new">销量</view>
			</view>
			<view class="select-item">
				<view class="select-new">优惠券</view>
			</view>
			<view class="select-item filters">
				<view class="select-new" @tap="filterType">筛选</view>
			</view>
		</view>
		<!-- 搜索列表 -->
		<scroll-view  scroll-y="true" 
		class="scroll-Y scroll-box" 
		lower-threshold="100" @scrolltolower="loadMore">
			<view class="goodsList">
				<view class="nodata" v-if="nodata">
					<image src="../../static/common/nodata.png" class="nodata-img"></image>
				</view>
				<view v-for="(goods,index) in dataList" :key="index">
					<good :goodsInfo="goods"></good>
				</view>
			
			</view>
			
		</scroll-view>
		<!-- 筛选抽屉 -->
		<uni-drawer :visible="visible" mode="right">
		    <view class="drawer-block">
		        <view class="goods-title padding-top">商品类别</view>
						<view class="classification-block">
							<view class="classification-item">女装</view>
							<view class="classification-item">女装</view>
							<view class="classification-item">女装</view>
							<view class="classification-item">女装</view>
							<view class="classification-item">女装</view>
						</view>
						<view class="goods-title goods-source">商品来源</view>
						<view class="classification-block">
							<view class="classification-item">天猫</view>
						</view>
						<view class="goods-title goods-source">价格区间(元)</view>
						<view class="price-section">
							<input class="uni-input price-input lower-price" type="digit" placeholder="最低价" />-
							<input class="uni-input price-input uper-price" type="digit" placeholder="最高价" />
						</view>
						<view class="recommend-price">
							<view class="recommend-block">
								<view class="recommend-price-block">0-69</view>
								<view class="recommend-chose">33%的选择</view>
							</view>
							<view class="recommend-block">
								<view class="recommend-price-block">69-173</view>
								<view class="recommend-chose">60%的选择</view>
							</view>
							<view class="recommend-block">
								<view class="recommend-price-block">173-399</view>
								<view class="recommend-chose">9%的选择</view>
							</view>
						</view>
						<view class="edit-btn">
							<view class="reset-btn" @tap="closeMask">重置</view>
							<view class="confirm-btn">确定</view>
						</view>
		    </view>
		</uni-drawer>
	</view>
</template>

<script>
	import good from'../../components/goods/good.vue'
	import uniDrawer from '../../components/uni-drawer/uni-drawer.vue'
	export default{
		data(){
			return{
				isShow:false,
				visible:false,
				dataList:[], //搜索结果列表
				q:"",        //搜索关键词
				nodata:false,//暂无数据标识
				page_no:1,  //当前也是
				page_size:10, //每页数据个数
			}
		},
		components:{
			good,
			uniDrawer
		},
		onLoad() {
			this.getSearchList();
			//事件监听搜索结果
			// uni.$on('getlist',(data) => {
			// 	console.log(data.getlist)
				
			// })
			//this.dataList = this.$store.state.searchList;
			//console.log(this.$store.state.searchList)
		},
		computed:{
			// dataList(){
			//  return	this.$store.getters.searchList;
			// }
		},
		methods:{
			//搜索列表
			getSearchList(){
				const self = this;
				uni.getStorage({
				    key: 'search_key',
				    success: function (res) {
				        //console.log(res.data);
								self.q = res.data;
				    }
				});
				const data = {q:this.q,page_no:1,page_size:100};
				this.requestData(data)
			},
			requestData(data){
				const self = this;
				uni.request({
					url:self.$API.URL + self.$API.tbk_super_search,
					data:data,
					success(res){
						//console.log(res)
						if( res.data.msg.code != 200){
							self.nodata = true;
						}else{
							self.nodata = false;
							self.page_no = self.page_no + 1;
							res.data.msg.data.map(item => {
								self.dataList.push(item);
							})
							
						}
						
					}
				})
			},
			//分页加载
			loadMore(event){
				//console.log(event.detail)
				const data = {q:this.q,page_no:this.page_no,page_size:this.page_size};
				this.requestData(data)
			},
			//搜索
			goSearch(){
				this.$CommonJS.navigateTo('./search');
			},
			//筛选
			filterType(){
				this.visible = true
			},
			//重置
			closeMask(){
				this.visible = false;
			},
			goback:function(){
				this.$CommonJS.navigateBack();
			}
		}
	}
</script>

<style>
	@import url("searchDetail.css");
</style>
