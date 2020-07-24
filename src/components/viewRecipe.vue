<template>
  <section>
    <div class="receipe-post-area section-padding-80" v-for="rec in recipe" :key="rec">
      <div class="container">
        <div class="row mt-3">
          <div class="col-12">
            <img
              v-bind:src="getImgUrl(rec.chemin_image)"
              alt="Image recette"
              class="rounded"
              width="1110px"
            />
          </div>
        </div>
      </div>
      <div class="receipe-content-area">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="receipe-headline my-3">
                <h2 class="mb-4">{{ rec.nom_fr }}</h2>
                <div class="receipe-duration">
                  <h6 class="ml-2"><i class="far fa-clock"></i> {{ displayHour(rec.heure) }} {{ displayMinute(rec.minute) }}</h6>
                  <h6 class="ml-2">Pour {{ rec.cb_personne }} personnes</h6>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="receipe-ratings text-right my-3">
                <div class="ratings">
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-8 mt-2">
              <div class="single-preparation-step d-flex">
                <h4>01.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui.
                  Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in
                  iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
                  purus.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </p>
              </div>

              <div class="single-preparation-step d-flex">
                <h4>02.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui.
                  Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in
                  iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
                  purus.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </p>
              </div>

              <div class="single-preparation-step d-flex">
                <h4>03.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui.
                  Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in
                  iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
                  purus.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </p>
              </div>

              <div class="single-preparation-step d-flex">
                <h4>04.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui.
                  Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in
                  iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
                  purus.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </p>
              </div>
            </div>

            <div class="col-12 col-lg-4">
              <div class="ingredients">
                <h4>Ingredients</h4>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" />
                  <label class="custom-control-label" for="customCheck1">4 Tbsp (57 gr) butter</label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2" />
                  <label class="custom-control-label" for="customCheck2">2 large eggs</label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3" />
                  <label class="custom-control-label" for="customCheck3">
                    2 yogurt containers
                    granulated
                    sugar
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck4" />
                  <label class="custom-control-label" for="customCheck4">
                    1 vanilla or plain yogurt,
                    170g
                    container
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck5" />
                  <label class="custom-control-label" for="customCheck5">
                    2 yogurt containers
                    unbleached
                    white flour
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck6" />
                  <label class="custom-control-label" for="customCheck6">
                    1.5 yogurt containers
                    milk
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck7" />
                  <label class="custom-control-label" for="customCheck7">1/4 tsp cinnamon</label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck8" />
                  <label class="custom-control-label" for="customCheck8">1 cup fresh blueberries</label>
                </div>
              </div>
            </div>
          </div>
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
      }
      else {
        return min + ' min';
      }
    },
  }
};
</script>
