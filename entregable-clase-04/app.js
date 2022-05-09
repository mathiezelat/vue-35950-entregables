Vue.component('table-component', {
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
            required: true
        }
    },
    template: `
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
                    <tr v-for="(product, i) in products" :key="product.id">
                        <td v-for="(characteristic, c) in product">
                            {{ characteristic }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});

let app = new Vue({
    el: '#app',
    data: {
        italian: {
            titles: ['Id', 'Name', 'Description', 'Price'],
            products: [
                {
                    id: 1,
                    name: 'Spaghetti alla puttanesca',
                    description: 'Es un plato elaborado con pasta espagueti y con una salsa denominada sugo alla puttanesca',
                    price: 575.0,
                },
                {
                    id: 2,
                    name: 'Pizza Napoletana ai carciofi',
                    description: 'É una variante deliziosa della classica pizza, una ricetta dal sapore delicato arricchita con filante mozzarella di bufala',
                    price: 675.0,
                },
                {
                    id: 3,
                    name: 'Porchetta umbra a cottura lunga',
                    description: 'É un piatto tipico dell\'Italia centrale e di poche regioni settentrionali',
                    price: 845.0,
                },
                {
                    id: 4,
                    name: 'Orecchiette alle cime di rapa',
                    description: 'Un plato típico de la cocina de Puglia , elaborado con ingredientes naturales',
                    price: 845.0,
                },
            ],
            cssClasses: {
                'table-dark': true,
                'text-warning': true,
                'table-striped': true
            }
        },
        drinks: {
            titles: ['Id', 'Name', 'Price'],
            products: [
                {
                    id: 1,
                    name: 'Pepsi 1L',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Coca-Cola 1.25L' ,
                    price: 115
                },
                {
                    id: 3,
                    name: 'Fanta 600ML',
                    price: 65
                },
                {
                    id: 4,
                    name: 'Sprite 2L',
                    price: 200
                }
            ], 
            cssClasses: {
                'table-warning': true,
                'text-danger': true
            }
        },
        desserts: {
            titles: ['Id', 'Name', 'Price'],
            products: [
                {
                    id: 1,
                    name: 'Kunāfah',
                    price: 140
                },
                {
                    id: 2,
                    name: 'Torrone',
                    price: 50
                },
                {
                    id: 3,
                    name: 'Île flottante',
                    price: 110
                },
                {
                    id: 4,
                    name: 'Appeltaart',
                    price: 200
                }
            ],
            cssClasses: {
                'table-danger': true,
                'text-info': true,
                'table-hover': true
            }
        }
    },
});
