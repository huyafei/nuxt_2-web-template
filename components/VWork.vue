<template>
  <section id="work" class="v-floor">
    <VTitle :title="$t('index.navbar.work')" />
    <a-row class="v-floor__content v-work">
      <a-col :xs="24" :md="{span:16,offset:4}">
        <a-timeline mode="alternate">
          <a-timeline-item>
            <ul
              class=" wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <li><b>2020.02 - 至今</b></li>
              <li>****有限公司</li>
              <li>设计开发工程是师</li>
            </ul>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <ul
              class=" wow bounceInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <li><b>2018.03 - 2020.02</b></li>
              <li>****有限公司</li>
              <li>前端开发工程师</li>
            </ul>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <ul
              class=" wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <li><b>2017.08 - 2018.03</b></li>
              <li>****有限公司</li>
              <li>前端开发工程师</li>
            </ul>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <ul
              class=" wow bounceInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <li><b>2016.06 - 2017.06</b></li>
              <li>****有限公司</li>
              <li>web开发工程师</li>
            </ul>
          </a-timeline-item>
        </a-timeline>
      </a-col>
    </a-row>
  </section>
</template>
<script>
export default {
  name: 'VWork',
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
  /deep/ .ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content{
    left: calc(~'50% - 4px');
    width: calc(~'50% - 14px');
  }
  /deep/ .ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content{
    width: calc(~'50% - 12px');
  }
  .v-floor{
    &__content{
      .ant-col{
        padding: 0 20px;
      }

    }
  }
  .v-work{
    ul{
      li>b{
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
</style>
