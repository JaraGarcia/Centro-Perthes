<template>
  <div>

  <h2>RESERVA TU CITA</h2>

<!-- Principio del widget integrado de Calendly -->
<div class="calendly-inline-widget" data-url="https://calendly.com/ci-perthes/reserva-cita?hide_event_type_details=1&background_color=f4f4f4&text_color=0e1929&primary_color=2b4f82" style="min-width:320px;height:630px;"></div>

<!-- Final del widget integrado de Calendly -->

    <button type="submit" @click="Calendly.initInlineWidget()">Escoger cita</button>
  </div>
    <div class="article1">
      <form action="get">
        <h2>RESERVA TU CITA</h2>
        <input type="text" name="user" placeholder="NOMBRE Y APELLIDOS" />
        <input type="email" name="email" placeholder="EMAIL" />
        <input type="telephone" name="phone" placeholder="TELÉFONO" />
        <input type="text" name="country" placeholder="PAÍS" />
        <input type="radio" id="modalidadCita" value="modalidadCita">
        <label for="modalidadCita">QUIERO MI CITA ONLINE</label>
        <input type="radio" id="modalidadCita" value="modalidadCita" />
        <label for="modalidadCita">QUIERO MI CITA EN MADRID</label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> Acepto recibir información comercial, incluso por correo electrónico.</label><br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> He leído y acepto la  <router-link to="/politica_privacidad" >Política de Privacidad </router-link></label><br>
      </form>
    </div>
    <div class="article1">
            <h1> Reserva tu cita </h1>
            <p> A través de: 
                Teléfono +34 633 33 33 33</p>
            <p> Escribenos al correo electrónico: <br>
                centronacionalperthes@gmail.com</p>
      </div>
</template>

<script>

export default {
    name: 'LandingBookAppointment',
    
}
</script>

<style scoped>

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
</style>



