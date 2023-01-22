<template>
    <h1>Enfermedad de Perthes</h1>
        <p>Es una necrosis o infarto de la cabeza del fémur que afecta a la cadera de las niñas y niños en crecimiento.</p>
        <p>Se produce una interrupción temporal de la llegada de la sangre a la cabeza femoral, provoca la muerte celular y el colapso del hueso de la cabeza femoral, que pierde su forma esférica.</p>
        <p>A largo plazo puede derivar en artrosis de cadera.</p>
        <p>Síntomas:</p>
        <ul>
            <li>Cojera</li>
            <li>Dolor de cadera, muslo o rodilla</li>
            <li>Rigidez con pérdida de momvimiento</li>
        </ul>


       <p class="subtitle">Cuando consultar al Traumatólogo Infantil</p>
       <p>Solicita una cita si tu hijo/a:</p>
       <ul>
            <li>Cojea</li>
            <li>Se queja de dolor en cadera, muslo y/o rodilla</li>
       </ul>
       <div>
       <button class="appointmentButton" @click="$router.push('/')">SOLICITAR CITA</button>
        </div>
       <h1 style="font-weight: 600;">Quiero saber más</h1>

        <nav>
            <p class="select" @click="$router.push('diagnostico')">  DIAGNÓSTICO </p>

            <p class="select" @click="$router.push('pronostico')">   PRONÓSTICO </p>

            <p class="select" @click="$router.push('tratamiento')">  TRATAMIENTO </p>
        </nav>

</template>

<script>


export default{
    name: 'EPindex',
   
}
</script>

<style scoped>
*{
    margin-left: 6vw;
    margin-right: 6vw;
    margin-bottom: 0.5vw;
}
h1{
    margin-top: 2vw;
}
p, li {
    line-height: 1.8rem;
    line-height: 2;
    font-size: 600;
    margin-top: 23.18px;
}

.select {
  border-radius: 4px;
  border: none;
  color: hwb(215 17% 49%);
  text-align: center;
  padding: 10px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 2vw;
  font-weight: 900;
  
}
div{
    margin: 10%;
}

</style>