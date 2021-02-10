import { createStore } from "vuex"
import cloneDeep from 'lodash.clonedeep'

const store = createStore({
   state:{
      name: "Email builder",
      currentId: 0,
      list: [],
      mjmlComponents: {
         'mj-section': {
            name: "Section",
            tag: "mj-section",
            selfClass: "",
            childWrapperClass: "d-flex",
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
            tasks: [],
            content: false,
         },
         'mj-column' : {
            name: "Colonne",
            tag: "mj-column",
            selfClass: "flex flex-fill",
            childWrapperClass: "",
            options: [
               {
                  "attribute": "background-color",
                  "unit": "color",
                  "description": "background color for a column",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-background-color",
                  "unit": "color",
                  "description": "requires: a padding, inner background color for column",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "border",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "none",
               },
               {
                  "attribute": "border-bottom",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "border-left",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "border-right",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "border-top",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "border-radius",
                  "unit": "percent/px",
                  "description": "border radius",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border",
                  "unit": "string",
                  "description": "css border format",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border-bottom",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border-left",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border-right",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border-top",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "inner-border-radius",
                  "unit": "percent/px",
                  "description": "border radius ; requires a padding",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "width",
                  "unit": "percent/px",
                  "description": "column width",
                  "default attributes": "(100 / number of non-raw elements in section)%",
               },
               {
                  "attribute": "vertical-align",
                  "unit": "string",
                  "description": "middle/top/bottom",
                  "default attributes": "top",
               },
               {
                  "attribute": "padding",
                  "unit": "px",
                  "description": "supports up to 4 parameters",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "padding-top",
                  "unit": "px",
                  "description": "section top offset",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "padding-bottom",
                  "unit": "px",
                  "description": "section bottom offset",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "padding-left",
                  "unit": "px",
                  "description": "section left offset",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "padding-right",
                  "unit": "px",
                  "description": "section right offset",
                  "default attributes": "n/a",
               },
               {
                  "attribute": "css-class",
                  "unit": "string",
                  "description": "class name, added to the root HTML element created",
                  "default attributes": "n/a",
               },
            ],
            tasks: [],
            content: false,
         },
         'mj-text' : {
            name: "Texte",
            tag: "mj-text",
            selfClass: "flex flex-fill",
            childWrapperClass: "",
            options: [
               {
               'attribute': 'color',
               'unit': 'color',
               'description': 'text color',
               'default value': '#000000',
               },
               {
               'attribute': 'font-family',
               'unit': 'string',
               'description': 'font',
               'default value': 'Ubuntu, Helvetica, Arial, sans-serif',
               },
               {
               'attribute': 'font-size',
               'unit': 'px',
               'description': 'text size',
               'default value': '13px',
               },
               {
               'attribute': 'font-style',
               'unit': 'string',
               'description': 'normal/italic/oblique',
               'default value': 'n/a',
               },
               {
               'attribute': 'font-weight',
               'unit': 'number',
               'description': 'text thickness',
               'default value': 'n/a',
               },
               {
               'attribute': 'line-height',
               'unit': 'px',
               'description': 'space between the lines',
               'default value': '1',
               },
               {
               'attribute': 'letter-spacing',
               'unit': 'px',
               'description': 'letter spacing',
               'default value': 'none',
               },
               {
               'attribute': 'height',
               'unit': 'px',
               'description': 'The height of the element',
               'default value': 'n/a',
               },
               {
               'attribute': 'text-decoration',
               'unit': 'string',
               'description': 'underline/overline/line-through/none',
               'default value': 'n/a',
               },
               {
               'attribute': 'text-transform',
               'unit': 'string',
               'description': 'uppercase/lowercase/capitalize',
               'default value': 'n/a',
               },
               {
               'attribute': 'align',
               'unit': 'string',
               'description': 'left/right/center/justify',
               'default value': 'left',
               },
               {
               'attribute': 'container-background-color',
               'unit': 'color',
               'description': 'inner element background color',
               'default value': 'n/a',
               },
               {
               'attribute': 'padding',
               'unit': 'px',
               'description': 'supports up to 4 parameters',
               'default value': '10px 25px',
               },
               {
               'attribute': 'padding-top',
               'unit': 'px',
               'description': 'top offset',
               'default value': 'n/a',
               },
               {
               'attribute': 'padding-bottom',
               'unit': 'px',
               'description': 'bottom offset',
               'default value': 'n/a',
               },
               {
               'attribute': 'padding-left',
               'unit': 'px',
               'description': 'left offset',
               'default value': 'n/a',
               },
               {
               'attribute': 'padding-right',
               'unit': 'px',
               'description': 'right offset',
               'default value': 'n/a',
               },
               {
               'attribute': 'css-class',
               'unit': 'string',
               'description': 'class name, added to the root HTML element created',
               'default value': 'n/a',
               },
               {
               'attribute': 'title',
               'unit': 'string',
               'description': 'tooltip & accessibility',
               'default value': 'n/a',
               },
               {
               'attribute': 'usemap',
               'unit': 'string',
               'description': 'reference to image map, be careful, it isn\'t supported everywhere',
               'default value': 'n/a',
               },
               {
               'attribute': 'width',
               'unit': 'px',
               'description': 'image width',
               'default value': '1',
               },
            ],
            tasks: false,
            content: "TEXTE ICI",
         },
         'mj-image' : {
            name: "Image",
            tag: "mj-image",
            selfClass: "flex flex-fill",
            childWrapperClass: "",
            options: [
               {
               "attribute": "align",
               "unit": "position",
               "description": "image alignment",
               "default": "center",
               },
               {
               "attribute": "alt",
               "unit": "string",
               "description": "image description",
               "default": "n/a",
               },
               {
               "attribute": "border",
               "unit": "string",
               "description": "css border definition",
               "default": "none",
               },
               {
               "attribute": "border-radius",
               "unit": "px",
               "description": "border radius",
               "default": "n/a",
               },
               {
               "attribute": "container-background-color",
               "unit": "color",
               "description": "inner element background color",
               "default": "n/a",
               },
               {
               "attribute": "css-class",
               "unit": "string",
               "description": "class name, added to the root HTML element created",
               "default": "n/a",
               },
               {
               "attribute": "fluid-on-mobile",
               "unit": "string",
               "description": "if true, will be full width on mobile even if width is set",
               "default": "n/a",
               },
               {
               "attribute": "height",
               "unit": "px",
               "description": "image height",
               "default": "auto",
               },
               {
               "attribute": "href",
               "unit": "url",
               "description": "link to redirect to on click",
               "default": "n/a",
               },
               {
               "attribute": "padding",
               "unit": "px",
               "description": "supports up to 4 parameters",
               "default": "10px 25px",
               },
               {
               "attribute": "padding-bottom",
               "unit": "px",
               "description": "bottom offset",
               "default": "n/a",
               },
               {
               "attribute": "padding-left",
               "unit": "px",
               "description": "left offset",
               "default": "n/a",
               },
               {
               "attribute": "padding-right",
               "unit": "px",
               "description": "right offset",
               "default": "n/a",
               },
               {
               "attribute": "padding-top",
               "unit": "px",
               "description": "top offset",
               "default": "n/a",
               },
               {
               "attribute": "rel",
               "unit": "string",
               "description": "specify the rel attribute",
               "default": "n/a",
               },
               {
               "attribute": "src",
               "unit": "url",
               "description": "image source",
               "default": "n/a",
               },
               {
               "attribute": "srcset",
               "unit": "url & width",
               "description": "enables to set a different image source based on the viewport",
               "default": "n/a",
               },
               {
               "attribute": "target",
               "unit": "string",
               "description": "link target on click",
               "default": "_blank",
               },
               {
               "attribute": "title",
               "unit": "string",
               "description": "tooltip & accessibility",
               "default": "n/a",
               },
               {
               "attribute": "usemap",
               "unit": "string",
               "description": "reference to image map, be careful, it isn't supported everywhere",
               "default": "n/a",
               },
               {
               "attribute": "width",
               "unit": "px",
               "description": "image width",
               "default": "1",
               },
            ],
            tasks: false,
            content: false,
         }
      }
   },
   mutations: {
      remove (state, idx) {
         console.log('id to delete',idx)
         console.log('list',state.list)

         // for (let el of state.list) {
            // console.log(state.list.find(x => x.id === idx));
         // }
         // state.list.splice(idx, 1);

         function findElement(all,idx) {
            for (let index in all) {
               console.log('index',all[index])
               console.log('idx',idx)
               if(all[index].id === idx) {
                  all.splice(index,1)
                  break
               } else {
                  findElement(all[index].tasks,idx)
               }
            }
         }
         findElement(state.list,idx)
      },
      addComponent(state, element) {
         console.log('Added Element',element)
         let tempEl = cloneDeep(store.getters.getModelByTag(element.tag))
         tempEl.id = cloneDeep(state.currentId)
         tempEl.id = id
         state.list.push(tempEl)
         state.currentId++
      },
      duplicate(state, bloc) {
         console.log('duplicate Element')
         let tempEl = cloneDeep(bloc)
         let id = cloneDeep(state.currentId)
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
