<template>
  <div class="h-100">
    <nav class="navbar navbar-dark bg-dark navbar-expand">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a class="nav-link" :class="[view === 'mjml' ? 'active' : '']" href="#" @click.prevent="view = 'mjml'">MJML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="[view === 'html' ? 'active' : '']" href="#" @click.prevent="view = 'html';">HTML code</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="[view === 'live' ? 'active' : '']" href="#" @click.prevent="view = 'live';">Live preview</a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link" href="#" @click.prevent="createHtml(mjmlCode)">Refresh</a>
        </li>
      </ul>

    </nav>

    <textarea name="" class="form-control bg-dark text-white p-3 w-100" rows="30" v-model="mjmlCode" v-show="view == 'mjml'"></textarea>

    <textarea name="" class="form-control bg-dark text-white p-3 w-100" rows="30" v-model="htmlCode" v-show="view == 'html'"></textarea>

    <iframe class="w-100" :srcdoc="htmlCode" v-show="view == 'live'" height="800px"></iframe>
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
      view: 'mjml',
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
    mjmlCode(newValue) {
      console.log('update')
      window.localStorage.setItem('savedLayout',JSON.stringify(this.$store.state.list));
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
    }
  },
  mounted() {
    let savedLayout = window.localStorage.getItem('savedLayout');
    this.$store.commit('loadSavedLayout',JSON.parse(savedLayout))
  }
};
</script>

<style scoped>
iframe {
  background-color: white;
}
</style>
