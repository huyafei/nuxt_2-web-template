<template>
  <main class="v-main">
    <a-row style="width: 100%">
      <a-col
        :xxl="{
          span:4,
          offset:10
        }"
        :xl="{
          span:6,
          offset:9
        }"
        :lg="{
          span:6,
          offset:9
        }"
        :md="{
          span:8,
          offset:8
        }"
        :sm="{
          span: 12,
          offset:6
        }"
        :xs="{
          span: 22,
          offset:1
        }"
      >
        <a-form
          :form="form"
          class="v-login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: $t('login.form.userNameMessage') }] },
              ]"
              size="large"
              :placeholder="$t('login.form.userName')"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: $t('login.form.passwordMessage') }] },
              ]"
              size="large"
              type="password"
              :placeholder="$t('login.form.password')"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              {{ $t('login.form.rememberPassword') }}
            </a-checkbox>
            <a class="login-form-forgot" href="">
              {{ $t('login.form.forgotPassword') }}
            </a>
            <a-button size="large" type="primary" html-type="submit" class="login-form-button">
              {{ $t('login.form.login') }}
            </a-button>
            <NuxtLink :to="$i18n.path('register')">
              {{ $t('login.form.registerNow') }}
            </NuxtLink>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </main>
</template>
<script>
export default {
  components: {},
  mixins: [],
  layout: 'login',
  props: {},
  data () {
    return {}
  },
  head () {
    return {
      title: this.$t('login.title')
    }
  },
  computed: {},
  watch: {},
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  created () {
  },
  mounted () {
  },

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
  .v-main{
    height: calc(~"100% - 24px");
    .flex-c(center,center);
    .v-login-form{
      width: 100%;
    }
  }
  /deep/ .v-login-form {
    .login-form-forgot {
      float: right;
    }
    .login-form-button {
      width: 100%;
    }
  }
</style>
