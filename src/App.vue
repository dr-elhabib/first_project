<template>
  <div>
    <HeaderApp @toggle-login-model="isLoginModelOpen=!isLoginModelOpen"></HeaderApp>
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <LoginModel  v-if="isLoginModelOpen" @toggle-login-model="isLoginModelOpen=!isLoginModelOpen"/>
  </div>
</template>

<script>

import HeaderApp from "./components/HeaderApp"
import  LoginModel from './components/LoginModel'
import  firebase from '@/utilities/firebase'
export default {
  name: 'App',
  components: { HeaderApp,LoginModel},
  data(){
    return{
      authUser:{},
      isLoginModelOpen:false
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.authUser=user;
      } else {
        this.authUser= {};
      }
    });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
