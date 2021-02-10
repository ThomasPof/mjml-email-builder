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
  data() {
    return {
      mjmlComponents: {
        'mj-section': {
          name: "Section",
          tag: "mj-section",
          options: [
            {
              'attribute': 'background-color',
              'unit': 'color',
              'description': 'section color',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'background-position',
              'unit': "percent / 'left','top',... (2 values max)",
              'description': 'css background position (see outlook limitations below)',
              'default': 'top center',
              'value':null
            },{
              'attribute': 'background-position-x',
              'unit': 'percent / keyword',
              'description': 'css background position x',
              'default': 'none',
              'value':null
            },{
              'attribute': 'background-position-y',
              'unit': 'percent / keyword',
              'description': 'css background position y',
              'default': 'none',
              'value':null
            },{
              'attribute': 'background-repeat',
              'unit': 'string',
              'description': 'css background repeat',
              'default': 'repeat',
              'value':null
            },{
              'attribute': 'background-size',
              'unit': "px/percent/'cover'/'contain'",
              'description': 'css background size',
              'default': 'auto',
              'value':null
            },{
              'attribute': 'background-url',
              'unit': 'url',
              'description': 'background url',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'border',
              'unit': 'string',
              'description': 'css border format',
              'default': 'none',
              'value':null
            },{
              'attribute': 'border-bottom',
              'unit': 'string',
              'description': 'css border format',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'border-left',
              'unit': 'string',
              'description': 'css border format',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'border-radius',
              'unit': 'px',
              'description': 'border radius',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'border-right',
              'unit': 'string',
              'description': 'css border format',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'border-top',
              'unit': 'string',
              'description': 'css border format',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'css-class',
              'unit': 'string',
              'description': 'class name, added to the root HTML element created',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'direction',
              'unit': 'ltr / rtl',
              'description': 'set the display order of direct children',
              'default': 'ltr',
              'value':null
            },{
              'attribute': 'full-width',
              'unit': 'string',
              'description': 'make the section full-width',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'padding',
              'unit': 'px',
              'description': 'supports up to 4 parameters',
              'default': '20px 0',
              'value':null
            },{
              'attribute': 'padding-bottom',
              'unit': 'px',
              'description': 'section bottom offset',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'padding-left',
              'unit': 'px',
              'description': 'section left offset',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'padding-right',
              'unit': 'px',
              'description': 'section right offset',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'padding-top',
              'unit': 'px',
              'description': 'section top offset',
              'default': 'n/a',
              'value':null
            },{
              'attribute': 'text-align',
              'unit': 'string',
              'description': 'css text-align',
              'default': 'center',
              'value':null
            },
          ]
        },
        'mj-column' : {
          name: "Colonne",
          tag: "mj-column",
          options: []
        },
        'mj-text' : {
          name: "Texte",
          tag: "mj-text",
          options: []
        },
        'mj-image' : {
          name: "Image",
          tag: "mj-image",
          options: []
        }
      }
    };
  },
  methods: {
    add: function(el, selfStyle, wrapperStyle) {
      this.$store.commit('add', {
        name: this.mjmlComponents[el].name,
        tag: this.mjmlComponents[el].tag,
        selfStyle:selfStyle,
        wrapperStyle:wrapperStyle,
        tasks:[],
        options: this.mjmlComponents[el].options
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
