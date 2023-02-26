<template>
  <div class="form">
    <h1>Semáforo del Perthes</h1>
        <h5>Rellena el cuestionario para conocer el riesgo de tu cadera</h5>
        
    <div class="formSteps">
      <div v-for="(_, index) in form" :class="['step', step >= index ? 'active' : '']" :key="index"></div>
    </div>

    <div>
      <img :src ='activeQuestion.image' />
      <h5>{{activeQuestion.title}}</h5>
      <p>{{activeQuestion.subtitle}}</p>
     
      <ul class="options">
       
        <li @click="selectOption(index, option.value)" v-for="(option, index) in activeQuestion.options" :key="index">
          <div :class="['circle', answers.find(answer => answer.step === step && answer.index === index) ? 'fill' : '']"></div>
          <p>{{option.title}}</p>
          <img :src ='option.image' />
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="decrementStep" v-if="step > 0" class="back button">Anterior</button>
      <button class="button" @click="incrementStep" :disabled="!answers[step]">{{step === form.length - 1 ? 'Ver resultado' : 'Siguiente' }}</button>
    </div>
  </div>

  <div class="response">
            <h4 id="answer"></h4>
            <img :src='URLimage' id="image">
  </div>

  <div>
    <h5 class="form"> {{logMessage}}</h5>
    <img :src='logImageSrc'>
  </div>

</template>

<script>
import {HealthForm} from "../EscuelaFamilias/constants";
export default {
  name: 'EFcheck',
  created() {
    this.form = HealthForm
  },
  data () {
    return {
      step: 0,
      answers: [],
      logMessage: '',
    }
  },
  computed: {
    activeQuestion() {
      return this.form[this.step]
    },
    // logImageSrc() {
    // if (this.logMessage === 'No riesgo') {
    //   return '/lights/3.png';
    // } else if (this.logMessage === 'Moderado') {
    //   return '/lights/2.png';
    // } else if (this.logMessage === 'Grave') {
    //   return '/assets/lights/1.png';
    // } else {
    //   return '';
    // }}
  },
  methods: {
    selectOption: function (index, value) {
      const responses = this.answers.filter(({step}) => step !== this.step);
      this.answers = [...responses, {step: this.step, index, value}]
    },
    decrementStep: function () {
      this.step--;
    },
    incrementStep: function () {
      if(this.step === this.form.length - 1) {
        const totalPoints =[...this.answers].reduce((a,b) => typeof b.value === 'number' ? a + b.value: a, 0);
        if (totalPoints <= 35){
          this.logMessage ='No presenta riesgo';
          this.logImageSrc = require('@/assets/lights/3.png')
        }else if(totalPoints > 35 && totalPoints < 55){ 
          this.logMessage = 'Presenta un riesgo Moderado. Haga seguimiento con un especialista';
          this.logImageSrc = require('@/assets/lights/2.png');
        }else if (totalPoints >= 55){
          this.logMessage ='Presenta riesgo Grave. Contacte con un especialista.';
          this.logImageSrc = require('@/assets/lights/1.png');
        }
        return;
      }
      this.step++;
    }
  }
};

</script>

<style scoped>
h1{
  margin-top: 2vw;
}
.form {
  max-width: 750px;
  margin-left: 6vw;
  margin-right: 6vw;
  margin-bottom: 0.5vw;
}
.formSteps {
  display: flex;
}
.step {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #dddddd;
  margin-right: 5px;
}
.options {
  list-style: none;
}
.options li {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.options li p {
  margin: 0 0 0 10px;
}
.circle {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid gray;
}
.fill {
  background-color: gray;
}
.active {
  background-color: #90a4b0;
}
.actions {
  display: flex;
  width: 100%;
  padding: 5px 10px;
  justify-content: space-between;
  margin-right: 2rem;
}
.back {
  margin-right: 10px
}

form,
button {
    margin-top: 2rem;

}

h6 {
    font-size: 1.7rem;
}

img {
    width: 200px;
    margin: 0.5rem;
}

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

.button {
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
</style>