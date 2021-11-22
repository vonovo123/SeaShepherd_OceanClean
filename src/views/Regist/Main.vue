<template>
  <div
    class="regist-main"
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false"
    @click="showNavigation"
  >
    <Navigation></Navigation>
    <div class="body">
      <form
        class="regist-form"
        method="post"
        action="upload"
        enctype="multipart/form-data"
      >
        <div class="column">
          <label for="name" class="form-label"> 📛 이름 </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-input"
            v-model="event.userInfo.name"
          />

          <label class="form-label" for="email"> 📧 이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-input"
            v-model="event.userInfo.email"
          />
          <label class="form-label" for="date"> 📅 활동기간</label>
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
          <label class="form-label" for="memo"> 📝 메모</label>
          <textarea
            class="form-textarea"
            type="text"
            id="memo"
            name="memo"
            placeholder="간단한 활동내역을 작성해주세요."
            v-model="event.memo"
          />
        </div>
        <div class="column">
          <label class="form-label">
            📷 사진업로드
            <p>(최대 4장까지 가능!)</p>
          </label>
          <!-- <div class="form-btn" @click="addImageFile">➕ 추가</div> -->
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
          <label class="form-label">
            👭 함께한사람들
            <p>(이메일주소를 적어주세요.)</p>
          </label>
          <div class="form-btn" @click="addCompanion">➕ 추가</div>
          <div class="form-btn" @click="removeCompanion">➖ 제거</div>
          <div class="companion-wrapper"></div>
          <!-- <input class="companion" type="text" @keyup.enter="insertCompanion" /> -->
        </div>
        <div class="regist-btn" @click="regist">등록</div>
        <!-- <div class="column btn">
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Navigation from '../../components/Navigation.vue';
import { upLoadFile, desertFile } from '../../util/firebase.js';
import api from '../../API/api.js';
export default {
  components: { Navigation },
  data() {
    return {
      event: {
        userInfo: { name: '', email: '' },
        date: { from: '', to: '' },
        memo: '',
        photos: ['', '', '', ''],
        companions: [],
      },
      companionIndex: -1,
    };
  },
  computed: {
    ...mapGetters({ authInfo: 'googleAuthStore/getAuthInfo' }),
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.event.userInfo.name = this.authInfo.fullName;
      this.event.userInfo.email = this.authInfo.gMail;
      this.event.date.from = new Date().toISOString().substring(0, 10);
      this.event.date.to = new Date().toISOString().substring(0, 10);
    },
    loadFile(e) {
      const $label = e.target.previousSibling;
      $label.style.backgroundImage = `url('${URL.createObjectURL(
        e.target.files[0]
      )}')`;
      $label.style.opacity = '1';
      this.event.photos[e.target.dataset.index] = e.target.files[0];
    },
    // removeImageFile() {
    //   desertFile(this.event.photos[0].name);
    // },
    addCompanion(e) {
      this.companionIndex++;
      const $companionWrapper = document.querySelector('.companion-wrapper');
      const $temp = document.createElement('div');
      $temp.innerHTML = `<input class="companion" type="text" id= 'companion-${this.companionIndex}'/>`;
      $companionWrapper.append($temp);
    },
    removeCompanion(e) {
      const $companionWrapper = document.querySelector('.companion-wrapper');
      console.log(this.companionIndex);
      if (this.companionIndex > -1) {
        this.companionIndex--;
        $companionWrapper.removeChild($companionWrapper.lastChild);
      }
    },
    showNavigation: function (e) {
      const targetClass = e.target.classList[0];
      if (targetClass && (targetClass === 'body' || targetClass === 'column')) {
        const $navMain = document.querySelector('.nav-main');
        if ($navMain.classList.contains('appear')) {
          $navMain.classList.add('disappear');
          $navMain.classList.remove('appear');
          setTimeout(function () {
            $navMain.style.display = 'none';
          }, 100);
        } else {
          $navMain.classList.add('appear');
          $navMain.classList.remove('disappear');
          setTimeout(function () {
            $navMain.style.display = 'flex';
          }, 100);
        }
      }
    },
    regist() {
      console.log(this.event);
      const companionArray = [...document.querySelectorAll('.companion')];
      console.log();
      companionArray.forEach(com => {
        this.event.companions.push(com.value);
      });
      this.event.photos.forEach(file => {
        console.log(file);
        upLoadFile('vonovo123', '20211122', file);
      });
    },
  },
};
</script>

<style>
.regist-main {
  /* 1em : 16px */
  width: 100%;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  --footerColor: rgb(55, 53, 47);
}
.body {
  /* 1em : 16px */
  width: 100%;
  padding: 1em 2em 1em 2em;
}
.regist-form {
  position: relative;
}

/* table display */
.regist-form:before,
.regist-form:after {
  content: ' ';
  display: table;
}

/* 각 컬럼 */
.column {
  float: left;
  width: 50%;
  padding-bottom: 4em;
  min-height: 80vw;
}
/* 컬럼의 레이블 */
.column > label {
  width: 50%;
  display: block;
  margin: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--fontColor);
}

.column > label > p {
  display: inline;
  font-size: 0.5em;
  font-weight: normal;
}
.column .date-text {
  display: inline;
}
/* 칼럼내 input, select, textarea css */
.column input,
.column select {
  display: block;
  margin: 2em 2em;
  padding: 0em 1em;
  color: var(--fontColor);
  width: 50%;
  background-color: var(--inputColor);
}
.column .date {
  display: inline;
  margin: 1em 2em;
}

.column textarea {
  display: block;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  color: var(--fontColor);
  margin: 1em;
  padding: 1em 1em;
  background-color: var(--inputColor);
  min-width: 90%;
  min-height: 40vw;
}

/* 사진등록 css start*/
.regist-form .img-wrapper {
  width: 90%;
  height: 40vw;
  margin: 2em 0em;
  border-radius: 0.5em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.regist-form .img-wrapper > .img-prev {
  width: 50%;
  background-color: var(--inputColor);
  transition: 0.5s;
}

.regist-form .img-wrapper > .img-prev:hover {
  background-color: var(--inputHoverColor);
  border-radius: 0.5em;
  border-collapse: collapse;
  opacity: 1;
}
/* 사진등록 css end */

.regist-form .companion-wrapper .companion {
  width: 50%;
  height: 3vw;
  margin: 1em;
  background-color: var(--inputHoverColor);
  border-radius: 1em;
  opacity: 0.5;
}

.form-btn {
  display: inline;
  padding: 1em 1.5em;
  margin: 2em 1em;
  background: var(--inputColor);
  font-size: 0.8em;
  border-radius: 1em;
}

.form-btn:hover {
  background: var(--inputHoverColor);
}

.regist-form input:focus,
.regist-form textarea:focus,
.regist-form label:active + input,
.regist-form label:active + textarea {
  outline: none;
  background: var(--inputHoverColor);
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
.regist-btn {
  position: relative;
  height: 4em;
  background: var(--footerColor);
  width: 100%;
  color: var(--inputColor);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
