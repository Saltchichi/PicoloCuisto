<template>
  <section v-if="auth=='loggedin'">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" >
      <a class="navbar-brand" href="#">
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Mes recettes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ajouter ingrédient</a>
          </li>
        </ul>
        <div class="form-inline my-2 my-md-0 mr-5">
          <ul class="navbar-nav mr-5">
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Thimothé</a>
              <div class="dropdown-menu" aria-labelledby="dropdown07">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="navbar-brand ml-1">Mes recettes</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <div class="form-inline my-2 my-md-0 mr-5">
          <button class="nouvelle_recette">Nouvelle recette</button>
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
      user: ""
    };
  },
  mounted() {
    EventBus.$on("logged-in", status => {
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
</style>
