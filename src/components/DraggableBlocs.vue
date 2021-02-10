<template>
  <draggable
    class="dragArea pb-3"
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
    ghost-class="border-success"
    :move="checkMove"
    :change="changed"
  >
    <template #item="{ element }">
      <div class="m-3 border border-secondary bg-white rounded-sm position-relative" :class="element.selfClass">
        <div class="position-absolute text-gray-600 p-3 d-flex align-items-center justify-content-between w-100" style="top:0; left:0px">
          <p class="text-gray-600 my-0">{{ element.name }}</p>
          <BlocOptions :bloc="element"/>
        </div>
        <draggable-blocs v-if="element.tasks" :tasks="element.tasks" class="pt-5" :class="element.childWrapperClass" />
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
      console.log(this)
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
