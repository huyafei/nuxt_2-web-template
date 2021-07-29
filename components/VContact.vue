<template>
  <section id="contact" class="v-floor">
    <VTitle :title="$t('index.navbar.contact')" />
    <a-row class="v-floor__content">
      <a-col
        class=" wow bounceInLeft"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        :xs="24"
        :sm="12"
        :md="{
          span:8,
          offset:4
        }"
      >
        <p class="v-description">
          The mountain is not high, there is a fairy name.When the water is not deep, the dragon is spirit.Si is humble, but I did xin.Moss mark on the green, grass into the shade green.There are scholars who talk and laugh, but there are no white men.You can tune the piano and read the Golden Sutra.No disorderly ears, no paperwork, no paperwork.Nanyang Zhuge Cottage, West Shu Zi Cloud Pavilion.Confucius cloud: how can there be ugly?
        </p>
        <ul class="v-contact-info">
          <li>
            <a-icon type="mail" theme="filled" />
            <div>87*****42@qq.com</div>
          </li>
          <li>
            <a-icon type="phone" theme="filled" />
            <div>150****9527</div>
          </li>
        </ul>
      </a-col>
      <a-col
        class=" wow bounceInRight"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        :xs="24"
        :sm="12"
        :md="{
          span:8,

        }"
      >
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [{ required: true, message: $t('index.form.nameMessage'), whitespace: true }],
                },
              ]"
              size="large"
              :placeholder="$t('index.form.name')"
            />
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: $t('index.form.validEmailMessage'),
                    },
                    {
                      required: true,
                      message: $t('index.form.emailMessage'),
                      whitespace: true
                    },
                  ],
                },
              ]"
              size="large"
              :placeholder="$t('index.form.email')"
            />
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [{ required: true, message: $t('index.form.phoneNumberMessage') }],
                },
              ]"
              size="large"
              :placeholder="$t('index.form.phoneNumber')"
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
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-textarea
              v-decorator="[
                'message',
                {
                  rules: [
                    {
                      required: true,
                      message: $t('index.form.messageMessage'),
                    },
                  ],
                },
              ]"
              size="large"
              :placeholder="$t('index.form.message')"
              :auto-size="{ minRows: 4, maxRows: 8 }"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" size="large">
              {{ $t('index.form.send') }}
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </section>
</template>
<script>
export default {
  name: 'VContact',
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
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'sendMessage' })
  },
  mounted () {
  },
  methods: {
    handleSubmit (e) {
      const _that = this
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          _that.$emit('submit-event', values)
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
  .v-floor{
    background-color:#f9f9f9 ;
    &__content{
      &>.ant-col{
        padding: 0 20px;
        .v-description{
          margin-bottom: 20px;
        }
        .v-contact-info{
          margin-bottom: 24px;
          li{
            .flex-r(flex-start,center);
            font-size: 16px;
            margin-bottom: 10px;
            i{
              font-size: 20px;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }

</style>
