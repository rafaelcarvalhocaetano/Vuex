import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: [
            { id: 1, titulo: 'Aprender Vue', concluido: true },
            { id: 2, titulo: 'Aprender Vue Router', concluido: true },
            { id: 3, titulo: 'Aprender Vuex', concluido: false }
        ]
    }
});