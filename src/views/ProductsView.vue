<template>
    <div>
        <h1>Products</h1>
        <div class="row">
            <div class="col col-sm-4 mb-3 mt-3" v-for="product in getProducts" :key="product.id">
                <ProductCard :id="product.id" :title="product.title" :price="product.price"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

import ProductCard from '@/components/ProductCard.vue';

import { useProductStore } from '@/stores/ProductStore';

const store = useProductStore()

const getProducts = computed(() => store.getProducts)
</script>