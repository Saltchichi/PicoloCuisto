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
      <td>
        <button v-on:click="consult(recipes)">Consulter la recette</button>
      </td>
    </tr>
  </div>
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
    consult(recipe) {
      localStorage.setItem("id_recette_to_consult", recipe.id_recette);
      router.push({ name: "viewRecipe" });
    }
  }
};
</script>
