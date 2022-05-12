<template>
  <div id="app">
    <HelloWorld msg="Clase 06 - Entregable" />
    <div class="container">  
      <TableComponent 
        :titles="italian.titles"
        :products="italian.products"
        :cssClasses="italian.cssClasses"
      />
      <TableComponent 
        :titles="drinks.titles"
        :products="drinks.products"
        :cssClasses="drinks.cssClasses"
      />
      <TableComponent 
        :titles="desserts.titles"
        :products="desserts.products"
        :cssClasses="desserts.cssClasses"
      />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TableComponent from "./components/TableComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TableComponent,
  },
  data() {
    return {
      italian: {
        titles: ["Id", "Name", "Description", "Price"],
        products: [
          {
            id: 1,
            name: "Spaghetti alla puttanesca",
            description:
              "Es un plato elaborado con pasta espagueti y con una salsa denominada sugo alla puttanesca",
            price: 575.0,
          },
          {
            id: 2,
            name: "Pizza Napoletana ai carciofi",
            description:
              "É una variante deliziosa della classica pizza, una ricetta dal sapore delicato arricchita con filante mozzarella di bufala",
            price: 675.0,
          },
          {
            id: 3,
            name: "Porchetta umbra a cottura lunga",
            description:
              "É un piatto tipico dell'Italia centrale e di poche regioni settentrionali",
            price: 845.0,
          },
          {
            id: 4,
            name: "Orecchiette alle cime di rapa",
            description:
              "Un plato típico de la cocina de Puglia , elaborado con ingredientes naturales",
            price: 845.0,
          },
        ],
        cssClasses: {
          "table-dark": true,
          "text-warning": true,
          "table-striped": true,
        },
      },
      drinks: {
        titles: ["Id", "Name", "Price"],
        products: [
          {
            id: 1,
            name: "Pepsi 1L",
            price: 100,
          },
          {
            id: 2,
            name: "Coca-Cola 1.25L",
            price: 115,
          },
          {
            id: 3,
            name: "Fanta 600ML",
            price: 65,
          },
          {
            id: 4,
            name: "Sprite 2L",
            price: 200,
          },
        ],
        cssClasses: {
          "table-warning": true,
          "text-danger": true,
        },
      },
      desserts: {
        titles: ["Id", "Name", "Price"],
        products: [
          {
            id: 1,
            name: "Kunāfah",
            price: 140,
          },
          {
            id: 2,
            name: "Torrone",
            price: 50,
          },
          {
            id: 3,
            name: "Île flottante",
            price: 110,
          },
          {
            id: 4,
            name: "Appeltaart",
            price: 200,
          },
        ],
        cssClasses: {
          "table-danger": true,
          "text-info": true,
          "table-hover": true,
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
