<template>
    <h1>DIAGNÓSTICO</h1>
        <p>Durante la consulta se hace una valoración integral del grado de afectación del niño/a a través de las puebas de imagen.</p>
            <p>El diagnóstico se basa en ellas:</p>

            <ul>
                <li>Radiografía simple de cadera</li>
                <li>Resonancia Magnética Nuclear</li>
            </ul>
        <p>Las alteraciones de la cadera en las imagenes pueden tardar unas semanas en aparecer. Es probable que se recomiende repetir alguna prueba.</p>
        <p>Atención sin distancias, solicita una cita ahora.</p>
        <br>
<p class="subtitle">Fases de la enfermedad</p>
<p>Necrosis. Inicio dolor y cojera</p>
<p>Fragmentación. Dolor y cojera más intensos</p>
<p>Reosificación. Dolor y cojera más esporádicos</p>
<p>Remodelación. Sin síntomas</p>
<br>
<p class="subtitle">Valora el riesgo de tu cadera en el Semáforo del Perthes</p>
<div>
<button class="appointmentButton" @click="$router.push('EscuelaFamilias')">IR AL TEST</button>
</div>

</template>

<script>


export default{
    name: 'EPdiagnostico',
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
    font-size: larger;
    word-wrap: break-word;
}
div{
    margin: 5%;
}

</style>