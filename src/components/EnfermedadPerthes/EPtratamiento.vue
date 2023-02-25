<template>
    <h1>TRATAMIENTO</h1>
        <p>La calidad y la excelencia son valores que nos caracterízan. En todo momento estamos a tu lado, con un trato cercano y personalizado</p>
<p class="subtitle">Médico</p>
<p>Encaminado a la mejoría sintomatica del niño/a</p>
<ul>
    <li>Aliviar el dolor</li>
    <li>Disminuir la cojera</li>
    <li>Favorecer la movilidad</li>

</ul>
<p class="subtitle">Quirúrgico</p>
<p>En ocasiones puede necesitarse una corrección quirúrgica, para:</p>
<ul>
    <li>Mantener la cabeza femoral dentro de la cavidad que la contiene</li>
    <li>Evitar las deformidades irreversibles</li>
    <li>Mejorar la forma esférica de la cabeza femoral</li>
    <li>Mejorar la fuerza muscular</li>
</ul>
<br>
<!-- Poner las técnicas quirúsgicas en un recuadro en diferentes links abrirlo con hover -->
<!-- Pictograma  Reloj, cama, anestesia-->

<p>Técnicas quirúrgicas:</p>
<div class="dropBtn">
    <button @click="toggleVisibility" class="dropBtn"> Osteotomías </button>
        <div v-show="isVisible" id="dropD" class="dropDwn-content closer" >
            <p><ion-icon name="time-outline"></ion-icon> 1hora</p>
            <p><ion-icon name="bed-outline"></ion-icon> 2 días</p>
            <p><span class="material-symbols-outlined">syringe</span> General sin intubación</p>
            <p>Beneficios: reduce la cadera subluxada</p>
            <p>Preoperatorio: link a la escuela de familias</p>
            <p>Postoperatorio: No requiere escayola, podrá apoyar la pierna a partir de 1 mes. </p>     
        </div>
</div>

<div class="dropBtn">
    <button @click="toggleVisibility" class="dropBtn"> Artrodiastasis </button>
        <div v-show="isVisible" id="dropD" class="dropDwn-content" >
            <p><ion-icon name="time-outline"></ion-icon>1hora</p>
            <p><ion-icon name="bed-outline"></ion-icon> 2 días</p>
            <p><span class="material-symbols-outlined">syringe</span> General sin intubación</p>
            <p>Beneficios: evita el colapso de la cabeza femoral</p>
            <p>Preoperatorio: link a la escuela de familias</p>
            <p>Postoperatorio: No requiere escayola, podrá apoyar la pierna a partir del 8º día.Cuidados del fijador externo 
                Link a la escuela de familias. Visita a nuestro especialista cada 10 días.</p>
        </div>
</div>

<div class="dropBtn">
    <button @click="toggleVisibility" class="dropBtn">Apo-epifisiodesis</button>
        <div v-show="isVisible" id="dropD" class="dropDwn-content" >
            <p><ion-icon name="time-outline"></ion-icon>30 mins</p>
            <p><ion-icon name="bed-outline"></ion-icon>  No: cirugía sin ingreso. 6h</p>
            <p><span class="material-symbols-outlined">syringe</span> General sin intubación</p>
            <p>Beneficios: induce esfericidad a la cabeza femoral</p>
            <p>Preoperatorio: link a la escuela de familias</p>
            <p>Postoperatorio: Apoyo inmediato, no inmobilización, recuperación precoz</p>
        </div>
</div>

<div class="dropBtn">
    <button @click="toggleVisibility" class="dropBtn">Drilling</button>
        <div v-show="isVisible" id="dropD" class="dropDwn-content" >
            <p><ion-icon name="time-outline"></ion-icon>30 mins</p>
            <p><ion-icon name="bed-outline"></ion-icon>  no: cirugía sin ingreso. 6h</p>
            <p><span class="material-symbols-outlined">syringe</span> General sin intubación</p>
            <p>Beneficios: induce revascularización a la cabeza femoral </p>
            <p>Preoperatorio: link a la escuela de familias</p>
            <p>Postoperatorio: Apoyo inmediato, no inmobilización, recuperación precoz</p>
        </div>
</div>

<div class="dropBtn">
    <button @click="toggleVisibility" class="dropBtn">Osteoplastia</button>
        <div v-show="isVisible" id="dropD" class="dropDwn-content" >
            <p><ion-icon name="time-outline"></ion-icon>3horas</p>
            <p><ion-icon name="bed-outline"></ion-icon>  no: 3 días</p>
            <p><span class="material-symbols-outlined">syringe</span> General con intubación</p>
            <p>Beneficios: induce remodelación de la cabeza femoral</p>
            <p>Preoperatorio: link a la escuela de familias</p>
            <p>Postoperatorio: Frecuentemente precisa de luxación de la cadera. Técnica no exenta de complicaciones. No apoyo de la pierna operada. Tiempo de recuperación más largo</p>
        </div>
</div>

</template>

<script>


export default{
    name: 'EPtratamiento',

    data(){
      return{
        isVisible: false,
      };
    },
    methods: {
      toggleVisibility(){
        this.isVisible = !this.isVisible;
      },
      closeMenu(){
        this.isVisible = false;
      }
    },
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

button {
  display: inline-block;
  border-radius: 4px;
  background-color: #A3B5C0;;
  border: none;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 0px;
}

ion-icon, span{
    font-size: x-large;
    margin: 0px;
}

.closer{
    justify-content: center;
}

</style>