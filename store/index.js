export const state = () => ({
  locales: ['zh-CN', 'en-US'],
  locale: 'zh-CN'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
