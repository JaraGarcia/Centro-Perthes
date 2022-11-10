<template >
    <div class="container text-center">
  <div class="row">
    
      
        <div class="post" v-for="post of posts" :key="post.id">
    <div class="post-user">
        <img src='./assets/conferencia.jpg' alt="">
       </div>
        <div class="post-username">{{post.username}}</div>
    </div>
    <div class="post-content">{{post.content}}</div>
</div>
  
       
    
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          <iframe src="https://calendar.google.com/calendar/embed?height=360&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=ODVjZDViZDExMjc4ZjllMDNiOWZkMTg0YTRhMzJmYzFhMmEyOWFjMzBiN2M0MzllMWZiZTliNmViMjY4NDM5MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4" 
    style=" red; border:solid 15px #A3B5C0" width="580" height="390" frameborder="0" scrolling="si"></iframe>

        </div>
        <div class="col-4 col-sm-6">
          <div id="app" class="container">
    <div class="flex justify-center">
      <img src="./assets/anuncioevent200.jpg" alt="anuncia eventos " class="w-32 drop-shadow-xl  rounded-full border border-solid bg-white">
    </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
   </template>


<script>
export default{
    name: 'CalendarGoogle'
   
}

</script>

<style>

  .container {
  position: relative;
  width: 900px;
  height: 550px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}





</style>



  


  

