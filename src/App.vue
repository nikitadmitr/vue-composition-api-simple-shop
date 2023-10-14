<template>
    <AppHeader />
    <main>
        <div class="container">
            <div class="row">
                <div class="col col-sm-3">
                    <AppMenu />
                </div>
                <div class="col col-sm-9">
                    <RouterView />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
</script>