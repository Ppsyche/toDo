<template>
  <div class="pop-up-body">
      <!-- <h3>{{year}}-{{month}}-{{day}}&nbsp;{{hour}}:{{minutes}}:{{seconds}}</h3> -->
      <h3>{{getDate}}</h3>
      <div class="text" contenteditable="true"></div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // year:0,
      // month:0,
      // day:0,
      // hour:0,
      // minutes:0,
      // seconds:0
    }
  },
  computed:{
    getDate(){
      var date = new Date();
      return date.getFullYear()+'-'
        +(date.getMonth()+1)+'-'
        +date.getDate()+' '
        +date.getHours()+':'
        +date.getMinutes()+':'
        +date.getSeconds();
    }
  },
  methods:{

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/style.css";
  @import "../../assets/css/pop/PopUpBody.css";
</style>
