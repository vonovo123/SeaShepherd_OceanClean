<template>
  <div class="main">
    <form class="cbp-mc-form">
      <div class="cbp-mc-column">
        <label for="name"> 📛 이름</label>
        <input type="text" id="name" name="name" placeholder="Jonathan" />
        <label for="email"> 📧 이메일</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="0000000@gmail.com"
        />
        <label for="date"> 📅 날짜</label>
        <input type="date" id="date" name="date" />
        <label for="memo"> 📝 메모</label>
        <textarea
          type="text"
          id="memo"
          name="memo"
          placeholder="간단한 활동내역을 작성해주세요."
        />
      </div>
      <div class="cbp-mc-column">
        <label> 📷 사진업로드 </label>
        <div class="img-wrapper">
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <!-- <form method="post" enctype="multipart/form-data">
            <label class="img-btn" for="chooseFile"></label>
            <input
              type="file"
              id="chooseFile"
              name="chooseFile"
              accept="image/*"
              onchange=""
            />
          </form> -->
        </div>
      </div>
      <div class="cbp-mc-column">
        <label for="companion"> 👭 함께한사람들</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  /* 1em : 16px */
  width: 100%;
  padding: 0 2em 3em;
  max-width: 100em;
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
  width: 50%;
  padding: 1em 2em;
  float: left;
}
/* 컬럼의 레이블 */
.cbp-mc-form label {
  display: block;
  margin: 1em;
  /* padding: 20px 5px 5px 2px; */
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}

.cbp-mc-form input,
.cbp-mc-form textarea,
.cbp-mc-form select {
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1em;
  margin: 3em;
  color: black;
  display: block;
  width: 70%;
  background: transparent;
}

.cbp-mc-form textarea {
  min-height: 10em;
}
.cbp-mc-form .img-wrapper {
  width: 80%;
  height: 25em;
  margin: 1em 2em;
  border-radius: 1em;
  display: flex;
  flex-wrap: wrap;
}
.cbp-mc-form .img-wrapper > .img {
  width: 50%;
  height: 50%;
  border-radius: 0.5em;
  border: 0.1em solid black;
  background-color: #8e9091;
  opacity: 0.5;
}
.cbp-mc-column .form {
  width: 90%;
  height: 30em;
}
.cbp-mc-column .img-btn {
}
.cbp-mc-form input:focus,
.cbp-mc-form textarea:focus,
.cbp-mc-form label:active + input,
.cbp-mc-form label:active + textarea {
  outline: none;
  border-bottom: 3px solid #8e9091;
}

.cbp-mc-form select:focus {
  outline: none;
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
