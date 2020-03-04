<!-- 
组件封装了官方scroll-view可滚动视图和官方的uni-load-more组件
官方的uni-load-more组件地址https://ext.dcloud.net.cn/plugin?id=29
    <ygc-refresh
    	@onRefresh="下拉刷新触发的事件" 
    	@scrolltolower="上拉加载触发的事件，同官方scroll-view的scrolltolower是一样的"
    	:pullupLoadingType="官方uni-load-more组件的status参数（‘more’'loading''nomore'）">
       此处是你自己的列表内容
    </ygc-refresh>
-->
<template>
	<scroll-view style="height: 100%;"
				scroll-y
				@scroll="scroll"
				@scrolltolower="scrolltolower">
		<view class="refresh-moudle"
			@touchstart="touchStart($event)" 
			@touchmove="touchMove($event)" 
			@touchend="touchEnd($event)" 
			:style="{transform: 'translate3d(0,' + top + 'px, 0)'}">
		  <header class="pull-refresh">
			<slot name="pull-refresh">
			  <view class="down-tip" v-if="dropDownState==1">
				<image v-if="dropDownInfo.downImg" class="down-img" :src="dropDownInfo.downImg"></image>
				<text class="down-text">{{dropDownInfo.downText}}</text>
			  </view>
			  <view class="up-tip" v-if="dropDownState==2">
				<image v-if="dropDownInfo.upImg" class="up-img" :src="dropDownInfo.upImg"></image>
				<text class="up-text">{{dropDownInfo.upText}}</text>
			  </view>
			  <view class="refresh-tip" v-if="dropDownState==3">
				<image v-if="dropDownInfo.refreshImg" class="refresh-img" :src="dropDownInfo.refreshImg"></image>
				<text class="refresh-text">{{dropDownInfo.refreshText}}</text>
			  </view>
			</slot>
		  </header>
		  <slot></slot>
		  <uni-load-more :status="pullupLoadingType"></uni-load-more>
		</view>
	</scroll-view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		name: "ygcRefresh",
		components: {
			uniLoadMore
		},
		//属性
		props: {
			pullupLoadingType: {
				type: String,
				default: 'more'
			}
		},
		data () {
			return {
			  defaultOffset: 50, // 下拉偏移高度, 如果要改建议相应的修改.releshMoudle的margin-top和.down-tip, .up-tip, .refresh-tip的height
			  top: 0,
			  startY: 0,
			  isDropDown: false, // 是否下拉
			  isRefreshing: false, // 是否正在刷新
			  dropDownState: 1, // 显示1:下拉可以刷新, 2:松开立即刷新, 3:正在刷新数据中...
			  dropDownInfo: {
				downText: '下拉可以刷新',
				downImg: '/static/ygc-refresh/xiangxia.png',
				upText: '松开立即刷新',
				upImg: '/static/ygc-refresh/xiangxia.png',
				refreshText: '正在刷新数据...',
				refreshImg: '/static/ygc-refresh/loading.png'
			  },
			  scrollTop: 0,
			}
		},
		//组件生命周期
		created:function(e){
		},
		methods: {
			scrolltolower() {
				this.$emit('scrolltolower');
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop;
			},
			/**
			 * 触摸开始，手指点击屏幕时
			 * @param {object} e Touch 对象包含的属性
			 */
			touchStart (e) {
				this.startY = e.changedTouches[0].pageY;
				this.startScrollTop = this.scrollTop;
			},
			
			/**
			 * 接触点改变，滑动时
			 * @param {object} e Touch 对象包含的属性
			 */
			touchMove (e) {
			  if (e.changedTouches[0].pageY > this.startY) {
				// 下拉
				this.isDropDown = true
				if (this.scrollTop <= 0 && !this.isRefreshing) {
				  // 获取拉取的间隔差  当前移动的y点          初始的y点        初始顶部距离
				  let diff = e.changedTouches[0].pageY - this.startY -  this.startScrollTop;
				  this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0);
				  if (this.top >= this.defaultOffset) {
					this.dropDownState = 2;
					e.preventDefault();
				  } else {
					this.dropDownState = 1;
					// 去掉会导致ios无法刷新
					e.preventDefault();
				  }
				}
			  } else {
				this.isDropDown = false;
				this.dropDownState = 1;
			  }
			},
			
			/**
			 * 触摸结束，手指离开屏幕时
			 * @param {object} e Touch 对象包含的属性
			 */
			touchEnd (e) {
			  if (this.isDropDown && !this.isRefreshing) {
				if (this.top >= this.defaultOffset) {
				  // do refresh
				  this.isRefreshing = true;
				  this.refresh();
				} else {
				  // cancel refresh
				  this.isRefreshing = false;
				  this.isDropDown = false;
				  this.dropDownState = 1;
				  this.top = 0;
				}
			  }
			},
			
			/**
			 * 刷新
			 */
			refresh () {
			  this.dropDownState = 3;
			  this.top = this.defaultOffset;
			  // 延时1200毫秒结束正在刷新动画，给用户一个刷新的感觉，或者可以直接去掉本组件正在刷新的动画状态，配合官方uni-load-more组件的正在刷新动画
			  this.$emit('onRefresh');
			  setTimeout(() => {
				this.refreshDone();
			  }, 1200)
			  
			  /****好吧，粗暴点，就是把上面的代码注释掉，用下面的代码*****/
			  // this.$emit('onRefresh');
			  // this.refreshDone();
			  
			},
			
			/**
			 * 刷新完成
			 */
			refreshDone () {
			  this.isRefreshing = false;
			  this.isDropDown = false;
			  this.dropDownState = 1;
			  this.top = 0;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	$height: 50px;
	.refresh-moudle {
		width: 100%;
		margin-top: -$height;
		-webkit-overflow-scrolling: touch; /* ios5+ */
		.pull-refresh {
			width: 100%;
			color: #999;
			transition-duration: 200ms;
			font-size: 28upx;
			.down-tip,
			.up-tip,
			.refresh-tip {
				display: flex;
				align-items: center;
				justify-content: center;
				height: $height;
			}
			.down-img,
			.up-img,
			.refresh-img{
				width: 50upx;
				height: 50upx;
				margin-right: 30upx;
			}
			.down-img {
			  transform: rotate(0deg);
			  animation: anticlockwise 0.8s ease;
			}
			@keyframes anticlockwise {
			  0% {
				transform: rotate(-180deg);
			  }
			  100% {
				transform: rotate(0deg);
			  }
			}
			.up-img {
			  transform: rotate(180deg);
			  animation: clockwise 0.8s ease;
			}
			@keyframes clockwise {
			  0% {
				transform: rotate(0deg);
			  }
			  100% {
				transform: rotate(-180deg);
			  }
			}
			.refresh-img {
			  animation: rotating 1.5s linear infinite;
			}
			@keyframes rotating {
			  0% {
				transform: rotate(0deg);
			  }
			  100% {
				transform: rotate(1turn);
			  }
			}
		}
	}
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
</style>
