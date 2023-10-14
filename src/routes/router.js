import { createRouter, createWebHistory } from "vue-router";

import CheckoutView from '@/views/CheckoutView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import E404View from '@/views/E404View.vue';

const routes = [
    {
        name: 'products',
        path: '/',
        component: ProductsView
    },
    {
        name: 'product',
        path: '/product/:id',
        component: ProductView
    },
    {
        name: 'checkout',
        path: '/checkout',
        component: CheckoutView
    },
    {
        name: 'cart',
        path: '/cart',
        component: CartView
    },
    {
        path: '/:any(.*)',
        component: E404View
    }
];

export default createRouter({
    routes,
    history: createWebHistory()
});