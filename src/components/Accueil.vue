<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Accueil",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
