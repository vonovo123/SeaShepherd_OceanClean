<template>
  <div @click="showNavigation" class="regist-main">
    <Navigation></Navigation>
    <div class="regist-body">
      <form
        class="regist-form"
        method="post"
        action="upload"
        enctype="multipart/form-data"
      >
        <div class="column">
          <label for="name" class="form-label"> 🐟 이름 </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-input"
            v-model="event.userInfo.name"
          />
          <label class="form-label" for="email"> 📮 이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-input"
            v-model="event.userInfo.email"
          />

          <label for="address" class="form-label"> 🌊 위치 </label>
          <input
            type="text"
            id="address"
            name="address"
            class="form-input"
            v-model="event.address"
          />

          <label class="form-label" for="date"> ⏱️ 일자</label>
          <input
            class="form-input date"
            type="date"
            id="from-date"
            name="from-date"
            v-model="event.date.from"
          />
          <p class="date-text">에서</p>
          <input
            type="date"
            class="form-input date"
            id="to-date"
            name="to-date"
            v-model="event.date.to"
          />
          <p class="date-text">까지</p>
          <label class="form-label"> ⚖️ 쓰레기 수거량 </label>
          <div class="trash-scale">
            <div class="trash-scale-wrapper">
              <img
                class="trash-scale-content"
                v-for="idx in 6"
                :key="idx"
                @click="clickTrachCan(idx)"
                src="../../assets/images/recycling-bag.png"
              />
            </div>
            <div class="trash-scale-text" v-if="event.scale < 6">
              {{ 20 * event.scale }}kg 미만의 쓰레기를 수거했습니다.
            </div>
            <div class="trash-scale-text" v-else>
              100kg 이상의 쓰레기를 수거했습니다.
            </div>
          </div>

          <label class="form-label">
            👭 함께한사람들
            <p>(이메일주소를 적어주세요.)</p>
          </label>
          <div class="form-btn-wrapper">
            <div class="form-btn" @click="addCompanion">➕ 추가</div>
            <div class="form-btn" @click="removeCompanion">➖ 제거</div>
          </div>
          <div class="companions-wrapper"></div>
        </div>
        <div class="column">
          <label class="form-label">
            🤳 사진 보여주기
            <p>(최대 4장)</p>
          </label>
          <div class="img-wrapper">
            <label class="form-label img-prev" for="imageFirst"></label>
            <input
              class="form-input"
              type="file"
              id="imageFirst"
              name="imageFirst"
              accept="image/*"
              @change="loadFile"
              style="display: none"
              data-index="0"
            />
            <label class="form-label img-prev" for="imageSecond"></label>
            <input
              class="form-input"
              type="file"
              id="imageSecond"
              name="imageSecond"
              accept="image/*"
              @change="loadFile"
              style="display: none"
              data-index="1"
            />
            <label class="form-label img-prev" for="imageThird"></label>
            <input
              class="form-input"
              type="file"
              id="imageThird"
              name="imageThird"
              accept="image/*"
              @change="loadFile"
              style="display: none"
              data-index="2"
            />
            <label class="form-label img-prev" for="imageFourth"></label>
            <input
              class="form-input"
              type="file"
              id="imageFourth"
              name="imageFourth"
              accept="image/*"
              @change="loadFile"
              style="display: none"
              data-index="3"
            />
          </div>

          <label class="form-label" for="memo"> 📝 청소 이야기</label>
          <textarea
            class="form-textarea"
            type="text"
            id="memo"
            name="memo"
            placeholder="간단한 활동내역을 작성해주세요."
            v-model="event.memo"
          />
        </div>
        <div class="regist-btn" @click="regist">등록</div>
        <div class="copyright">
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            &nbsp; Freepik &nbsp;
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            &nbsp; www.flaticon.com &nbsp;</a
          >
        </div>
      </form>
    </div>
    <ErrorMessage v-show="isError" :errorMessage="errorMessage"></ErrorMessage>
    <CriticalErrorMessage
      v-show="isCriticError"
      :criticalErrorMessage="criticErrorMessage"
    ></CriticalErrorMessage>
  </div>
</template>

<script>
import ErrorMessage from '../../components/ErrorMessage.vue';
import CriticalErrorMessage from '../../components/CriticalErrorMessage.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
import Navigation from '../../components/Navigation.vue';
import api from '../../API/api.js';
import Vue from 'vue';
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);

export default {
  components: { Navigation, ErrorMessage, CriticalErrorMessage },
  data() {
    return {
      event: {
        id: '',
        address: '',
        userInfo: { name: '', email: '' },
        date: { from: '', to: '' },
        memo: '',
        photos: ['', '', '', ''],
        photoUrl: [],
        companions: [],
        position: { lat: '', lng: '' },
        scale: 1,
      },
      companionIndex: -1,
    };
  },
  computed: {
    ...mapGetters({
      authInfo: 'googleAuthStore/AuthInfo',
      selPosition: 'SelPosition',
    }),
    ...mapState([
      'isError',
      'errorMessage',
      'isCriticError',
      'criticErrorMessage',
    ]),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions({
      setCleanEvent: 'cleanEventStore/setCleanEvent',
    }),
    init() {
      this.event.userInfo.name = this.authInfo.fullName;
      this.event.userInfo.email = this.authInfo.gMail;
      this.event.date.from = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substring(0, 10);
      this.event.date.to = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substring(0, 10);
      this.event.position = { ...this.selPosition };
      const geocoder = new google.maps.Geocoder();
      geocoder
        .geocode({ location: this.selPosition })
        .then(response => {
          this.event.address = response.results[0].formatted_address;
        })
        .catch(e => {
          this.event.address = '주소가 정확하지않습니다.';
        });
    },
    loadFile(e) {
      const $label = e.target.previousSibling;
      $label.style.backgroundImage = `url('${URL.createObjectURL(
        e.target.files[0]
      )}')`;
      $label.style.opacity = '1';
      this.event.photos[e.target.dataset.index] = e.target.files[0];
    },
    //같이간사람 추가하기
    addCompanion(e) {
      this.companionIndex++;
      if (this.companionIndex < 30) {
        const $companionWrapper = document.querySelector('.companions-wrapper');
        const $temp = document.createElement('div');
        $temp.classList.add('companion-wrapper');
        $temp.innerHTML = `<input class="companion" type="text" id= 'companion-${this.companionIndex}'/>`;
        $companionWrapper.append($temp);
      }
    },
    removeCompanion(e) {
      const $companionWrapper = document.querySelector('.companions-wrapper');

      if (this.companionIndex >= 0) {
        this.companionIndex--;
        $companionWrapper.removeChild($companionWrapper.lastChild);
      }
    },
    showNavigation: function (e) {
      const targetClass = e.target.classList[0];
      if (
        targetClass &&
        (targetClass === 'regist-body' || targetClass === 'column')
      ) {
        const $navMain = document.querySelector('.nav-main');
        if ($navMain.classList.contains('nav-appear')) {
          $navMain.classList.add('nav-disappear');
          $navMain.classList.remove('nav-appear');
          setTimeout(function () {
            $navMain.style.display = 'none';
          }, 100);
        } else {
          $navMain.classList.add('nav-appear');
          $navMain.classList.remove('nav-disappear');

          setTimeout(function () {
            $navMain.style.display = 'flex';
          }, 100);
        }
      }
    },
    clickTrachCan: function (index) {
      //target.style.opacity = 1;
      const trashs = document.querySelectorAll('.trash-scale-content');
      this.event.scale = index;
      trashs.forEach((trash, idx) => {
        if (idx < index) {
          trash.style.opacity = 1;
        } else {
          trash.style.opacity = 0.5;
        }
      });
    },
    async regist() {
      let loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        canCancel: false,
        onCancel: null,
      });
      this.event.id = `${
        this.event.date.from.split('-').join('') +
        this.event.userInfo.email.slice()
      }`;
      const companionArray = [...document.querySelectorAll('.companion')];
      companionArray.forEach(com => {
        this.event.companions.push(com.value);
      });
      await this.setCleanEvent(this.event);
      loader.hide();
      this.$store.dispatch('moveToMaps');
    },
  },
};
</script>

<style>
/* 1em : 16px */
.regist-main {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100vw;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  --footerColor: rgb(55, 53, 47);
}

.regist-main > .regist-body {
  /* 1em : 16px */
  width: 100%;
  padding: 3% 6%;
}

.regist-body > .regist-form {
  position: relative;
}
/* 각 컬럼 */
.regist-form > .column {
  float: left;
  width: 50%;
  padding-bottom: 6%;
}

/* 컬럼의 레이블 */
.regist-form > .column > label {
  width: 60%;
  display: block;
  margin: 5% 1%;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  color: var(--fontColor);
}

.regist-form > .column .form-input {
  display: block;
  margin: 10% 5%;
  padding: 1% 3%;
  color: var(--fontColor);
  width: 50%;
  background-color: var(--inputColor);
}

.regist-form > .column > label > p {
  display: inline;
  font-size: 0.5em;
  font-weight: normal;
}

.regist-form > .column > .date {
  display: inline;
  margin: 8% 5%;
}

.regist-form > .column > .date-text {
  display: inline;
}

.regist-form > .column > .trash-scale {
  background-color: none;
  margin: 10% 5%;
  width: 80%;
}

.regist-form > .column > .trash-scale > .trash-scale-wrapper {
  width: 100%;
  display: flex;
}

.regist-form
  > .column
  > .trash-scale
  > .trash-scale-wrapper
  > .trash-scale-content {
  margin: 0 2%;
  width: 13%;
  opacity: 0.5;
  cursor: pointer;
}
.regist-form > .column > .trash-scale > .trash-scale-text {
  width: 100%;
  padding: 10% 0;
  text-align: center;
}

@media only screen and (max-width: 992px) {
  .regist-form > .column {
    width: 100%;
  }
  .regist-form > .column > label {
    width: 60%;
  }
  .regist-form > .column .form-input {
    width: 80%;
  }

  .regist-form > .column > label > p {
    width: 80%;
    display: block;
    margin: 5% 15%;
    font-size: 0.5em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: var(--fontColor);
  }
}

.regist-form > .column > .companions-wrapper {
  width: 95%;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: var(--inputColor);
  border-radius: 10px;
}

.regist-form > .column > .companions-wrapper > .companion-wrapper {
  width: 25%;
  margin: 6px 3%;
}
.regist-form > .column > .companions-wrapper .companion {
  width: 100%;
  height: 30px;
  margin: 0;
  background-color: var(--inputHoverColor);
  border-radius: 10px;
  opacity: 0.5;
  padding: 0 1%;
}

.regist-form > .column > .form-btn-wrapper {
  display: block;
  margin: 10% 0%;
}
.regist-form > .column > .form-btn-wrapper > .form-btn {
  display: inline;
  padding: 1em 1.5em;
  margin: 2em 1em;
  background: var(--inputColor);
  font-size: 0.8em;
  border-radius: 10px;
}

.regist-form > .column > .form-btn-wrapper > .form-btn:hover {
  background: var(--inputHoverColor);
}
.regist-form
  > .column
  > .trash-scale
  > .trash-scale-wrapper
  > .trash-scale-content:first-child {
  opacity: 1;
}
/* 사진등록 css start*/
.regist-form > .column > .img-wrapper {
  width: 95%;
  height: 500px;
  margin: 2em 0em;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.regist-form > .column > .img-wrapper > .img-prev {
  width: 50%;
  background-color: var(--inputColor);
  transition: 0.5s;
}

.regist-form > .column > .img-wrapper > .img-prev:hover {
  background-color: var(--inputHoverColor);
  border-radius: 10px;
  border-collapse: collapse;
  opacity: 1;
}

.regist-form > .column > textarea {
  display: block;
  font-size: 1em;
  color: var(--fontColor);
  padding: 3% 3%;
  background-color: var(--inputColor);
  width: 95%;
  min-height: 450px;
  border-radius: 10px;
}
/* 사진등록 css end */

.regist-form > .column > input:focus,
.regist-form > .column > textarea:focus,
.regist-form > .column > label:active + input,
.regist-form > .column > label:active + textarea {
  outline: none;
  background: var(--inputHoverColor);
}

.regist-form > .regist-btn {
  position: relative;
  height: 4em;
  background: var(--footerColor);
  width: 100%;
  color: var(--inputColor);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
}

.regist-body .copyright {
  width: 100%;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #8e9091;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #8e9091;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #8e9091;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #8e9091;
}
a:link {
  text-decoration: none;
  color: rgb(55, 53, 47);
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
