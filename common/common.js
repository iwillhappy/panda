module.exports = {
	//页面跳转
	navigateTo: (url) => {
		uni.navigateTo({
			url:url,
			animationType:"slide-in-right",
			
		})
	},
	navigateBack:() => {
		uni.navigateBack({
		    delta: 1,
				animationType:"slide-out-right"
		});
	},
	//uni-requst
	request:(url,method,data) => {
		return new Promise((resolve,reject) => {
			uni.request({
			    url: url,
					method: method || 'GET',
			    data:data
			}).then(res => {
				console.log(res)
			})
		})
		
	},
	getTime:(time) => {
		let time1 = time*1000;
		let time2 = new Date(time1);
		var   year=time2.getFullYear();   
		var   month=time2.getMonth()+1;  
		var   date=time2.getDate();  
		var   hour=time2.getHours();   
		var   minute=time2.getMinutes();    
		var   second=time2.getSeconds();   
		return   year+"-"+month+"-"+date;
	},
}