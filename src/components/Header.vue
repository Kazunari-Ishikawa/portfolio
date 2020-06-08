<template>
  <header class="l-header">
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
  name: "Header"
};
</script>

<style scoped>
</style>
