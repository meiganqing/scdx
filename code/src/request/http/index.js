import axios from 'axios';
import router from '@/router'
import store from '@/store'
import qs from 'qs'
import Cookies from 'js-cookie'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/xdData/xdDataManage.ashx';

//http request 拦截器
axios.interceptors.request.use(
	config => {
		config.data = qs.stringify(config.data);
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			"Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ4ZCIsImF1ZCI6Im9jdG9iZXIiLCJzdWIiOiJ0eWtnIiwianRpIjoieGQifQ.hBTpg2lDbRawh_BVUOfi8aXbA3wxVMsFbB800N7TFQs"

		}
		return config;
	},
	error => {
		return Promise.reject(err);
	}
);

//http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(response.status == 401) {
			// 路由守卫 判断是否授权
			router.beforeEach((to, from, next) => {
				let token = Cookies.get("token");
				if(!token && to.path != "/author") {
					Cookies.set("beforeLoginUrl", to.fullPath); // 保存用户进入的url
					next("/author");
					return false;
				}
				next();
			});
		}
		return Promise.reject(error)
	}
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
	//Promise处理请求结果，params参数
	return new Promise((resolve, reject) => {

		axios.get(url, {
				params: params
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {

	return new Promise((resolve, reject) => {
		axios.post(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}
export function PostData(data, callback) {
	//XAction,XKLX是固定的不用重复传值

	let postUrl = "?XAction=GetDataInterface&XKLX=SCDXXNJX";
	return new Promise((resolve, reject) => {
		axios.post(postUrl, data, )
			.then(response => {

				resolve(callback(response.data))

			}, err => {
				reject(err)
			})
	})
}
export function PostDataNoToken(data, callback) {
	//XAction,XKLX是固定的不用重复传值

	let postUrl = "?XAction=GetDataInterface&XKLX=SCDXXNJX";
	let options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: mSytoken
		},
		data: data,
		url: postUrl,
	};
//	return new Promise((resolve, reject) => {
//		axios.post(postUrl, data, )
//			.then(response => {
//
//				resolve(callback(response.data))
//
//			}, err => {
//				reject(err)
//			})
//	})
		return new Promise((resolve, reject) => {
		axios(options)
			.then(response => {
				resolve(callback(response.data))

			}, err => {
				reject(err)
			})
	})
}
export function PostDataVertify(data, callback) {
	let postUrl = "?XAction=GetDataInterface&XKLX=SCDXXNJX";
	let mSytoken

	if(localStorage.getItem("Usytoken")) {
		mSytoken = localStorage.getItem("Usytoken")
	} else {
		this.$router.push({
			path: "/login",
			query: {

			}
		})
		return false
	}
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: mSytoken
		},
		data: data,
		url: postUrl,
	};

	return new Promise((resolve, reject) => {
		axios(options)
			.then(response => {
				resolve(callback(response.data))

			}, err => {
				reject(err)
			})
	})
}