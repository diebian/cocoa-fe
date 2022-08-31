
<template>
  
  <div>
    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">
          
          <!-- {{ Users.message }} -->aaaa
        </h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
           item.id 
          }}</md-table-cell>
        <md-table-cell md-label="UUID" md-sort-by="uuid">{{
           item.uuid 
          }}</md-table-cell>
        <md-table-cell md-label="NOMBRES" md-sort-by="names">{{
           item.names 
          }}</md-table-cell>
        <md-table-cell md-label="APELLIDOS" md-sort-by="surnames">{{
           item.surnames 
          }}</md-table-cell>
        <md-table-cell md-label="DEPARTAMENTO" md-sort-by="department_id">{{
           item.department_id 
          }}</md-table-cell>
        <md-table-cell md-label="MUNICIPIO" md-sort-by="municipality_id">{{
           item.municipality_id 
          }}</md-table-cell>
        <md-table-cell md-label="COMUNIDAD" md-sort-by="bocommunity_iddy">{{
           item.community_id 
          }}</md-table-cell>
        <md-table-cell md-label="TAMAÑO" md-sort-by="bodsaf_sizey">{{
           item.saf_size 
          }}</md-table-cell>
        <md-table-cell md-label="AÑO" md-sort-by="start_year_saf">{{
           item.start_year_saf 
          }}</md-table-cell>
        <md-table-cell md-label="LATITUD" md-sort-by="lat">{{
           item.lat 
          }}</md-table-cell>
        <md-table-cell md-label="LONGITUD" md-sort-by="lng">{{
           item.lng 
          }}</md-table-cell>
        <md-table-cell md-label="OPCIONES">
          <md-button v-on:click="editar(item.id)" to="login" class="md-icon-button md-dense md-raised md-success">
            <md-icon>view_list</md-icon>
          </md-button>
          <md-button v-on:click="editar(item.id)" class="md-icon-button md-dense md-raised md-warning">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button to="login" class="md-icon-button md-dense md-raised md-danger">
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
export default {
  name: "List",
  data: () => ({
    //data(){
    //return{
    users: [],
    pagina: 1,
    //}
    //},
  }),
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('edit/' + id);
      
    },
  },
  mounted() {
    let url = "producer?page=" + this.pagina;
    axios.get(url).then((response) => {
      //this.Users = data;
      console.log(response.data);
      this.users = response.data.data.data;
    });
  },
};
</script>
