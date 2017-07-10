// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


import '../node_modules/font-awesome/css/font-awesome.css';

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'


import VueDraggableResizable from 'vue-draggable-resizable'
Vue.component('vue-draggable-resizable', VueDraggableResizable);
Vue.use(vueEventCalendar, {locale: 'en'})


import Carousel3d from 'vue-carousel-3d';

import VueImg from 'v-img';

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCc_X_TBp3vs4y4oWiEcRrHpwilGYJWNEY',
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
});

Vue.use(VueImg);
Vue.use(Carousel3d);
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
