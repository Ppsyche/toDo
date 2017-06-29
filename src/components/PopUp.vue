<template>
  <div class="pop-up">
    <div class="pop-up-top">
      <button @click="breake" class="btn-break">
        <h2>&lt;</h2>
        <img class="logo" src="../assets/img/logo.png" alt="">
        <h2>编辑备忘录</h2>
      </button> 
      <button @click="ok"><img class="ok" src="../assets/img/yes.png" alt=""></button>
      <button @click="no"><img class="no" src="../assets/img/no.png" alt=""></button>
    </div>
    <div class="pop-up-body">
        <!-- <h3>{{year}}-{{month}}-{{day}}&nbsp;{{hour}}:{{minutes}}:{{seconds}}</h3> -->
        <h3>{{time}}</h3>
        <div class="text" id="text" contenteditable="true" >{{txt}}</div>
    </div>
  </div>
</template>

<script>


export default {
  props:['time','txt'],
  data() {
    return {

    }
  },

  // computed:{
  //   getDate(){
  //     var date = new Date();
  //     return date.getFullYear()+'-'
  //       +(date.getMonth()+1)+'-'
  //       +date.getDate()+' '
  //       +date.getHours()+':'
  //       +date.getMinutes()+':'
  //       +date.getSeconds();
  //   }
  // },
  methods:{
      ok(){ 
        var date = new Date();
        var timeNow = date.getFullYear()+'-'
          +(date.getMonth()+1)+'-'
          +date.getDate()+' '
          +date.getHours()+':'
          +date.getMinutes()+':'
          +date.getSeconds();
        this.$emit('timeNow',timeNow);
        var oText = document.getElementById('text');
        this.$emit('text',oText.innerHTML);
        this.$emit('pop');
        // this.$emit('del','true');
        // console.log(this.txt);
      },
      breake(){
        this.$emit('pop');
        this.$emit('text',this.txt);
        // this.$emit('del','false');
      },
      no(){
        this.$emit('text','');
        this.$emit('pop');
        // this.$emit('del','true');
      }
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/PopUp.css";
</style>
