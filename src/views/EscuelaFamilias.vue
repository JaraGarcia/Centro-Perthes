<template>
<EFsemaforo/>
<EFsubscribeMailchimp/>

<hr>
<EFborrador/>

</template>


<script>
import EFsemaforo from '@/components/EscuelaFamilias/EFsemaforo.vue';
import EFsubscribeMailchimp from '../components/EscuelaFamilias/EFsubscribeMailchimp.vue';
import EFborrador from '../components/EscuelaFamilias/EFborrador.vue';

export default {
  name: 'EscuelaFamilias',
  components: {
    EFsemaforo,
    EFsubscribeMailchimp,
    EFborrador,
  },

}

</script>
