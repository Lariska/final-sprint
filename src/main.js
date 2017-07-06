// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '../node_modules/font-awesome/css/font-awesome.css';

import VueDraggableResizable from 'vue-draggable-resizable'


import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);


Vue.component('vue-draggable-resizable', VueDraggableResizable)
locale.use(lang)



locale.use(lang)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
