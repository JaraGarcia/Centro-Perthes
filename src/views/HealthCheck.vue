<template>
  <div class="form">
    <p>Please fill out the form below</p>

    <div class="formSteps">
      <div v-for="(_, index) in form" :class="['step', step >= index ? 'active' : '']" :key="index"/>
    </div>

    <div>
      <p>{{activeQuestion.title}}</p>
      <ul class="options">
        <li @click="selectOption(index, option.value)" v-for="(option, index) in activeQuestion.options" :key="index">
          <div :class="['circle', answers.find(answer => answer.step === step && answer.index === index) ? 'fill' : '']"/>
          <p>{{option.title}}</p>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="decrementStep" v-if="step > 0" class="back">Back</button>
      <button @click="incrementStep" :disabled="!answers[step]">{{step === form.length - 1 ? 'Submit' : 'Next' }}</button>
    </div>
  </div>
</template>

<script>
import {HealthForm} from "@/constants";

export default {
  name: 'HealthCheck',
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
  max-width: 500px;
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
</style>