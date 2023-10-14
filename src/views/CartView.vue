<template>
    <div>
        <h1>Cart</h1>
        <hr>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Cnt</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in completeProducts" :key="product.id">
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.cnt }}</td>
                    <td>{{ product.price * product.cnt }}</td>
                    <td>
                        <button class="btn btn-warning me-1"
                            @click="store.setCnt({ id: product.id, cnt: product.cnt - 1 })">-1</button>
                        <button class="btn btn-success"
                            @click="store.setCnt({ id: product.id, cnt: product.cnt + 1 })">+1</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <RouterLink class="btn btn-success" :to="{ name: 'checkout' }">Order</RouterLink>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import { useCartStore } from '@/stores/CartStore';

const store = useCartStore()

const completeProducts = computed(() => store.completeProducts)
</script>