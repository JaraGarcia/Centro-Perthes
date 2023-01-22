<template>
  <div class="margen">

    <h2>RESERVA TU CITA</h2>
    <sub>REFRESCA LA PÁGINA SI NO VES EL CALENDARIO</sub>

    <!-- Principio del widget integrado de Calendly -->
      <div class="calendly-inline-widget" data-url="https://calendly.com/ci-perthes/reserva-cita?hide_event_type_details=1&background_color=f4f4f4&text_color=0e1929&primary_color=1181c3" style="min-width:320px;height:750px;">
      </div>
    <!-- Final del widget integrado de Calendly -->

  </div>

</template>

<script>
export default {
  name: 'LandingBookAppointment',
}
</script>


<style scoped> 

h2{
  color: hwb(215 17% 49%),
}
.article1 {
  border: 8px solid #A3B5C0;
  width: 80%;
  height: auto;
  margin: 70px;
  text-align: center;
  letter-spacing: 2px;
  justify-content: center;

}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input:focus {
  border: 3px solid hwb(215 17% 49%);
}
.margen{
  margin: 0px 20px;
}
</style>