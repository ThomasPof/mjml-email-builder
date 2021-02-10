import { createStore } from "vuex"

const store = createStore({
   state:{
      name: "Email builder",
      currentId: 0,
      list: []
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
         console.log('id',state.currentId)
         element.id = state.id
         state.list.push(element)
         state.currentId++
      },
   }
})

export default store
