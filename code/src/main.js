import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

import axios from 'axios'
import Qs from 'qs'

import {PostData,PostDataVertify}  from "@/request/http";

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import quillEditor from "vue-quill-editor";



Vue.filter("snippet",function(value){
  return value.slice(0,23)+"..."
})//全局过滤

//QS是axios库中带的，不需要我们再npm安装一个

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


Vue.prototype.apiurl = ""

Vue.prototype.$http = "/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=SCDXXNJX"



Vue.prototype.PostData=PostData
Vue.prototype.PostDataVertify=PostDataVertify

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(quillEditor)


new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

