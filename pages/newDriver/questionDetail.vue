<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle :title="title"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content nopadding">
			<!-- 背景图 -->
			<image src="../../static/common/newDriver-bg.png" class="newDriver-bg"></image>
			<!-- 常见问题 -->
			<view class="question" style="margin-top: 36upx;">常见问题</view>
			<view class="question-block" >
				<uni-collapse accordion="true">
				    <uni-collapse-item title="1.什么是熊猫优选？">
				        <view class="answer">
				            在分析经济风靡的今天，熊猫优选是一款可以利用碎片化
				            时间分享赚钱的手机app。淘宝商家为了在竞争中获得有
				            利位置，会给商品设置隐藏优惠券及高额推广佣金。
				            熊猫优选目前设有两种模式：网购省钱、推广赚钱
				            网购省钱：购买含内部优惠券的超值商品，除了享受省钱
				            购买外，系统还送鼓励金
				        </view>
				    </uni-collapse-item>
				    <uni-collapse-item title="2.如何使用熊猫优选网购省钱？" >
				        <view class="answer">
				            手风琴效果
				        </view>
				    </uni-collapse-item>
				    <uni-collapse-item title="3.如何绑定支付宝账号？" >
				        <view class="answer">
				            手风琴效果
				        </view>
				    </uni-collapse-item>
				</uni-collapse>
			</view>
		</view>	
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		name:"signIn",
		data(){
			return{
				title:'',
				id:0,
			}
		},
		components:{
			commonTitle,
			uniCollapse,
			uniCollapseItem
		},
		onLoad(option){
			this.title = option.title;
			this.id = option.id;
		}
	}
</script>

<style>
	@import url("newDriver.css");
</style>
