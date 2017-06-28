<template>
  <div class="pop-up-top">
      <img class="logo" src="../../assets/img/logo.png" alt="">
      <h2>编辑备忘录</h2>
      <button v-on:click="ok"><img class="ok" src="../../assets/img/yes.png" alt=""></button>
      <button v-on:click="no"><img class="no" src="../../assets/img/yes.png" alt=""></button>
      
      <!-- <button @click="change">click</button> -->
  </div>
</template>

<script src="../../assets/js/jquery.min.js"></script>
<script>

export default {
  data() {
    return {

    }
  },
  methods:{
      ok(){

      },
      no:function(){
        this.$emit("bol","false");
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/style.css";
  @import "../../assets/css/pop/PopUpTop.css";
</style>
