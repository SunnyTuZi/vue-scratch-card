<template>
  <div class="card-box">
    <scratch-card :c_width="240" :c_height="120" :cricle_size="5" :c_color="cover" :percent="60" @SuccessFunc="scratchSuccess"></scratch-card>
  </div>
</template>

<script>
  import ScratchCard from './lib/vue-scratch-card'
  export default{
    data(){
      return{
        cover:'#77eaa4'
      }
    },
    components:{
      ScratchCard
    },
    methods:{
      scratchSuccess(){
        alert('中奖了！')
      }
    }
  }
</script>
<style scoped>
  
</style>