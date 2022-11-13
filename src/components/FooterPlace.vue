<template>

    <div class="containerfooter">

        <div class="logofooter">
         <img src="../assets/logo.png"  alt="logoclinica" width="50" height="50" /> 
         <h6 >30 años de experiencia.</h6> <br>
         <h6 >Miembros de :</h6>

         <h6><a href="https://secipe.org/">SECIPE</a></h6>
        </div>

         <div class="principal">
         <h8> <h4>También puedes contactar con nosotros en:</h4>
         Nuestro nº de teléfono 633.33.33.33: <a href="tel:63333333">☎ Teléfono </a><br>
        <p> Enviarnos un correo electrónico: 
        <a  href="mailto: indev.cip.perthes@gmail.com">click aqui✉</a> </p>
        <h7><router-link to="/politica_privacidad" >Política de Privacidad </router-link></h7>
        <p>© year 2022 ,all rights reserved</p>
        </h8>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FooterPlace',
    
}
</script>


<style>
.containerfooter{ 
    border:3px solid rgb(184, 161, 161);
    width: 1000px;
    width: 99.9%;
    background-size:auto;
    margin: auto ;
    display: flex;
    background:#A3B5C0 ;

}

.logofooter{
    width: 20%;
    height:auto;
    min-height: 227px;
    text-align:center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 10px;
    margin:  auto;
    border: 15px solid rgba(50,50,50,0.3);
    clear:both;
    padding-top: 10px;
    overflow: hidden;
    font-size: 12px;
    border-radius: 10%;
    background:#A3B5C0 ;
    
    }


.principal{
    width: 80%;
    height: auto;
    text-align:center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 10px;
    margin:  auto;
    background: #A3B5C0;
    border: 15px solid rgba(50,50,50,0.3);
    clear:both;
    padding-top: 10px;
    overflow: hidden;
    font-size: 18px;
    border-radius: 1%;
    background-color: rgb(151, 166, 190);
    }

    
</style>

