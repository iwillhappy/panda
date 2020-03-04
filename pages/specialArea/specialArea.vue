<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitleNear title="9.9专区"></commonTitleNear>
		</view>
		<!-- #endif -->
		<view class="top-nav-bar">
			<topNav @sortList="sortList"></topNav>
		</view>
		<scroll-view scroll-y="true" class="scroll-Y scroll-box" @scrolltolower="loadMore" :scroll-top="scrollTop">
			<view class="goodsList">
				<good v-for="(item,index) in dataList" :key="index" :goodsInfo="item"></good>
			</view>
			<view class="not-moreData" v-if="noMoreData">--------------这是底线了---------------</view>
		</scroll-view>
	</view>
</template>

<script>
	import commonTitleNear from'../../components/titile-near/title.vue'
	import topNav from '../../components/top-nav/top-nav.vue'
	import good from '../../components/goods/good.vue'
	export default{
		data(){
			return{
				scrollTop:-1,
				dataList:[], //商品列表
				min_id:1,  //当前页数
				noMoreData:false,
				sort:0, //排序（0-综合，4-销量由高到低，3-券面额由高到低，5-佣金比例由高到低）
			}
		},
		components:{
			commonTitleNear,
			topNav,
			good
		},
		onLoad(){
			uni.showLoading()
			this.getDataList();
		},
		methods:{
			sortList(n){
				//排序
				//console.log(n)
				this.sort = n;
				this.noMoreData = false;
				this.min_id = 1;
				this.getDataList("empty");
			},
			loadMore(event){
				//分页
				console.log(event)
				if(!this.noMoreData){
					//取消加载更多
					this.scrollTop = -1;
					this.getDataList();
				}
				
			},
			getDataList(empty){
				const _this = this;
				uni.request({
					url:this.$API.URL + this.$API.spk_jiukuaijiu,
					data:{min_id:this.min_id,sort:this.sort},
					success(res) {
						//console.log(res)
						uni.hideLoading()
						if(empty){
							_this.dataList = [];//置空
							_this.scrollTop = 0;
						}
						if(res.data.msg.code == 200 && res.data.msg.data.data){
							res.data.msg.data.data.map(item =>{
								_this.dataList.push(item);
								
							})
							_this.min_id ++;
							_this.noMoreData = false;
						}else{
							_this.noMoreData = true;
						}
					}
				})
			},
		}
	}
</script>

<style>
	@import url("specialArea.css");
</style>
