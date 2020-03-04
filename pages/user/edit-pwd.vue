<template>
	<view class="content">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="message-title">
			<commonTitle title="修改密码"></commonTitle>
		</view>
		<!-- #endif -->
		<view class="list-scroll-content no-padding">
			<form style="width: 100%;height: auto;">
				<view class="edit-block">
					<view class="edit-item"><input class="input-item" name="oldPwd" password="true" placeholder="原始密码"/></view>
					<view class="edit-item"><input class="input-item" name="newPwd" password="true" placeholder="新密码"/></view>
					<view class="edit-item"><input class="input-item" name="surePwd" password="true" placeholder="确认密码"/></view>
				</view>
			</form>
			<view class="edit-pwd-btn">修改密码</view>
		</view>
		
	</view>
</template>

<script>
	import commonTitle from'../../components/titile/title.vue'
	export default{
		components:{
			commonTitle
		},
		data () {
			return {
				loadingType: 'more',
				extext:"历史反馈"
			}
		},
		onLoad() {
		},
		methods: {
			
		}
		
	}
</script>

<style>
	@import url("user-info.css");
</style>
