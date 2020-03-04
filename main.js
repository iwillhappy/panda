import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import Data from'common/mockData.js'
import CommonJS from 'common/common.js'
import API from 'common/api.js'

Vue.config.productionTip = false

Vue.prototype.$Data = Data
Vue.prototype.$CommonJS = CommonJS
Vue.prototype.$API = API

App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
