<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="auth=='loggedin'">
    <div class="container">
      <router-link class="linker" to=/recipes><img src="../assets/logo-no-bg.png" alt="logo" width="35"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
        aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="linker" to=/new_receip>Nouvelle recette</router-link>
          </li>
          <li class="nav-item">
            <router-link class="linker" to=/new_ingredient>Nouvelle ingredient</router-link>
          </li>
        </ul>
        <div class="form-inline my-2 my-md-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown active">
              <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Thimothé</a>
              <div class="dropdown-menu" aria-labelledby="dropdown07">
                <a class="dropdown-item" href="">Action</a>
                <a class="dropdown-item" href="">Another action</a>
                <a class="dropdown-item" href="">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import EventBus from "./EventBus.vue"

export default {
  name: 'NavBar',
  data() {
    return {
      auth: '',
      user: ''
    }
  },
  mounted() {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
};
</script>
<style scoped>
.linker {
  color: white;
}
</style>
