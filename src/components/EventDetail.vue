<template>
  <div class="event-detail" @click="showEventDetail">
    <div class="event-detail-text">눌러서 청소리포트 보기</div>
    <div class="event-detail-body" v-if="eventDetail">
      <div class="detail-form">
        <div class="column">
          <label for="name" class="form-label"> 🐟 이름 </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-input"
            :value="eventDetail.userInfo.name"
            readonly
          />
          <label class="form-label" for="email"> 📮 이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-input"
            :value="eventDetail.userInfo.email"
            readonly
          />

          <label for="address" class="form-label"> 🌊 위치 </label>
          <input
            type="text"
            id="address"
            name="address"
            class="form-input"
            :value="eventDetail.address"
            readonly
          />

          <label class="form-label" for="date"> ⏱️ 일자</label>
          <input
            class="form-input date"
            type="date"
            id="from-date"
            name="from-date"
            :value="eventDetail.date.from"
            readonly
          />
          <p class="date-text">에서</p>
          <input
            type="date"
            class="form-input date"
            id="to-date"
            name="to-date"
            :value="eventDetail.date.to"
            readonly
          />
          <p class="date-text">까지</p>

          <label class="form-label" for="memo"> 📝 청소 이야기</label>
          <textarea
            class="form-textarea"
            type="text"
            id="memo"
            name="memo"
            placeholder="간단한 활동내역을 작성해주세요."
            :value="eventDetail.memo"
            readonly
          />
        </div>
        <div class="column">
          <label class="form-label"> 🤳 사진 </label>
          <!-- <div class="form-btn" @click="addImageFile">➕ 추가</div> -->
          <div class="img-wrapper">
            <label
              class="form-label img-prev"
              for="imageFirst"
              v-bind:style="{
                backgroundImage: 'url(' + eventDetail.photoUrl[0] + ')',
              }"
            ></label>
            <label
              class="form-label img-prev"
              for="imageSecond"
              v-bind:style="{
                backgroundImage: 'url(' + eventDetail.photoUrl[1] + ')',
              }"
            ></label>
            <label
              class="form-label img-prev"
              for="imageThird"
              v-bind:style="{
                backgroundImage: 'url(' + eventDetail.photoUrl[2] + ')',
              }"
            ></label>
            <label
              class="form-label img-prev"
              for="imageFourth"
              v-bind:style="{
                backgroundImage: 'url(' + eventDetail.photoUrl[3] + ')',
              }"
            ></label>
          </div>
          <label class="form-label"> 👭 함께한사람들 </label>
          <div class="companion-wrapper">
            <input
              class="companion"
              type="text"
              v-for="(companion, idx) in this.eventDetail.companions"
              :key="idx"
              readonly
              :value="companion"
            />
          </div>
          <!-- <input class="companion" type="text" @keyup.enter="insertCompanion" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {},
  methods: {
    showEventDetail(event) {
      event.stopPropagation();
      if ([...event.target.classList].includes('event-detail')) {
        const $target = document.querySelector('.event-detail');
        if ($target.classList.contains('detail-appear')) {
          $target.childNodes[0].textContent = '눌러서 활동리포트 보기';
          $target.classList.add('detail-disappear');
          $target.classList.remove('detail-appear');
          this.$emit('setIsAppear', false);
        } else {
          $target.childNodes[0].textContent = '눌러서 활동리포트 닫기';
          $target.classList.add('detail-appear');
          $target.classList.remove('detail-disappear');
          this.$emit('setIsAppear', true);
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      eventDetail: 'cleanEventStore/EventDetail',
    }),
  },
};
</script>

<style>
.event-detail {
  position: relative;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  top: 93%;
  border: #ebebeb solid 2px;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  --footerColor: rgb(55, 53, 47);
}

.event-detail-text {
  display: inline;
  position: relative;
  top: 1em;
  left: 50%;
  margin-left: calc((145px) / -2);
  color: black;
  font-weight: bold;
}

.event-detail-body {
  position: relative;
  top: 2.5em;
  background-color: rgba(255, 250, 250, 1);
  width: 100%;
  height: 100%;
  padding: 1em 2em 1em 2em;
  overflow: scroll;
}

.detail-form {
  position: relative;
}

/* table display */
.detail-form:before,
.detail-form:after {
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
.column input {
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
.detail-form .img-wrapper {
  width: 90%;
  height: 40vw;
  margin: 2em 0em;
  border-radius: 0.5em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.detail-form .img-wrapper > .img-prev {
  width: 50%;
  background-color: var(--inputColor);
  transition: 0.5s;
}

.detail-form .img-wrapper > .img-prev:hover {
  background-color: var(--inputHoverColor);
  border-radius: 0.5em;
  border-collapse: collapse;
  opacity: 1;
}
/* 사진등록 css end */

.detail-form .companion-wrapper .companion {
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

.detail-form input:focus,
.detail-form textarea:focus,
.detail-form label:active + input,
.detail-form label:active + textarea {
  outline: none;
  background: var(--inputHoverColor);
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

.detail-appear {
  animation: detail-fade-in 0.3s;
  animation-fill-mode: forwards;
}

.detail-disappear {
  animation: detail-fade-out 0.3s;
  animation-fill-mode: forwards;
}
@keyframes detail-fade-in {
  from {
    top: 93%;
  }
  to {
    top: 0%;
  }
}

@keyframes detail-fade-out {
  from {
    top: 0%;
  }
  to {
    top: 93%;
  }
}
</style>
