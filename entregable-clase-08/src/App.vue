<template>
  <div id="app">
    <h1 class="ps-5">Formulario</h1>
    <FormularioRegistro @submit-form="submitForm" />
    <TablaRegistro :users="users" />
  </div>
</template>

<script>
import FormularioRegistro from './components/FormularioRegistro.vue'
import TablaRegistro from './components/TablaRegistro.vue'
export default {
  name: 'App',
  components: {
    FormularioRegistro,
    TablaRegistro
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    submitForm(form) {
      this.users.push(form)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
