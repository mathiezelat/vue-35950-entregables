let app = new Vue({
    el: '#app',
    data: {
        valorContador: 0,
    },
    methods: {
        incrementar() {
            this.valorContador++;
        },
        decrementar() {
            this.valorContador--;
        }
    }
});