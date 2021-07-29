<template>
  <section id="project" class="v-floor">
    <VTitle :title="$t('index.navbar.project')" />
    <a-row class="v-floor__content v-project">
      <a-col
        style="padding: 0 20px"
        :md="{
          span:16,
          offset:4
        }"
        :sm="24"
        :xs="24"
      >
        <a-row :gutter="[20,20]">
          <a-col
            v-for="item in 6"
            :key="item"
            :xl="8"
            :lg="12"
            :md="{
              span:12,
            }"
            :sm="12"
            :xs="24"
          >
            <a-card hoverable class="v-a-card">
              <img
                slot="cover"
                alt="example"
                src="/images/blog/01.jpeg"
              >
              www.nuxt-web-template.vensst.com
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </section>
</template>
<script>
export default {
  name: 'VProject',
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
  mounted () {
  },
  methods: {}
}
</script>
<style scoped lang="less">
  .v-project{
    &__list--padding{
      padding: 0 10px;
    }
  }
</style>
