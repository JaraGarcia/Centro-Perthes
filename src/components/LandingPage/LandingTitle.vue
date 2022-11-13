<template>
    <header>
        <div>
            <p> CENTRO INTERNACIONAL DEL PERTHES</p>
              <div class="subtitle">
                  <p>pioneros en el tratamiento</p>
              </div>
            </div>
      <RouterLink to="/" class="logo">
            <img src="@/assets/logo.png" alt="LOGO" />
      </RouterLink>
    </header>
</template>


<script>

export default{
    name: 'LandingTitle',
}
</script>


<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
}
header img{
  width: 6vw;
  height: auto;
  opacity: 0.7;
}
header p {
  font-size: 3.5vw;
  letter-spacing: 2px;
  display: inline;
  font-weight: 500;
  color: hwb(215 17% 49%);
  
}

.subtitle{
  color: hwb(215 17% 49%); 
}
.subtitle p{
    display: flex;
    justify-content: end;
    font-size: 2.8vw;
    letter-spacing: 2px;
    line-height: 0.2;
  }
</style>
