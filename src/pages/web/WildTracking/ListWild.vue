<template>
  <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
    <md-table v-model="wild" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start md-medium-size-50 md-xsmall-size-50">
          <h1 class="md-title">{{this.$route.name}}</h1>
        </div>
        <div class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
          <md-button to="/createwild" class="md-cpk-success md-round">NUEVO</md-button>
        </div>
      </md-table-toolbar>
      
      <md-table-row  slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id" md-sort-by="id" md-numeric>{{
          item.id 
          }}</md-table-cell>
        <md-table-cell md-label="Uuid"  md-sort-by="uuid">{{
          item.uuid 
          }}</md-table-cell>
        <md-table-cell md-label="Recolector" md-sort-by="collector_id">{{
          item.collector_id 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.1" md-sort-by="q1_1">{{
          item.q1_1 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.2" md-sort-by="q1_2">{{
          item.q1_2 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.3" md-sort-by="q1_3">{{
          item.q1_3 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.4" md-sort-by="q1_4">{{
          item.q1_4 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.5" md-sort-by="q1_5">{{
          item.q1_5 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1.6" md-sort-by="q1_6">{{
          item.q1_6 
          }}</md-table-cell>
        <md-table-cell md-label="Opciones">
          <md-button v-on:click="ver(item.id)" class="md-just-icon md-cpk-success">
            <md-icon>visibility</md-icon>
          </md-button>
          <md-button v-on:click="editar(item.id)" class="md-just-icon md-cpk-warning">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button v-on:click="eliminar(item.id)" class="md-just-icon md-cpk-danger">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <div  class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
        <ul id="pagination">
          <li v-if="current_page > 1" @click="nextPage(1)"><a href="#listwild/"><md-icon>first_page</md-icon></a></li>
          <li v-if="current_page > 1" @click="nextPage(current_page - 1)"><a href="#listwild/"><md-icon>chevron_left</md-icon></a></li>
          <template>
            <li v-for="page in pages" v-bind:key="page"><a href="#listwild/" @click="nextPage(page)" v-bind:class="{active: page == current_page}">{{page}}</a></li>
          </template>
          <li v-if="current_page < pages" @click="nextPage(current_page + 1)"><a href="#listwild/"><md-icon>chevron_right</md-icon></a></li>
          <li v-if="current_page < pages" @click="nextPage(pages)"><a href="#listwild/"><md-icon>last_page</md-icon></a></li>
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
  name: "ListWild",
  data: () => ({
    i18: labelsi18,
    wild: [],
    current_page: 1,
    pages: 1,
    isLoading: false,
    activeDelete: false,
    value: 0,
    form:{
      "id": null,
      "uuid": "",
      "collector_id": null,
      "q1_1": null,
      "q1_2": null,
      "q1_3": null,
      "q1_4": null,
      "q1_5": null,
      "q1_6": null,
      "q1_7": null,
      "q1_8": null,
      "q1_9": null,
      "q2_1a": null,
      "q2_1b": null,
      "q2_2a": null,
      "q2_3a": null,
      "q2_3b": null,
      "q2_3c": null,
      "q3_1a": null,
      "q3_2a": null,
      "q3_2b": null,
      "q3_2c": null,
      "q3_3a": null,
      "q4": null,
      "lat": null,
      "lng": null,
      "created_by": 1,
      /* "updated_by": null,
      "created_at": "2022-09-02T16:34:24.000000Z",
      "updated_at": "2022-09-02T16:34:24.000000Z" */
    },
  }),
  async mounted() {
    this.form.collector_id = this.$route.params.id;
    localStorage.idCollector = this.$route.params.id;
    await this.nextPage();
  },
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('/editwild/' + id);
    },
    ver(id) {
      //console.log(id);
      this.$router.push('/viewwild/' + id);
      //this.$router.push('viewcollector/' + id);
    },
    eliminar(id) {
      //console.log(id);
      this.activeDelete = true;
      this.value=id;
    },
    async onConfirm () {
      //console.log(this.value);
      await axios.delete("wild-tracking/" + this.value);
      //console.log(this.value);
      this.$notify({
          message:
          "Toda la información de <b>BOSQUES</b> se eliminó del sistema.",
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
      await this.axios.get('wild-tracking?idCollector=' + this.form.collector_id+ '&page=' + page)
      .then(response => {
        console.log(response);
        this.wild = response.data.data.data;
        this.current_page = response.data.data.current_page;
        this.pages = response.data.data.last_page;
      }); 
      this.isLoading = false;
    }
  },
};
</script>
<style scoped>
/*   .contenedor{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  } */
</style>
