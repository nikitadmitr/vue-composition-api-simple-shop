<template>
    <div class="card">
        <div class="card-body">
            <h3>{{ title }}</h3>
            <div>{{ price }}</div>
            <RouterLink :to="{ name: 'product', params: { id } }">Read more</RouterLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: Number,
    title: String,
    price: Number
})
</script>