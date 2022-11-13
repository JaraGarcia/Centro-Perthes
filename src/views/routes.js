import notFound from '../views/NotFound.vue'
import LandingPage from '../views/LandingPage.vue'
import EnfermedadPerthes from '../views/EnfermedadPerthes.vue'
import EPdiagnostico from '../components/EnfermedadPerthes/EPdiagnostico.vue'
import EPpronostico from '../components/EnfermedadPerthes/EPpronostico.vue'
import EPtratamiento from '../components/EnfermedadPerthes/EPtratamiento.vue'
import EscuelaFamilias from '../views/EscuelaFamilias.vue'
import PoliticaPrivacidad from '../components/PoliticaPrivacidad.vue'
import FooterPlace from '../components/FooterPlace.vue'
import Eventos from '../views/Eventos.vue'
import AboutUs from '../views/AboutUs.vue'





export const routes=[
    {path: '/path(*)', component:notFound},
    {path: '/', component:LandingPage},
    {path: '/Enfermedad_Perthes', component:EnfermedadPerthes},
    {path: '/diagnostico', component:EPdiagnostico},
    {path: '/pronostico', component:EPpronostico},
    {path: '/tratamiento', component:EPtratamiento},
    {path: '/EscuelaFamilias', component:EscuelaFamilias},
    {path: '/politica_privacidad', component:PoliticaPrivacidad},
    {path: '/FooterPlace', component:FooterPlace},
    {path: '/Eventos', component:Eventos},
    {path: '/AboutUs', component:AboutUs}

]