<template>
    <div class="menu">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in menu" :key="item.route">
                <RouterLink :to="{ name: item.route }" exact-active-class="text-danger">{{ item.text }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const menu = [
    { route: 'products', text: 'Products' },
    { route: 'cart', text: 'Cart' },
    { route: 'checkout', text: 'Order' }
]
</script>

<style lang="scss">
.list-group-item a {
    text-decoration: none;
}

.list-group-item.active a {
    color: inherit;
}
</style>