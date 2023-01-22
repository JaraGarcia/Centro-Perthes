<template>
    <h1>PRONÓSTICO</h1>
    <p>A largo plazo puede derivar en artrosis de cadera</p>
     <ul>
        <li>Edad de inicio</li>
        <li>Género</li>
        <li>Peso</li>
        <li>Enfermedades de base</li>
        <li>Retraso en el tratamiento</li>
     </ul>
    <p>Cuanto antes inicie el tratamiento mayor probabilidad de curación con una forma normal de la articulación de la cadera.</p>
    <br>
    <p>Factores como sobrepeso, trombofilia o hipotiroidismo, pueden provocar peor pronóstico. Solicita cita a la Unidad de Diagnóstico Avanzado</p>

    <nav><ion-icon name="construct-outline"></ion-icon> <p class="small">Estamos trabajando para entregarle más novedades pronto. Gracias por contar con nosotros.</p></nav>

</template>

<script>


export default{
    name: 'EPpronostico',
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
    font-size: large;
    word-wrap: break-word;
}

nav{
    justify-content: center;
}
.small{
    font-size: medium;
    padding: 10px;
    margin: 0px;
    font-weight: 600;
    color: hwb(215 17% 49%);
}

ion-icon{
    font-size: xx-large;
    color: hwb(215 17% 49%);
    margin: 0px;
}
</style>