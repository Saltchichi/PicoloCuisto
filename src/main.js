import Vue from "vue";
import App from "./App.vue";
import router from "./router";

require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("../node_modules/font-awesome/css/font-awesome.css");
//inclue datatbles + jquery
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
});
