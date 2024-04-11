import { createApp } from 'vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.use(Toast);
app.component('base-modal', BaseModal);

app.mount('#app');
