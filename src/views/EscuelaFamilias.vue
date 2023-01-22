<template>
<EFcheckVue/>
<!-- <EFsemaforo/> -->
<EFsubscribeMailchimp/>



</template>


<script>

// import EFsemaforo from '@/components/EscuelaFamilias/EFsemaforo.vue';
import EFsubscribeMailchimp from '../components/EscuelaFamilias/EFsubscribeMailchimp.vue';
import EFcheckVue from '@/components/EscuelaFamilias/EFcheck.vue';
export default {
  name: 'EscuelaFamilias',
  components: {
    // EFsemaforo,
    EFsubscribeMailchimp,
    EFcheckVue,
  },


}

</script>
