<template>
  <div>
    <p class="d-block p-3 bg-primary text-white">MJML Builder</p>
    <nav class="navbar navbar-light bg-light px-4">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="resetBuilder()">Nouveau projet</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="importProject()">Importer un projet</a>
        </li>
      </ul>
    </nav>
    <p class="font-weight-bold px-3 pt-3 pb-2 mb-0 small text-uppercase">Components</p>
    <nav class="navbar navbar-light bg-light px-4">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="component in mjmlComponents" :key="component">
          <a href="#" class="nav-link" @click.prevent="addComponent(component.tag)">{{ component.name }}</a>
        </li>
      </ul>
    </nav>
    <p class="font-weight-bold px-3 pt-3 pb-2 mb-0 small text-uppercase">pre-built sections</p>
    <nav class="navbar navbar-light bg-light px-4">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="layout in layouts" :key="layout">
          <a href="#" class="nav-link" @click.prevent="addLayout(layout.layout)">{{ layout.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      layouts: [
        {
          name: "Texte + Image",
          layout: '{"name":"Section","tag":"mj-section","selfClass":"","childWrapperClass":"d-flex","options":[{"attribute":"background-color","unit":"color","description":"section color","default":"n/a","value":null},{"attribute":"background-position","unit":"percent / \'left\',\'top\',... (2 values max)","description":"css background position (see outlook limitations below)","default":"top center","value":null},{"attribute":"background-position-x","unit":"percent / keyword","description":"css background position x","default":"none","value":null},{"attribute":"background-position-y","unit":"percent / keyword","description":"css background position y","default":"none","value":null},{"attribute":"background-repeat","unit":"string","description":"css background repeat","default":"repeat","value":null},{"attribute":"background-size","unit":"px/percent/\'cover\'/\'contain\'","description":"css background size","default":"auto","value":null},{"attribute":"background-url","unit":"url","description":"background url","default":"n/a","value":null},{"attribute":"border","unit":"string","description":"css border format","default":"none","value":null},{"attribute":"border-bottom","unit":"string","description":"css border format","default":"n/a","value":null},{"attribute":"border-left","unit":"string","description":"css border format","default":"n/a","value":null},{"attribute":"border-radius","unit":"px","description":"border radius","default":"n/a","value":null},{"attribute":"border-right","unit":"string","description":"css border format","default":"n/...'
        }
      ]
    };
  },
  methods: {
    addComponent: function(el, selfStyle, wrapperStyle) {
      this.$store.commit('addComponent', {
        tag: el,
        selfStyle:selfStyle,
        wrapperStyle:wrapperStyle,
      })
    },
    addLayout: function(layout) {
      // alert('Coming soon...')
      // console.log('Layout',layout);
      this.$store.commit('addLayout', layout)
    },
    importProject: function() {
      alert('soon...')
    },
    resetBuilder: function() {
      if(confirm("Vous allez supprimer toute progression.")) {
        this.$store.commit('reset')
      }
    }
  },
  computed: {
    mjmlComponents() {
        return this.$store.state.mjmlComponents
    },
  }
}
</script>
