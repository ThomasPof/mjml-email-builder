<template>
  <div class="h-100">
    <nav class="navbar navbar-dark bg-darken navbar-expand" id="preview-navbar">
      <ul class="navbar-nav w-100 d-flex align-items-center">
        <li class="nav-item">
          <a class="nav-link small" :class="[view === 'mjml' ? 'active' : '']" href="#" @click.prevent="view = 'mjml'">MJML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small" :class="[view === 'html' ? 'active' : '']" href="#" @click.prevent="view = 'html';">HTML</a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link small" :class="[view === 'live' ? 'active' : '']" href="#" @click.prevent="view = 'live';size=800">Preview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="[view === 'live' && size === 800 ? 'active' : '']" href="#" @click.prevent="view = 'live';size=800"><i class="bi bi-display h5"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="[view === 'live' && size === 320 ? 'active' : '']" href="#" @click.prevent="view = 'live';size=320"><i class="bi bi-phone h5"></i></a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link small" href="#" @click.prevent="createHtml(mjmlCode)"><i class="bi bi-arrow-clockwise h5"></i></a>
        </li>
      </ul>

    </nav>

    <div class="position-relative overflow-hidden full-height">
      <transition name="fade">
        <div v-show="loading && view != 'mjml'">
          <div class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style="background-color:rgba(0,0,0,0.5)">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </transition>

      <div v-show="view == 'mjml'" class="small">
        <pre v-highlightjs >
          <code class="html full-height">{{ mjmlCode }}</code>
        </pre>
      </div>

      <div v-show="view == 'html'" class="small">
        <pre v-highlightjs >
          <code class="html full-height">{{ htmlCode }}</code>
        </pre>
      </div>

      <div v-show="view == 'live'" class="bg-white">
        <iframe class="mw-100 mx-auto d-block full-height" :srcdoc="htmlCode" align="top"></iframe>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { indent } from 'indent.js'

export default {
  name: "mjml-code-viewer",
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      htmlCode:"",
      view: 'live',
      size : 800,
      loading: false,
    };
  },
  computed: {
    mjmlCode() {
      let tempCode = "";
      function generateTag(el) {
        for (let val of Object.values(el)) {
          tempCode += '<'+ val.tag
            for(let option of val.options) {
              if(option.value) {
                tempCode += "\r\n" + option.attribute +'="'+option.value+'"'
              }
            }
          tempCode += '>\r\n';
          if(val.content)
            tempCode += val.content+'\r\n'
          generateTag(val.tasks)
          tempCode += '</'+val.tag+'>\r\n';
        }
        return tempCode;
      }
      return indent.html("<mjml>\r\n<mj-body>\r\n" + generateTag(Object.values(this.tasks)) + "</mj-body>\r\n</mjml>",
        {
          tabString: "  "
        });
    },
  },
  watch: {
    size(targetWidth) {
      console.log(targetWidth);
      this.resize();

    },
    mjmlCode(newValue) {
      // console.log('update')
      window.localStorage.setItem('savedLayout',JSON.stringify(this.$store.state.list));
      window.localStorage.setItem('savedId',this.$store.state.currentId);
      console.log(this.$store.state)
      this.createHtml(newValue)
    }
  },
  methods: {
    createHtml(mjml) {
      this.loading = true
      axios.post("https://api.mjml.io/v1/render", {
        "mjml":mjml
      }, {
        auth: {
          username: "cbead1cc-fbef-4171-ad13-67069525c4d6",
          password: "7b3ec81e-1e60-4c2e-82a7-ce91c1f127d7"
        }
      }).then(response => {
        console.log(response)
        this.htmlCode = response.data.html
        this.loading = false
      })
    },
    resize() {
      let iframe = document.querySelector('iframe')
      let fullHeight = document.querySelectorAll('.full-height')
      iframe.setAttribute('width',this.size)

      console.log(fullHeight);

      Array.from(fullHeight).forEach(el => {
        el.style.height = window.innerHeight - document.querySelector('#preview-navbar').offsetHeight + 'px';
      })
    }
  },
  mounted() {
    let savedLayout = window.localStorage.getItem('savedLayout');
    let savedId = window.localStorage.getItem('savedId');
    if(savedId && savedLayout) {
      console.log('saved ready')
      this.$store.commit('loadSavedLayout',{list:JSON.parse(savedLayout),id: savedId})
    }

    window.onresize = this.resize();
    window.onload = this.resize();
  }
};
</script>

<style scoped>
@import '../../node_modules/highlight.js/styles/atom-one-dark.css';

iframe {
  background-color: white;
  border: 0;
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-transition: all .25s ease-out;
  transition: all .25s ease-out;
}
</style>
