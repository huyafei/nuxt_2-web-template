import Vue from 'vue'
import {Cookies} from '@vensst/js-toolkit'
const PREFIX = 'web'
const cookies = {
  set (name, value, expires, path) {
    if (expires) {
      const t = new Date().getTime()
      expires = new Date(t + expires)
    }
    Cookies.set(PREFIX + '_' + name, value, { expires, path })
  },
  get (name) {
    return Cookies.get(PREFIX + '_' + name)
  },
  getJson (name) {
    return Cookies.getJSON(PREFIX + '_' + name)
  },
  remove (name, path) {
    Cookies.remove(PREFIX + '_' + name, { path })
  }
}
Vue.prototype.$cookies = cookies
