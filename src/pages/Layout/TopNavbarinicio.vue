<template>
  <md-toolbar md-elevation="5" class="md-success">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start md-medium-size-50 md-xsmall-size-50">
        <md-button to="inicio" class="md-success">
          <md-icon>home</md-icon>
          <h4 class="md-title" style="flex: 1">Inicio</h4>
        </md-button>
      </div>
      <div class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
        <!--  <router-link to=""></router-link> -->
        <md-button to="register" class="md-success"><md-icon>lock</md-icon>Registrarse</md-button>
        <md-button to="login" class="md-success"><md-icon>person</md-icon>Iniciar Sesión</md-button>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<style lang="css"></style>
