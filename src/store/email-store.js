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
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-background-color",
                  "unit": "color",
                  "description": "requires: a padding, inner background color for column",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "border",
                  "unit": "string",
                  "description": "css border format",
                  "default": "none",
                  "value": null
               },
               {
                  "attribute": "border-bottom",
                  "unit": "string",
                  "description": "css border format",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "border-left",
                  "unit": "string",
                  "description": "css border format",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "border-right",
                  "unit": "string",
                  "description": "css border format",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "border-top",
                  "unit": "string",
                  "description": "css border format",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "border-radius",
                  "unit": "percent/px",
                  "description": "border radius",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border",
                  "unit": "string",
                  "description": "css border format",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border-bottom",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border-left",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border-right",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border-top",
                  "unit": "string",
                  "description": "css border format ; requires a padding",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "inner-border-radius",
                  "unit": "percent/px",
                  "description": "border radius ; requires a padding",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "width",
                  "unit": "percent/px",
                  "description": "column width",
                  "default": "(100 / number of non-raw elements in section)%",
                  "value": null
               },
               {
                  "attribute": "vertical-align",
                  "unit": "string",
                  "description": "middle/top/bottom",
                  "default": "top",
                  "value": null
               },
               {
                  "attribute": "padding",
                  "unit": "px",
                  "description": "supports up to 4 parameters",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "padding-top",
                  "unit": "px",
                  "description": "section top offset",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "padding-bottom",
                  "unit": "px",
                  "description": "section bottom offset",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "padding-left",
                  "unit": "px",
                  "description": "section left offset",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "padding-right",
                  "unit": "px",
                  "description": "section right offset",
                  "default": "n/a",
                  "value": null
               },
               {
                  "attribute": "css-class",
                  "unit": "string",
                  "description": "class name, added to the root HTML element created",
                  "default": "n/a",
                  "value": null
               },
            ],
            tasks: [],
         },
         'mj-text' : {
            name: "Texte",
            tag: "mj-text",
            selfClass: "p-3 pt-5",
            childWrapperClass: "",
            options: [
               {
               'attribute': 'color',
               'unit': 'color',
               'description': 'text color',
               'default': '#000000',
               'value': null,
               },
               {
               'attribute': 'font-family',
               'unit': 'string',
               'description': 'font',
               'default': 'Ubuntu, Helvetica, Arial, sans-serif',
               'value': null,
               },
               {
               'attribute': 'font-size',
               'unit': 'px',
               'description': 'text size',
               'default': '13px',
               'value': null,
               },
               {
               'attribute': 'font-style',
               'unit': 'string',
               'description': 'normal/italic/oblique',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'font-weight',
               'unit': 'number',
               'description': 'text thickness',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'line-height',
               'unit': 'px',
               'description': 'space between the lines',
               'default': '1',
               'value': null,
               },
               {
               'attribute': 'letter-spacing',
               'unit': 'px',
               'description': 'letter spacing',
               'default': 'none',
               'value': null,
               },
               {
               'attribute': 'height',
               'unit': 'px',
               'description': 'The height of the element',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'text-decoration',
               'unit': 'string',
               'description': 'underline/overline/line-through/none',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'text-transform',
               'unit': 'string',
               'description': 'uppercase/lowercase/capitalize',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'align',
               'unit': 'string',
               'description': 'left/right/center/justify',
               'default': 'left',
               'value': null,
               },
               {
               'attribute': 'container-background-color',
               'unit': 'color',
               'description': 'inner element background color',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'padding',
               'unit': 'px',
               'description': 'supports up to 4 parameters',
               'default': '10px 25px',
               'value': null,
               },
               {
               'attribute': 'padding-top',
               'unit': 'px',
               'description': 'top offset',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'padding-bottom',
               'unit': 'px',
               'description': 'bottom offset',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'padding-left',
               'unit': 'px',
               'description': 'left offset',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'padding-right',
               'unit': 'px',
               'description': 'right offset',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'css-class',
               'unit': 'string',
               'description': 'class name, added to the root HTML element created',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'title',
               'unit': 'string',
               'description': 'tooltip & accessibility',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'usemap',
               'unit': 'string',
               'description': 'reference to image map, be careful, it isn\'t supported everywhere',
               'default': 'n/a',
               'value': null,
               },
               {
               'attribute': 'width',
               'unit': 'px',
               'description': 'image width',
               'default': '1',
               'value': null,
               },
            ],
            tasks: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         },
         'mj-image' : {
            name: "Image",
            tag: "mj-image",
            selfClass: "p-3 pt-5",
            childWrapperClass: "",
            tasks: false,
            options: [
               {
               "attribute": "align",
               "unit": "position",
               "description": "image alignment",
               "default": "center",
               "value": null
               },
               {
               "attribute": "alt",
               "unit": "string",
               "description": "image description",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "border",
               "unit": "string",
               "description": "css border definition",
               "default": "none",
               "value": null
               },
               {
               "attribute": "border-radius",
               "unit": "px",
               "description": "border radius",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "container-background-color",
               "unit": "color",
               "description": "inner element background color",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "css-class",
               "unit": "string",
               "description": "class name, added to the root HTML element created",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "fluid-on-mobile",
               "unit": "string",
               "description": "if true, will be full width on mobile even if width is set",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "height",
               "unit": "px",
               "description": "image height",
               "default": "auto",
               "value": null
               },
               {
               "attribute": "href",
               "unit": "url",
               "description": "link to redirect to on click",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "padding",
               "unit": "px",
               "description": "supports up to 4 parameters",
               "default": "10px 25px",
               "value": null
               },
               {
               "attribute": "padding-bottom",
               "unit": "px",
               "description": "bottom offset",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "padding-left",
               "unit": "px",
               "description": "left offset",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "padding-right",
               "unit": "px",
               "description": "right offset",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "padding-top",
               "unit": "px",
               "description": "top offset",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "rel",
               "unit": "string",
               "description": "specify the rel attribute",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "src",
               "unit": "url",
               "description": "image source",
               "default": "n/a",
               "value": "https://via.placeholder.com/250"
               },
               {
               "attribute": "srcset",
               "unit": "url & width",
               "description": "enables to set a different image source based on the viewport",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "target",
               "unit": "string",
               "description": "link target on click",
               "default": "_blank",
               "value": null
               },
               {
               "attribute": "title",
               "unit": "string",
               "description": "tooltip & accessibility",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "usemap",
               "unit": "string",
               "description": "reference to image map, be careful, it isn't supported everywhere",
               "default": "n/a",
               "value": null
               },
               {
               "attribute": "width",
               "unit": "px",
               "description": "image width",
               "default": "1",
               "value": null
               },
            ],
         },
         'mj-button' : {
            name: "Button",
            tag: "mj-button",
            selfClass: "p-3 pt-5",
            childWrapperClass: "",
            tasks: false,
            content: "Don't click me!",
            options: [
               {
               'attribute': 'align',
               'unit': 'string',
               'description': 'horizontal alignment',
               'default': 'center',
               'value': null,
               },{
               'attribute': 'background-color',
               'unit': 'color',
               'description': 'button background-color',
               'default': '#414141',
               'value': null,
               },{
               'attribute': 'border',
               'unit': 'string',
               'description': 'css border format',
               'default': 'none',
               'value': null,
               },{
               'attribute': 'border-bottom',
               'unit': 'string',
               'description': 'css border format',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'border-left',
               'unit': 'string',
               'description': 'css border format',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'border-radius',
               'unit': 'px',
               'description': 'border radius',
               'default': '3px',
               'value': null,
               },{
               'attribute': 'border-right',
               'unit': 'string',
               'description': 'css border format',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'border-top',
               'unit': 'string',
               'description': 'css border format',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'color',
               'unit': 'color',
               'description': 'text color',
               'default': '#ffffff',
               'value': null,
               },{
               'attribute': 'container-background-color',
               'unit': 'color',
               'description': 'button container background color',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'css-class',
               'unit': 'string',
               'description': 'class name, added to the root HTML element created',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'font-family',
               'unit': 'string',
               'description': 'font name',
               'default': 'Ubuntu, Helvetica, Arial, sans-serif',
               'value': null,
               },{
               'attribute': 'font-size',
               'unit': 'px',
               'description': 'text size',
               'default': '13px',
               'value': null,
               },{
               'attribute': 'font-style',
               'unit': 'string',
               'description': 'normal/italic/oblique',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'font-weight',
               'unit': 'number',
               'description': 'text thickness',
               'default': 'normal',
               'value': null,
               },{
               'attribute': 'height',
               'unit': 'px',
               'description': 'button height',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'href',
               'unit': 'link',
               'description': 'link to be triggered when the button is clicked',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'inner-padding',
               'unit': 'px',
               'description': 'inner button padding',
               'default': '10px 25px',
               'value': null,
               },{
               'attribute': 'letter-spacing',
               'unit': 'px',
               'description': 'letter spacing',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'line-height',
               'unit': 'px/%/none',
               'description': 'line-height on link',
               'default': '1,2',
               'value': null,
               },{
               'attribute': 'padding',
               'unit': 'px',
               'description': 'supports up to 4 parameters',
               'default': '10px 25px',
               'value': null,
               },{
               'attribute': 'padding-bottom',
               'unit': 'px',
               'description': 'bottom offset',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'padding-left',
               'unit': 'px',
               'description': 'left offset',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'padding-right',
               'unit': 'px',
               'description': 'right offset',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'padding-top',
               'unit': 'px',
               'description': 'top offset',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'rel',
               'unit': 'string',
               'description': 'specify the rel attribute for the button link',
               'default': 'n/a',
               'value': null,
               },{
               'attribute': 'target',
               'unit': 'string',
               'description': 'specify the target attribute for the button link',
               'default': '_blank',
               'value': null,
               },{
               'attribute': 'text-align',
               'unit': 'string',
               'description': 'text-align button content',
               'default': 'none',
               'value': null,
               },{
               'attribute': 'text-decoration',
               'unit': 'string',
               'description': 'underline/overline/none',
               'default': 'none',
               'value': null,
               },{
               'attribute': 'text-transform',
               'unit': 'string',
               'description': 'capitalize/uppercase/lowercase',
               'default': 'none',
               'value': null,
               },{
               'attribute': 'vertical-align',
               'unit': 'string',
               'description': 'vertical alignment',
               'default': 'middle',
               'value': null,
               },{
               'attribute': 'width',
               'unit': 'px',
               'description': 'button width',
               'default': 'n/a',
               'value': null,
               },
            ]
         }
      },

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
         state.list.push(tempEl)
         state.currentId++
      },
      addLayout(state, layout) {
         console.log('Added Layout',layout)
         let tempLayout = []
         function buildLayout(elements,parent) {
            for (let element of elements) {
               let tempEl = cloneDeep(store.getters.getModelByTag(element.tag))
               console.log('tempEl',element)
               tempEl.id = cloneDeep(state.currentId)
               state.currentId++
               parent.push(tempEl)
               for (let subElement of Object.entries(element.child)) {
                  buildLayout(subElement);
               }
            }
         }
         buildLayout(layout,tempLayout)
         state.list.push(tempLayout)
         console.log('tempLayout',tempLayout)
         // let tempEl = cloneDeep(store.getters.getModelByTag(element.tag))
         // let id = cloneDeep(state.currentId)
         // tempEl.id = id
         // state.list.push(tempEl)
         // state.currentId++
      },
      duplicate(state, bloc) {
         console.log('duplicate Element')
         let tempEl = cloneDeep(bloc)
         tempEl.id = cloneDeep(state.currentId)
         state.list.push(tempEl)
         state.currentId++
      },
      loadSavedLayout(state, savedLayout) {
         state.list = savedLayout
      }
   },
   getters: {
      getModelByTag:  (state) => (tag) => {
         return state.mjmlComponents[tag]
      }
   }
})

export default store
