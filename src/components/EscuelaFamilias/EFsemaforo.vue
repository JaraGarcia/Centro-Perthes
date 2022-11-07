<template>
    <form action="">
        <h3>Semaforo del Perthes</h3>
        <h5>El semáforo es orientativo. Para consejo individualizado llámanos.</h5>
        <div>
            <p>1. VALORACION CLINICA</p>
            <p>¿Sufre de dolor y cojera?</p>
                <input type="radio" id="dolorCojeraSI" name="dolorCojera" value="dolorCojeraSI">
                    <label for="dolorCojeraSI">Sí</label>
                <input type="radio" id="dolorCojeraNO" name="dolorCojera" value="dolorCojeraNO">
                    <label for="dolorCojeraNO">No</label>

            <p>Movilidad. ¿Tiene una apertura de menos de 30º?</p>
                <input type="radio" id="aperturaSI" name="apertura" value="aperturaSI">
                    <label for="aperturaSI">Sí</label>
                <input type="radio" id="aperturaNO" name="apertura" value="aperturaNO">
                    <label for="aperturaNO">No</label>

            <p>Edad de inicio de la enfermedad</p>
                <input type="radio" id="cuatro" name="inicioEnfermedad" value="cuatro">
                    <label for="cuatro">Menos de 4 años</label>
                <input type="radio" id="cuatroSeis" name="inicioEnfermedad" value="cuatroSeis">
                    <label for="cuatroSeis">De 4 a 6 años</label>
                <input type="radio" id="seisOcho" name="inicioEnfermedad" value="seisOcho">
                    <label for="seisOcho">De 6 a 8 años</label>
                <input type="radio" id="ochoDiez" name="inicioEnfermedad" value="ochoDiez">
                    <label for="ochoDiez">De 8 a 10 años</label>
                <input type="radio" id="diez" name="inicioEnfermedad" value="diez">
                    <label for="diez">Más de 10 años</label>
        </div>

        <div class="newForm">
            <p>2. VALORACION RADIOLÓGICA</p>
            <br><p>OVALIZACION</p>
            <div class="answer">
                <label for="ovalizacion">Imagen 1
                <input type="radio" id="ovalizacionUno" name="ovalizacion" value="ovalizacionUno" >
                <img src="@/assets/img/cadera.png" alt="ovalizacion" name="ovalizacion" value="ovalizacionUno" />
                </label>

                <label for="ovalizacion">Imagen 2
                <input type="radio" id="ovalizacionDos" name="ovalizacion" value="ovalizacionDos" >
                <img src="@/assets/img/cadera.png" alt="ovalizacion" name="ovalizacion" value="ovalizacionDos" />
                </label>

                <label for="ovalizacion">Imagen 3
                <input type="radio" id="ovalizacionTres" name="ovalizacion" value="ovalizacionTres" >
                <img src="@/assets/img/cadera.png" alt="ovalizacion" name="ovalizacion" value="ovalizacionTres" />
                </label>

                <label for="ovalizacion">Imagen 4
                <input type="radio" id="ovalizacionCuatro" name="ovalizacion" value="ovalizacionCuatro" >
                <img src="@/assets/img/cadera.png" alt="ovalizacion" name="ovalizacion" value="ovalizacionCuatro" />
                </label>
            </div>
            <br><br><p>SUBLUXACION</p>
                <img src="@/assets/img/cadera.png" alt="subluxacion" />
            <div class="answer">
                <input type="radio" id="subluxacionSI" name="subluxacion" value="subluxacionSI">
                    <label for="subluxacionSI">Sí</label>
                <input type="radio" id="subluxacionNO" name="subluxacion" value="subluxacionNO">
                    <label for="subluxacionNO">No</label>
            </div>
            <br><br><p>APLASTAMIENTO</p>
            <div class="answer">
                <label for="aplastamiento">Imagen 1
                <input type="radio" id="aplastamientoUno" name="aplastamiento" value="aplastamientoUno" >
                <img src="@/assets/img/cadera.png" alt="aplastamiento" name="aplastamiento" value="aplastamientoUno" />
                </label>

                <label for="aplastamiento">Imagen 2
                <input type="radio" id="aplastamientoDos" name="aplastamiento" value="aplastamientoDos" >
                <img src="@/assets/img/cadera.png" alt="aplastamiento" name="aplastamiento" value="aplastamientoDos" />
                </label>

                <label for="aplastamiento">Imagen 3
                <input type="radio" id="aplastamientoTres" name="aplastamiento" value="aplastamientoTres" >
                <img src="@/assets/img/cadera.png" alt="aplastamiento" name="aplastamiento" value="aplastamientoTres" />
                </label>
            </div>
            <br><br><p>SIGNO DE CAGE</p>
            <img src="@/assets/img/cadera.png" alt="cage" />
            <div class="answer">
                <input type="radio" id="cageSI" name="cage" value="cageSI">
                    <label for="cageSI">Sí</label>
                <input type="radio" id="cageNO" name="cage" value="cageNO">
                    <label for="cageNO">No</label>
            </div>
        </div>
<h5>Las respuestas recogidas en el test indican que la cadera</h5>

<p>No tiene riesgo actual</p>
<p>Presenta síntomas de evolución de riesgo</p>
<p>Presenta necesidad de corrección</p>

    </form>
</template>


<script>
export default{
    name: 'EFsemaforo',
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    margin: 10px 15px 30px;
    gap: 10px;
    text-align: left;
}

label {
	display: flex;
	cursor: pointer;
	position: relative;
    margin-left: 50px;
	margin-bottom: 0.4em;
}
input {
    position: absolute;
	margin-top: 5px;
    margin-left: 20px;
}

img{
    width: 200px;
}

.newForm{
    position: relative;
	margin-top: 5px;
    margin-left: 2px;
}

.newForm input{
    
    position: relative;
    margin-left: 0px;
}

.newForm label{
    display: block;
    position: relative;
    margin-left: 10px;
}

.answer{
    display: flex;
    flex-wrap: wrap;
}
</style>
