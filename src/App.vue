<template>
  <div class="container-fluid">
    <div class="row">
      <div class="w-200 bg-light min-vh-100">
        <sidebar/>
      </div>
      <div class="w-fill col">
        <div class="row">
          <div class="vh-100 pr-3 pl-0 position-relative" :class="'col-' + layout" v-show="layout > 0">
            <div class="overflow-scroll h-100">
              <draggable-blocs :tasks="list"/>
            </div>
            <button type="button" @click="resizeLayout(-6)" class="btn btn-secondary btn-sm h-100 top-0 right-0 rounded-0 z-1000 px-0 position-absolute">
              <i class="bi bi-chevron-compact-left"></i>
            </button>
          </div>
          <div class="vh-100 bg-dark p-0 pl-3 position-relative" :class="'col-' + (12 - layout)" v-show="layout < 12">
            <button type="button" @click="resizeLayout(+6)" class="btn btn-secondary btn-sm h-100 top-0 left-0 rounded-0 z-1000 px-0 position-absolute">
              <i class="bi bi-chevron-compact-right"></i>
            </button>
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
  data() {
    return {
      layout: 6
    }
  },
  computed: {
    list () {
      return this.$store.state.list
    },
  },
  methods: {
    resizeLayout(val) {
      this.layout = this.layout + val;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";

@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

@import "./assets/styles/utilities.scss";
@import "./assets/styles/transitions.css";

.max-vh-100 {
  max-height: 100vh;
  overflow: scroll;
}

.w-200 {
  width: 200px;
}

.w-fill {
  width: calc(100vw - 200px);
}
</style>
