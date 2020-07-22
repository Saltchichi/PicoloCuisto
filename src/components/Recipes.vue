<template>
  <section>
    <!-- <div class="row mx-4"> -->
    <div class="card-columns mx-4">
      <div v-for="recipes in allRecipes" :key="recipes" class="card mr-4 mt-4">
        <img class="card-img-top" v-bind:src="getImgUrl(recipes.chemin_image)" alt="Image recette" />
        <!-- <img class="card-img-top" src="../assets/tarte_aux_framboises.jpg" alt="Card image cap" /> -->
        <div class="card-body">
          <h5 class="card-title">{{ recipes.nom_fr }}</h5>
          <p class="card-text">{{ recipes.presentation_fr }}</p>
          <p class="card-text">
            <i class="far fa-clock"></i> {{ displayHour(recipes.heure) }} {{ displayMinute(recipes.minute) }}
          </p>
          <p class="card-text">
            <small class="text-muted">Pour {{ recipes.cb_personne }} personnes</small>
          </p>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-danger" v-on:click="consult(recipes)">Consulter la recette</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "Recipes",
  data() {
    return {
      allRecipes: []
    };
  },
  created() {
    axios
      .get("https://picolocuisto.alexandremonschein.fr/getAllRecette")
      .then((res) => {
        console.log(res);
        this.allRecipes = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    displayHour(hour) {
      if (hour == null) {
        return "";
      } else {
        return hour + " h";
      }
    },
    displayMinute(min) {
      if (min == null) {
        return "";
      }
      else {
        return min + ' min';
      }
    },
    consult(recipe) {
      localStorage.setItem("id_recette_to_consult", recipe.id_recette);
      router.push({ name: "viewRecipe" });
    },
    getImgUrl(img) {
      try {
        return require("../assets/" + img);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.btn-outline-danger {
  border-color: #f70a4b !important;
  color: #f70a4b !important;
}
.btn-outline-danger:hover {
  background-color: #f70a4b !important;
  color: #fff !important;
}
</style>