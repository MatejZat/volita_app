//IMPORT STORE
import { createStore } from 'vuex'

//IMPORT LAYOUTMODULE
import layoutModule from "@/store/modules/layout.module";

//IMPORT MENUMODULE
import menuModule from "@/store/modules/menu.module";

export default createStore({

    modules: {
        //LAYOUTMODULE
        layoutModule,

        //MENUMODULE
        menuModule

    },

    state: {},
    mutations: {},
    getters: {},
    actions: {},

})