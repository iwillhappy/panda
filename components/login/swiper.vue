<template>
	<view class="box">
			<view class="big-title">{{bigTitle}}</view>
			<view class="small-title">{{smallTitle}}</view>
			<image :src="mainPic" class="mainPic"></image>
			<image src="../../static/login/panda.png" class="panda"></image>
	</view>
</template>

<script>
	export default{
		name:"swiperItem",
		data(){
			return{
				newbigTitle:"",
				newsmallTitle:"",
				newmainPic:""
			}
		},
		props:{
			bigTitle:{
				type:String
			},
			smallTitle:{
				type:String
			},
			mainPic:{
				type:String
			}
		},
		// watch:{
		// 	bigTitle:function(){
		// 		alert(this.bigTitle)
		// 		this.newbigTitle = this.bigTitle
		// 	},
		// 	smallTitle(){
		// 		this.newsmallTitle = this.smallTitle
		// 	},
		// 	mainPic(){
		// 		this.newmainPic = this.mainPic
		// 	}
		// }
	}
</script>

<style>
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.big-title{
		height:100upx;
		font-size:36px;
		font-family:Alibaba PuHuiTi;
		font-weight:bold;
		line-height:55px;
		color:rgba(17,26,42,1);
		opacity:1;
		margin: 180upx 0 20upx 0;
	}
	.small-title{
		font-size:14px;
		font-family:Alibaba PuHuiTi;
		font-weight:400;
		line-height:22px;
		color:rgba(107,119,141,1);
		opacity:1;
	}
	.mainPic{
		width:600upx ;
		height: 400upx;
		margin-top: 184upx;
	}
	.panda{
		width: 300upx;
		height: 120upx;
		margin-top: 84upx;
	}
</style>
