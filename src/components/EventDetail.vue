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
          <label class="form-label"> ⚖️ 쓰레기 수거량 </label>
          <div class="trash-scale">
            <div class="trash-scale-wrapper">
              <img
                class="trash-scale-content"
                v-for="idx in eventDetail.scale"
                :key="idx"
                src="../assets/images/recycling-bag.png"
              />
            </div>
            <div class="trash-scale-text" v-if="eventDetail.scale < 6">
              {{ 20 * eventDetail.scale }}kg 미만의 쓰레기를 수거했습니다.
            </div>
            <div class="trash-scale-text" v-else>
              100kg 이상의 쓰레기를 수거했습니다.
            </div>
          </div>
          <label class="form-label"> 👭 함께한사람들 </label>
          <div class="companions-wrapper">
            <div
              class="companion-wrapper"
              v-for="(companion, idx) in this.eventDetail.companions"
              :key="idx"
            >
              <input
                class="companion"
                type="text"
                readonly
                :value="companion"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <label class="form-label"> 🤳 사진 </label>
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
      const classList = [...event.target.classList];
      if (
        classList.includes('event-detail') ||
        classList.includes('event-detail-text')
      ) {
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  background-color: rgb(255, 255, 255);
  width: 100vw;
  top: 93%;
  border: #ebebeb solid 2px;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  font-size: 1em;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  --footerColor: rgb(55, 53, 47);
}

.event-detail > .event-detail-text {
  position: absolute;
  top: 2%;
  width: 100%;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

.event-detail > .event-detail-body {
  position: relative;
  top: 40px;
  background-color: rgba(255, 250, 250, 1);
  width: 100%;
  max-height: 100vh;
  padding: 3% 6%;
  overflow: scroll;
}

.event-detail > .event-detail-body > .detail-form {
  position: relative;
}

/* 각 컬럼 */
.detail-form > .column {
  float: left;
  width: 50%;
  padding-bottom: 6%;
}
/* 컬럼의 레이블 */
.detail-form > .column > label {
  width: 60%;
  display: block;
  margin: 5% 1%;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--fontColor);
}

.detail-form > .column > label > p {
  display: inline;
  font-size: 0.5em;
  font-weight: normal;
}
/* 칼럼내 input, select, textarea css */
.detail-form > .column .form-input {
  display: block;
  margin: 10% 5%;
  padding: 1% 3%;
  color: var(--fontColor);
  width: 50%;
  background-color: var(--inputColor);
  cursor: pointer;
}
.detail-form > .column > .date {
  display: inline;
  margin: 8% 5%;
}

.detail-form > .column > .date-text {
  display: inline;
}
.detail-form > .column > .trash-scale {
  background-color: none;
  margin: 10% 5%;
  width: 80%;
}
.detail-form > .column > .trash-scale > .trash-scale-wrapper {
  width: 100%;
  display: flex;
}
.detail-form
  > .column
  > .trash-scale
  > .trash-scale-wrapper
  > .trash-scale-content {
  margin: 0 2%;
  width: 13%;
  opacity: 1;
  cursor: pointer;
}
.detail-form > .column > .trash-scale > .trash-scale-text {
  width: 100%;
  padding: 10% 0;
  text-align: center;
}

@media only screen and (max-width: 992px) {
  .detail-form > .column {
    width: 100%;
  }
  .detail-form > .column > label {
    width: 70%;
  }
  .detail-form > .column .form-input {
    width: 80%;
  }

  .detail-form > .column > label > p {
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

.detail-form > .column > .companions-wrapper {
  width: 95%;
  padding-top: 5%;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: var(--inputColor);
  border-radius: 10px;
}
.detail-form > .column > .companions-wrapper > .companion-wrapper {
  width: 25%;
  margin: 6px 3%;
}
.detail-form > .column > .companions-wrapper .companion {
  width: 100%;
  height: 30px;
  margin: 0;
  background-color: var(--inputHoverColor);
  border-radius: 10px;
  opacity: 0.5;
  padding: 0 1%;
}

/* 사진등록 css start*/
.detail-form > .column > .img-wrapper {
  width: 95%;
  height: 500px;
  margin: 2em 0em;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.detail-form > .column > .img-wrapper > .img-prev {
  width: 50%;
  background-color: var(--inputColor);
  transition: 0.5s;
}

.detail-form .img-wrapper > .img-prev:hover {
  background-color: var(--inputHoverColor);
  border-radius: 10px;
  border-collapse: collapse;
  opacity: 1;
}
/* 사진등록 css end */

.detail-form > .column > textarea {
  display: block;
  font-size: 1em;
  color: var(--fontColor);
  padding: 3% 3%;
  background-color: var(--inputColor);
  width: 95%;
  min-height: 450px;
  border-radius: 10px;
}

.detail-form input:focus,
.detail-form textarea:focus,
.detail-form label:active + input,
.detail-form label:active + textarea {
  outline: none;
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
