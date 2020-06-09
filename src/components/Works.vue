<template>
  <div class="u-bgSubColor">
    <section id="works" class="l-container">
      <h2 class="l-container__title">WORKS</h2>
      <div class="l-container__body">
        <div class="p-works">
          <ul class="p-works__header">
            <li class="p-works__name active">わたしの100のリスト</li>
            <li class="p-works__name">matchworks</li>
            <li class="p-works__name">わたしのご飯</li>
          </ul>
          <div class="p-works__body">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/sample.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a href class="c-flatBtn u-mr20">
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a href class="c-flatBtn">
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">PHP (Laravel) / JavaScript (Vue.js)</p>
                <p class="p-works__time">制作時間：56H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p class="p-works__text">人生で大切な100のリストを作成した。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      display: false
    };
  }
};
</script>

<style scoped>
</style>
