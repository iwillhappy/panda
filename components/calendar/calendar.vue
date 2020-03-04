<template>
	<!-- 打卡日历页面 -->
	<view class='all'>
		<view class="bar">
			<!-- 显示年月 -->
			<view class="show-mounth">
				<view class="mounth">{{cur_month}}月</view>
				<view class="mounth-en">{{cur_month_en}}</view>
			</view>
			<image src="../../static/common/line.png" class="line"></image>
			<!-- <view class="date">{{cur_year || "--"}} 年 {{cur_month || "--"}} 月</view> -->
		</view>
		<!-- 显示星期 -->
		<view class="week" v-if="langType=='ch'">
			<view v-for="(item,index) in weeks_ch" :key="index">{{item}}</view>
		</view>
		<view class="week" v-else>
			<view v-for="(item,index) in weeks_en" :key="index">{{item}}</view>
		</view>
		<view  class="myDateTable">
			<view v-for="(item,j) in days" :key="j" class='dateCell'>
				<view v-if="item.date==undefined||item.date == null" class='cell'>
					<text :decode="true">&nbsp;&nbsp;</text>
				</view>
				<view v-else>
					<!-- 已签到日期 -->
					<view v-if="item.isSign == true" class='cell greenColor bgWhite  '>
						<text>{{item.date}}</text>
					</view>
					<!-- 当前日期之后 -->
					<view class="whiteColor cell" v-else>
						<text>{{item.date}}</text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				days: [],
				SignUp: [],
				cur_year: 0, //当前选的年
				cur_month: 0, //当前选的月,
				cur_month_en:"",
				today: parseInt(new Date().getDate()), //本日
				toMonth: parseInt(new Date().getMonth() + 1), //本月
				toYear: parseInt(new Date().getFullYear()), //本年
				weeks_ch: ['日', '壹', '贰', '叁', '肆', '伍', '陆']
			};
		},
		props: {
			sendYear: {
				type: Number,
				default: new Date().getFullYear()
			},
			sendMonth: {
				type: Number,
				default: new Date().getMonth() + 1
			},
			dataSource: { //已签到的数据源
				type: Array,
				default: () => {
					return []
				}
			},
			langType: { //只是示例一个翻译而已，要想所有都翻译自己可以再加加
				type: String,
				default: "ch"
			},
		},
		created() {
			this.cur_year = this.sendYear;
			this.cur_month = this.sendMonth;
			this.SignUp = this.dataSource;

			this.calculateEmptyGrids(this.cur_year, this.cur_month);
			this.calculateDays(this.cur_year, this.cur_month);
			this.onJudgeSign();
			this.calculateMounth(this.sendMonth)
			
		},
		watch: {
			dataSource: 'onResChange',
		},
		methods: {
			calculateMounth(mounth){
				//将月份转换成英文
			  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
				this.cur_month_en = months[mounth-1];
			},
			// 获取当月共多少天
			getThisMonthDays(year, month) {
				return new Date(year, month, 0).getDate()
			},
			// 获取当月第一天星期几
			getFirstDayOfWeek(year, month) {
				return new Date(Date.UTC(year, month - 1, 1)).getDay();
			},
			// 计算当月1号前空了几个格子，把它填充在days数组的前面
			calculateEmptyGrids(year, month) {
				//计算每个月时要清零
				this.days = [];
				const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
				if (firstDayOfWeek > 0) {
					for (let i = 0; i < firstDayOfWeek; i++) {
						var obj = {
							date: null,
							isSign: false
						}
						this.days.push(obj);
					}
				}
			},

			// 绘制当月天数占的格子，并把它放到days数组中
			calculateDays(year, month) {

				const thisMonthDays = this.getThisMonthDays(year, month);
				// this.columnsLen=Math.ceil(thisMonthDays/7);
				// console.log(this.columnsLen);
				for (let i = 1; i <= thisMonthDays; i++) {
					var obj = {
						date: i,
						isSign: false
					}
					this.days.push(obj);
				}
				//console.log(this.days);

			},

			onResChange(newD, oldD) {
				this.SignUp = newD;
				this.onJudgeSign();
			},
			//匹配判断当月与当月哪些日子签到打卡
			onJudgeSign() {
				var signs = this.SignUp;
				var daysArr = this.days;
				for (var i = 0; i < signs.length; i++) {
					var current = new Date(signs[i].replace(/-/g, "/"));
					var year = current.getFullYear();
					var month = current.getMonth() + 1;
					var day = current.getDate();
					day = parseInt(day);
					for (var j = 0; j < daysArr.length; j++) {
						//年月日相同则打卡成功   						
						if (year == this.cur_year && month == this.cur_month && daysArr[j].date == day) { //&& signs[i].isSign == "今日已打卡"
							// console.log(daysArr[j].date, day);
							daysArr[j].isSign = true;
						}
					}
				}
				this.days = daysArr;
			}
		}
	}
</script>

<style>
	

	.all {
		width:calc(670upx - 108upx) ;
		height:calc(672upx - 108upx) ;
		background:rgba(17,23,57,1);
		box-shadow:0px 9upx 27upx rgba(0,0,0,0.3);
		opacity:1;
		border-radius:27upx;
		padding: 54upx;
	}

	.all .bar {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
  .show-mounth{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		margin-right: 11upx;
	}
	.mounth{
		font-size:12px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		line-height:38upx;
		color:rgba(107,119,141,1);
		opacity:1;
	}
	.mounth-en{
		font-size:15px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		line-height:38upx;
		color:rgba(255,255,255,1);
		opacity:1;
	}
	.line{
		width:7upx;
		height: 90upx;
	}

	.all .week {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width:562upx;
		height:69upx;
		background:rgba(39,45,76,1);
		opacity:1;
		border-radius:9upx;
		font-size: 14px;
		font-family:Alibaba PuHuiTi;
		font-weight:500;
		color:rgba(133,137,151,1);
		opacity:1;
		margin: 24upx 0 9upx 0;
	}
	.myDateTable {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.myDateTable .dateCell {
			width:72upx;
			height:72upx;
			background:rgba(244,99,122,0.2);
			text-align: center;
			line-height: 72upx;
			font-size: 14px;
			color:rgba(133,137,151,1);
			margin-bottom: 9upx;
			border-radius: 9upx;
		}

	.dateCell .cell {
			border-radius: 9upx;
		}
	
	
	.whiteColor {
		color:rgba(133,137,151,1);
	}
	
	.greenColor {
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.bgWhite {
		background:rgba(244,99,122,1);
	}
	
	
</style>
