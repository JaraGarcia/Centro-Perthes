<template>
    <h1>Enfermedad de perthes</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas 
        similique neque inventore dignissimos veniam. Perferendis, similique? 
        Architecto et temporibus inventore quidem, error consequatur laboriosam 
        id fuga illum. Est, iste suscipit.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas 
        similique neque inventore dignissimos veniam. Perferendis, similique? 
        Architecto et temporibus inventore quidem, error consequatur laboriosam 
        id fuga illum. Est, iste suscipit.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas 
        similique neque inventore dignissimos veniam. Perferendis, similique? 
        Architecto et temporibus inventore quidem, error consequatur laboriosam 
        id fuga illum. Est, iste suscipit.</p>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas 
        similique neque inventore dignissimos veniam. Perferendis, similique? 
        Architecto et temporibus inventore quidem, error consequatur laboriosam 
        id fuga illum. Est, iste suscipit.</p>


        <button @click="$router.push('diagnostico')">
            DIAGNÓSTICO
        </button>

        <button @click="$router.push('pronostico')">
            PRONÓSTICO
        </button>

        <button @click="$router.push('tratamiento')">
            TRATAMIENTO
        </button>
</template>

<script>


export default{
    name: 'EPinex',
   
}
</script>

<style scoped>
*{
    margin: 6vw;
}

button {
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
  
}
</style>