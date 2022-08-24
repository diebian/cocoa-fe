<template>
  <form>
    <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      > -->
    <md-card>
      <md-card-header>
        <h4 class="title">Registro</h4>
        <p class="category">Ingrese sus datos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>person</md-icon>
              <label>Nombre Completo</label>
              <md-input v-model="name" type="text"></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>email</md-icon>
              <label>Email Address</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>phone</md-icon>
              <label>Teléfono</label>
              <md-input v-model="movil" type="number"></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>lock</md-icon>
              <label>Contraseña</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <md-icon>lock</md-icon>
              <label>Confirme Contraseña</label>
              <md-input v-model="repassword" type="password"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-center">
            <md-button class="md-raised md-primary">Registrar</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <!-- </div> -->
  </form>
</template>
<script>
export default {
  name: "login-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: null,
      email: null,
      movil: null,
      password: null,
      repassword: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    };
  },
};
</script>
<style></style>
