<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de Gereneciamento de Estado Centralizado com Vue.</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 border-right">
          <TarefasLista />
        </div>
        <!-- <div class="col-dm-3">
          <Contador />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

// import Contador from '@/components/Contador';
import TarefasLista from '@/components/TarefasLista.vue'

export default {
  components: {
    // Contador,
    TarefasLista
    
  }
}
</script>