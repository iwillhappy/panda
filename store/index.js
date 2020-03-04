import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({  
    state: {  
        searchList:[]
    },
		getters:{
			searchList: state =>{
				return state.searchList;
			}
		},
    mutations: {  
       getSearchList(state,list){
				 state.searchList = list;
			 }
    },
		actions:{
			saveSearchList({commit},list){
				commit('getSearchList',list)
			}
		}
		
})
export default store
