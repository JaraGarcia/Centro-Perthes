<template>
  <div class ="anuncio" style="width: 100%; background-color: #A3B5C0 ;border:5px solid rgb(62, 57, 57);padding: 10px; font-size:28px;font:oblique bold 120% cursive;color:slategray ">
  <h5 >EL equipo de cirugía pediátrica: </h5>
  <h5> Quienes somos, nuestra experiencia y motivación: </h5>
  </div>
  <div class="grid-container">
    <!--Bloque del doctor-->
      <div>
      <a><img src="../../assets/img/doctoranonimus.jpg"  alt="fotodoctor" width="120" height="100" /> </a> <br>
      <h6 style="color:black;padding: 10px;">Dr.Juan Carlos Abril.</h6> <br>
      <h6 style="padding:5px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis placeat, rem tempora pariatur incidunt qui quo sit perferendis inventore, impedit omnis minima laboriosam! Fuga voluptatem soluta iusto quibusdam. Molestiae.   9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</h6>
      <h6><a href="https://www.linkedin.com/in/juan-carlos-abril-2b5a624a/">Share on LinkedIn</a></h6>
      </div>
      <!--bloque de la doctora-->
      <div>
      <a><img src="../../assets/img/doctoraanonima.jpg"  alt="fotodoctora" width="120" height="100"/> </a> <br>
      <h6 style="color:black;padding: 10px;" >Dra.Margarita Montero</h6><br>
      <h6 style="padding:5px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis placeat, rem tempora pariatur incidunt qui quo sit perferendis inventore, impedit omnis minima laboriosam! Fuga voluptatem soluta iusto quibusdam. Molestiae.   9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</h6>
      <h6><a href="https://www.linkedin.com/shareArticle?mini=true&url=">Share on LinkedIn</a></h6>
      </div>

      <div>
      <a><img src="../../assets/img/doctoraanonima.jpg"  alt="fotodoctora" width="120" height="100"/> </a> <br>
      <h6 style="color:black;padding: 10px;" >Fisioterapeuta Sergio Lerma</h6><br>
      <h6 style="padding:5px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis placeat, rem tempora pariatur incidunt qui quo sit perferendis inventore, impedit omnis minima laboriosam! Fuga voluptatem soluta iusto quibusdam. Molestiae.   9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</h6>
      <h6><a href="https://www.linkedin.com/shareArticle?mini=true&url=">Share on LinkedIn</a></h6>
      </div>

      <div>
      <a><img src="../../assets/img/doctoraanonima.jpg"  alt="fotodoctora" width="120" height="100"/> </a> <br>
      <h6 style="color:black;padding: 10px;" >Enfermeria Victoria Botyanovskaya <br><br> Almudena Cerezo</h6><br>
      <h6 style="padding:5px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis placeat, rem tempora pariatur incidunt qui quo sit perferendis inventore, impedit omnis minima laboriosam! Fuga voluptatem soluta iusto quibusdam. Molestiae.   9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</h6>
      <h6><a href="https://www.linkedin.com/shareArticle?mini=true&url=">Share on LinkedIn</a></h6>
      </div>
      <!--bloque mision vision valores-->
      <div>
      <h2 style="font-size:16px; color:black ;padding: 10px;">  Misión, visión, valores: </h2>
      <h2 style="font-size:12px; color: gray "> Somos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis inventore vitae eveniet pariatur illo distinctio voluptas eos saepe? Fugit obcaecati dolorum architecto numquam nobis dicta accusamus pariatur officia inventore vero?</h2>
      <h2 style="font-size:12px; color: #595959"> Queremos seguir siendo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit aliquid placeat praesentium optio excepturi illum odio? Quas ducimus, quam iure architecto deleniti dolorem eveniet, similique magnam cum fuga fugiat ipsam.</h2>
      <h2 style="font-size:12px; color:gray"> Nos motiva Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero cum corrupti doloribus illo facere dolores eos vel aliquam porro libero fuga consectetur expedita dicta modi fugit tenetur, magnam repellat minus?</h2>
      <h6><a> <img src="../../assets/conferencia100.jpg" alt="conferencia" width="230" height="120" /></a></h6>
      </div>
  </div>
  </template>
  <!--script utilizar PascalCase-->
  <script>
  export default {
      name: 'AboutUs',
  }
  </script>
    <!-- style responsive con grid layout-->
  <style>
  .grid-container {
      display: grid;
      gap: 10px;
      font:oblique bold 120% cursive;
      background-color: rgb(167, 155, 155);
      grid-template-columns: repeat(auto-fit, minmax(150,1fr));
      border:2px solid rgb(62, 57, 57);
  }
  .grid-container > div{
      background-color:#A3B5C0;
      border:2px solid rgb(62, 57, 57);
      color:white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 60px;
      }
  </style>