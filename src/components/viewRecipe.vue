<template>
  <section>
    <div class="container" v-for="rec in recipe" :key="rec">
      <div class="row justify-content-center my-4">
        <div class="col-6">
          <img
            v-bind:src="getImgUrl(rec.chemin_image)"
            alt="Image recette"
            class="img_recipe rounded"
          />
        </div>
        <div class="col-6">
          <h2 class="mb">{{ rec.nom_fr }}</h2>
          <div class="ratings mb-5">
            <i class="fas fa-star" aria-hidden="true"></i>
            <i class="fas fa-star" aria-hidden="true"></i>
            <i class="fas fa-star" aria-hidden="true"></i>
            <i class="far fa-star" aria-hidden="true"></i>
            <i class="far fa-star" aria-hidden="true"></i>
          </div>
          <div class="recipe-duration">
            <h6>
              <i class="fas fa-clock" style="font-size:17px"></i>
              <span class="ml-1">{{ displayHour(rec.heure) }} {{ displayMinute(rec.minute) }}</span>
            </h6>
            <h6 class="my-4">
              <i class="fas fa-user" style="font-size:20px"></i>
              <span class="ml-1">{{ rec.cb_personne }} personnes</span>
            </h6>
            <h6>
              <i class="fas fa-utensils" style="font-size:20px"></i>
              <span class="ml-2">Dessert (A dynamiser)</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>Description</h4>
          <p>{{rec.presentation_fr}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-8 col-lg-8 mt-2">
          <h4 class="mb-3">Préparation</h4>
          <ol>
            <li>{{rec.deroulement_fr}}</li>
            <li>Rajouter la farine</li>
            <li>Mélanger la pate</li>
            <li>Kiffer la vie</li>
          </ol>
        </div>
        <div class="col-4 border-left">
          <h4>Ingrédients (A dynamiser)</h4>
          <ul>
            <li>
              <strong>200g</strong> de saumon 
            </li>

            <li>
              <strong>2 branches</strong> de ciboulette
            </li>
            <li>
              <strong>250g</strong> de farine
            </li>
            <li>
              <strong>2 cas</strong> de paprika
            </li>
            <li>
              <strong>1 pincée</strong> de sel
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import router from "../router";
import axios from "axios";

export default {
  name: "viewRecipe",
  data() {
    return {
      recipe: []
    };
  },
  created() {
    axios
      .get(
        "https://picolocuisto.alexandremonschein.fr/getRecetteById/" +
          localStorage.getItem("id_recette_to_consult")
      )
      .then((res) => {
        console.log(res);
        this.recipe = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getImgUrl(img) {
      try {
        return require("../assets/" + img);
      } catch (error) {
        console.log(error);
      }
    },
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
      } else {
        return min + " min";
      }
    }
  }
};
</script>
<style>
li {
  margin-bottom: 5px;
}
.img_recipe {
  width: 100%;
}
</style>