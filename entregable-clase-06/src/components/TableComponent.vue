<template>
  <div align="col">
    <table class="table" :class="cssClasses">
      <thead>
        <tr>
          <th scope="col" v-for="(title, index) in titles" :key="index">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td v-for="(characteristic, idx) in product" :key="idx">
            {{ characteristic }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    titles: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    cssClasses: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>