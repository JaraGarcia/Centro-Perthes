<template>
  <div class="form">
    <h1>Semáforo del Perthes</h1>
        <h5>Rellena el cuestionario para conocer el riesgo de tu cadera</h5>
        <img src="@/assets/lights/4.png" alt="semaforo"/>

    <div class="formSteps">
      <div v-for="(_, index) in form" :class="['step', step >= index ? 'active' : '']" :key="index"></div>
    </div>

    <div>
      <h5>{{activeQuestion.title}}</h5>
      <p>{{activeQuestion.subtitle}}</p>
      <ul class="options">
        <li @click="selectOption(index, option.value)" v-for="(option, index) in activeQuestion.options" :key="index">
          <div :class="['circle', answers.find(answer => answer.step === step && answer.index === index) ? 'fill' : '']"></div>
          <p>{{option.title}}</p>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="decrementStep" v-if="step > 0" class="back button">Back</button>
      <button class="button" @click="incrementStep" :disabled="!answers[step]">{{step === form.length - 1 ? 'Submit' : 'Next' }}</button>
    </div>
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
      answers: []
    }
  },
  computed: {
    activeQuestion() {
      return this.form[this.step]
    }
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
        console.log([...this.answers].reduce((a,b) => a + b.value, 0))
        return;
      }
      this.step++;
    }
  }
}
</script>

<style scoped>
.form {
  max-width: 750px;
  margin-left: 10%;
  margin-right: 10%;
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
  padding: 0 10px;
  justify-content: flex-end;
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