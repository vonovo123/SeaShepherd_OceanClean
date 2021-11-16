<template>
  <div
    class="main"
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false"
  >
    <div class="header">등록</div>
    <div class="body">
      <form
        class="cbp-mc-form"
        method="post"
        action="upload"
        enctype="multipart/form-data"
      >
        <div class="cbp-mc-column userinfo">
          <label for="name"> 📛 이름</label>
          <input type="text" id="name" name="name" placeholder="Jonathan" />
          <label for="email"> 📧 이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="0000000@gmail.com"
          />
          <label for="date"> 📅 활동기간</label>
          <div>
            <input type="date" class="date" id="from-date" name="from-date" />
            <p class="date-text">에서</p>
            <input type="date" class="date" id="to-date" name="to-date" />
            <p class="date-text">까지</p>
          </div>
          <label for="memo"> 📝 메모</label>
          <textarea
            type="text"
            id="memo"
            name="memo"
            placeholder="간단한 활동내역을 작성해주세요."
          />
        </div>
        <div class="cbp-mc-column photo">
          <label>
            📷 사진업로드
            <p>(최대 4장까지 가능!)</p>
          </label>
          <div class="img-wrapper">
            <label class="img-prev" for="imageFirst"></label>
            <input
              type="file"
              id="imageFirst"
              name="imageFirst"
              accept="image/*"
              @change="loadFile"
              style="display: none"
            />
            <label class="img-prev" for="imageSecond"></label>
            <input
              type="file"
              id="imageSecond"
              name="imageSecond"
              accept="image/*"
              @change="loadFile"
              style="display: none"
            />
            <label class="img-prev" for="imageThird"></label>
            <input
              type="file"
              id="imageThird"
              name="imageThird"
              accept="image/*"
              @change="loadFile"
              style="display: none"
            />
            <label class="img-prev" for="imageFourth"></label>
            <input
              type="file"
              id="imageFourth"
              name="imageFourth"
              accept="image/*"
              @change="loadFile"
              style="display: none"
            />
          </div>
          <label for="companion">
            👭 함께한사람들
            <p>(이메일주소를 적어주세요.)</p>
            <div class="companion-add-btn" @click="addCompanion">➕ 추가</div>
            <div class="companion-remove-btn" @click="removeCompanion">
              ➖ 제거
            </div>
          </label>
          <div class="companion-wrapper"></div>
          <!-- <input class="companion" type="text" @keyup.enter="insertCompanion" /> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { companionIndex: -1 };
  },
  methods: {
    loadFile: e => {
      const $label = e.target.previousSibling;
      console.log($label);
      $label.style.backgroundImage = `url('${URL.createObjectURL(
        e.target.files[0]
      )}')`;
      $label.style.opacity = '1';
    },
    addCompanion(e) {
      this.companionIndex++;
      const $companionWrapper = document.querySelector('.companion-wrapper');
      const $temp = document.createElement('div');
      $temp.innerHTML = `<input class="companion" type="text" id= 'companion-${this.companionIndex}'/>`;
      $companionWrapper.append($temp);
    },
    removeCompanion(e) {
      if (this.companionIndex > -1) {
        $companionWrapper.removeChild($companionWrapper.lastChild);
      }
    },
  },
};
</script>

<style>
.main {
  /* 1em : 16px */
  width: 100%;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  --inputColor: rgb(243, 246, 246);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
}
.header {
  background-color: var(--inputColor);
  padding: 0;
  height: 3em;
}

.body {
  /* 1em : 16px */
  width: 100%;
  padding: 1em 2em 3em;
}
.cbp-mc-form {
  position: relative;
}

/* table display */
.cbp-mc-form:before,
.cbp-mc-form:after {
  content: ' ';
  display: table;
}

/* 각 컬럼 */
.cbp-mc-column {
  float: left;
  width: 50%;
}

/* 컬럼의 레이블 */
.cbp-mc-column > label {
  display: block;
  margin: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--fontColor);
}

.cbp-mc-column > label > p {
  display: inline;
  font-size: 0.5em;
  font-weight: normal;
}
.cbp-mc-column .date-text {
  display: inline;
}
/* 칼럼내 input, select, textarea css */
.cbp-mc-column input,
.cbp-mc-column select {
  display: block;
  margin: 2em 2em;
  padding: 0em 1em;
  color: var(--fontColor);
  width: 50%;
  background-color: var(--inputColor);
}
.cbp-mc-column .date {
  display: inline;
  margin: 1em 2em;
}

.cbp-mc-column textarea {
  display: block;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  color: var(--fontColor);
  margin: 1em;
  padding: 1em 1em;
  background-color: var(--inputColor);
  width: 90%;
  height: 40vw;
}

/* 사진등록 css start*/
.cbp-mc-form .img-wrapper {
  width: 90%;
  height: 40vw;
  margin: 2em 0em;
  border-radius: 0.5em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.cbp-mc-form .img-wrapper > .img-prev {
  width: 50%;
  background-color: var(--inputColor);
  transition: 0.5s;
}

.cbp-mc-form .img-wrapper > .img-prev:hover {
  background-color: var(--inputHoverColor);
  border-radius: 0.5em;
  border-collapse: collapse;
  opacity: 1;
}
/* 사진등록 css end */

.cbp-mc-form .companion-wrapper .companion {
  width: 50%;
  height: 3vw;
  margin: 1em;
  background-color: var(--inputHoverColor);
  border-radius: 1em;
  opacity: 0.5;
}

.cbp-mc-form .companion-add-btn,
.cbp-mc-form .companion-remove-btn {
  display: inline;
  padding: 0em 0.5em;
  margin: 0em 0.5em;
  background: var(--inputColor);
  font-size: 0.7em;
  border-radius: 1em;
}

.cbp-mc-form .companion-add-btn:hover,
.cbp-mc-form .companion-remove-btn:hover {
  background: var(--inputHoverColor);
}

.cbp-mc-form input:focus,
.cbp-mc-form textarea:focus,
.cbp-mc-form label:active + input,
.cbp-mc-form label:active + textarea {
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
</style>
