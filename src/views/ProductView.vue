<template>
    <div v-if="isProductExist">
        <h1>{{ product.title }}</h1>
        <hr>
        <div class="row">
            <div class="col-md-4 mb-4">
                <img src="https://picsum.photos/1000" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="alert alert-success">
                    Price: {{ product.price }}
                </div>
                <button v-if="isProductInCart(product.id)" @click="cartStore.removeProductFromCart(product.id)"
                    class="btn btn-danger" type="button">Remove</button>
                <button v-else @click="cartStore.addProductToCart(product.id)" class="btn btn-primary" type="button">Add to
                    cart</button>
            </div>
        </div>
    </div>
    <e404 v-else></e404>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import E404 from '@/views/E404View.vue';

import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from '@/stores/CartStore';

const router = useRouter()

const productStore = useProductStore()
const cartStore = useCartStore()

const isProductInCart = computed(() => cartStore.isProductInCart)
const product = computed(() => productStore.getProduct(productId.value))
const productId = computed(() => parseInt(router.currentRoute.value.params.id))
const isValidProductId = computed(() => /^[1-9]+\d*$/.test(productId.value))
const isProductExist = computed(() => isValidProductId.value && product.value !== undefined)
</script>