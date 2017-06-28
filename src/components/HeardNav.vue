<template>
  <div class="top">
      <div class="test">
        <img class="logo" src="../assets/img/logo.png" alt="">
        <h2>我的备忘录</h2>
        <button @click="add"><img class="jia" src="../assets/img/jia.png" alt=""></button>
      </div>
      <!-- <button @click="change">click</button> -->
      <pop-up v-show="bol"></pop-up>
  </div>
  
</template>

<script>
import PopUp from './pop/PopUp'

export default {
  data() {
    return {
      bol:false,
    }
  },
  components:{
    PopUp,
  },
  methods:{
      // change(){
      //     this.$emit('changeMsg','cccccc');
      // }
      add(){
        this.bol = true;
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/HeardNav.css";
</style>
