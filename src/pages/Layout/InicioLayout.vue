<template>


    
    <div>
      <top-navbarinicio></top-navbarinicio>



      <dashboard-contentinicio> </dashboard-contentinicio>

      <content-footerinicio v-if="!$route.meta.hideFooter"></content-footerinicio>
    </div>

</template>

<script>
import TopNavbarinicio from "./TopNavbarinicio.vue";
import ContentFooterinicio from "./ContentFooterinicio.vue";
import DashboardContentinicio from "./Contentinicio.vue";
//import MobileMenuinicio from "@/pages/Layout/MobileMenuinicio.vue";
/*import FixedPlugin from "./Extra/FixedPlugin.vue"; */

export default {
  name: "InicioLayaut",
  components: {
    TopNavbarinicio,
    DashboardContentinicio,
    ContentFooterinicio,
    //MobileMenuinicio,
    /* FixedPlugin, */
  },
  data() {
    return {
      /* sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"), */
    };
  },
};
</script>
