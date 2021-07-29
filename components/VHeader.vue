<template>
  <header ref="vHeader" class="v-header">
    <a-row type="flex" justify="center" align="middle">
      <a-col
        :md="4"
        :sm="12"
        :xs="12"
        class="v-header__logo"
      >
        <NuxtLink to="">
          VenSst
        </NuxtLink>
      </a-col>
      <a-col
        :md="16"
        :sm="0"
        :xs="0"
        class="v-header__navbar"
      >
        <a-anchor :affix="false" wrapper-class="v-a-anchor" :offset-top="64">
          <a-anchor-link href="#home" :title="$t('index.navbar.home')" />
          <a-anchor-link href="#about" :title="$t('index.navbar.about')" />
          <a-anchor-link href="#work" :title="$t('index.navbar.work')" />
          <a-anchor-link href="#project" :title="$t('index.navbar.project')" />
          <a-anchor-link href="#contact" :title="$t('index.navbar.contact')" />
        </a-anchor>
      </a-col>
      <a-col :md="0" :sm="12" :xs="12" class="v-header__navbar">
        <div class="v-a-dropdown">
          <a-button type="link" :icon="showDrawer?'close':'menu'" spin @click="showDrawer=!showDrawer" />
        </div>
      </a-col>
      <a-col
        :md="4"
        :sm="0"
        :xs="0"
        class="v-header__oper"
      >
        <a-select v-model="lang" @change="onLangChange">
          <a-select-option v-for="(item,index) in $store.state.locales" :key="index" :value="item">
            {{ $t('locales.'+item) }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-col :md="0" :xs="24" :sm="24" class="v-drawer">
      <a-anchor :affix="false" wrapper-class="v-a-anchor" :offset-top="64" :style="showDrawer?'':{maxHeight:0}" @click="showDrawer=false">
        <a-anchor-link href="#home" :title="$t('index.navbar.home')" />
        <a-anchor-link href="#about" :title="$t('index.navbar.about')" />
        <a-anchor-link href="#work" :title="$t('index.navbar.work')" />
        <a-anchor-link href="#project" :title="$t('index.navbar.project')" />
        <a-anchor-link href="#contact" :title="$t('index.navbar.contact')" />
      </a-anchor>
    </a-col>
  </header>
</template>
<script>
export default {
  name: 'VHeader',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
      lang: 'zh-CN',
      showDrawer: false
    }
  },
  computed: {
  },
  watch: {
    '$store.state.locale' (val) {
      this.lang = val
    }
  },
  mounted () {
    this.lang = this.$store.state.locale
  },
  methods: {
    onLangChange () {
      let path = this.$route.fullPath
      // eslint-disable-next-line no-useless-escape
      const patt = /^\/[^\/]+/.exec(path)
      if (patt) {
        if (this.$store.state.locales.includes(patt.toString().replace('/', ''))) {
          // eslint-disable-next-line no-useless-escape
          path = this.$route.fullPath.replace(/^\/[^\/]+/, '')
          if (!path) {
            path = '/'
          }
        }
      }
      if (this.lang === this.$i18n.fallbackLocale) {
        this.$router.replace({ path: `${path}` })
      } else {
        if (path === '/') {
          path = ''
        }
        this.$router.replace({ path: `/${this.lang}${path}` })
      }
    },
    jumpPage (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped lang="less">
  /deep/ .v-a-anchor{
    margin: 0;
    padding: 0;
    .ant-anchor-ink{
      display: none;
    }
    .ant-anchor{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .ant-anchor-link{
        padding: 10px 20px;
        .ant-anchor-link-title{
          .font(16px,@cl-white);
          font-weight: 500;
        }
      }
      .ant-anchor-link-active > .ant-anchor-link-title{
        color: @primary-color;
      }
    }
  }
  .v-header{
    /*background: @cl-white;*/
    position: fixed;
    top: 0;
    width: 100%;
   /* box-shadow: 0 2px 8px #f0f1f2;*/
   /* border-bottom: 1px solid #ddd;*/
    z-index: 100;
    background: rgba(0,0,0,0.3);
    &__logo{
      /*width: 200px;*/
      /*height: 69px;*/
      /*text-align: center;*/
      padding: 0 20px;
      a{
        font-weight:600 ;
        font-size: 26px;
        display: inline-block;
        height: 64px;
        line-height: 64px;
        color: @cl-white;
      }
    }
    &__navbar{
      text-align: right;
      padding: 0 20px;
      /deep/ .v-a-anchor{
        background: transparent;
        .ant-anchor{
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          .ant-anchor-link{

            .ant-anchor-link-title{

            }
          }
          .ant-anchor-link-active > .ant-anchor-link-title{

          }
        }
      }
      /deep/ .v-a-dropdown{
        transition: all .2s;
        .ant-btn{
          .font(20px,@cl-white)
        }

      }
    }

    &__oper{
      padding: 0 20px;
      text-align: right;
    }
    .v-drawer{
      position: absolute;
      top: 64px;
      width: 100%;
      /deep/.ant-anchor-wrapper{
        background: rgba(0,0,0,0.3);
      }
      /deep/ .v-a-anchor{
        transition: 0.3s;
        .ant-anchor{
          display: flex;
          flex-direction: column;
          .ant-anchor-link{

            .ant-anchor-link-title{

            }
          }
          .ant-anchor-link-active > .ant-anchor-link-title{

          }
        }
      }
    }
  }

</style>
