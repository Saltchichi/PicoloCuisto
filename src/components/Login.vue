<template>
  <div class="login-container">
    <form v-on:submit.prevent="login">
      <div class="login-control">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Adresse mail" v-model="email"/>
      </div>

      <div class="login-control">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" v-model="password"/>
      </div>
      <br />

      <button class="btn" type="submit">Connexion</button>

      <small>Pas de compte ? <router-link class="linker" to=/register>Créer un compte</router-link></small>
    </form>

    <div class="features">
      <div class="feature">
        <i class="fas fa-utensils"></i>
        <h3>Stocker vos recettes</h3>
        <p>Stocker des milliers de recettes pour ne plus en perdre une miette</p>
      </div>
      <div class="feature">
        <i class="fas fa-sort"></i>
        <h3>Tri automatique</h3>
        <p>Toutes les recettes sont triés en fonction de leur type</p>
      </div>
      <div class="feature">
        <i class="fas fa-filter"></i>
        <h3>Filtres</h3>
        <p>Filtrer le nom de vos plat pour les retrouvés d'un simple clic</p>
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
      utilisateurBDD: ""
    };
  },
  methods: {
    login() {
      if (this.email != "" && this.password != "") {
        this.verifyUser(this.email, this.password);
      } else {
        alert("Please fill email/password");
      }
    },
    verifyUser(email, password) {
      axios
        .post("https://picolocuisto.alexandremonschein.fr/checklogin", {
          email: email,
          password: password
        })
        .then(response => {
          console.log(response);
          if (response.data == true) {
            localStorage.setItem("currentUser", email);
            router.push({ name: "Recipes" });
            this.emitMethod();
          } else {
            alert("The email and/or password is incorrect");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>

<style scoped>

.login-container a {
  color: #2762eb;
  text-decoration: none;
}

.login-container {
  margin: auto;
  margin-top: 9%;
  background-color: #fff;
  border-radius: 3px;
  border: 20px solid #eff2fb;
  width: 1000px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  display: flex;
}

.login-container form {
  border-right: 1px solid #ecf2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  flex: 1;
}

.login-container .login-control {
  margin: 10px 0;
  width: 100%;
}

.login-container label {
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-container input:not([type="checkbox"]) {
  background-color: transparent;
  border: 2px solid #ecf2ff;
  border-radius: 3px;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}

.login-container .checkbox-container {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 15px;
  width: 100%;
}

.login-container .checkbox-container a {
  margin-left: auto;
}

.login-container .checkbox-container label {
  color: #7a7e8c;
  font-weight: normal;
}

.login-container .btn {
  cursor: pointer;
  background-color: #141c2c;
  border: 2px solid #141c2c;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  margin: 20px 0;
  width: 100%;
}

.login-container .features {
  flex: 1.5;
  padding: 40px;
}

.login-container .feature {
  position: relative;
  padding-left: 30px;
  margin: 40px 0;
}

.login-container .feature i {
  color: #2762eb;
  position: absolute;
  top: 5px;
  left: 0;
}

.login-container .feature h3 {
  margin: 0;
}

.login-container .feature p {
  font-size: 14px;
  line-height: 1.8;
  margin: 5px 0;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login-container form {
    border-right: 0;
    border-bottom: 1px solid #ecf2ff;
    width: 100vw;
  }
}
</style>