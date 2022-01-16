<template>
  <div class="event-regist" @click="hideEventRegist">
    <div class="event-regist-header">등록화면 닫기</div>
    <div class="event-regist-body" id="registBody">
      <div class="photo-wrapper">
        <div class="title-wrap photo-title">
          <div class="title">활동 사진</div>
          <div class="sub">최대 10장까지 가능합니다</div>
        </div>
        <div class="photo" id="photo">
          <label
            class="photo-regist"
            for="photoFirst"
            v-show="event.photos && event.photos.length < 10"
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
            <div class="content" id="name">
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
                id="name"
                readonly
              />
            </div>
            <div class="content" id="email">
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
                readonly
              />
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">위치와 날짜</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'globe-asia']"
                size="lg"
              />
              <input
                type="text"
                class="text address"
                v-model="currentAddress"
                autocomplete="off"
                readonly
              />
            </div>
            <img class="map-img" :src="this.mapSnapshot" />
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
          <div class="sub-column companions-column">
            <div class="title-wrap">
              <div class="title">함께한 사람</div>
              <div class="sub">email 주소를 남겨주세요</div>
            </div>
            <div class="btn-wrapper">
              <div class="btn" @click="addCompanion">
                <font-awesome-icon
                  class="icon"
                  :icon="['fas', 'plus']"
                  size="lg"
                />
              </div>
              <div class="btn" @click="removeCompanion">
                <font-awesome-icon
                  class="icon"
                  :icon="['fas', 'minus']"
                  size="lg"
                />
              </div>
            </div>
            <div class="wrapper companions"></div>
          </div>
        </div>
        <div class="column">
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">쓰레기 수거량</div>
              <div class="sub"></div>
            </div>
            <div class="content regist-trash-scale">
              <img
                class="img"
                v-for="idx in 5"
                :key="idx"
                @click="clickTrachCan($event, idx)"
                src="../assets/images/recycling-bag.png"
              />
            </div>
            <div class="text regist-trash-scale" v-if="event.scale === 0">
              20KG 이하를 수거했습니다
            </div>
            <div
              class="text regist-trash-scale"
              v-else-if="event.scale < 5 && event.scale > 0"
            >
              {{ 20 + 20 * event.scale }}KG 이하를 수거했습니다
            </div>
            <div class="text regist-trash-scale" v-else>
              100KG 이상을 수거했습니다
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">청소 후기</div>
              <div class="sub"></div>
            </div>
            <textarea
              class="textarea"
              type="text"
              placeholder="청소 후기를 공유해주세요"
              v-model="event.memo"
            />
          </div>
        </div>
        <div id="observe">obs</div>
      </div>
    </div>
    <div class="regist-btn" id="registBtn" @click="regist">등록</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import gsap from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCamera,
  faEnvelopeOpenText,
  faGlobeAsia,
  faCalendarWeek,
  faUsers,
  faUserTag,
  faEnvelopeSquare,
  faUser,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
library.add(faCamera);
library.add(faEnvelopeOpenText);
library.add(faGlobeAsia);
library.add(faCalendarWeek);
library.add(faUsers);
library.add(faUserTag);
library.add(faEnvelopeSquare);
library.add(faUser);
library.add(faPlus);
library.add(faMinus);

// Init plugin
Vue.use(Loading);
import TypeError from '../util/TypeError.js';
export default {
  components: {},
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
        scale: 0,
      },
      companionIndex: -1,
    };
  },
  computed: {
    ...mapGetters({
      authInfo: 'authStore/AuthInfo',
      mapSnapshot: 'cleanEventStore/MapSnapShot',
    }),
    ...mapState(['currentPosition', 'currentAddress']),
  },
  updated() {
    this.event.userInfo.name = this.authInfo.fullName;
    this.event.userInfo.email = this.authInfo.mail;
  },
  mounted() {
    this.init();
    //observe test
    const $observe = document.querySelector('#observe');
    const $regBtn = document.querySelector('#registBtn');
    //등록버튼 옵져빙
    const cb = entries => {
      if (entries[0].isIntersecting) {
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
      setError: 'setError',
    }),
    init() {
      //이름 이메일
      this.event.userInfo.name = this.authInfo.fullName;
      this.event.userInfo.email = this.authInfo.mail;
      //날짜
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
    //등록후 화면 초기화
    reinit() {
      //데이터 초기화
      this.event = {
        id: '',
        address: '',
        userInfo: { name: '', email: '' },
        date: { from: '', to: '' },
        memo: '',
        photos: [],
        photoUrl: [],
        companions: [],
        position: this.currentPosition,
        scale: 0,
      };
      this.companionIndex = -1;
    },
    //이미지 로드
    loadFile(e) {
      const $photo = document.querySelector('#photo');
      const files = [...e.target.files];
      if (files.length + this.event.photos.length > 10) {
        e.target.value = '';
        this.setError({
          message: '사진은 최대 10장까지 업로드 가능합니다.',
          type: 'browser',
        });
        return;
      }
      files.forEach(file => {
        //db에 업로드할 file array
        this.event.photos.push(file);
        const $img = document.createElement('img');
        $img.classList.add('photo-prev');
        //등록화면에 보여주기용 src
        $img.src = `${URL.createObjectURL(file)}`;
        $img.setAttribute('data-id', this.event.photos.length - 1);
        $photo.insertBefore($img, $photo.firstChild);
        $img.addEventListener('click', el => {
          const start = Number(el.target.dataset.id);
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
    addCompanion() {
      this.companionIndex++;
      if (this.companionIndex <= 30) {
        const $companionWrapper = document.querySelector('.companions');
        const $temp = document.createElement('div');
        $temp.classList.add('content');
        $temp.classList.add('companion-content');
        $temp.dataset.id = this.companionIndex;
        $temp.innerHTML = `
                <i class="icon fas fa-user-tag fa-lg"></i>
                  <input class="text companion" type="text" id= 'companion-${this.companionIndex} 'autocomplete="off"/>
              `;
        $companionWrapper.append($temp);
      } else {
        this.setError({
          message: '같이간 사람은 최대 30명까지 등록 가능합니다.',
          type: 'browser',
        });
      }
    },
    //같이간사람 빼기
    removeCompanion() {
      const $companionWrapper = document.querySelector('.companions');
      if (this.companionIndex >= 0) {
        this.companionIndex--;
        $companionWrapper.removeChild($companionWrapper.lastChild);
      }
    },
    //수거한 쓰레기량 선택
    clickTrachCan: function (event, index) {
      const trashs = document.querySelectorAll('.regist-trash-scale .img');
      if ([...event.target.classList].includes('check')) {
        this.event.scale = index - 1;
        trashs.forEach((trash, idx) => {
          if (idx >= index - 1) {
            trash.style.opacity = 0.5;
            trash.classList.remove('check');
          }
        });
      } else {
        this.event.scale = index;
        trashs.forEach((trash, idx) => {
          if (idx < index) {
            trash.style.opacity = 1;
            trash.classList.add('check');
          } else {
            trash.style.opacity = 0.5;
            trash.classList.remove('check');
          }
        });
      }
    },
    setErrorInput($view, $element, message) {
      $view.scrollIntoView(true);
      $element.style.border = '3px solid #fff2cc';
      setTimeout(() => {
        $element.style.border = 'none';
      }, 3000);
      throw new TypeError(message, 'critical');
    },
    //등록
    async regist() {
      try {
        //함께 간 동료 event 객체에 추가
        const companions = [...document.querySelectorAll('.companion-content')];
        for (let i = 0; i < companions.length; i++) {
          if (!companions[i].childNodes[4].value) {
            companions[i].scrollIntoView(true);
            companions[i].style.border = '3px solid #fff2cc';
            setTimeout(() => {
              companions[i].style.border = 'none';
            }, 3000);
            throw new TypeError(
              '추가하려는 함께한 사람의 <br/> 이메일을 입력해주세요.',
              'browser'
            );
          }
        }
        //사용자정보 로드 실패시 방어로직
        if (!this.event.userInfo) {
          throw new TypeError(
            '사용자정보가 존재하지 않습니다. <br/> 잠시후 다시 시도 바랍니다.',
            'critical'
          );
        } else {
          let $view = document.getElementById('registForm');
          let $element = null;
          let message = null;
          if (!this.event.userInfo.name) {
            $element = document.querySelector('#name');
            message = '이름 필수입력정보 입니다. <br/> 다시 인증해주세요.';
            this.setErrorInput($view, $element, message);
          }
          if (!this.event.userInfo.email) {
            $element = document.querySelector('#email');
            message = '이메일은 필수입력정보 입니다. <br/> 다시 인증해주세요.';
            this.setErrorInput($view, $element, message);
          }
        }
      } catch (e) {
        this.setError({
          message: e.message,
          type: e.type,
        });
        return;
      }
      //로딩 on
      let loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        canCancel: false,
        onCancel: null,
        color: '#ffffff',
        backgroundColor: '#000000',
        opacity: 0.5,
      });
      try {
        //이중등록 방지를 위한 버튼 에니메이션
        const $regBtn = document.querySelector('#registBtn');
        gsap.to($regBtn, {
          duration: 1,
          y: 100,
          opacity: 0,
        });
        //uuid 생성
        this.event.id = `${Date.now() + this.event.userInfo.email.slice()}`;
        // 위치정보
        this.event.address = this.currentAddress;
        // 좌표
        this.event.position = this.currentPosition;
        //함께한 동료 event에 추가
        const companionArray = [...document.querySelectorAll('.companion')];
        companionArray.forEach(com => {
          this.event.companions.push(com.value);
        });
        //등록
        const { photoUrl } = await this.setCleanEvent(this.event);
        $regBtn.innerText = '등록 성공';
        gsap.to($regBtn, {
          duration: 1,
          y: 0,
          opacity: 1,
        });
        setTimeout(() => {
          this.hideEventRegist(null);
          const param = { ...this.event, photoUrl };
          this.$emit('successUpload', param);
        }, 2000);
      } catch (e) {
        this.setError({
          message: e.message,
          type: e.type,
        });
      } finally {
        loader.hide();
      }
    },
    hideEventRegist(e) {
      let flag = false;
      if (e) {
        if (
          [...e.target.classList].includes('event-regist') ||
          [...e.target.classList].includes('event-regist-header')
        ) {
          flag = true;
        }
      } else {
        flag = true;
      }
      if (flag) {
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

.title-wrap.photo-title {
  margin-bottom: 1%;
}
.title-wrap > .title {
  font-weight: bold;
  width: 100%;
  margin: 1%;
  padding-bottom: 5px;
}
.title-wrap > .sub {
  width: 100%;
  margin: 1%;
}

.event-regist-body .photo-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  padding: 4%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--objectColor);
  border-radius: 10px;
}
.photo-wrapper > .photo {
  position: relative;
  width: 100%;
  height: 90%;
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
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  border-radius: 15px;
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
  display: flex;
  background-color: var(--backgroundColor);
  border-radius: 15px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
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

.sub-column > .map-img {
  margin-top: 5%;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
}

.sub-column > .wrapper {
  width: 100%;
  height: 300px;
  overflow: scroll;
}

.sub-column >>> .content {
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--backgroundColor);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}

.sub-column >>> .content .text {
  position: relative;
  width: 70%;
  height: 50px;
  color: var(--fontColor);
  font-weight: bold;
  margin-left: 10px;
}
.sub-column > .content.regist-trash-scale {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  background-color: var(--objectColor);
}
.sub-column > .content.regist-trash-scale > .img {
  width: 20%;
  height: 100%;
  padding: 1px;
  opacity: 0.5;
  cursor: pointer;
}
.sub-column > .text.regist-trash-scale {
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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
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
  padding: 5% 5%;
  background-color: var(--backgroundColor);
  width: 100%;
  min-height: 450px;
  border-radius: 15px;
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
  .sub-column > .content > .text.address {
    font-size: 0.8em;
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
