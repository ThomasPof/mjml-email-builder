<template>
  <div class="h-100">
    <nav class="navbar navbar-dark bg-dark navbar-expand" id="preview-navbar">
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

    <div v-show="view == 'mjml'" class="px-3">
      <textarea name="" class="form-control bg-dark text-white p-3 w-100" rows="30" v-model="mjmlCode" ></textarea>
    </div>

    <div v-show="view == 'html'" class="px-3">
      <textarea name="" class="form-control bg-dark text-white p-3 w-100" rows="30" v-model="htmlCode"></textarea>
    </div>

    <div v-show="view == 'live'" class="bg-white overflow-hidden" id="iframeWrapper">
      <iframe class="mw-100 mx-auto d-block" :srcdoc="htmlCode" align="top"></iframe>
    </div>

  </div>
</template>

<script>
import axios from "axios";

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
    };
  },
  computed: {
    mjmlCode() {
      let tempCode = "";
      function generateTag(el) {
        for (let val of Object.values(el)) {
          tempCode += '<'+ val.tag +' '
            for(let option of val.options) {
              if(option.value) {
                tempCode += option.attribute +'="'+option.value+'" '
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
      // let htmlCode = JSON.stringify(this.tasks, null, 2);
      return generateTag(Object.values(this.tasks))
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
      axios.post("https://api.mjml.io/v1/render", {
        "mjml":"<mjml><mj-body>"+ mjml + "</mj-body></mjml>"
      }, {
        auth: {
          username: "cbead1cc-fbef-4171-ad13-67069525c4d6",
          password: "7b3ec81e-1e60-4c2e-82a7-ce91c1f127d7"
        }
      }).then(response => {
        console.log(response)
        this.htmlCode = response.data.html
      })
    },
    resize() {
      let iframe = document.querySelector('iframe')
      // let wrapperWidth = document.querySelector('#iframeWrapper').offsetWidth
      // let iframeScale = 1;

      // if(wrapperWidth < this.size) {
        // console.log('trop petit')
        // iframeScale = wrapperWidth / this.size ;
      // }
      // console.log('ok')
      // iframe.style.transform = "scale("+ iframeScale +")"
      iframe.setAttribute('width',this.size)
      iframe.style.height = window.innerHeight - document.querySelector('#preview-navbar').offsetHeight + 'px';
    }
  },
  mounted() {
    let savedLayout = window.localStorage.getItem('savedLayout');
    let savedId = window.localStorage.getItem('savedId');
    if(savedId && savedLayout) {
      this.$store.commit('loadSavedLayout',{list:JSON.parse(savedLayout),id: savedId})
    }

    window.onresize = this.resize;
    window.onload = this.resize();
  }
};
</script>

<style scoped>
iframe {
  background-color: white;
  border: 0;
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-transition: all .25s ease-out;
  transition: all .25s ease-out;
}
</style>
