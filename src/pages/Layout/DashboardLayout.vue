<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <!-- DE MOMENTO NO HL -->
      <!-- <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="user">
        <md-icon>person</md-icon>
        <p>Perfil de Usuario</p>
      </sidebar-link> -->
      <!-- DE MOMENTO NO HL -->
      <!-- <sidebar-link to="/usercipca">
        <md-icon>manage_accounts</md-icon>
        <p>Usuarios</p>
      </sidebar-link> -->
      <sidebar-link to="/listproducer">
        <md-icon>person</md-icon>
        <p>Productores</p>
      </sidebar-link>
      <sidebar-link to="/listcollector">
        <md-icon>groups</md-icon>
        <p>Recolectores</p>
      </sidebar-link>
      <sidebar-link to="/mapsproducer">
        <md-icon>location_on</md-icon>
        <p>Mapas SAF</p>
      </sidebar-link>
      <sidebar-link to="/mapscollector">
        <md-icon>person_pin_circle</md-icon>
        <p>Mapas Bosques con Cacao Silvestre</p>
      </sidebar-link>
      <!-- <sidebar-link to="/reports">
        <md-icon>article</md-icon>
        <p>Reportes</p>
      </sidebar-link> -->
      <sidebar-link to="/reportsProducer">
        <md-icon>description</md-icon>
        <p>Reporte Productor</p>
      </sidebar-link>
      <!-- <sidebar-link to="table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link> -->
      <sidebar-link to="#" class="active-pro">
        <md-icon>app_registration</md-icon>
        <p>Versión 0.6.2</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <!-- <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin> -->
      <div class="md-hl-contenedor">
        <dashboard-content> </dashboard-content>
      </div>
      

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
/* import FixedPlugin from "./Extra/FixedPlugin.vue"; */

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    //FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/fondo.jpg"),
      
    };
  },
};
</script>
<style>
  .md-hl-contenedor{
    /* height: 85px; */
    min-height: calc(100vh - 95px - 85px);
    /* border: 1px solid blue; */
    /* background-color: #c4ccd0; */
  }
</style>
