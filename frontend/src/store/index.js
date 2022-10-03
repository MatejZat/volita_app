//IMPORT STORE
import { createStore } from 'vuex'

//IMPORT LAYOUTMODULE
import layoutModule from "@/store/modules/layout.module";

export default createStore({

    modules: {
        //LAYOUTMODULE
        layoutModule,

    },

    state: {},
    mutations: {},
    getters: {},
    actions: {},

})
