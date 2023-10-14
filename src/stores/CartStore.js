import { defineStore } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

export const useCartStore = defineStore('cart', {
    state() {
        return {
            cartProducts: [],
        };
    },
    getters: {
        isProductInCart: (state) => (id) =>
            state.cartProducts.some((cartProduct) => cartProduct.id == id),
        getItem: (state) => (id) =>
            state.cartProducts.find((cartProduct) => cartProduct.id == id),
        cartProductsCount: (state) => state.cartProducts.length,
        completeProducts: (state) => {
            const productStore = useProductStore();

            return state.cartProducts.map((cartProduct) => {
                const product = productStore.getProduct(cartProduct.id);
                return { ...product, cnt: cartProduct.cnt };
            });
        },
        totalCost() {
            return this.completeProducts.reduce(
                (total, cartProduct) =>
                    total + cartProduct.price * cartProduct.cnt,
                0
            );
        },
    },
    actions: {
        addProductToCart(id) {
            if (!this.isProductInCart(id)) {
                this.cartProducts.push({ id, cnt: 1 });
            }
        },
        removeProductFromCart(id) {
            if (this.isProductInCart(id)) {
                this.cartProducts = this.cartProducts.filter(
                    (cartProduct) => cartProduct.id != id
                );
            }
        },
        setCnt({ id, cnt }) {
            if (this.isProductInCart(id)) {
                const product = this.completeProducts.find(
                    (cartProduct) => cartProduct.id == id
                );
                const item = this.getItem(id);
                item.cnt = Math.min(Math.max(cnt, 1), product.stock);
            }
        },
    },
});
