<template>
  <div>
    <Builder/>
  </div>
</template>

<script>
import Builder from './components/Builder.vue';

export default {
  name: "App",
  components: {
    Builder,
  },
}
</script>

<style lang="scss">
  /* @import "./assets/scss/_variables.scss"; */
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
