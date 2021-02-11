<template>
  <div>
    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-outline-light" @click="showModal = true"><i class="bi bi-gear-fill"></i></button>
      <button type="button" class="btn btn-outline-light" @click="duplicate(bloc)"><i class="bi bi-files"></i></button>
      <button type="button" class="btn btn-outline-light" @click="remove(bloc.id)"><i class="bi bi-trash"></i></button>
    </div>

    <!-- Modal -->
    <div v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click.self="showModal = false">
          <div class="modal-dialog modal-xl text-dark" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ bloc.name }} Options</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div class="row">
                    <div class="form-group col-12 col-lg-6" v-for="(option, index) in bloc.options" :key="index">
                      <label>{{ option.attribute }}</label>
                      <div class="input-group">
                        <input type="text" class="form-control" v-model="option.value" :placeholder="option.default">

                        <div class="input-group-append">
                          <span class="input-group-text">{{ option.unit }}</span>
                        </div>
                      </div>
                      <small class="form-text text-muted">{{ option.description }}</small>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="showModal = false">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "BlocOptions",
  props: {
    bloc: {}
  },
  data() {
    return {
      showModal: false,
    };
  },
  updated() {
    // console.log(this.valueString);
  },
  methods: {
    remove(id) {
      console.log(id)
      this.$store.commit('remove',id)
    },
    duplicate(bloc){
      this.$store.commit('duplicate',bloc)
    }
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: auto;
  outline: 0;
}
</style>
