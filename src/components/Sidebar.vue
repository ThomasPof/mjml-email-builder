<template>
  <div>
    <p class="font-weight-bold px-2 pt-3 pb-2 mb-0">Composants</p>
    <nav class="navbar navbar-light bg-light flex-column">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="component in mjmlComponents" :key="component">
          <a href="#" class="nav-link" @click.prevent="addComponent(component.tag)">{{ component.name }}</a>
        </li>
      </ul>
    </nav>
    <p class="font-weight-bold px-2 pt-3 pb-2 mb-0">Layouts</p>
    <nav class="navbar navbar-light bg-light flex-column">
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
          layout: [
            {
              tag: 'mj-section',
              child: [
                {
                  tag: 'mj-column',
                  child: [
                    {
                      tag: 'mj-text',
                    }
                  ]
                },{
                  tag: 'mj-column',
                  child: [
                    {
                      tag: 'mj-text',
                    }
                  ]
                }
              ]
            }
          ]
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
      alert('Coming soon...')
      console.log('Layout',layout);
      // this.$store.commit('addLayout', layout)
    },
  },
  computed: {
    mjmlComponents() {
        return this.$store.state.mjmlComponents
    },
  }
}
</script>
