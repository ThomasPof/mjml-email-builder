<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-auto bg-light min-vh-100">
        <sidebar/>
      </div>
      <div class="col">
        <div class="row">
          <div class="col-6 max-vh-100">
            <draggable-blocs :tasks="list"/>
          </div>
          <div class="col-6 vh-100 bg-dark p-0">
            <mjml-code-viewer :tasks="list"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DraggableBlocs from "./components/DraggableBlocs.vue";
import MjmlCodeViewer from "./components/MjmlCodeViewer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    DraggableBlocs,
    MjmlCodeViewer,
    Sidebar
  },
  computed: {
    list () {
      return this.$store.state.list
    },
  },
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

.max-vh-100 {
  max-height: 100vh;
  overflow: scroll;
}
</style>
