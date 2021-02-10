import { createStore } from "vuex"

const store = createStore({
   state:{
      name: "Email builder",
      currentId: 0,
      list: [],
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
            ],
            tasks: []
         },
         'mj-column' : {
            name: "Colonne",
            tag: "mj-column",
            options: [],
            tasks: []
         },
         'mj-text' : {
            name: "Texte",
            tag: "mj-text",
            options: [],
            tasks: []
         },
         'mj-image' : {
            name: "Image",
            tag: "mj-image",
            options: [],
            tasks: []
         }
      }
   },
   mutations: {
      remove (state, idx) {
         console.log('id to delete',idx)
         console.log('list',state.list)
         // state.list.splice(idx, 1);

         // function findElement(all,idx) {
         //    for (let item of Object.values(all)) {
         //       if(item.id === idx) {
         //          all.splice
         //       }
         //    }

         // }
      },
      add(state, element) {
         console.log('Added Element',element)
         let tempEl = JSON.parse(JSON.stringify(store.getters.getModelByTag(element.tag)))
         let id = JSON.parse(JSON.stringify(state.currentId))
         tempEl.id = id
         state.list.push(tempEl)
         state.currentId++
      },
   },
   getters: {
      getModelByTag:  (state) => (tag) => {
         return state.mjmlComponents[tag]
      }
   }
})

export default store
