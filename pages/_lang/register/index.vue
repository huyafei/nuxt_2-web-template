<template>
  <div class="v-main">
    <a-row style="width: 100%">
      <a-col
        :xxl="{
          span:6,
          offset:9
        }"
        :xl="{
          span:8,
          offset:8
        }"
        :lg="{
          span:10,
          offset:7
        }"
        :md="{
          span:12,
          offset:6
        }"
        :sm="{
          span: 16,
          offset:4
        }"
        :xs="{
          span: 20,
          offset:2
        }"
      >
        <a-form :form="form" class="v-register-form" @submit="handleSubmit">
          <a-form-item v-bind="formItemLayout" label="E-mail">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                },
              ]"
              size="large"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              size="large"
              type="password"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              size="large"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              Nickname&nbsp;
              <a-tooltip title="What do you want others to call you?">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input
              v-decorator="[
                'nickname',
                {
                  rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                },
              ]"
              size="large"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Habitual Residence">
            <a-cascader
              v-decorator="[
                'residence',
                {
                  initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                  rules: [
                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                  ],
                },
              ]"
              size="large"
              :options="residences"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Phone Number">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                },
              ]"
              size="large"
              style="width: 100%"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '86' }]"
                style="width: 70px"
              >
                <a-select-option value="86">
                  +86
                </a-select-option>
                <a-select-option value="87">
                  +87
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item
            v-bind="formItemLayout"
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <a-row :gutter="8">
              <a-col :span="12">
                <a-input
                  v-decorator="[
                    'captcha',
                    { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
                  ]"
                  size="large"
                />
              </a-col>
              <a-col :span="12">
                <a-button size="large">
                  Get captcha
                </a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]" size="large">
              I have read the
              <a href="">
                agreement
              </a>
            </a-checkbox>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-button size="large" type="primary" html-type="submit">
              Register
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
<script>
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]
export default {
  components: {},
  mixins: [],
  props: {},
  asyncData (context) {
    return {}
  },
  data () {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    }
  },
  head () {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  mounted () {
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleConfirmBlur (e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        // callback('Two passwords that you enter is inconsistent!')
      } else {
        callback()
      }
    },
    validateToNextPassword (rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleWebsiteChange (value) {
      let autoCompleteResult
      if (!value) {
        autoCompleteResult = []
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      }
      this.autoCompleteResult = autoCompleteResult
    }
  }
}
</script>
<style scoped lang="less">
  .v-main{
    /*overflow-y: auto;*/
    .flex-c(center,center);
    .v-register-form{
      width: 100%;
    }
  }
  /deep/ .v-register-form {

  }
</style>
