<template>

    <form id="form">

        <h1>Semáforo del Perthes</h1>
        <h5>El semáforo es orientativo. Para consejo individualizado llámanos.</h5>

        <h3>1. VALORACION CLINICA</h3>

        <div class="flex-container">
            <div>
                <h5 for="dolorCojera">¿Sufre de dolor y cojera?</h5>
                <div class="">
                    <input class="option" type="radio" name="dolorCojera" id="dolorCojeraSi" value="8">
                    <label for="dolorCojeraSi">Sí</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="dolorCojera" id="dolorCojeraNo" value="0">
                    <label for="dolorCojeraNo">No</label>
                </div>
                <br>
                <h5 for="movilidad">Movilidad. ¿Tiene una apertura de menos de 30º?</h5>
                <div class="">
                    <input class="option" type="radio" name="movilidad" id="movilidadSi" value="8">
                    <label for="movilidadSi">Sí</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="movilidad" id="movilidadNo" value="0">
                    <label for="movilidadNo">No</label>
                </div>
            </div>
            <br>
            <div>
                <h5 for="edadInicio">Edad de inicio de la enfermedad</h5>
                <div class="">
                    <input class="option" type="radio" name="edadInicio" id="edadInicio0a4" value="1">
                    <label for="edadInicio0a4">Menos de 4 años</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="edadInicio" id="edadInicio4a6" value="5">
                    <label for="edadInicio4a6">De 4 a 6 años</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="edadInicio" id="edadInicio6a8" value="10">
                    <label for="edadInicio6a8">De 6 a 8 años</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="edadInicio" id="edadInicio8a10" value="40">
                    <label for="edadInicio8a10">De 8 a 10 años</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="edadInicio" id="edadInicio10+" value="70">
                    <label for="edadInicio10+">Más de 10 años</label>
                </div>
            </div>
        </div>

        <h3>2. VALORACION RADIOLÓGICA</h3>

        <div class="flex-container">
            <div>
                <h4>OVALIZACION</h4>
                <p for="ovalizacion"> <img src="@/assets/img/EFfotosSemaforo/EFOVALIZACION.png" alt=""></p>
                <div class="">
                    <input class="option" type="radio" name="ovalizacion" id="ovalizacion3" value="10">
                    <label for="ovalizacion3">Sí</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="ovalizacion" id="ovalizacion4" value="60">
                    <label for="ovalizacion4">No</label>
                </div>
            </div>

            <div>
                <h4>APLASTAMIENTO</h4>
                <div class="">
                    <input class="option" type="radio" name="aplastamiento" id="aplastamiento1" value="1">
                    <label for="aplastamiento1"><img src="@/assets/img/EFfotosSemaforo/EFHerringA.png" alt=""></label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="aplastamiento" id="aplastamiento2" value="20">
                    <label for="aplastamiento2"><img src="@/assets/img/EFfotosSemaforo/EFHerringB.png" alt=""></label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="aplastamiento" id="aplastamiento3" value="30">
                    <label for="aplastamiento3"><img src="@/assets/img/EFfotosSemaforo/EFHerringC.png" alt=""></label>
                </div>
            </div>

            <div>
                <h4>SUBLUXACION</h4>
                <p for="subluxacion"><img src="@/assets/img/EFfotosSemaforo/EFSubluxacion.png" alt=""></p>
                <div class="">
                    <input class="option" type="radio" name="subluxacion" id="subluxacionSi" value="30">
                    <label for="subluxacionSi">Sí</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="subluxacion" id="subluxacionNo" value="1">
                    <label for="subluxacionNo">No</label>
                </div>

                <h4>SIGNO DE CAGE</h4>
                <p for="cage"><img src="@/assets/img/EFfotosSemaforo/EFSignoCage.png" alt=""></p>
                <div class="">
                    <input class="option" type="radio" name="cage" id="cageSi" value="5">
                    <label for="cageSi">Sí</label>
                </div>
                <div class="">
                    <input class="option" type="radio" name="cage" id="cageNo" value="1">
                    <label for="cageNo">No</label>
                </div>
            </div>
        </div>

        <button type="button" @click.prevent="showResult()">Ver resultado</button>

    </form>

    <div v-if="isSubmit" class="response">
        <h4 id="answer" class="answer">Las respuestas recogidas en el test indican que la cadera {{totalPoints >= 55 ? 'presenta síntomas de evolución de riesgo.' : totalPoints >= 35 && totalPoints < 55 ? 'no tiene riesgo actual' : 'no tiene riesgo actual.'}}</h4>
        <img v-if="totalPoints <= 35" src="../../assets/img/trafficLights/greenLight.png" id="image">
        <img v-if="totalPoints > 35 && totalPoints < 55" src="../../assets/img/trafficLights/orangeLight.png" id="image">
        <img v-if="totalPoints >= 55" src="../../assets/img/trafficLights/redLight.png" id="image"/>
    </div>

</template>

<script>

export default {
    name: 'EFsemaforo',

    data() {
        return {
            pointsValue: document.getElementsByClassName("option"),
            totalPoints: 0,
            isSubmit: false,
            answer: "",
            image: ""
        }
    },
    methods: {
        showResult() {
            this.totalPoints = 0;
            
            for (let i = 0; i < this.pointsValue.length; i++) {
                if (this.pointsValue[i].checked == true) {
                    this.totalPoints += Number(this.pointsValue[i].value);
                    this.pointsValue[i].checked = false;
                }
            }

            this.isSubmit = true;
        }
    }
}
</script>

<style scoped>

form,
.response {
    display: block;
    width: 80%;
    margin: auto;
}

form,
h3,
button {
    margin-top: 3rem;
}

h3 {
    margin-bottom: 2rem;
}

h4 {
    margin-top: 2rem;
}

h6 {
    font-size: 1.7rem;
}

.flex-container {
    display: flex;
    column-gap: 3rem;
}

img {
    width: 200px;
    margin: 0.5rem;
}

label,
.option {
    font-size: 1.2rem;
    margin-left: 0.6rem;
}

.response>h4 {
    margin: 2rem 0;
}

.response>img {
    display: flex;
    justify-self: center;
}

button {
    padding: 1rem 2.5rem;
    border-radius: 10rem;
    font-size: 1.3rem;
}
</style>
