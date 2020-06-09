<template>
  <header id="header" class="l-header" :class="{ floatActive: isActive }" v-scroll="floatHeader">
    <a class="l-header__title" href="index.html">
      <h1>Portfolio</h1>
    </a>
    <nav class="l-nav">
      <ul class="c-nav">
        <li class="c-nav__item">
          <a class="c-nav__link" href="#">TOP</a>
        </li>
        <li class="c-nav__item">
          <a class="c-nav__link" href="#works">WORKS</a>
        </li>
        <li class="c-nav__item">
          <a class="c-nav__link" href="#profile">PROFILE</a>
        </li>
      </ul>
    </nav>

    <!-- ハンバーガーメニュー -->
    <div class="c-menuTrigger">
      <span class="c-menuTrigger__bar"></span>
      <span class="c-menuTrigger__bar"></span>
      <span class="c-menuTrigger__bar"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    floatHeader() {
      const heroHeight = document.getElementById("hero").offsetHeight;
      const headerHeight = document.getElementById("header").offsetHeight;
      // スクロールが要素を超えた場合、フロートメニューを表示
      if (window.scrollY > heroHeight - headerHeight) {
        this.isActive = true;
      }
      // スクロールが要素未満の場合、フロートメニューを非表示
      if (window.scrollY < heroHeight - headerHeight) {
        this.isActive = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
