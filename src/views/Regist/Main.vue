<template>
  <div class="main">
    <form class="cbp-mc-form">
      <div class="cbp-mc-column">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" placeholder="Jonathan" />
        <label for="email">이메일</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="0000000@gmail.com"
        />
        <label for="date">날짜</label>
        <input type="date" id="date" name="date" />
        <label for="email">메모</label>
        <textarea type="text" id="memo" name="memo" />
      </div>
      <div class="cbp-mc-column">
        <label for="thumbnail">섬네일</label>
        <img
          id="thumbnail"
          name="thumbnail"
          src="../../assets/images/tmp.png"
        />
      </div>
      <div class="cbp-mc-column">
        <label for="companion">함께한사람들</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
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
  padding: 10px 30px;
  float: left;
}
/* 컬럼의 레이블 */
.cbp-mc-form label {
  display: block;
  padding: 40px 5px 5px 2px;
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}

.cbp-mc-form input,
.cbp-mc-form textarea,
.cbp-mc-form select {
  font-family: 'Lato', Calibri, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1.4em;
  padding: 5px 10px;
  color: #fff;
  display: block;
  width: 100%;
  background: transparent;
}

.cbp-mc-form input,
.cbp-mc-form textarea,
.cbp-mc-form img {
  border: 3px solid #fff;
}

.cbp-mc-form textarea {
  min-height: 200px;
}

.cbp-mc-column img {
  width: 100%;
}
.cbp-mc-form input:focus,
.cbp-mc-form textarea:focus,
.cbp-mc-form label:active + input,
.cbp-mc-form label:active + textarea {
  outline: none;
  border: 3px solid #10689a;
}

.cbp-mc-form select:focus {
  outline: none;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #10689a;
  font-style: italic;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #10689a;
  font-style: italic;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #10689a;
  font-style: italic;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #10689a;
  font-style: italic;
}
</style>
