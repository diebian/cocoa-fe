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

import Chartist from "chartist";
//import cors from "cors";


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
//Vue.use(cors);
//Vue.use(VueI18n);
//Vue.use(Vuex);
//Vue.use(VueI18n);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});
