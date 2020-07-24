<template>
  <section v-if="auth == 'loggedin'">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#/recipes">
        <img src="../assets/logo-no-bg.png" alt="logo" width="75" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <div class="form-inline my-2 my-md-0 mr-3">
          <ul class="nav">
            <li class="dropdown">
              <div data-toggle="dropdown">
                <span style="color: white;">
                  {{ currentUser }} <i class="fa fa-caret-down"></i>
                </span>
              </div>
              <ul class="dropdown-menu">
                <li style="background-color: #343a40;">
                  <a style="color: white;" href="">Déconnexion</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="navbar-brand ml-3">Mes recettes</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <div class="form-inline my-2 my-md-0 mr-3">
          <a href="#/createrecipe" style="text-decoration:none"><button class="nouvelle_recette">Nouvelle recette</button></a>
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
import EventBus from "./EventBus.vue";

export default {
  name: "NavBar",
  data() {
    return {
      auth: "",
      currentUser: ""
    };
  },
  created() {
    this.currentUser = localStorage.getItem("currentUser");
  },
  mounted() {
    EventBus.$on("logged-in", (status) => {
      this.auth = status;
    });
  }
};
</script>
<style scoped>
.nouvelle_recette {
  cursor: pointer;
  background-color: #f70a4b;
  border: 2px solid #f70a4b;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 15px;
  width: 100%;
}
.dropdown-menu {
  background-color: #343a40;
  padding: 5% 10%;
}
.dropdown-menu .sub-menu {
  left: 95%;
  position: absolute;
  visibility: hidden;
}
.dropdown-menu li:hover .sub-menu {
  visibility: visible;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.navbar .dropdown-menu {
  margin-top: 0;
}
</style>
