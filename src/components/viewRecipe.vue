<template>
  <div>
    <tr>
      <th>Nom</th>
      <th>Presentation</th>
      <th>Nombre de personne</th>
      <th>Déroulement</th>
      <th>Remarques</th>
    </tr>
    <tr v-for="rec in recipe" :key="rec">
      <td>{{ rec.nom_fr }}</td>
      <td>{{ rec.presentation_fr }}</td>
      <td>Pour {{ rec.cb_personne }} personnes</td>
      <td>{{ rec.deroulement_fr }}</td>
      <td>{{ rec.remarque_fr }}</td>
    </tr>
  </div>
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
  methods: {}
};
</script>
