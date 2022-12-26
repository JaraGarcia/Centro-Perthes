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

</style>
