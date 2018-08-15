// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import StoryblokVue from 'storyblok-vue'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'

Vue.component('teaser', Teaser)

Vue.component('page', Page)
Vue.use(StoryblokVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
