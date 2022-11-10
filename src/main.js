import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


//importar rutas que hemos creado ateriormente
import {routes} from './views/routes.js'

//importar funciones en la libreria del vue-router (Son necesarias para trabajar con rutas)
import {createRouter, createWebHistory} from 'vue-router'
const app=createApp(App)

//Conectamos las rutas con las funciones. Este objeto conecta las rutas con su visualización
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//invocar la función 
app.use(router)
app.mount("#app");






//MAILCHIMP PARA SUSCRIPCIONES. Visto en: https://github.com/johndatserakis/vue-mailchimp-email-signup-form/blob/develop/src/index.js

//importar el componente vue relacionado con mailchimp
import EFform from './components/EscuelaFamilias/EFsubscribeMailchimp.vue';

//instalar la funcion ejecutada por VUE.js
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('EFform', EFform);
}EFform

// Create module definition for Vue.use()
const plugin = {
	install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export { EFform };
