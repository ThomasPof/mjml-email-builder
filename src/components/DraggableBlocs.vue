<template>
  <draggable
    class="dragArea"
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
    ghost-class="border-success"
    :move="checkMove"
    :change="changed"
    animation="150"
    easing="cubic-bezier(1, 0, 0, 1)"
  >
    <template #item="{ element }">
      <div class="m-3 border border-secondary bg-white position-relative" :class="element.selfClass" :data-childof="element.childOf">
        <div class="position-absolute bg-dark text-white py-2 px-3 d-flex align-items-center justify-content-between w-100" style="top:0; left:0px">
          <!-- <p class="text-white my-0">{{ element.name }}</p> -->
          <input type="text" class="form-control bg-dark text-white form-control-sm border-0 w-50" v-model="element.name">
          <BlocOptions :bloc="element"/>
        </div>
        <draggable-blocs v-if="element.tasks" :tasks="element.tasks" class="pt-5" :class="element.childWrapperClass" :data-tag="element.tag"/>
        <textarea v-if="element.tag === 'mj-text'" name="" id="" class="form-control mt-3" rows="10" v-model="element.content"></textarea>
        <img v-if="element.tag === 'mj-image'" src="https://via.placeholder.com/80" alt="" class="mt-3">
      </div>
    </template>
  </draggable>
</template>

<script>
import BlocOptions from "./BlocOptions.vue";
import draggable from "vuedraggable";

export default {
  name: "draggable-blocs",
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable,
    BlocOptions
  },
  data() {
    return {
      mjml: "",
      activeNames:""
    };
  },
  methods: {
    changed: (evt) => {
      console.log('evt',evt);
    },
    checkMove: (evt) => {
      console.log('checkMove',evt)
      // console.log(this)
      // Example: https://jsbin.com/nawahef/edit?js,output
      let childOf = evt.dragged.getAttribute('data-childof')
      let parentTag = evt.to.getAttribute('data-tag')

      console.log("dragged child of",childOf); // dragged HTMLElement
      console.log("dragged inside",parentTag); // dragged HTMLElement
      if( !childOf || (parentTag && childOf.indexOf(parentTag) == -1) ) {
        return false
      }
      // console.log("dragged inside",evt.to); // dragged HTMLElement
      // console.log(evt.draggedRect); // DOMRect {left, top, right, bottom}
      // console.log(evt.related); // HTMLElement on which have guided
      // console.log(evt.relatedRect); // DOMRect
      // console.log(evt.willInsertAfter); // Boolean that is true if Sortable will insert drag element after target by default
      // console.log(originalEvent.clientY); // mouse position
      // return false; — for cancel
      // return -1; — insert before target
      // return 1; — insert after target
      // return true; — keep default insertion point based on the direction
      // return void; — keep default insertion point based on the direction
        // Here to check if it's allowed
    },
    moved: () => {
    }
  },
};

</script>

<style scoped>
.dragArea {
  min-height: 120px;
}
</style>
