import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

import router from '@/routes/router';

import App from '@/App.vue';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);

const store = useProductStore();

store.loadProducts().then(() => {
    app.mount('#app');
});

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
