<template>
  <q-page class="fit column wrap justify-start items-start content-start">
    <div class="row">
      <img
        alt="Quasar logo"
        src="~assets/logo_provisorio.svg"
        style="height: 200px; opacity: 0.2"
      />
    </div>
    <div class="row text-h2">Bem vindo ao Sistema de vendas de tickets</div>
    <div class="row text-h2"><q-btn to="/passo2">Iniciar</q-btn></div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
