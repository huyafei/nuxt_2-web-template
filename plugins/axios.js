import { message } from 'ant-design-vue'
export default function ({ $axios, redirect }) {
  // 请求拦截器
  $axios.onRequest((config) => {
    console.log('onRequest', config)
  })
  // 响应拦截器
  $axios.onResponse((response) => {
    console.log('onResponse', response)
    if (response.data.code !== 200) {
      message.error(response.data.code + ' ' + response.data.msg)
    }
  })
  // 错误拦截器 onRequestError 和 onResponseError
  // $axios.onError((error) => {
  //   // 这里是每当出错的时候都会被拦截
  //   console.log('onError', error)
  //   console.log('onError', error.response)
  //   message.error(error.response.statusText)
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
  // 请求错误拦截器
  $axios.onRequestError((error) => {
    console.log('onRequestError', error)
  })
  // 响应错误拦截器
  $axios.onResponseError((error) => {
    console.log('onResponseError', error)
    message.error(+error.response.status + ' ' + error.response.statusText)
  })
}
