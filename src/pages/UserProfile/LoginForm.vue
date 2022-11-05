<template>
  <form v-on:submit.prevent="login">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Login</h4>
        <p class="category">Ingrese sus datos</p>
      </md-card-header>

      <md-card-content>
        <div  class="md-layout">
        
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>email</md-icon>
              <label>Email</label>
              <md-input v-model="email" id="email" name="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>lock</md-icon>
              <label> Contraseña</label>
              <md-input v-model="password" id="password" name="password" type="password"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-center">
            <md-button type="submit" class="md-raised md-primary">Ingresar</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-dialog-alert
      v-if="error"
      :md-active.sync="error"
      md-title="Error!"
      md-content="Los datos no coinciden." />
  </form>
</template>
<script>
//import labels from "@/utils/labels";
import axios from 'axios';

export default {
  name: "LoginForm", 
  components:{},
  data: function(){
    return {
      email: "",
      password: "",
      error: false,
      error_msj: "",
    };
  },

  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  methods:{
    login(){
      let json = {
        "email": this.email,
        "password": this.password
      };
      axios.post('auth/login', json)
      .then(data=>{
        if(data.data.status == "success"){
          //localStorage.token = data.data.token;
          localStorage.user = data.data.user.name;
          axios.defaults.headers.common['Authorization'] = 'Bearer' + data.data.token;////
          localStorage.setItem('token', data.data.token);////
          //console.log(localStorage.token);
          //console.log(data.data.user.name);
          //this.$router.push('dash');
          this.$router.push('listproducer');
          
        }
      }).catch((err) => {
        this.error = true;
        let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
      })
    }
  } 
};
</script>
<style>
  .md-hl{color:'#7ab34a'}
</style>
