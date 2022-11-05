<template>
  <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
    <!-- <md-table v-model="paginatedProducers" md-sort="name" md-sort-order="asc" md-card> -->
      
    <md-table v-model="producers" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start md-medium-size-50 md-xsmall-size-50">
          <h1 class="md-title">
            {{this.$route.name}}
          </h1>
        </div>
        <div class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
          <md-button to="/createproducer" class="md-cpk-success md-round">NUEVO</md-button>
        </div>
      </md-table-toolbar>
      
      <md-table-row  slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id" md-sort-by="id" md-numeric>{{
          item.id 
          }}</md-table-cell>
        <!-- <md-table-cell md-label="Uuid" md-sort-by="uuid">{{
          item.uuid 
          }}</md-table-cell> -->
          
        <md-table-cell md-label="Nombres" md-sort-by="names">{{
          item.names 
          }}</md-table-cell>
        <md-table-cell md-label="Apellidos" md-sort-by="surnames">{{
          item.surnames 
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
        <md-table-cell md-label="Tamaño" md-sort-by="saf_size">{{
          item.saf_size 
          }}</md-table-cell>
        <md-table-cell md-label="Año" md-sort-by="start_year_saf">{{
          item.start_year_saf 
          }}</md-table-cell>
        <md-table-cell md-label="Latitud" md-sort-by="lat">{{
          item.lat 
          }}</md-table-cell>
        <md-table-cell md-label="Longitud" md-sort-by="lng">{{ 
          item.lng  
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
          <md-button v-on:click="saf(item.id)" class="md-just-icon md-cpk-info">
            <md-icon title="Seguimiento SAF">description</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <div  class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
        <ul id="pagination">
          <li v-if="current_page > 1" @click="nextPage(1)"><a href="#listproducer"><md-icon>first_page</md-icon></a></li>
          <li v-if="current_page > 1" @click="nextPage(current_page - 1)"><a href="#listproducer"><md-icon>chevron_left</md-icon></a></li>
          <template>
            <li v-for="page in pages" v-bind:key="page"><a href="#listproducer" @click="nextPage(page)" v-bind:class="{active: page == current_page}">{{page}}</a></li>
          </template>
          <li v-if="current_page < pages" @click="nextPage(current_page + 1)"><a href="#listproducer"><md-icon>chevron_right</md-icon></a></li>
          <li v-if="current_page < pages" @click="nextPage(pages)"><a href="#listproducer"><md-icon>last_page</md-icon></a></li>
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
      <!-- <div class="md-size-100 md-medium-size-50 md-xsmall-size-100 contenedor" v-show="isLoading">
        <md-progress-spinner :md-diameter="50" :md-stroke="5" md-mode="indeterminate"></md-progress-spinner>

      </div> -->
  </div>
</template>

<script>
  /* eslint-disable */
import axios from "axios";
import labelsi18 from "@/utils/labels.js";
export default {
  name: "ListProducer",
  data: () => ({
    /* data(){
      return{ */
        i18: labelsi18,
        producers: [],
        //paginatedProducers: [],
        //titleProducer:"",
        current_page: 1,
        pages: 1,
        isLoading: false,
        activeDelete: false,
        value: 0
      /* }
    }, */
  }),
  async mounted() {
    //////this.isLoading = true;
    //console.log(this.isLoading);
    await this.nextPage();
    //let url = "producer?page=" + this.pagina;
    /* let url = "producer";
    await this.axios.get(url)
    .then((response) => {
      //this.producers = data;
      console.log(response.data);
      //console.log(response.data.message);
      this.producers = response.data.data.data;
      //console.log(response.data.data.total);
      //this.titleProducer=response.data.message;
      this.isLoading = false;
    }); */
  },
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('editproducer/' + id);
    },
    ver(id) {
      //console.log(id);
      this.$router.push('viewproducer/' + id);
    },
    eliminar(id) {
      //console.log(id);
      this.activeDelete = true;
      this.value=id;
      /* axios.delete("producer/" + id)
      .then( response => {

      })
      this.$router.push('/listproducer'); */
    },
    saf(id) {
      this.$router.push('listsaf/' + id);
    },
    async onConfirm () {
      //console.log(this.value);
      await axios.delete("producer/" + this.value);
      console.log(this.value);
      //return;
      this.$notify({
          message:
          "Toda la información del <b>productor</b> se eliminó del sistema.",
          icon: "warning",
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: "cpk-danger",
      });
      this.nextPage();
      //location.reload();
      //this.$router.push('/listproducer');
    },
    onCancel () {
      return;
      //this.$router.push('/listproducer');
    },
    async nextPage(page){
      this.isLoading = true;
      page = page || this.current_page;
      await this.axios.get('producer?page=' + page)
      .then(response => {
        console.log(response.data);
        console.log(this.axios.defaults.headers.common['Auth']);
        this.producers = response.data.data.data;
        this.current_page = response.data.data.current_page;
        this.pages = response.data.data.last_page;
        
        /* console.log(response.data.data.data);
        console.log('current page: '+response.data.data.current_page);
        console.log('total: '+response.data.data.total);
        console.log('page: '+page); */
      }).catch((error) => {
        if (error.response.status === 401) {
          this.$router.push({ name: 'Login'})
        }
      });
      //this.$router.push('/listproducer');
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
  /* .md-progress-spinner {
    margin-left: 50%;
    margin-top: 20%;
    margin-bottom: 20%;
  } */
</style>
