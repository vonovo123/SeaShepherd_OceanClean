<template>
  <div class="event-regist" @click="hideEventRegist">
    <div class="event-regist-header">청소리포트 등록하기</div>
    <div class="event-regist-body" id="registBody">
      <div class="photo-wrapper">
        <div class="title-wrap">
          <div class="title">활동 사진</div>
          <div class="sub">최대 10장까지 가능합니다.</div>
        </div>
        <div class="photo" id="photo">
          <label
            class="photo-regist"
            for="photoFirst"
            v-show="event.photos.length < 10"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'camera']"
              size="5x"
            />
          </label>
          <input
            class="form-input"
            type="file"
            id="photoFirst"
            name="photoFirst"
            accept="image/*"
            @change="loadFile"
            style="display: none"
            data-index="0"
            multiple
          />
        </div>
      </div>
      <div class="regist-form" id="registForm">
        <div class="column">
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">사용자 정보</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'user']"
                size="lg"
              />
              <input
                type="text"
                class="text"
                v-model="event.userInfo.name"
                autocomplete="off"
              />
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'envelope-square']"
                size="lg"
              />
              <input
                type="text"
                class="text"
                v-model="event.userInfo.email"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">날짜와 위치</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'globe-asia']"
                size="lg"
              />
              <input
                type="text"
                class="text"
                v-model="currentAddress"
                autocomplete="off"
              />
            </div>
            <div class="title-wrap">
              <div class="sub">시작일</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'calendar-week']"
                size="lg"
              />
              <input
                class="text"
                type="date"
                v-model="event.date.from"
                autocomplete="off"
              />
            </div>
            <div class="title-wrap">
              <div class="sub">종료일</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'calendar-week']"
                size="lg"
              />
              <input
                class="text"
                type="date"
                v-model="event.date.to"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">함께한 사람</div>
              <div class="sub">EMAIL 주소를 적어주세요.</div>
            </div>
            <div class="btn-wrapper">
              <div class="btn" @click="addCompanion">➕ 추가</div>
              <div class="btn" @click="removeCompanion">➖ 제거</div>
            </div>
            <div class="wrapper companions"></div>
          </div>
        </div>
        <div class="column">
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">쓰레기 수거량</div>
              <div class="sub">대략적인 수거량을 선택해주세요.</div>
            </div>
            <div class="content trash-scale">
              <img
                class="img"
                v-for="idx in 6"
                :key="idx"
                @click="clickTrachCan(idx)"
                src="../assets/images/recycling-bag.png"
              />
            </div>
            <div class="text trash-scale" v-if="event.scale < 6">
              {{ 20 * event.scale }}kg 미만의 쓰레기를 수거했습니다.
            </div>
            <div class="text trash-scale" v-else>
              100kg 이상의 쓰레기를 수거했습니다.
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">청소 후기</div>
              <div class="sub">청소 후기를 공유해주세요.</div>
            </div>
            <textarea
              class="textarea"
              type="text"
              placeholder="간단한 활동내역을 작성해주세요."
              v-model="event.memo"
            />
          </div>
        </div>
        <div id="observe">obs</div>
        <!--
        <div class="copyright">
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            &nbsp; Freepik &nbsp;
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            &nbsp; www.flaticon.com &nbsp;</a
          >
        </div> -->
      </div>
    </div>

    <div class="regist-btn" id="registBtn" @click="regist">등록</div>

    <!-- <ErrorMessage v-show="isError" :errorMessage="errorMessage"></ErrorMessage>
    <CriticalErrorMessage
      v-show="isCriticError"
      :criticalErrorMessage="criticErrorMessage"
    ></CriticalErrorMessage> -->
  </div>
</template>

<script>
// import ErrorMessage from '../../components/ErrorMessage.vue';
// import CriticalErrorMessage from '../../components/CriticalErrorMessage.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import gsap from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
library.add(faCamera);
// Init plugin
Vue.use(Loading);

export default {
  // components: { ErrorMessage, CriticalErrorMessage },
  data() {
    return {
      event: {
        id: '',
        address: '',
        userInfo: { name: '', email: '' },
        date: { from: '', to: '' },
        memo: '',
        photos: [],
        photoUrl: [],
        companions: [],
        position: this.currentPosition,
        scale: 1,
      },
      companionIndex: -1,
    };
  },
  computed: {
    ...mapGetters({
      authInfo: 'authStore/AuthInfo',
    }),
    ...mapState([
      'isError',
      'errorMessage',
      'isCriticError',
      'criticErrorMessage',
      'currentPosition',
      'currentAddress',
    ]),
  },
  mounted() {
    this.init();
    //observe test
    const $observe = document.querySelector('#observe');
    const $regBtn = document.querySelector('#registBtn');

    const cb = entries => {
      // 탐지요소를 지나쳤으면
      if (entries[0].isIntersecting) {
        console.log('observe');
        gsap.to($regBtn, {
          duration: 1,
          y: 0,
          opacity: 1,
        });
      } else {
        gsap.to($regBtn, {
          duration: 1,
          y: 100,
          opacity: 0,
        });
      }
    };
    let observer = new IntersectionObserver(cb);
    observer.observe($observe);
  },
  methods: {
    ...mapActions({
      setCleanEvent: 'cleanEventStore/setCleanEvent',
    }),
    init() {
      this.event.userInfo.name = this.authInfo.fullName;
      this.event.userInfo.email = this.authInfo.mail;
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
    },
    loadFile(e) {
      const $photo = document.querySelector('#photo');
      const files = [...e.target.files];
      if (files.length + this.event.photos.length > 10) {
        alert('최대 10개의 사진을 공유할 수 있습니다.');
        e.target.value = '';
        return;
      }
      files.forEach(file => {
        //db에 업로드할 file array
        this.event.photos.push(file);
        const $img = document.createElement('img');
        $img.classList.add('photo-prev');
        //등록화면에 임시로 보여주기용 src
        $img.src = `${URL.createObjectURL(file)}`;
        $img.setAttribute('data-id', this.event.photos.length - 1);
        $photo.insertBefore($img, $photo.firstChild);
        $img.addEventListener('click', el => {
          const start = Number(el.target.dataset.id);
          console.log(start);
          el.target.remove();
          for (let i = start + 1; i < this.event.photos.length; i++) {
            this.event.photos[i - 1] = this.event.photos[i];
          }
          this.event.photos.pop();
        });
      });
      e.target.value = '';
    },
    //같이간사람 추가하기
    addCompanion(e) {
      this.companionIndex++;
      if (this.companionIndex < 30) {
        const $companionWrapper = document.querySelector('.companions');
        const $temp = document.createElement('div');
        $temp.classList.add('content');
        // $temp.innerHTML = `<input class="companion" type="text" id= 'companion-${this.companionIndex}'/>`;
        $temp.innerHTML = `
                <i class="icon fas fa-user-tag fa-lg"></i>
                  <input class="text companion" type="text" id= 'companion-${this.companionIndex} 'autocomplete="off"/>
              `;
        $companionWrapper.append($temp);
      }
    },
    removeCompanion(e) {
      const $companionWrapper = document.querySelector('companions');

      if (this.companionIndex >= 0) {
        this.companionIndex--;
        $companionWrapper.removeChild($companionWrapper.lastChild);
      }
    },
    clickTrachCan: function (index) {
      //target.style.opacity = 1;
      const trashs = document.querySelectorAll('.trash-scale .img');
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
      this.event.address = this.currentAddress;
      this.event.position = this.currentPosition;
      const companionArray = [...document.querySelectorAll('.companion')];
      companionArray.forEach(com => {
        this.event.companions.push(com.value);
      });
      await this.setCleanEvent(this.event);
      loader.hide();
      this.$store.dispatch('moveToMaps');
    },
    hideEventRegist(e) {
      if (
        [...e.target.classList].includes('event-regist') ||
        [...e.target.classList].includes('event-regist-header')
      ) {
        const $target = document.querySelector('.event-regist');
        gsap.to($target, {
          duration: 0.5,
          top: '100%',
          borderTopLeftRadius: '2vh',
          borderTopRightRadius: '2vh',
        });
        this.$emit('setIsAppear', false);
      }
    },
    observeBottomOf() {},
  },
};
</script>

<style scoped>
/* 1em : 16px */
.event-regist {
  position: absolute;
  background-color: var(--backgroundColor);
  width: 100%;
  height: 101%;
  top: 100%;
  border: var(--backgroundColor), solid 2px;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  font-size: 1.5em;
  color: var(--fontColor);
  padding-bottom: 3%;
}

.event-regist > .event-regist-header {
  position: relative;
  width: 100%;
  padding-top: 20px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  background-color: var(--objectColor);
}

.event-regist > .event-regist-body {
  position: relative;
  background-color: var(--backgroundColor);
  width: 100%;
  height: 90%;
  padding-left: 6%;
  padding-right: 6%;
  overflow: scroll;
}

.title-wrap {
  margin-bottom: 3%;
}
.title-wrap > .title {
  font-weight: bold;
  width: 100%;
  margin: 1%;
}
.title-wrap > .sub {
  width: 100%;
  margin: 1%;
}

.event-regist-body .photo-wrapper {
  position: relative;
  width: 100%;
  height: 80%;
  padding: 4%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--objectColor);
  border-radius: 10px;
}
.photo-wrapper > .photo {
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  margin: 0;
  padding: 1%;
  border-radius: 20px;
  overflow: scroll;
}

.photo-wrapper > .photo > .photo-prev {
  width: 40%;
  object-fit: cover;
  padding: 1%;
  border-radius: 10px;
}

.photo-wrapper > .photo > .photo-regist {
  width: 50%;
  min-width: 50%;
  background-color: var(--objectColor);
  display: flex;
  justify-content: center;
}

.photo-wrapper > .photo > .photo-regist > .icon {
  position: relative;
  top: calc(40% - (75px / 2));
}

.btn-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
}

.btn {
  width: 45%;
  height: 60%;
  background-color: var(--backgroundColor);
  text-align: center;
  padding-top: 15px;
  border-radius: 15px;
  font-weight: bold;
}

.event-regist-body > .regist-form {
  display: flex;
  flex-wrap: wrap;
}
/* 각 컬럼 */
.regist-form > .column {
  width: 50%;
  padding: 3%;
}

.column > .sub-column {
  position: relative;
  background-color: var(--objectColor);
  width: 100%;
  padding: 5%;
  border-radius: 15px;
  margin-bottom: 10%;
}

.sub-column >>> .content {
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--backgroundColor);
  border-radius: 10px;
}

.sub-column > .wrapper {
  width: 100%;
  height: 300px;
  overflow: scroll;
}

.sub-column >>> .content .icon {
  margin-left: 20px;
  margin-top: 10px;
}
.sub-column >>> .content .text {
  position: relative;
  width: 70%;
  height: 50px;
  color: var(--fontColor);
  font-weight: bold;
  margin-left: 20px;
}
.sub-column > .content.trash-scale {
  width: 100%;
  height: 120px;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-around;
}

.sub-column > .content.trash-scale > .img {
  width: 16%;
  height: 80%;
  opacity: 0.5;
  cursor: pointer;
}
.sub-column > .text.trash-scale {
  width: 100%;
  padding: 5% 0;
  text-align: center;
}
#observe {
  position: relative;
  background-color: 'red';
  height: 5%;
  visibility: hidden;
}
.regist-btn {
  z-index: 1;
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--objectColor);
}

.copyright {
  position: relative;
  height: 10%;
  width: 100%;
  background-color: var(--objectColor);
  text-align: center;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
  display: flex;
}

.sub-column > .textarea {
  display: block;
  color: var(--fontColor);
  padding: 3% 3%;
  background-color: var(--backgroundColor);
  width: 100%;
  min-height: 450px;
}

.sub-column >>> .content .text:focus,
.sub-column > .textarea:focus {
  outline: none;
  background-color: var(--backgroundColor);
}

@media only screen and (max-width: 992px) {
  .event-regist {
    font-size: 1em;
  }

  .regist-form > .column {
    width: 100%;
  }
  .photo-wrapper > .photo > .photo-regist {
    width: 100%;
  }
  .photo-wrapper > .photo > .photo-prev {
    width: 100%;
    height: 100%;
    border-radius: 20px !important;
  }
}
</style>
