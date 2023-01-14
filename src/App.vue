<!-- ESTE ES EL ÍNDICE DE MI PÁGINA WEB -->
<template>
  <LandingTitle/>
  <LandingNavBar/>
  <router-view/>


  
  <!-- footer -->
  <FooterPlace/>
  
 
  </template>


<script>
import LandingTitle from './components/LandingPage/LandingTitle.vue';
import LandingNavBar from './components/LandingPage/LandingNavBar.vue';
import FooterPlace from  './components/FooterPlace.vue';
export default {
  name: 'App',
  components: {
    LandingTitle,
    LandingNavBar,
    FooterPlace, 
},
}
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
}

h1, h2, h3, h4 {
  color: hwb(215 17% 49%);
}
.subtitle{
  font-weight: 600;
}
.appointmentButton{
  border-radius: 4px;
  background-color: #ffffff;
  border: none;
  box-shadow: 20px 20px 50px grey;
  color: hwb(215 17% 49%);
  text-align: center;
  padding: 10px;
  width: 300px;
  cursor: pointer;
  margin: 4vw 8vw 4vw 8vw; 
  font-weight: 900;
  transition: all 0.5s;
  
}

</style>
