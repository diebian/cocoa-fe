<template>
  <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
    <md-table v-model="saf" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start md-medium-size-50 md-xsmall-size-50">
          <h1 class="md-title">{{this.$route.name}}</h1>
        </div>
        <div class="md-toolbar-section-end md-medium-size-50 md-xsmall-size-50">
          <md-button to="/createsaf" class="md-cpk-success md-round">NUEVO</md-button>
        </div>
      </md-table-toolbar>
      
      <md-table-row  slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id" md-sort-by="id" md-numeric>{{
          item.id 
          }}</md-table-cell>
        <md-table-cell md-label="Uuid"  md-sort-by="uuid">{{
          item.uuid 
          }}</md-table-cell>
        <md-table-cell md-label="Productor" md-sort-by="producer_id">{{
          item.producer_id 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 1" md-sort-by="q1">{{
          item.department_id 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 2.1" md-sort-by="q2_1">{{
          item.q2_1 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 2.2" md-sort-by="q2_2">{{
          item.q2_2 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 2.3" md-sort-by="q2_3">{{
          item.q2_3 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 3" md-sort-by="q3">{{
          item.q3 
          }}</md-table-cell>
        <md-table-cell md-label="Pregunta 4" md-sort-by="q4">{{
          item.q4 
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
          <li v-if="current_page > 1" @click="nextPage(1)"><a href="#listsaf/"><md-icon>first_page</md-icon></a></li>
          <li v-if="current_page > 1" @click="nextPage(current_page - 1)"><a href="#listsaf/"><md-icon>chevron_left</md-icon></a></li>
          <template>
            <li v-for="page in pages" v-bind:key="page"><a href="#listsaf/" @click="nextPage(page)" v-bind:class="{active: page == current_page}">{{page}}</a></li>
          </template>
          <li v-if="current_page < pages" @click="nextPage(current_page + 1)"><a href="#listsaf/"><md-icon>chevron_right</md-icon></a></li>
          <li v-if="current_page < pages" @click="nextPage(pages)"><a href="#listsaf/"><md-icon>last_page</md-icon></a></li>
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
  name: "ListSaf",
  data: () => ({
    i18: labelsi18,
    saf: [],
    current_page: 1,
    pages: 1,
    isLoading: false,
    activeDelete: false,
    value: 0,
    form:{
      "id": 0,
      "uuid": "",
      "producer_id": 0,
      "q1": "",
      "q2_1": null,
      "q2_2": null,
      "q2_3": null,
      "q3": "",
      "q4": "",
      "q5_1": null,
      "q5_2": null,
      "q5_3": null,
      "q5_4": null,
      "q6_1a": null,
      "q6_1b": "",
      "q6_2a": null,
      "q6_2b": "",
      "q6_3a": "",
      "q6_4a": "",
      "q6_5a": "",
      "q7_1": null,
      "q7_2": null,
      "q7_3": null,
      "q7_4": null,
      "q7_5": "",
      "q8_1a": null,
      "q8_1b": null,
      "q8_1c": null,
      "q8_1d": null,
      "q8_2a": null,
      "q8_3a": null,
      "q8_3b": null,
      "q8_3c": null,
      "q9_1a": null,
      "q9_2a": null,
      "q9_2b": null,
      "q9_2c": null,
      "q10": null,
      "lat": null,
      "lng": null,
      /* "created_by": 1,
      "updated_by": null,
      "created_at": "2022-09-02T16:33:19.000000Z",
      "updated_at": "2022-09-02T16:33:19.000000Z" */
    },
  }),
  async mounted() {
    this.form.producer_id = this.$route.params.id;
    localStorage.idProducer = this.$route.params.id;
    /* axios.get('saf-tracking?' + this.form.producer_id) //EL ERROR DE CORSO SOLO ELIMINE EL / ANTES DE ?
      .then(response => {
        console.log(response);
      }).catch(error =>{
        console.log(error);
      });  */
    //await this.nextPage(page, this.form.producer_id);
    await this.nextPage();
  },
  methods: {
    editar(id) {
      //console.log(id);
      this.$router.push('/editsaf/' + id);
    },
    ver(id) {
      //console.log(id);
      this.$router.push('/viewsaf/' + id);
      //this.$router.push('viewcollector/' + id);
    },
    eliminar(id) {
      //console.log(id);
      this.activeDelete = true;
      this.value=id;
    },
    async onConfirm () {
      //console.log(this.value);
      await axios.delete("saf-tracking/" + this.value);
      //console.log(this.value);
      this.$notify({
          message:
          "Toda la información de <b>SAF</b> se eliminó del sistema.",
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
      await this.axios.get('saf-tracking?idProducer=' + this.form.producer_id+ '&page=' + page)
      .then(response => {
        console.log(response);
        this.saf = response.data.data.data;
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
