<template >
  <div class ="anuncio" style="width: 100%;border:2px solid rgb(62, 57, 57); black; background-color: #A3B5C0 ;margin-bottom: 1px;margin-left: 4px;padding: 10px;">
  <h4 > Calendario donde mostramos eventos relacionados con Perthes</h4>
  <h4> Fechas destacadas para las familias y los profesionales.</h4>  
  </div>
<!--aqui comienza el contenedor de 2 columnas: logos y eventscalendar-->
<div class="container">
  <div class=" logos">
    <ul>
      <li> Contamos y colaboramos con los mejores para realizar nuestra labor.</li>
      <li>Asfape  <a href="https://asfape.org/" target="_blank" ><img src="../assets/img/LOGOASFAPE.png"  alt="LOGOASFAPE" width="70" height="70"/> </a> </li>
      <li>Hospital infantil Niño Jesús  <a href="https://www.comunidad.madrid/hospital/ninojesus" target="_blank" >  <img src="../assets/img/LOGOHOSJESUS2.png" alt="LOGOHOSTJESUS" width="120" height="60"/></a> </li>
      <li>IRF La Salle  <a href="https://www.irflasalle.es/" target="_blank"> <img src="../assets/img/LOGOIRFLASALLE2.png" alt="LOGOIRFLASALLE" width="50" height="50"/></a> </li>
      <li>SECOT  <a href="https://www.secot.es/" target="_blank" > <img src="../assets/img/LOGOSECOT3.png" alt="LOGOSECOT" width="80" height="80"/></a> </li>
      <li>Haz click en cada logo para tener mas información ➦</li>
    </ul>
  </div>
  
<!--aqui insertamos el codigo iframe de google para integrar el calendario-->
  <div class ="eventscalendar">
    <iframe src="https://calendar.google.com/calendar/embed?height=700&wkst=2&bgcolor=%239af0f5&ctz=Europe%2FMadrid&showTitle=1&showNav=1&title=Eventos%20informativos%20Perthes&src=cnVubmlpdGVyQGdtYWlsLmNvbQ&src=MmI2ZTg1MjJhYmY2N2RiYmNiZmZlOWUyNmE3ZWUxZGFhNDZlYzk2NTBkOWM5Y2YwNDNiM2RiMWEyZDhiZDhlOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTFmMDdiNjYyNWI0YjBiMDQ2ZWVkNDE4MDA2NjdjYjYyZWY4OTQzZmFkZWEyZWUzMzA0NTgxYWVkZTUxZjhjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODcwMTZkYTA2MGQ5OTk0NDRiYjhlNmJjMTZjYWZhYTBlYTFjNzA0N2I1MWNiOTNmYzZmMzllZGNjNzc2ZTZlMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%23D81B60&color=%23E67C73&color=%230B8043" style="border:solid 3px cornflowerblue" width="436" height="370" scrolling="si"></iframe>
    </div>
</div>
</template>

<script>
export default{
   name: 'CalendarGoogle',
}
</script>

<!--uso flexbox-->
<style>
.container {
  width: 99%; 
  width: 1000;
  height: 680px;
  background-image:url(" https://www.vescom.com/images/news/m2460/19534_0.jpg?10150");
  background-repeat: no repeat;
  background-position-x: center;
  background-position-y: center;
  background-size:auto ;
  margin:auto;
  display: flex;

} 
   

#eventscalendar {
  width: 50%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #6fb6e3;
  font-size: 16px;
  text-align: center;
  display: flex;
}

#logos {
  width: 45%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background:#A3B5C0 ;
  font-size:16 px;
  display: flex;
  flex-wrap: wrap; 
  height: inherit;
}

ul{
  border-radius: 10px;
  min-height: 200px;
  font-weight: bold;
  padding:20px;
  position:relative;
  overflow:hidden;
  background-size:cover;
  background-position: center center;
  width: 99.9%;
  background-color: #A3B5C0;
  padding:2px;
  
}
   
</style>