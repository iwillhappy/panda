<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="提现"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content">
			<!-- 提现类型 -->
			<view class="cash-w-type">
				<view class="cash-type-title">提现类型</view>
				<view class="type-block">
					<image src="../../static/common/img02.png" class="type-cion"></image>
					<view class="type-info">
						<view class="text-one">
							<text class="color-yellow">提现</text>自购省分享赚的鼓励金
						</view>
						<view class="text-two">
							余额：¥8.55
						</view>
					</view>
					<image src="../../static/common/cash-icon2.png" class="cash-icon2"></image>
				</view>
			</view>
			<!-- 收款支付宝 -->
			<view class="cash-w-type">
				<view class="cash-type-title">收款支付宝</view>
				<view class="zfb">
					<view>jackvanhelsing@outlook.com</view>
					<view class="edit-zfb" @tap="openEdit">修改绑定</view>
				</view>
			</view>
			
			<!-- 提现金额 -->
			<view class="cash-w-type" style="margin-top: 30upx;">
				<view class="cash-type-title">提现金额</view>
				<view class="cush-num">
					<view class="cush-num-block"><input type="digit" placeholder="请输入提现金额" class="cash-input"/></view>
					<view class="cush-limit">
						<view class="limit-num">可提现余额8.55元</view>
						<view class="cash-all">全部提现</view>
					</view>
				</view>
			</view>
			<!-- 提现按钮 -->
			<view class="cash-btn">申请提现  预计实时到账</view>
			<!-- 注意事项 -->
			<view class="cash-tips">
				<view class="tips-title">注意事项</view>
				<view class="tips-text">
					鼓励金提现不成功的原因通常和您绑定的支付宝账号有关，请检查一
					下您支付宝账号是否有下列问题：
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						收款人姓名需要和填写的支付宝账号吻合，必须是真实姓名，不能
						使用支付宝昵称；
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
					若您是通过邮箱注册的支付宝账号并绑定了手机号，那么填写的支
					付宝账号应该为邮箱而非手机号；
					</view>
				</view>
				<view class="tips-text-child">
					<view class="right-text">
						<image src="../../static/common/unread-msg.png" class="circle"></image>
						设置了不让陌生人查找账号功能，无法转账。</view>
				</view>
				<view class="tips-text" style="margin-bottom: 7upx;">解决方法：</view>
				<view class="tips-text">
					进入您绑定的支付宝，点【我的】，再点右上角的【设置】按钮，点
					击【隐私】，把【通过邮箱找到我】和【通过手机号找到我】这2个选
					项打开即可。待熊猫优选提现到账后，您可以再次关闭这2项功能。
				</view>
				<view class="tips-text">
					解决方法：以上三种情况会导致提现失败，您可以在熊猫优选重新绑定支付宝账
					号，进入熊猫优选【我的】，点击【提现】，点击【修改绑定】，修
					改成功后保存，工作人员会再次给您手动打款。
				</view>
			</view>
		</view>
		
		<!-- 修改支付宝 -->
		<uni-popup ref="showshare" :type="type" @change="change">
			<view class="edit-block">
				<view class="edit-item">修改支付宝绑定</view>
				<view class="edit-item-chlid">
					<view class="child-title">姓名</view>
					<input class="endit-input" type="text" placeholder="XXX"/>
				</view>
				<view class="edit-item-chlid">
					<view class="child-title">手机号</view>
					<input class="endit-input" type="text" placeholder="15921752219"/>
				</view>
				<view class="edit-item-chlid">
					<view class="child-title">支付宝账号</view>
					<input class="endit-input" type="text" placeholder="123132323@qq.com"/>
				</view>
			</view>
			<text class="uni-share-btn" @click="cancel('share')">关闭</text>
			<view style="width: 100%;height: 38upx;"></view>
		</uni-popup>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	import uniPopup  from'../../components/uni-popup/uni-popup.vue'
	export default{
		components:{
			commonTitle,
			uniPopup
		},
		data () {
			return {
				type: 'bottom',
			}
		},
		onLoad() {
		},
		methods: {
			openEdit(){
				 this.$refs.showshare.open()
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			}
		}
		
	}
</script>

<style>
	@import url("cash-withdrawal.css");
</style>
