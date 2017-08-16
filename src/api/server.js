import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://101.251.240.134:8080/wish/api/v1/', // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
    // config.headers['X-Token'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  // return config;
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
