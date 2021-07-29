<template>
  <section id="about" class="v-floor">
    <VTitle :title="$t('index.navbar.about')" />
    <a-row class="v-floor__content" type="flex">
      <a-col
        class="v-info wow bounceInLeft"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        :sm="{
          span:24
        }"
        :md="{
          span:16,
          offset:4
        }"
        :lg="{
          span:8,
          offset:4,
        }"
      >
        <div class="v-info__base">
          <img src="/images/blog/01.jpeg" alt="头像">
          <ul>
            <li>
              <label>{{ $t('index.about.name') }}:</label>
              <span>{{ userInfo.name }}</span>
            </li>
            <li>
              <label>{{ $t('index.about.profession') }}:</label>
              <span>{{ userInfo.profession }}</span>
            </li>
            <li>
              <label>{{ $t('index.about.email') }}:</label>
              <span>{{ userInfo.email }}</span>
            </li>
            <li>
              <label>{{ $t('index.about.phone') }}:</label>
              <span>{{ userInfo.phone }}</span>
            </li>
          </ul>
        </div>
        <div class="v-info__introduction">
          <h3>{{ $t("index.about.introduction") }}</h3>
          <p>
            君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也，使口非是无欲言也，使心非是无欲虑也。及至其致好之也，目好之五色，耳好之五声，口好之五味，心利之有天下。是故权利不能倾也，群众不能移也，天下不能荡也。生乎由是，死乎由是，夫是之谓德操。德操然后能定，能定然后能应。能定能应，夫是之谓成人。天见其明，地见其光，君子贵其全也。
          </p>
        </div>
        <div class="v-info__tag">
          {{ $t("index.about.tag") }}：
          <a-tag color="#108ee9" size="large">
            Vue
          </a-tag>
        </div>
      </a-col>
      <a-col
        class="v-info wow bounceInRight"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
        :sm="{
          span:24
        }"
        :md="{
          span:16,
          offset:4
        }"
        :lg="{
          span:8,
          offset:0
        }"
      >
        <div class="v-info__skill">
          <h3>{{ $t("index.about.skill") }}</h3>
          <ul>
            <li v-for="(item,index) in skill" :key="index">
              <label>{{ index + 1 + "、" }}</label>
              <div>{{ item.content }}</div>
            </li>
          </ul>
        </div>
        <div class="v-info__education">
          <h3>{{ $t("index.about.education") }}</h3>
          <!--          2018年2月至2020年7月 计算机科学与技术 江南大学-->
          <ul>
            <li>2018年2月至2020年7月 计算机科学与技术 **大学</li>
            <li>2018年2月至2020年7月 计算机科学与技术 **大学</li>
          </ul>
        </div>
      </a-col>
    </a-row>
  </section>
</template>
<script>
export default {
  name: 'VAbout',
  components: {},
  mixins: [],
  props: {},
  asyncData (context) {
    return {}
  },
  data () {
    return {
      userInfo: {
        name: 'Ven',
        profession: '前端开发工程师',
        email: 'ven@email.com',
        phone: '1506150****'
      },
      skill: [
        {
          content: '君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也...'
        },
        {
          content: '君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也...'
        },
        {
          content: '君子知夫不全不粹之不足以为美也，故诵数以贯之，思索以通之，为其人以处之，除其害者以持养之。使目非是无欲见也，使耳非是无欲闻也...'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>
<style scoped lang="less">
.v-floor {
  background-color: #f9f9f9;
}

.v-info {
  background-color: @cl-white;
  padding: 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__base {
    display: flex;

    img {
      width: 150px;
      height: 150px;
      margin-right: 20px;
    }

    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      li {
        font-size: 18px;

        label {
          font-weight: 700;
        }

        span {
          font-size: 16px;
          word-break: break-all;
        }
      }
    }
  }

  &__introduction {
    margin-top: 20px;

    p {
      text-indent: 2em;
      font-size: 16px;
    }
  }

  &__tag {
    margin-top: 10px;
  }

  &__skill, &__education {
    h3 {

    }

    ul {
      padding-left: 20px;
      font-size: 16px;

      li {
        margin-bottom: 4px;
      }

      li:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__skill {
    ul {
      li {
        display: flex;

        div {
          flex: 1;
        }
      }
    }
  }

  &__education {
    margin-top: 10px;
  }
}
</style>
