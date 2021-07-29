import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
Vue.use(VueI18n)
export default ({ app, params, store }) => {
  const locale = params.lang
  if (locale) {
    store.commit('SET_LANG', locale)
  }
  console.log(store.state.locale)
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh-CN',
    messages: {
      'en-US': { ...require('@/locales/en-US.json'), ...enUS },
      'zh-CN': { ...require('@/locales/zh-CN.json'), ...zhCN }
    }
  })

  app.i18n.path = (link) => {
    // 如果是默认语言，就省略
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
