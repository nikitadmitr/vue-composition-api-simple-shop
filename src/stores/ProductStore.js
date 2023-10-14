import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        count: 0,
    }),
    getters: {
        getProducts: (state) => state.products,
        getProduct: (state) => (id) =>
            state.products.find((product) => product.id == id),
    },
    actions: {
        async loadProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            this.products = data.products;
        },
    },
});
