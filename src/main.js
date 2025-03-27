import './assets/main.css'
import 'primeicons/primeicons.css'
import route from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(route);
app.use(Toast);
app.mount('#app');
