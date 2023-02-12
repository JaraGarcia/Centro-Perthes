<template>
      <nav v-click-outside="closeMenu">
        <div class="dropBtn">
            <button @click="toggleVisibility" class="dropBtn"> <ion-icon name="menu-outline"></ion-icon> </button>
                <div v-show="isVisible" id="dropD" class="dropDwn-content" >
                  <RouterLink class="dropBtn" @click="closeMenu" to="/Enfermedad_Perthes">Enfermedad del Perthes ➤</RouterLink>
                  <div class="dropDwn-content doublenav">
                    <RouterLink @click="closeMenu" to="/diagnostico">Diagnóstico</RouterLink>
                    <RouterLink @click="closeMenu" to="/pronostico">Pronóstico</RouterLink>
                    <RouterLink @click="closeMenu" to="/tratamiento">Tratamiento</RouterLink>
                  </div>
                    <RouterLink @click="closeMenu" to="/EscuelaFamilias">Escuela de familias</RouterLink>
                    <RouterLink @click="closeMenu" to="/Eventos">Eventos</RouterLink>
                    <RouterLink @click="closeMenu" to="/AboutUs">El equipo</RouterLink>
                    <RouterLink @click="closeMenu" to="/IDI">I+D+i</RouterLink>

                </div>
        </div>
        <ul class="rrss">
          <li><a href="mailto:perthes.cip@gmail.com" target="_blank"> <ion-icon name="mail-outline"></ion-icon> </a> </li>
          <li><a href="tel:+34683331024"> <ion-icon name="call-outline"></ion-icon> </a> </li>
          <li><a href="https://twitter.com/centrodeperthes" target="_blank"> <ion-icon name="logo-twitter"></ion-icon> </a> </li>
          <li><a href="https://www.linkedin.com/in/centro-internacional-del-perthes-b94124252/" target="_blank"> <ion-icon name="logo-linkedin"></ion-icon> </a> </li>
      </ul>
    </nav>
</template>


<script lang="js">

export default {
    name: 'LandingNavBar',

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

<style>
nav {
  font-size: x-large;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #A3B5C0;
  margin: 0px;
}
nav ul {
  display: flex;
  margin: 0px;
  padding: 0px;
}
nav li {
  margin: 10px;
  list-style-type: none;
}
nav li:hover {
  background-color: #90a4b0;
  width: max-content;
}
nav a {
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 2px;
}
nav .dropBtn {
  font-size: x-large;
  background-color: #A3B5C0;
  color: #fff;
  border: none;
  cursor: pointer;
}
nav .dropBtn .show {
  display: block !important;
}
nav .dropBtn .dropDwn {
  position: relative;
  display: inline-block;
}
nav .dropBtn .dropDwn-content {

  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
nav .dropBtn .dropDwn-content a {
  color: black;
  padding: 12px 16px;
  font-size: large;
  text-decoration: none;
  display: block;
}
nav .dropBtn .dropDwn-content a:hover {
  background-color: #ddd;
}

.doublenav{
  margin-left: 300px;
  margin-top: -40px;
}

</style>