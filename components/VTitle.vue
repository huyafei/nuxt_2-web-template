<template>
  <div class="v-title">
    <h2>{{ title }}</h2>
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'VTitle',
  components: {},
  mixins: [],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
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
  .v-title{
    text-align: center;
    h2{
      font-size: 32px;
      margin-bottom: 0px;
    }
    span{
      display: inline-block;
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: @primary-color;
    }
  }
</style>
