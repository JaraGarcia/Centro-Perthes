
<template>
    <p>1. VALORACION CLINICA</p>
    <section>
        <p><label>¿Sufre de dolor y cojera?</label></p>
        <input type="radio" v-model="question.dolorCojeraS"/> Sí
        <input type="radio" v-model="question.dolorCojeraN"/> No

        <p><label>Movilidad. ¿Tiene una apertura de menos de 30º?</label></p>
        <input type="radio" v-model="question.movilidadS"/> Sí
        <input type="radio" v-model="question.movilidadN"/> No

        <button>SUBMIT</button>
    </section>

</template>

<script>

import {ref} from 'vue'

export default {
    name: 'EFborrador',
    data (){
        return{
        question: ref({
            dolorCojeraS:false,
            dolorCojeraN:false,
            movilidadS:false,
            movilidadN:false
            
            })
    }
    // let questions = ref({ })

   
    }
}

</script>





