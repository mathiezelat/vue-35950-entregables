<template>
  <form class="p-5" @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="nombre"
        v-model="form.nombre"
      />
    </div>
    <div class="mb-3">
      <label for="apellido" class="form-label">Apellido</label>
      <input
        type="text"
        class="form-control"
        id="apellido"
        v-model="form.apellido"
      />
    </div>
    <div class="mb-3">
      <label for="edad" class="form-label">Edad</label>
      <input type="number" class="form-control" id="edad" v-model="form.edad" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="form.email"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="pais"> Pais </label>
      <select class="form-select" id="pais" v-model="form.pais">
        <option v-for="pais in listaPaises" :key="pais">
          {{ pais }}
        </option>
      </select>
    </div>
    <h4>Selecciona tus cursos</h4>
    <div class="col col-2 mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="javascript"
          id="javascript"
          v-model="form.cursos"
        />
        <label class="form-check-label" for="javascript"> JavaScript </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="react"
          id="react"
          v-model="form.cursos"
        />
        <label class="form-check-label" for="react"> React </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="node.js"
          id="node.js"
          v-model="form.cursos"
        />
        <label class="form-check-label" for="node.js"> Node.js </label>
      </div>
    </div>
    <div class="mb-3">
      <p class="text-danger fw-bold" v-for="error in errors" :key="error">
        {{ error }}
      </p>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "FormularioRegistro",
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        pais: "",
        cursos: [],
      },
      listaPaises: ["Argentina", "Uruguay", "Chile", "Brazil", "Otro"],
      errors: [],
    };
  },
  methods: {
    capitalize(value) {
      return value.replace(/\b\w/g, (l) => l.toUpperCase());
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => (this.form[key] = ""));
      this.form.cursos = [];
    },
    submitForm() {
      this.errors.length = 0;
      if (this.form.nombre === "") this.errors.push("El nombre es obligatorio");
      if (this.form.apellido === "") this.errors.push("El apellido es obligatorio");
      if (this.form.edad === "") this.errors.push("El edad es obligatorio");
      if (this.form.email === "")this.errors.push("El correo electrónico es obligatorio");
      if (this.form.pais === "") this.errors.push("El país es obligatorio");
      if (this.form.cursos.length === 0) this.errors.push("El curso es obligatorio");
      if (
        this.form.nombre !== "" &&
        this.form.apellido !== "" &&
        this.form.edad !== "" &&
        this.form.email !== "" &&
        this.form.pais !== "" &&
        this.form.cursos.length > 0
      ) {
        this.$emit("submit-form", {
          nombre: this.capitalize(this.form.nombre),
          apellido: this.capitalize(this.form.apellido),
          edad: this.form.edad,
          email: this.form.email.toLowerCase(),
          pais: this.form.pais,
          cursos: this.form.cursos,
        });
        this.resetForm();
      }
    },
  },
};
</script>

<style>
</style>