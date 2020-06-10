require('@/assets/scss/app.scss');

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// スクロールディレクティブの登録
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (event) {
      if (binding.value(event, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
