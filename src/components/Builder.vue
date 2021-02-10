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
          <div class="col-6">
            <mjml-code-viewer :tasks="list"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import DraggableBlocs from "./DraggableBlocs.vue";
import MjmlCodeViewer from "./MjmlCodeViewer.vue";
import Sidebar from "./Sidebar.vue";


export default {
  name: "Builder",
  display: "Builder",
  order: 2,
  id: 0,
  components: {
    DraggableBlocs,
    MjmlCodeViewer,
    Sidebar
  },
  methods: {
    add: function(el, selfStyle, wrapperStyle) {
      this.$store.commit('add', {
        tag: el,
        selfStyle:selfStyle,
        wrapperStyle:wrapperStyle,
      })
    },
  },
  computed: {
    list () {
      return this.$store.state.list
    },
  },
}
</script>

<style scoped>
.max-vh-100 {
  max-height: 100vh;
  overflow: scroll;
}
</style>

