<template>
  <div id="app">
    <Login  v-show="$route.meta.Login" />
    <Thenav  v-show="$route.meta.ThenavShow"/>
    <router-view v-if="isRouterAlive"/>
    <Thebottom v-show="$route.meta.tabBarShow"/>
  </div>
</template>


<script>
import Thenav from "@/components/Thenav";
import Login from "@/components/Login";
import Thebottom from "@/components/Thebottom";
export default {

  name: "app",
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  components: {
    Thenav,
    Login,
    Thebottom
  },
  mounted() {

  },
  methods: {
     reload () {
     this.isRouterAlive = false
     this.$nextTick(function() {
       this.isRouterAlive = true
     })
   }   
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  list-style:none;

 
}
a{
   text-decoration:none;
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style:none
}
#app{
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
   font-family:Microsoft Yahei;
}



</style>
