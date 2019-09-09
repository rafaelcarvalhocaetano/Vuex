import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: []
    },
    // pensar como um computed dos components
    getters: {
        // tarefasConcluidas: (t) => {
        //     return t.tarefas.filter(x => x.concluido);
        // }
        tarefasConcluidas: t =>  t.tarefas.filter(x => x.concluido),
        tarefasAFazer: s => s.tarefas.filter(x => !x.concluido),
        totalDeTarefasConcluidas: (s, i) => i.tarefasConcluidas.legth,
        // não funciona desta maneira
        // buscaTarefaPorId: state => state.tarefas.find(x => x.id === id)
        // buscaTarefaPorId: (state) => {
        //     return (id) => {
        //         return state.tarefas.find(x => x.id === id)
        //     }
        // }
        // abreviação do metodos
        buscaTarefaPorId: s => id => s.tarefas.find(x => x.id === id)
    },
    // rodando de forma sincrona
    mutations: {
        listarTarefas: (state, payload) => {
            state.tarefas = payload.tarefas
            // Também funciona
            // state.tarefas = [
                // { id: 1, titulo: 'Aprender Vue', concluido: true },
                // { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                // { id: 3, titulo: 'Aprender Vuex', concluido: false }
            // ]
        }
    },
    // rodando de forma asincrona
    actions: {
        // pode enviar vários commit()
        buscarTarefas: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, titulo: 'Aprender Vue', concluido: true },
                        { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                        { id: 3, titulo: 'Aprender Vuex', concluido: false }
                    ]);
                });
            });
        },
        listarTarefas: (context, payload) => {
            // context.commit('listarTarefas', payload);
            return context.dispatch('buscarTarefas').then(x => {
                context.commit('listarTarefas', { tarefas: x });
            });
        }
    }
});