<template>
  <div class="event-detail" @click="hideEventDetail">
    <div class="event-detail-header">눌러서 청소리포트 닫기</div>
    <div class="event-detail-body" v-if="eventDetail">
      <div class="photos">
        <img
          class="detail-image"
          v-for="(url, idx) in eventDetail.photoUrl"
          :key="idx"
          :src="url"
          :class="
            idx === 0
              ? 'left-top'
              : idx === 1
              ? 'right-top'
              : idx === 2
              ? 'left-bottom'
              : 'right-bottom'
          "
          alt=""
        />
      </div>
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
          <!-- <label class="form-label"> 🤳 사진 </label>
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
          </div> -->

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
import gsap from 'gsap';
export default {
  props: {},
  methods: {
    hideEventDetail() {
      const $target = document.querySelector('.event-detail');
      gsap.to($target, {
        duration: 0.5,
        top: '100%',
        borderTopLeftRadius: '2vh',
        borderTopRightRadius: '2vh',
      });
      this.$emit('setIsAppear', false);
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
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100%;
  top: 100%;
  border: #ebebeb solid 2px;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  font-size: 1em;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  --footerColor: rgb(55, 53, 47);
}

.event-detail > .event-detail-header {
  position: relative;
  top: 2%;
  width: 100%;
  height: 5%;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-top: 3%;
  margin-bottom: 5%;
}

.event-detail > .event-detail-body {
  position: relative;
  background-color: rgba(255, 250, 250, 1);
  width: 100%;
  height: 90%;
  padding-left: 6%;
  padding-right: 6%;
  overflow: scroll;
}
.event-detail > .event-detail-body > .photos {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  margin: 5% 0;
  padding: 0;
  border-radius: 20px;
  flex-wrap: wrap;
}

.event-detail > .event-detail-body > .photos > .detail-image {
  width: 50%;
  height: 50%;
  object-fit: cover;
  padding: 0.5%;
}

.photos > .detail-image.left-top {
  border-top-left-radius: 10px;
}
.photos > .detail-image.right-top {
  border-top-right-radius: 10px;
}
.photos > .detail-image.left-bottom {
  border-bottom-left-radius: 10px;
}
.photos > .detail-image.right-bottom {
  border-bottom-right-radius: 10px;
}
.event-detail > .event-detail-body > .detail-form {
  position: relative;
  height: 100%;
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
  height: 13%;
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
    margin-left: 10%;
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
  .event-detail > .event-detail-body > .photos {
    flex-wrap: nowrap;
    overflow: scroll;
    height: 50%;
  }
  .event-detail > .event-detail-body > .photos > .detail-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px !important;
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
</style>
