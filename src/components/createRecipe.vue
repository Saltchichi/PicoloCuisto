<template>
  <div class="container my-4">
    <form>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="name">Titre de la recette</label>
            <input type="text" class="form-control" id="name" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="form-group">
            <label for="time">Temps de preparation</label>
            <select class="form-control" id="time">
              <option>00:15</option>
              <option>00:30</option>
              <option>00:45</option>
              <option>01:00</option>
              <option>01:15</option>
              <option>01:30</option>
              <option>01:45</option>
              <option>faire une boucle</option>
            </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <label for="time">Nombre de personnes</label>
            <select class="form-control" id="time">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>faire une boucle</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="description">Déscription</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="ingredients">Ingrédients</label>
            <textarea class="form-control" id="ingredients" rows="3" placeholder="Saumon 200g..."></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="form-group">
            <label for="ingredients">Préparation (passez des lignes entre chaque étape</label>
            <textarea class="form-control" id="ingredients" rows="3"></textarea>
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
.add_button {
  cursor: pointer;
  background-color: #f70a4b;
  border: none;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 15px;
  width: 65%;
  height: 37px;
}

.add_button:hover {
  background-color: #e90844;
}
</style>