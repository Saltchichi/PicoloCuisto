<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">EQUITREC</h1>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import EventBus from "./EventBus.vue";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      utilisateurBDD: "",
    };
  },
  methods: {
    login() {
      if (this.email != "" && this.password != "") {
        this.getUtilisateurByEmail(this.email, this.password);
      } else {
        alert("Please fill email/password");
      }
    },
    getUtilisateurByEmail(email, motdepasse) {
      axios
        .post("http://picolocuisto.alexandremonschein.fr/user", {
          email: email,
          motdepasse: motdepasse,
        })
        .then((response) => {
          console.log(response);
          if (response.data == true) {
            localStorage.setItem("currentUser", email);
            router.push({ name: "Recipes" });
            this.emitMethod();
          } else {
            alert("The email and/or password is incorrect");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },
  },
};
</script>
