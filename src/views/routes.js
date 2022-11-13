import notFound from '../views/NotFound.vue'
import LandingPage from '../views/LandingPage.vue'
import EscuelaFamilias from '../views/EscuelaFamilias.vue'
import PoliticaPrivacidad from '../components/PoliticaPrivacidad.vue'
import CalendarGoogle from '../components/CalendarGoogle.vue'
import AboutUs from '../components/AboutUs.vue'
import FooterPlace from '../components/FooterPlace.vue'






export const routes=[
    {path: '/path(*)', component:notFound},
    {path: '/', component:LandingPage},
    {path: '/EscuelaFamilias', component:EscuelaFamilias},
    {path: '/politica_privacidad', component:PoliticaPrivacidad},
    {path: '/CalendarGoogle', component:CalendarGoogle},
    {path: '/AboutUs', component:AboutUs},
    {path: '/FooterPlace', component:FooterPlace},

]