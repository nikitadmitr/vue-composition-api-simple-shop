<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col col-sm-9">
                    <h1>Site</h1>
                </div>
                <div class="col col-sm-3">
                    <div class="alert alert-default">
                        <div>In Cart: {{ cartProductsCount }}</div>
                        <div>$: {{ totalCost }}</div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </header>
</template>

<script setup>
import { computed } from 'vue'

import { useCartStore } from '@/stores/CartStore';

const store = useCartStore()

const totalCost = computed(() => store.totalCost)
const cartProductsCount = computed(() => store.cartProductsCount)
</script>