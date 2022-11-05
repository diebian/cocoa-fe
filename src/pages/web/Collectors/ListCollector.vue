<template>
  <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
    <md-table v-model="collector" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start md-medium-size-50 md-xsmall-size-50">
          <h1 class="md-title">{{this.$route.name}}</h1>
        </div>
        <div class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
          <md-button to="/createcollector" class="md-cpk-success md-round">NUEVO</md-button>
        </div>
      </md-table-toolbar>
      
      <md-table-row  slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id" md-sort-by="id" md-numeric>{{
          item.id 
          }}</md-table-cell>
        <md-table-cell md-label="MONTE GRANDE KM 5"  md-sort-by="group_name">{{
          item.group_name 
          }}</md-table-cell>
        <md-table-cell md-label="KM 5" md-sort-by="island_name">{{
          item.island_name 
          }}</md-table-cell>
        <md-table-cell md-label="Departamento" md-sort-by="department_id">{{
          item.department_name 
          }}</md-table-cell>
        <md-table-cell md-label="Municipio" md-sort-by="municipality_id">{{
          item.municipality_name 
          }}</md-table-cell>
        <md-table-cell md-label="Comunidad" md-sort-by="community_id">{{
          item.community_name 
          }}</md-table-cell>
        <md-table-cell md-label="Num. Recolectores" md-sort-by="number_collectors">{{
          item.number_collectors 
          }}</md-table-cell>
        <md-table-cell md-label="Presidente" md-sort-by="name_president">{{
          item.name_president 
          }}</md-table-cell>
        <md-table-cell md-label="Tamaño chocolatal" md-sort-by="size_chocolate">{{
          item.size_chocolate 
          }}</md-table-cell>
        <md-table-cell md-label="Año" md-sort-by="start_year_handle">{{ 
          item.start_year_handle  
          }}</md-table-cell>
          <md-table-cell md-label="Latitud" md-sort-by="lat">{{ 
          item.lat  
          }}</md-table-cell>
          <md-table-cell md-label="Longitud" md-sort-by="lng">{{ 
          item.lng  
          }}</md-table-cell>
          <md-table-cell md-label="Uuid" md-sort-by="uuid">{{ 
          item.uuid  
          }}</md-table-cell>
        <md-table-cell md-label="Opciones">
          <md-button v-on:click="ver(item.id)" class="md-just-icon md-cpk-success">
            <md-icon title="Ver">visibility</md-icon>
          </md-button>
          <md-button v-on:click="editar(item.id)" class="md-just-icon md-cpk-warning">
            <md-icon title="Editar">edit</md-icon>
          </md-button>
          <md-button v-on:click="eliminar(item.id)" class="md-just-icon md-cpk-danger">
            <md-icon title="Eliminar">delete</md-icon>
          </md-button>
          <md-button v-on:click="wild(item.id)" class="md-just-icon md-cpk-info">
            <md-icon title="Seguimiento BOSQUE">description</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <div  class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
        <ul id="pagination">
          <li v-if="current_page > 1" @click="nextPage(1)"><a href="#listcollector"><md-icon>first_page</md-icon></a></li>
          <li v-if="current_page > 1" @click="nextPage(current_page - 1)"><a href="#listcollector"><md-icon>chevron_left</md-icon></a></li>
          <template>
            <li v-for="page in pages" v-bind:key="page"><a href="#listcollector" @click="nextPage(page)" v-bind:class="{active: page == current_page}">{{page}}</a></li>
          </template>
          <li v-if="current_page < pages" @click="nextPage(current_page + 1)"><a href="#listcollector"><md-icon>chevron_right</md-icon></a></li>
          <li v-if="current_page < pages" @click="nextPage(pages)"><a href="#listcollector"><md-icon>last_page</md-icon></a></li>
        </ul> 
    </div>
    <md-dialog-confirm
      :md-active.sync="activeDelete"
      md-title="¿Esta seguro de eiminar el registro?"
      md-content="Debe tomar en cuenta. <br> Que este proceso <strong>NO ES REVERSIBLE</strong>."
      md-confirm-text="Confirmar"
      md-cancel-text="Cancelar"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <div class="loading" v-show="isLoading"></div>
  </div>
</template>

<script>
  /* eslint-disable */
import axios from "axios";
import labelsi18 from "@/utils/labels.js";
export default {
  name: "ListCollector",
  data: () => ({
        i18: labelsi18,
        collector: [],
        current_page: 1,
        pages: 1,
        isLoading: false,
        activeDelete: false,
        value: 0
  }),
  async mounted() {
    await this.nextPage();
  },
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('editcollector/' + id);
    },
    ver(id) {
      //console.log(id);
      this.$router.push('viewcollector/' + id);
    },
    eliminar(id) {
      //console.log(id);
      this.activeDelete = true;
      this.value=id;
    },
    wild(id) {
      this.$router.push('listwild/' + id);
    },
    async onConfirm () {
      //console.log(this.value);
      await axios.delete("collector/" + this.value);
      console.log(this.value);
      this.$notify({
          message:
          "Toda la información del <b>recolector</b> se eliminó del sistema.",
          icon: "warning",
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: "cpk-danger",
      });
      this.nextPage();

    },
    onCancel () {
      return;
    },
    async nextPage(page){
      this.isLoading = true;
      page = page || this.current_page;
      await this.axios.get('collector?page=' + page)
      .then(response => {
        this.collector = response.data.data.data;
        this.current_page = response.data.data.current_page;
        this.pages = response.data.data.last_page;
      }).catch((error) => {
        if (error.response.status === 401) {
          this.$router.push({ name: 'Login'})
        }
      });
      this.isLoading = false;
    }
  },
  
  
};
</script>
<style scoped>
  .contenedor{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
</style>
