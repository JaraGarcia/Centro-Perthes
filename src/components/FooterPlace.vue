<template>
    <div class="containerfooter">
        <div class="onefooter">
             <h4>CENTRO INTERNACIONAL DEL PERTHES</h4>
             <hr>
             <ul>
                <li><a href="mailto:perthes.cip@gmail.com" target="_blank"> <ion-icon name="mail-outline"></ion-icon> </a> Envíanos un correo a: perthes.cip@gmail.com </li>
                <li><a href="tel:+34683331024"> <ion-icon name="call-outline"></ion-icon></a> Llámanos al 683 33 10 24</li>
             </ul>
             <p>CENTRO DE EXCELENCIA EN LA ENFERMEDAD DE PERTHES</p>
         </div>
         <div class="twofooter">
        <h4>CIP</h4>
            <p>© Copyright 2023. Todos los derechos reservados. |
                <router-link to="/politica_privacidad" >Política de Privacidad |</router-link></p>
         
         </div>
    </div>
</template>
<script>
export default {
    name: 'FooterPlace',
}
</script>
<style scoped>
*{
    color: #fff;
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
    line-height: 1.5;
}

.containerfooter{
    display: block;
}
.containerfooter li{
  margin: 10px;
  list-style-type: none;
  font-size: small;
}

.onefooter{
    padding: 10px;
    font-size: 12px;
    background: #555;
  
    }
.twofooter{
    padding: 10px;
    background: #333;
    font-size: small;
    }

.twofooter, a{
    text-decoration: none;
}
</style>