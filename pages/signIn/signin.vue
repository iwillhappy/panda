<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="签到中心"></commonTitle>
		</view>
		<!-- #endif -->
		
		<view class="list-scroll-content nopadding">
			<!-- 每日签到 -->
			<view class="sign-day">
				<view class="sign-baseInfo">	
					<view class="sign-baseInfo-totalcoin paddingLeft">
						<image src="../../static/common/baseinfo-user.png" class="baseinfo-user-icon"></image>
						<view class="user-conin-title">我的鼓励金</view>
						<view class="user-conin-num">
							<view class="coin-number">58,982</view>
							<view class="money-tag">元</view>
						</view>
					</view>
					
					<view class="sign-baseInfo-totalcoin signborder">
						<image src="../../static/common/baseinfo-sign.png" class="baseinfo-user-icon"></image>
						<view class="user-conin-title">已连续签到</view>
						<view class="user-conin-num">
							<view class="coin-number">7</view>
							<view class="money-tag">天</view>
						</view>
					</view>
				</view>
				<view class="sign-btn">
					签到领鼓励金
				</view>
			</view>
			<!-- 签到地图 -->
			<model-calendar
			:sendYear="toYear" :sendMonth="toMonth"
			:dataSource="signData" :totalNum="sumCount"
			 @dateChange="getData" @clickChange="clickRegister"	 >
			 </model-calendar>
			<!-- 签到奖励金 -->
			<view class="sign-bonus">
				<view class="sign-bonus-title">你已连续签到<text class="special-color">1</text>天,再签到<text class="special-color">6</text>天可领取鼓励金奖励</view>
				<view class="bouns-type">
					<view class="bouns-type-item">
						<image src="../../static/common/7days-bouns-y.png" class="days7-bouns"></image>
						<view class="days">7天</view>
						<view class="bouns-btn">奖励金+0.2</view>
					</view>
					<view class="bouns-type-item days15">
						<image src="../../static/common/15days-bouns-y.png" class="days15-bouns"></image>
						<view class="days">15天</view>
						<view class="bouns-btn">奖励金+0.5</view>
					</view>
					<view class="bouns-type-item">
						<image src="../../static/common/30days-bouns-y.png" class="days30-bouns"></image>
						<view class="days">30天</view>
						<view class="bouns-btn">奖励金+1</view>
					</view>
				</view>
			</view>
			<!-- 签到成功 -->
			<view class="sign-success" v-if="signSuccess">
				<image src="../../static/common/sign-success.png" class="sign-success-img"></image>
				<image src="../../static/common/sign-close.png" class="sign-close"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	import modelCalendar from'../../components/calendar/calendar.vue'
	export default{
		name:"signIn",
		data(){
			return{
				toYear: parseInt(new Date().getFullYear()), //本日
				toMonth: parseInt(new Date().getMonth() + 1), //本月
				sumCount: 3,
				signData: ['2020-2-01','2020-2-03','2020-2-15'],
				signSuccess:false
			}
		},
		components:{
			commonTitle,
			modelCalendar
		}
	}
</script>

<style>
	@import url("signin.css");
</style>
