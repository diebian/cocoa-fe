<template>
  <div>
    <md-table v-model="producers" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">
          <!-- {{titleProducer}} -->DATOS DEL PRODUCTOR
        </h1>
      </md-table-toolbar>
      <md-table-row  slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id" md-sort-by="id" md-numeric>{{
           item.id 
          }}</md-table-cell>
        <md-table-cell md-label="Uuid" md-sort-by="uuid"><small>{{
           item.uuid 
          }}</small></md-table-cell>
          
        <md-table-cell md-label="Nombres" md-sort-by="names">{{
           item.names 
          }}</md-table-cell>
        <md-table-cell md-label="Apellidos" md-sort-by="surnames">{{
           item.surnames 
          }}</md-table-cell>
        <md-table-cell md-label="Departamento" md-sort-by="department_id">{{
           item.department_id 
          }}</md-table-cell>
        <md-table-cell md-label="Municipio" md-sort-by="municipality_id">{{
           item.municipality_id 
          }}</md-table-cell>
        <md-table-cell md-label="Comunidad" md-sort-by="community_id">{{
           item.community_id 
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
          <md-button v-on:click="ver(item.id)" class="md-just-icon md-success">
            <md-icon>view_list</md-icon>
          </md-button>
          <md-button v-on:click="editar(item.id)" class="md-just-icon md-warning">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button to="login" class="md-just-icon md-danger">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  /* eslint-disable */
import axios from "axios";
import labelsi18 from "@/utils/labels.js";
export default {
  name: "ListProducer",
  //data: () => ({
    data(){
      return{
        i18: labelsi18,
        producers: [],
        //titleProducer:"",
        pagina: 1,
      }
    },
  //}),
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('editproducer/' + id);
    },
    ver(id) {
      //console.log(id);
      this.$router.push('viewproducer/' + id);
    },
  },
  mounted() {
    let url = "producer?page=" + this.pagina;
    axios.get(url).then((response) => {
      //this.producers = data;
      
      //console.log(response.data.message);
      this.producers = response.data.data.data;
      console.log(response.data.data.total);
      //this.titleProducer=response.data.message;
    });
  },
};
</script>
<style scoped>
.btncpk{
  background: #2e7d32;
  color: #fff;
  
}
</style>
