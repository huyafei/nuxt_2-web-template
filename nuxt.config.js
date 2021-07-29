export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-web-template',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, ,user-scalable=no,shrink-to-fit=no,minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '胡亚飞的个人主页' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/animate.css' }
    ],
    script: [
      { src: '/js/wow.min.js', async: true, defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/less/antd-variables.less',
    '@/assets/css/reset.css',
    '@/assets/css/common.css',
    '@/assets/less/blog.less',
    '@/assets/less/media.less'
  ],
  styleResources: {
    less: ['@/assets/less/colors.less', '@/assets/less/mixin.less']
  },
  server: {
    port: 1223, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  // 模式 spa 没有服务器端渲染（只有客户端路由导航等） universal 服务器端呈现+客户端路由导航等
  // mode: 'universal',
  // 路由配置
  router: {
    middleware: ['i18n'] // 路由中间件
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/component',
    '@/plugins/i18n.js',
    '@/plugins/cookies.js',
    '@/plugins/axios.js',
    { src: '@/plugins/js-toolkit-fn.js', ssr: false }
  ],
  generate: {
    // routes: ['/', '/about', '/zh-CN', '/zh-CN/about']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', '@nuxtjs/style-resources'
  ],
  env: {
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    BaseURL: 'http://nuxt-web-template.vensst.com',
    // browserBaseURL: 'http://172.16.8.191:1224',
    proxy: true
  },
  // 代理
  proxy: {
    '/api/': {
      target: 'http://172.16.8.191:1224'
      // target: process.env.NODE_ENV === 'development' ? 'http://172.16.8.191:1224' : 'http://nuxt-web-template.vensst.com'
      // pathRewrite: {
      //   '^/api/': ''
      // }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
