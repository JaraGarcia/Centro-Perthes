<template >
   <h1> Fechas destacadas para las familias y los profesionales.</h1>

  
<div class="container">
  
    <iframe src="https://calendar.google.com/calendar/embed?height=700&wkst=2&bgcolor=%239af0f5&ctz=Europe%2FMadrid&showTitle=1&showNav=1&title=Eventos%20informativos%20Perthes&src=cnVubmlpdGVyQGdtYWlsLmNvbQ&src=MmI2ZTg1MjJhYmY2N2RiYmNiZmZlOWUyNmE3ZWUxZGFhNDZlYzk2NTBkOWM5Y2YwNDNiM2RiMWEyZDhiZDhlOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTFmMDdiNjYyNWI0YjBiMDQ2ZWVkNDE4MDA2NjdjYjYyZWY4OTQzZmFkZWEyZWUzMzA0NTgxYWVkZTUxZjhjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODcwMTZkYTA2MGQ5OTk0NDRiYjhlNmJjMTZjYWZhYTBlYTFjNzA0N2I1MWNiOTNmYzZmMzllZGNjNzc2ZTZlMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%23D81B60&color=%23E67C73&color=%230B8043" style="border:solid 15px cornflowerblue" width="500" height="350" frameborder="40" scrolling="si"></iframe>
</div>

<h5>Contamos y colaboramos con los mejores para realizar nuestra labor.</h5>
<!-- Distribución horizontal en dos filas ** o carrousel -->
    <ul>
      <li><a href="https://perthesdisease.org/" target="_blank"><img src="@/assets/colaborators/IPSG.png" alt="IPSG Group"></a></li>
      <!-- IPSG group -->
      <li><a href="https://www.irflasalle.es/" target="_blank"> <img src="@/assets/colaborators/irf-lasalle.jpeg" alt="LOGOIRFLASALLE" /></a></li>
      <!-- IRF La Salle -->
      <li><a href="https://www.ruberinternacional.es/" target="_blank"><img class="m" src="@/assets/colaborators/Rub-Int.png" alt="Ruber Internacional"></a></li>
      <!-- Ruber Internacional -->
      <li><a href="https://www.secot.es/" target="_blank"> <img src="@/assets/colaborators/secot.png" alt="LOGOSECOT"/></a></li>
      <!-- SECOT -->
      <li><a href="https://asfape.org/" target="_blank"><img class="xs" src="@/assets/colaborators/asfape.png" alt="LOGOASFAPE"></a></li>
      <!-- Asfape -->
      <li><a href="https://centroclinicobetanzos60.es/" target="_blank"><img class="xs" src="@/assets/colaborators/Betanzos.png" alt="Clinica Betanzos60"></a></li>
      <!-- Clinica Betanzos60 -->
            <li><a href="https://seopweb.com/" target="_blank"><img class="m" src="@/assets/colaborators/SEOP.png" alt="SEOP"></a></li>
      <!-- SEOP -->
      <li>EPOS</li>
    </ul>

</template>
<script>
export default{
   name: 'CalendarGoogle',
}
</script>

<style scoped>
*{
  margin-left: 6vw;
  margin-right: 6vw;
}

h1, h5{
  margin-top: 2vw;
}
.xs{
  width: 100px;
  height: auto;
}

.m{
  width: 250px;
  height: auto;
} 

ul{
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
} 
li, a, div{
  list-style: none;
  margin: 0;
}

img {
  width: 150px;
  height: auto;
  padding: 5px;
  
}
</style>