<template>
  <div class="main">
    <div class="top">
      <img class="logo" src="../assets/img/logo.png" alt="">
      <h2>我的备忘录</h2>
      <button @click="add"><img class="jia" src="../assets/img/jia.png" alt=""></button>
    </div>
    <div class="body">
      <ul>
        <li v-for="(cont,index) in content" @click="look(cont,index)">
          <span class="left">{{cont.thing}}</span>
          <span class="rightt">&gt;</span>
          <span class="right">{{cont.time}}</span>
        </li>
      </ul>
    </div>
    <pop-up v-if="bol" @pop="haspop" @timeNow="hastime" @text="hastext" :time="time" :txt="txt"></pop-up>
  </div>
  
</template>

<script>
import PopUp from './PopUp'

export default {
  data() {
    return {
      bol:false,
      time:"",
      timeClose:"",
      txt:"",
      del:false,
      content:[]
    }
  },
  components:{
    PopUp,
  },
  methods:{
      add(){
        this.bol = true;
        var date = new Date();
        this.time = date.getFullYear()+'-'
          +(date.getMonth()+1)+'-'
          +date.getDate()+' '
          +date.getHours()+':'
          +date.getMinutes()+':'
          +date.getSeconds();
        this.txt = "";   
      },
      haspop(){
        this.bol = false;
      },
      hastime(tim){
        this.timeClose = tim;
      },
      hastext(t){
        if(t != ''){
          this.txt = t;
          var cont = {
            thing:this.txt,
            time:this.timeClose,
            // timeClose:this.timeClose,
          }
          this.content.unshift(cont);
        }
      },
      // hasdel(b){
      //   this.del = b;
      //   console.log(b);
      // },
      look(cont,index){
        this.bol = true;
        // var date = new Date();
        this.time = cont.time;
        this.txt = cont.thing;
        // if(this.del){
        this.content.splice(index,1);
        // }
      },
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/TodoMain.css";
</style>
