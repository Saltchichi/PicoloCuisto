import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

require("../node_modules/bootstrap/dist/css/bootstrap.css");
//inclue datatbles + jquery
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
});
