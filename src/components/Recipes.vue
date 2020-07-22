<template>
  <div>
    <tr>
      <th>Nom</th>
      <th>Presentation</th>
      <th>Nombre de personne</th>
    </tr>
    <tr v-for="recipes in allRecipes" :key="recipes">
      <td>{{ recipes.nom_fr }}</td>
      <td>{{ recipes.presentation_fr }}</td>
      <td>Pour {{ recipes.cb_personne }} personnes</td>
    </tr>
  </div>
</template>

<script>
// import router from "../router";
// import EventBus from "./EventBus.vue";
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
  }
};
</script>
