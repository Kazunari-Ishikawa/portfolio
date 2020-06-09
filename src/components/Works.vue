<template>
  <div class="u-bgSubColor">
    <section id="works" class="l-container">
      <h2 class="l-container__title">WORKS</h2>
      <div class="l-container__body">
        <div class="p-works">
          <ul class="p-works__header">
            <li class="p-works__name" :class="{'active' : tab === 1}" @click="tab = 1">わたしの100のリスト</li>
            <li class="p-works__name" :class="{'active' : tab === 2}" @click="tab = 2">matchworks</li>
            <li class="p-works__name" :class="{'active' : tab === 3}" @click="tab = 3">ToDo-by-React</li>
            <li class="p-works__name" :class="{'active' : tab === 4}" @click="tab = 4">Animal Go!</li>
            <li class="p-works__name" :class="{'active' : tab === 5}" @click="tab = 5">わたしのご飯</li>
          </ul>

          <div class="p-works__body" v-show="tab == 1">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/wishList100.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a
                  href="https://wishlist100.herokuapp.com"
                  target="_blank"
                  class="c-flatBtn u-mr20"
                >
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a
                  href="https://github.com/Kazunari-Ishikawa/wishlist100"
                  target="_blank"
                  class="c-flatBtn"
                >
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">PHP (Laravel) / JavaScript (Vue.js)</p>
                <p class="p-works__time">制作時間：56H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p class="p-works__text">人生で大切な１００のことを成し遂げることに焦点を当てたToDoアプリ。</p>
              </div>
            </div>
          </div>

          <div class="p-works__body" v-show="tab == 2">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/matchworks.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a href="https://matchworks.site" target="_blank" class="c-flatBtn u-mr20">
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a
                  href="https://github.com/Kazunari-Ishikawa/matchworks"
                  target="_blank"
                  class="c-flatBtn"
                >
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">PHP (Laravel) / JavaScript (Vue.js)</p>
                <p class="p-works__time">制作時間：100H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p class="p-works__text">
                  ITエンジニア向けの仕事マッチングサービス。
                  <br />既存のサービスは入力項目が多くわかりにくいため、誰でも手軽に仕事を依頼、応募できる場を提供することを目的として制作。
                </p>
              </div>
            </div>
          </div>

          <div class="p-works__body" v-show="tab == 3">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/todoapp.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a
                  href="https://kazuishikawa.xsrv.jp/todoreact/"
                  target="_blank"
                  class="c-flatBtn u-mr20"
                >
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a
                  href="https://github.com/Kazunari-Ishikawa/ToDo-App-by-React-Redux"
                  target="_blank"
                  class="c-flatBtn"
                >
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">JavaScript (React)</p>
                <p class="p-works__time">制作時間：10H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p class="p-works__text">ToDoアプリをReactを使って作成。ReactライブラリのReduxも使用。</p>
              </div>
            </div>
          </div>

          <div class="p-works__body" v-show="tab == 4">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/animalgo.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a
                  href="https://kazuishikawa.xsrv.jp/animal"
                  target="_blank"
                  class="c-flatBtn u-mr20"
                >
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a
                  href="https://github.com/Kazunari-Ishikawa/animalgo"
                  target="_blank"
                  class="c-flatBtn"
                >
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">PHP</p>
                <p class="p-works__time">制作時間：20H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p class="p-works__text">オブジェクト指向を学ぶため、某ゲームのオマージュを作成。</p>
              </div>
            </div>
          </div>

          <div class="p-works__body" v-show="tab == 5">
            <div class="p-works__left">
              <img class="p-works__img" src="@/assets/img/gohan.jpg" alt />
            </div>
            <div class="p-works__right">
              <div class="p-works__link">
                <a
                  href="https://kazuishikawa.xsrv.jp/gohan/"
                  target="_blank"
                  class="c-flatBtn u-mr20"
                >
                  <i class="fas fa-desktop u-mr5"></i>公開サイト
                </a>
                <a
                  href="https://github.com/Kazunari-Ishikawa/RecipeShare"
                  target="_blank"
                  class="c-flatBtn"
                >
                  <i class="fab fa-github u-mr5"></i>GitHub
                </a>
              </div>
              <div class="p-works__info">
                <p class="p-works__fw">PHP / JavaScript (jQuery)</p>
                <p class="p-works__time">制作時間：30H</p>
              </div>
              <div class="p-works__content">
                <h4 class="p-works__subtitle">概要</h4>
                <p
                  class="p-works__text"
                >ライフログとして、自分の作ったご飯を写真で登録して残せるサービス。PHPを使ったウェブサービスを知るために、フレームワークを使わず制作。</p>
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
      tab: 1
    };
  }
};
</script>

<style scoped>
</style>
