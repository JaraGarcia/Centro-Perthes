<template>

  <h4>Somos un Centro Digital de Excelencia pioneros en el tratamiento de la enfermedad de Perthes.</h4>

  <p>EQUIPO MÉDICO</p>
<div>
  <ul>
    <li><img src="../../assets/equipo/1.png"  alt="fotodoctor" width="120" height="auto" /> Dr.Juan Carlos Abril <a href="https://www.linkedin.com/in/juan-carlos-abril-2b5a624a/">LinkedIn</a></li>
    <li><img src="../../assets/equipo/4.png"  alt="fotodoctor" width="120" height="auto" />Dra.Margarita Montero <a href="https://www.linkedin.com/in/margarita-montero-diaz-6b6219140/?originalSubdomain=es">LinkedIn</a></li>
    <li><img src="../../assets/equipo/3.png"  alt="fotodoctor" width="120" height="auto" />Dr. Jose Antonio Queiruga Dios <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-queiruga-dios-8539a492/">LinkedIn</a></li>
    <li><img src="../../assets/equipo/2.png"  alt="fotodoctor" width="120" height="auto" />Fisioterapeuta Sergio Lerma <a href="https://www.linkedin.com/in/sergio-lerma-lara-90601121/">LinkedIn</a></li>
    <li><img src="../../assets/equipo/5.png"  alt="fotodoctor" width="120" height="auto" />Enfermería Victoria Botyanovskaya <a href="https://www.linkedin.com/in/vicbotya/">LinkedIn</a></li>
    <li><img src="../../assets/equipo/6.png"  alt="fotodoctor" width="120" height="auto" />Enfermería Almudena Cerezo </li>
  </ul>  
</div>

  </template>
  
  <script>
  export default {
      name: 'AboutUs',
  }
  </script>
 
  <style scoped>
*{
    margin-left: 6vw;
    margin-right: 6vw;
    margin-bottom: 0.5vw;
}
h4{
    margin-top: 2vw;

}

div {
  display: inline;
  justify-content: space-between;
}
ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    list-style: none;
}

li {
    flex-direction: column;
    width: 30vw;
    margin-bottom: 40px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px;
    font-size: 85%;
}

img {
  width: 70%;
 
}

</style>
