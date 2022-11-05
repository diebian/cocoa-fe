<template>
  <md-toolbar md-elevation="0" class="md-transparent md-hl-header">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h2 class="md-title">Bienvenid@</h2><h3 class="md-title"><b>{{ this.user }}</b></h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <li class="md-list-item">
              <a
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <!-- <md-icon>person</md-icon> -->
                      <div class="avatar"><img src="@/assets/img/logos/logo.jpg"></div>
                      
                      <!-- <span class="notification">5</span> -->
                      <p class="hidden-lg hidden-md">Aqui nombre usuario</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <!-- <li><a href="#">Editar Perfil</a></li> -->
                      <li v-on:click="cerrarsesion()"><a>Cerrar Sesión</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    cerrarsesion(){
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  },
  mounted(){
    //console.log(localStorage.user);
    this.user=localStorage.user;
  }
};
</script>

<style lang="css">
  .avatar img {
    max-width: 50px;
    border-radius: 50%;
  }
  .md-hl-header{
    height: 95px;
    /* border: 1px solid red; */
  }
</style>

