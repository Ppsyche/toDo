<template>
  <div class="pop-up">
      <pop-up-top ></pop-up-top> 
      <pop-up-body></pop-up-body> 
  </div>
</template>

<script>
import PopUpTop from './PopUpTop'
import PopUpBody from './PopUpBody'

export default {
  props:['bol'],
  data() {
    return {

    }
  },
  components:{
    PopUpTop,
    PopUpBody,
  },
  methods:{
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "../assets/css/style.css";*/
  /*@import "../assets/css/PopUp.css";*/
  @import "../../assets/css/style.css";
  @import "../../assets/css/pop/PopUp.css";
</style>
