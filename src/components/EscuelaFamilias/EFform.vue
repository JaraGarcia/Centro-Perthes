<template>
<div class="subscribe-container">
  <input
            type="email"
            v-model="email"
            class="subscribe-container__email"
            placeholder="Your email address"
            required
          />
          <div>
            <button
              @click="submit"
              :class="['subscribe-container__submit', !email ? 'disabled' : '']"
            >
              Subscribe
            </button>
          </div>
  </div>
</template>


<script>
import axios from 'axios'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: '724f03f0dc2ea16ad4782e7ce932379d-us14',
  server: 'us14'
})

export default {

    name: 'EFform',
    props: {
        elementId: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        }
        },
    data () {
        return {
          email: ''
        }
    },
    methods: {
      submit: async function () {
        const {data} = await axios.post('https://us14.api.mailchimp.com/3.0/lists/6d07b49f0b/members', {
          email_address: this.email,
          status: 'subscribed'
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            authorization: `Bearer 724f03f0dc2ea16ad4782e7ce932379d-us14`
          }
        })
        console.log(data)
      }
    }
}

// export const Base = () => ({
//   props: {
//     elementId: {
//       type: String,
//       default: text("elementId", "first-email-signup-form")
//     },
//     url: {
//       type: String,
//       default: text("url", "https://us14.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX")
//     },
//     title: {
//       type: String,
//       default: text("title", "Subscribe to the Newsletter")
//     },
//     subtitle: {
//       type: String,
//       default: text("subtitle", "We take privacy seriously and we will never spam or sell your information.")
//     },
//   }

</script>
<style scoped>

.subscribe-container {
  border: black;
  border-radius: 4px;
  box-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.3);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 600px;
  padding: 1.25rem 1rem;
  width: 100%;
}
form {
    margin-bottom: 0;
  }
form title{
    color: black;
    display: inline-block;
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  
}

.disabled {
  opacity: .5;
  pointer-events: none;
}

</style>
