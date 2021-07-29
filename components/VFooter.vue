<template>
  <footer class="v-footer">
    <a-row style="padding: 20px 0;">
      <a-col
        :md=" {
          span:4,
          offset:4
        }"
        :sm=" {
          span:12,
        }"
        :xs=" {
          span:24,
        }"
      >
        <ul>
          <li class="title">
            网站导航
          </li>
          <li class="">
            <NuxtLink to="">
              首页
            </NuxtLink>
          </li>
        </ul>
      </a-col>
      <a-col
        :md="4"
        :sm=" {
          span:12,
        }"
        :xs=" {
          span:24,
        }"
      >
        <ul>
          <li class="title">
            友情链接
          </li>
          <li class="">
            <NuxtLink to="">
              Vue
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink to="">
              Nuxt
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="">
              Ant Design
            </NuxtLink>
          </li>
        </ul>
      </a-col>
      <a-col
        :md="4"
        :sm=" {
          span:12,
        }"
        :xs=" {
          span:24,
        }"
      >
        <ul>
          <li class="title">
            我的
          </li>
          <li>
            <NuxtLink to="">
              个人信息
            </NuxtLink>
          </li>
        </ul>
      </a-col>
      <a-col
        :md="4"
        :sm=" {
          span:12,
        }"
        :xs=" {
          span:24,
        }"
      >
        <ul>
          <li class="title">
            网站管理
          </li>
          <li>
<!--            <NuxtLink :to="$i18n.path('login')">-->
<!--              管理员入口-->
<!--            </NuxtLink>  -->
            <NuxtLink to="/">
              管理员入口
            </NuxtLink>
          </li>
        </ul>
      </a-col>
    </a-row>
    <div class="v-footer__copyright">
      苏ICP备2021017340号-1
    </div>
  </footer>
</template>
<script>
export default {
  name: 'VFooter',
  components: {},
  mixins: [],
  props: {},
  asyncData (context) {
    return {}
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style scoped lang="less">
  .v-footer{
    background:@cl-black ;
    color: @cl-white;
    .ant-col{
      padding: 0 20px;
    }
    ul{
      margin-top: 20px;
      li{
        line-height: 24px;
        margin: 10px 0;
        &.title{
          font-size: 16px;
          font-weight: 600;
        }
        a{
          color: @cl-white;
          line-height: 20px;
        }
      }
    }
    &__copyright{
      text-align: center;
      padding: 10px;
      border-top:1px solid #ddd;
    }
  }
</style>
