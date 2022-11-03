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

