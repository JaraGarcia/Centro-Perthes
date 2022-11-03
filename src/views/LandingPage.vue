<template>
  <LandingInfo/>
  <LandingBookAppointment/>
</template>

<script>
import LandingInfo from '@/components/LandingPage/LandingInfo.vue';
import LandingBookAppointment from '@/components/LandingPage/LandingBookAppointment.vue';


export default {
  name: 'LandingPage',
  components: {
    LandingInfo,
    LandingBookAppointment,

},
}
</script>