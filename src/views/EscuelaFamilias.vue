<template>
    <div class="container">
        <form>
          <label for="carnet">¿Tienes alguna duda? Contacta con nosotros</label>
            <input type="text" v-model.lazy='carnet'>
            <label for='nombre'>Nombre:</label>
            <input type="text" v-model.lazy='nombre'>

            <label for="apellidos">Apellido:</label>
            <input type="text" v-model.lazy='apellidos'>
           
            <label for="edad">Edad:</label>
            <input type="text" v-model.lazy='edad'>
        </form>
        <hr>

    <EFform/>
    </div>
</template>


<script>

import EFform from '../components/EscuelaFamilias/EFform.vue';
export default {
  name: 'EscuelaFamilias',
  components: {
    EFform,
  },
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