<template>
  <div class="nav-main disappear">
    <div class="header-btn">HOME</div>
    <div class="header-btn">MAP</div>
    <div class="header-btn">AUTH</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-main {
  --btnColor: rgba(243, 246, 246, 1);
  --navColor: rgb(55, 53, 47);
  display: none;
  position: fixed;
  width: 100%;
  background: var(--navColor);
  opacity: 0;
  height: 5em;
  z-index: 100;
  flex-direction: row-reverse;
  align-items: center;
}

.header-btn {
  font-size: 1em;
  border-radius: 1em;
  margin: 1em 0.5em;
  background: rgba(243, 246, 246, 1);
  min-width: 4em;
  width: 10%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.appear {
  animation: fade-in 0.5s;
  animation-fill-mode: forwards;
}

.disappear {
  animation: fade-out 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

@keyframes fade-out {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>
