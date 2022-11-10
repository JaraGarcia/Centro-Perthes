<template>
<div>
  <p>Si quieres estar al día de la información sobre nuestra clínica suscríbete a nuestra newsletter</p>
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
  </div>
</template>


<script>

import { http } from '@/plugins/axios'

export default {
    name: 'EFsubscribeMailchimp',
    data () {
        return {
          email: ''
        }
    },
    methods: {
      submit: async function () {
        const {data} = await http.post('/add-member', {
          email_address: this.email,
          status: 'subscribed'
        })
        console.log(data)
      }
    }
}

</script>
<style scoped>


input{
  margin: 5px;
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
  margin: 5px;
}

</style>
