<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        <!-- <h3 class="font-weight-light mt-4">A Fazer {{ $store.getters.tarefasAFazer.length }}</h3> -->
        <h3 class="font-weight-light mt-4">A Fazer {{ tarefasAFazer.length }}</h3>
        
        <!-- <ul class="list-group" v-if="$store.getters.tarefasAFazer.length > 0"> -->
        <ul class="list-group" v-if="tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a Fazer.</p>

        <!-- <h3 class="font-weight-light mt-4">Concluídas {{ $store.getters.totalDeTarefasConcluidas }}</h3> -->
        <h3 class="font-weight-light mt-4">Concluídas {{ totalDeTarefasConcluidas }}</h3>
        
        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa concluída.</p>


        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />

    </div>
</template>

<script>

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'
import { mapGetters, mapState } from 'vuex';

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    computed: {
        ...mapState({
            tarefas: x => x.tarefas
        }),
        // ...mapGetters({

        // }),
        ...mapGetters(['tarefasAFazer', 'tarefasConcluidas', 'totalDeTarefasConcluidas']),
        // com a implementação do mapGetters não precisa mais usar a tarefaConcluida
        // tarefaConcluida() {
        //     return this.$store.getters.tarefasConcluidas
        // }
    },
    created() {
        // 1° nome da mutaion 2° - payload:: dados do servidor 3°
        this.$store.commit({
            type: 'listarTarefas',
            tarefas: [
                { id: 1, titulo: 'Aprender Vue', concluido: true },
                { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                { id: 3, titulo: 'Aprender Vuex', concluido: false }
            ]
        })
    },
    methods: {
        exibirFormularioCriarTarefa() {
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    }
}
</script>