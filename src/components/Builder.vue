<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-auto bg-light min-vh-100">
        <p class="font-weight-bold px-2 pt-3 pb-2 mb-0">Composants</p>
        <nav class="navbar navbar-light bg-light flex-column">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="add('mj-section', '','d-flex')">Add section</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="add('mj-column', 'flex flex-fill','')">Add column</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="add('mj-text')">Add text/html content</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="add('mj-image')">Add image content</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col">
        <div class="row">
          <div class="col-6">
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


export default {
  name: "Builder",
  display: "Builder",
  order: 2,
  id: 0,
  components: {
    DraggableBlocs,
    MjmlCodeViewer
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
    valueString() {
      return JSON.stringify(this.list, null, 2);
    }
  },
  updated() {
    console.log(this.valueString)
  }
}
</script>
<style scoped></style>
