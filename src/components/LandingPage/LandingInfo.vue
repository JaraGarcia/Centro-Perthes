<template>
 
    <div class="intro">
      <img  src="@/assets/img/famDoc.jpeg" alt="foto de familia">
        <div class="subtitle">
            <h3 style="color: hwb(215 17% 49%);"> - 30 años de experiencia - </h3>
        </div>
    </div>
  

    
</template>

<script>
export default{
    name: 'LandingInfo',
}
</script>


<style>
.intro {
  position: relative;
  justify-content: center;
}
.intro img {
  width: 99.99%;
  height: auto;
  margin-bottom: 10px;
}
.subtitle h3 {
  text-align: center;
  letter-spacing: 2px;
  font-size: 3.5vw;
  margin-top: 10px;
}
</style>