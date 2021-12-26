<template>
  <div class="event-detail" @click="hideEventDetail" v-if="eventDetail">
    <div class="event-detail-header">
      {{ eventDetail.userInfo.name }} ({{ eventDetail.userInfo.email }}) 님의
      청소리포트
    </div>
    <div class="event-detail-body">
      <div class="photos-wrapper">
        <div class="title-wrap">
          <div class="title">활동 사진</div>
          <div class="sub"></div>
        </div>

        <div class="photos">
          <img
            class="detail-image"
            v-for="(url, idx) in eventDetail.photoUrl"
            :key="idx"
            :src="url"
            alt=""
          />
        </div>
      </div>

      <div class="detail-form">
        <div class="column">
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">사용자 정보</div>
              <div class="sub"></div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'user']"
                size="lg"
              />
              <div class="text bold">{{ eventDetail.userInfo.name }}</div>
            </div>
            <div class="content">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'envelope-square']"
                size="lg"
              />
              <div class="text bold">{{ eventDetail.userInfo.email }}</div>
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">날짜와 위치</div>
              <div class="sub"></div>
            </div>
            <div class="content date">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'calendar-week']"
                size="lg"
              />
              <div class="text">
                {{ eventDetail.date.from }} 부터 {{ eventDetail.date.to }} 까지
              </div>
            </div>
            <div class="content location">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'globe-asia']"
                size="lg"
              />
              <div class="text address">{{ eventDetail.address }}</div>
              <img class="map-img" :src="this.mapSnapshot" />
            </div>
          </div>
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">함께한 사람</div>
              <div class="sub"></div>
            </div>
            <div class="content companion-title">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'users']"
                size="lg"
              />
              <div class="text">
                {{ eventDetail.companions.length }} 명의 사람과 함께 했습니다.
              </div>
            </div>
            <div class="wrapper">
              <div
                class="content companion"
                v-for="(com, idx) in eventDetail.companions"
                :key="idx"
              >
                <font-awesome-icon
                  class="icon"
                  :icon="['fas', 'user-tag']"
                  size="lg"
                />
                <div class="text">{{ com }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="sub-column">
            <div class="title-wrap">
              <div class="title">쓰레기 수거함</div>
              <div class="sub"></div>
            </div>
            <div class="content trash-scale">
              <img
                class="img trash-scale"
                v-for="idx in eventDetail.scale"
                :key="idx"
                src="../assets/images/recycling-bag.png"
              />
            </div>
            <div class="text trash-scale" v-if="eventDetail.scale < 6">
              {{ 20 * eventDetail.scale }}kg 미만의 쓰레기를 수거했습니다.
            </div>
            <div class="text trash-scale" v-else>
              100kg 이상의 쓰레기를 수거했습니다.
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from 'gsap';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelopeOpenText,
  faGlobeAsia,
  faCalendarWeek,
  faUsers,
  faUserTag,
  faEnvelopeSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelopeOpenText);
library.add(faGlobeAsia);
library.add(faCalendarWeek);
library.add(faUsers);
library.add(faUserTag);
library.add(faEnvelopeSquare);
library.add(faUser);

export default {
  props: {},
  methods: {
    hideEventDetail() {
      const $target = document.querySelector('.event-detail');
      gsap.to($target, {
        duration: 0.5,
        top: '100%',
        // borderTopLeftRadius: '2vh',
        // borderTopRightRadius: '2vh',
      });
      this.$emit('setIsAppear', false);
    },
  },
  computed: {
    ...mapGetters({
      eventDetail: 'cleanEventStore/EventDetail',
      mapSnapshot: 'cleanEventStore/MapSnapShot',
    }),
  },
};
</script>

<style scoped>
.event-detail {
  --backgroundColor: rgba(49, 48, 48, 1);
  --fontColor: rgb(246, 237, 237);
  --objectColor: rgba(63, 59, 59, 0.959);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  background-color: var(--backgroundColor);
  width: 100%;
  height: 100%;
  top: 100%;
  border: var(--backgroundColor), solid 2px;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  font-size: 1.5em;
  color: var(--fontColor);
  padding-bottom: 3%;
}

.event-detail > .event-detail-header {
  position: relative;
  width: 100%;
  padding-top: 15px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  background-color: var(--objectColor);
}

.event-detail > .event-detail-body {
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
.photos-wrapper {
  position: relative;
  width: 100%;
  height: 80%;
  margin-bottom: 5%;
  padding: 2%;
  margin-top: 3%;
  background-color: var(--objectColor);
  border-radius: 10px;
}
.photos-wrapper > .photos {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  margin: 0;
  padding: 1%;
  border-radius: 20px;
  overflow: scroll;
}
.photos-wrapper > .photos > .detail-image {
  width: 40%;
  object-fit: cover;
  padding: 0.5%;
  border-radius: 10px;
}
.event-detail > .event-detail-body > .detail-form {
  display: flex;
  flex-wrap: wrap;
}

/* 각 컬럼 */
.detail-form > .column {
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

.sub-column .content {
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

.sub-column > .content > .map-img {
  margin-top: 5%;
  width: 100%;
  border-radius: 15px;
}

.sub-column > .wrapper {
  width: 100%;
  height: 300px;
  overflow: scroll;
}

.sub-column .content .icon {
  margin: 10px 13px;
}
.sub-column .content .text {
  padding-top: 15px;
}
.sub-column .content > .text.bold {
  padding-top: 15px;
  font-weight: bold;
}
.sub-column > .content.companion-title {
  margin-bottom: 2%;
}
.sub-column > .content.companion-list {
  width: 100%;
  height: 300px;
  overflow: scroll;
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
  opacity: 1;
  cursor: pointer;
}
.sub-column > .text.trash-scale {
  width: 100%;
  padding: 5% 0;
  text-align: center;
}

.sub-column > .textarea {
  display: block;
  color: var(--fontColor);
  padding: 3% 3%;
  background-color: var(--objectColor);
  width: 100%;
  min-height: 450px;
}

@media only screen and (max-width: 414px) {
  .event-detail {
    font-size: 1em;
  }
  .detail-form > .column {
    width: 100%;
  }
  .photos-wrapper > .photos > .detail-image {
    width: 100%;
    height: 100%;
    border-radius: 20px !important;
  }

  .sub-column .content .text.address {
    font-size: 0.8em;
  }
}

.detail-form input:focus,
.detail-form textarea:focus,
.detail-form label:active + input,
.detail-form label:active + textarea {
  outline: none;
}
</style>
