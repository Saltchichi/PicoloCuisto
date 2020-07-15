import Vue from "vue";
import App from "./App.vue";
import router from "./router";

require("../node_modules/bootstrap/dist/css/bootstrap.css");

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
});
