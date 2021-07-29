<template>
  <a-back-top>
    <a-icon type="vertical-align-top" />
  </a-back-top>
</template>
<script>
export default {
  name: 'VBackTop',
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
  .ant-back-top {
    bottom: 100px;
    right: 20px;
    z-index: 100;
    .flex-c(center,center);
    background-color: @primary-color;
    .font(20px,@cl-white);
    font-weight: 600;
    border-radius: 4px;
  }
</style>
