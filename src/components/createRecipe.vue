<template>
  <div class="container my-4">
    <form>
      <div class="row justify-content-center my-4">
        <div class="col-8">
          <h2 class="text-center">Nouvelle recette</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="titre">Titre de la recette</label>
            <input type="text" class="form-control" id="titre" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-2">
          <div class="form-group">
            <label for="heure">Temps de preparation</label>
            <select class="form-control" id="heure">
              <option value selected disabled>Heure</option>
              <option v-for="index in 12" :key="index" :value="index">{{index}}</option>
            </select>
          </div>
        </div>
        <div class="col-2">
          <div class="form-group mt-2">
            <label for="minute"></label>
            <select class="form-control" id="minute">
              <option value selected disabled>Minute</option>
              <option v-for="index in 12" :key="index" :value="index*5">{{index*5}}</option>
            </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <label for="nb_personne">Nombre de personnes</label>
            <select class="form-control" id="nb_personne">
              <option v-for="index in 15" :key="index" :value="index">{{index}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="form-group">
            <label for="type_plat">Type de plat</label>
            <select class="form-control" id="type_plat">
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
              <option value="accompagnement">Accompagnement</option>
              <option value="boisson">Boisson</option>
              <option value="sauce">Sauce</option>
            </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <label for="difficulte">Difficulté</label>
            <select class="form-control" id="difficulte">
              <option value="tres_facile">Très facile</option>
              <option value="facile">Facile</option>
              <option value="moyenne">Moyenne</option>
              <option value="difficile">Difficile</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="2"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="ingredients">Ingrédients (Ingrédient quantité mesure)</label>
            <textarea class="form-control" id="ingredients" rows="4" placeholder="Ex: Saumon 500 g"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="ingredients">Préparation (passez des lignes entre chaque étape)</label>
            <textarea class="form-control" id="ingredients" rows="4"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="ingredients">Remarques</label>
            <textarea class="form-control" id="ingredients" rows="2"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" class="form-control-file" id="image" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-3">
        <div class="col-2">
          <div class="form-group">
            <button type="submit" class="enregistrer">Enregistrer</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  name: "createRecipe",
};
</script>

<style>
.enregistrer {
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

.enregistrer:hover {
  background-color: #e90844;
}
</style>