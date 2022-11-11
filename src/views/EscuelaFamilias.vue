<template>
<EFsemaforo/>
<EFsubscribeMailchimp/>


</template>


<script>

import EFsemaforo from '@/components/EscuelaFamilias/EFsemaforo.vue';
import EFsubscribeMailchimp from '../components/EscuelaFamilias/EFsubscribeMailchimp.vue';

export default {
  name: 'EscuelaFamilias',
  components: {
    EFsemaforo,
    EFsubscribeMailchimp,
   
  },


}

</script>
