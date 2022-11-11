<template>

<!-- <div>
  <div>
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="success" header="Success" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="info" header="Info" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="dark" header="Dark" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div> -->


    <div class="container">
        <form>
            <label for='nombre'>Nombre:</label>
            <input type="text" v-model.lazy='nombre'>

            <label for="apellidos">Apellido:</label>
            <input type="text" v-model.lazy='apellidos'>
           
            <label for="edad">Edad:</label>
            <input type="text" v-model.lazy='edad'>
    
            <label for="carnet">Tienes carnet de conducir?:</label>
            <input type="text" v-model.lazy='carnet'>

            <h5 v-if="edad<18">Lo sentimos, debe ser mayor de edad.</h5>
            <h5 v-else-if="edad>=18 && carnet=='no'">Lo sentimos, necesita un carnet de conducir en vigor</h5>
            <h5 v-else>Bienvenid@, Complete la solicitud</h5>
        </form>
        <hr>
        <div id="muestra">
            <h5>Revisa si tus datos son correctos:</h5>
            <p>Nombre: {{nombre}}</p>
            <p>Apellido: {{apellidos}}</p>
            <p>Edad: {{edad}}</p>
            <p>Carnet: {{carnet}}</p>

        </div>
    </div>
    <EFsemaforo></EFsemaforo>
</template>


<script>
import EFsemaforo from '../components/EscuelaFamilias/EFsemaforo.vue';

export default {
    name: "EscuelaFamilias",
    data() {
        return {
            nombre: "",
            apellidos: "",
            edad: "",
            carnet: ""
        };
    },
    components: { EFsemaforo }
}

</script>

<style>
form{
    display: flex;
    flex-direction: column;
    margin: 10px 5px 30px;
    gap: 10px;
    text-align: left;
}
</style>