<template>
<div>
  <h5>Si quieres estar al día de la información sobre nuestra clínica suscríbete a nuestra newsletter</h5>
  <input
            type="email"
            v-model="email"
            class="subscribe-container__email"
            placeholder="Tu correo electrónico"
            required
          />
          <div>
            <button class="button" 
              @click="submit"
              :class="['subscribe-container__submit', !email ? 'disabled' : '']"
            >
              Subscribe
            </button>
          </div>
          <p v-if="isSubscribed">Te has suscrito exitosamente!</p>
  </div>
</template>


<script>

import { http } from '@/plugins/axios'

export default {
    name: 'EFsubscribeMailchimp',
    data () {
        return {
          email: '',
          isSubscribed: false
        }
    },
    methods: {
      submit: async function () {
        const {status} = await http.post('/add-member', {
          email_address: this.email,
          status: 'subscribed'
        })
        if(status === 200) {
          this.isSubscribed = true
        }
      }
    }
}

</script>
<style scoped>

*{
  margin: 1vw 5vw;
}

h5{
  margin-top: 7vw;
}

input{
  width: 200px;
}

button {
  border: transparent;
}

.disabled {
  opacity: .5;
  pointer-events: none;
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
