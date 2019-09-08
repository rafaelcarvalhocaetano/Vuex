<template>
    <div>
        <!-- <h2 class="font-weight-light">Contator: {{ contator }}</h2> -->
        <!-- <h2 class="font-weight-light">Contator: {{ $store.state.contador }}</h2> -->
        <h2 class="font-weight-light">Contator: {{ contador }}</h2>
        <h2 class="font-weight-light">Contador-Alias: {{ contadorAlias }}</h2>
        <h4 class="font-weight-light">Contador-Multiplicado: {{ contadorMultiplicado }}</h4>
        <button class="btn btn-lg btn-danger mr-1" @click="decrementa">-</button>
        <button class="btn btn-lg btn-success" @click="incrementa">+</button>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    data() {
        return {
            contadorLocal: 2
        }
    },
    // data() {
    //     return {
    //         contator: 0
    //     }
    // },
    // ou
    // computed: {
    //     // get não tem como passar valor somente recebe
    //     contador() {
    //         return this.$store.state.contador;
    //     }
    // },
    // ou
    // computed: mapState(['contador']),
    // ou
    computed: {
        ...mapState({
            contador: x => x.contador,
            // ou
            // contador: 'contador'
            // trocando nome do objeto do stado
            contadorAlias: 'contador',
            contadorMultiplicado(state) {
            return state.contador * this.contadorLocal;
            }
        }),
        // pode usar outras computed properties
    },
    methods: {
        decrementa() {
            // this.contator --;
            this.$store.state.contador --;

        },
        incrementa() {
            // this.contator ++;
            this.$store.state.contador ++;
        }
    }
}
</script>