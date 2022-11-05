import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

import axios from 'axios';
import VueAxios from 'vue-axios';
//import Vuex from 'vuex';
//import VueI18n from 'vue-i18n';
//import VueI18n from 'vue-i18n';

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

//plugin google maps
import * as VueGoogleMaps from "vue2-google-maps";

import Chartist from "chartist";

import "@/assets/css/miSpinner.css";
import "@/assets/css/miPagination.css";

//import VuePaginate from 'vue-paginate';
//import cors from "cors";
//axios.defaults.baseURL = 'https://apicacaodev.diebian.dev/public/api/';
axios.defaults.baseURL = 'https://api.monitoreocacao.online/public/api/';
//import {labelsi18} from '@/utils/labels.js';


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueAxios, axios);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC4dkjpQKyrcNPMHpGIVza_vi7rZTT3HrM",
  },
});
//Vue.use(VuePaginate);
//Vue.use(cors);
//Vue.use(VueI18n);
//Vue.use(Vuex);
//Vue.use(VueI18n);

var token = localStorage.getItem('token');
//console.log('MAIN'+localStorage.getItem('token'));
if (token)
  //console.log('MAIN1');
  axios.defaults.headers.common['Authorization'] = 'Bearer' + token;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  //labelsi18,
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});
