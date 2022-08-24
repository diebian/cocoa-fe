
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
              <label><!-- {{labels.es.producer.names}} --> Email</label>
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
      md-content="Los datos con coinciden." />
  </form>
  
</template>
<script>
//import labels from "@/utils/labels";
import axios from 'axios';

export default {
  name: "LoginForm", 
  //name: "DialogAlert",

  components:{

  },
  data: function(){
    return {
      email: "",
      password: "",
      error: false,
      error_msj: "",
     
      //labels
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
      //console.log('enviando log..', this.email);
      let json = {
        "email": this.email,
        "password": this.password
      };
      axios.post('https://apicacaodev.diebian.dev/public/api/auth/login', json)
      .then(data=>{
        //console.log(data);
        if(data.data.status == "success"){
          //console.log("todo blue")
          localStorage.token = data.data.token;
          this.$router.push('dash');
        }
        /* if(data.data.status == "error"){
          console.log("todo mal")
        } */
        /* else{
          console.log("todo mal");
          this.error = true;
          this.error_msg = "Los datos son incorrectos";
        } */
      }).catch((err) => {
        this.error = true;
        let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
        //console.log(message);
      })
    }
  } 
};
</script>
<style></style>
