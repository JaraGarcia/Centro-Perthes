<template>



    <h1> Aqui es donde va el footer</h1>
    <h3> <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%239af0f5&ctz=Europe%2FMadrid&showTitle=1&showNav=1&title=Eventos%20informativos%20Perthes&src=cnVubmlpdGVyQGdtYWlsLmNvbQ&src=MmI2ZTg1MjJhYmY2N2RiYmNiZmZlOWUyNmE3ZWUxZGFhNDZlYzk2NTBkOWM5Y2YwNDNiM2RiMWEyZDhiZDhlOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTFmMDdiNjYyNWI0YjBiMDQ2ZWVkNDE4MDA2NjdjYjYyZWY4OTQzZmFkZWEyZWUzMzA0NTgxYWVkZTUxZjhjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODcwMTZkYTA2MGQ5OTk0NDRiYjhlNmJjMTZjYWZhYTBlYTFjNzA0N2I1MWNiOTNmYzZmMzllZGNjNzc2ZTZlMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%23D81B60&color=%23E67C73&color=%230B8043" style="border:solid 15px cornflowerblue" width="490" height="370" frameborder="40" scrolling="si"></iframe></h3>
    <input type="radio" id="uno" value="Uno" v-model="picked">
<label for="uno">Uno</label>
<br>
<input type="radio" id="Dos" value="Dos" v-model="picked">
<label for="Dos">Dos</label>
<br>
<span>Eligió: {{ picked }}</span>
    <div class="container">
        <form>
            <label for='nombre'>Nombre:</label>
            <input type="text" v-model.lazy='nombre'>

            <label for="apellidos">Apellido:</label>
            <input type="text" v-model.lazy='apellidos'>
           
            <label for="edad">Edad:</label>
            <input type="text" v-model.lazy='edad'>
    
            <label for="carnet">Tienes gominolas?:</label>
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
    <select v-model="selected">
  <option disabled value="">Seleccione un elemento</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Seleccionado: {{ selected }}</span>
</template>




<script>
export default {
  name: 'FooterPlace',
  data(){
    return {
        nombre: '',
        apellidos:'',
        edad: '',
        carnet:''
    }
  }
}


</script>

<style>
form{
    background-color: aqua;
    display: flex;
    flex-direction: column;
    margin: 10px 5px 30px;
    gap: 10px;
    text-align: left;
}
</style>