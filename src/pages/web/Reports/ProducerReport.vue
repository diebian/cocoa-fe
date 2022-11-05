<template>
    <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
      <md-toolbar  md-elevation="0" class="md-transparent md-layout-item md-size-100 md-small-size-100">
        <div class="md-layout-item md-small-size-100 md-size-15">
              <md-field :class="messageClass">
                  <label >{{i18.es.producer.municipality_id}}</label>
                  <md-select v-model="form.municipality_id" name="municipalities" id="municipalities" @md-selected="getCommunitiesNew(form.municipality_id)" md-dense>
                      <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                  </md-select>
                  <span class="md-error" v-if="errors && errors.municipality_id">
                      {{errors.municipality_id[0]}}
                  </span>
              </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-15">
              <md-field :class="messageClass">
                  <label >{{i18.es.producer.community_id}}</label>
                  <md-select v-model="form.community_id" name="communities" id="communities" md-dense>
                      <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                  </md-select>
                  <span class="md-error" v-if="errors && errors.community_id">
                      {{errors.community_id[0]}}
                  </span>
              </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-15">
            <md-field>
              <label >{{i18.es.producer.names}}</label>
              <md-select v-model="form.id" name="producers" id="producers" md-dense>
                <md-option v-for="producer in currProducers" :value="producer.id" :key="producer.id" >{{producer.full_name}}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-15">
            <md-datepicker v-model="selectedDateFrom" md-immediately :md-model-type="String" md-dense>
              <label>Desde</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-15">
            <md-datepicker v-model="selectedDateTo" md-immediately :md-model-type="String">
              <label>Hasta</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-button v-on:click="report('aaa','bbb','ccc')" class="md-cpk-success md-round">BUSCAR</md-button>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-20">
            <md-button v-on:click="tableToExcel('table', 'Productores')" class="md-cpk-success md-round">REPORTE</md-button>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-20">
            <md-button v-on:click="report('aaa','bbb','ccc')" class="md-cpk-success md-round">temp</md-button>
          </div> -->
      </md-toolbar>
      
      <table style="visibility:hidden" border="1" ref="table" id="loremTable">
        
        <!-- <table border="1" ref="table" id="loremTable"> -->
        <thead>
          
          <tr align="center">
            <th style="background-color: rgb(97, 199, 60, 78);">id</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Nombre</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Apellido</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Tamaño</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Municipio</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Comunidad</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Latitud</th>
            <th style="background-color: rgb(97, 199, 60, 78);">Longitud</th>
            <!-- <th>Comunidad</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in producersReport" :key="item.id">
            <td v-text="item.id"></td>
            <td v-text="item.names"></td>
            <td v-text="item.surnames"></td>
            <td v-text="item.saf_size"></td>
            <td v-text="item.municipality"></td>
            <td v-text="item.community"></td>
            <td v-text="item.lat"></td>
            <td v-text="item.lng"></td>
            <!-- <td>{{totalProducer}}</td> -->
          </tr>
          <tr>
            <td align="right" colspan="7" style="background-color: rgb(224,217,220,88);">Total de Productores</td>
            <td style="background-color: rgb(225,129,46,100);">{{totalProducer}}</td>
          </tr>
          <tr>
            <td align="right" colspan="7" style="background-color: rgb(224,217,220,88);">Promedio SAF</td>
            <td style="background-color: rgb(225,129,46,100);">{{promedioSAF}}</td>
          </tr>
          <tr>
            <td align="right" colspan="7" style="background-color: rgb(224,217,220,88);">Rendimiento Promedio</td>
            <td style="background-color: rgb(225,129,46,100);">{{rendimientoPromedio}}</td>
          </tr>
          <tr>
            <td align="right" colspan="7" style="background-color: rgb(224,217,220,88);">Rendimiento por Planta</td>
            <td style="background-color: rgb(225,129,46,100);">{{rendimientoPlanta}}</td>
          </tr>
          <tr>
            <td align="right" colspan="7" style="background-color: rgb(224,217,220,88);">Ingreso Generado</td>
            <td style="background-color: rgb(225,129,46,100);">{{ingresoGenerado}}</td>
          </tr>
          
        </tbody>
      </table>
        
      <md-dialog-alert
      :md-active.sync="sinDatos"
      md-title="Alerta!"
      md-content="No existen <strong>Datos para exportar</strong>." />
      <md-dialog-confirm
        :md-active.sync="activeReport"
        md-title="Existen registros "
        md-content="Desea exportar el <strong>REPORTE?</strong>."
        md-confirm-text="Exportar"
        md-cancel-text="Cancelar"
        @md-cancel="onCancel"
        @md-confirm="onConfirm('bb','Report Prod')" />
      <div class="loading" v-show="isLoading"></div>
    </div>
  </template>
<script>
  import axios from "axios";
    import labelsi18 from "@/utils/labels.js";
    //import { downloadXls } from "@/pages/web/Reports/downloadXls.js";
    export default {
        data(){
            return{
              uri :'data:application/vnd.ms-excel;base64,',
              template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
              base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
              format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
 
              currMunicipalities:{},
              currCommunities:{},
              errors: {},
              i18: labelsi18,
              isLoading: false,
              currProducers:{},
              producersReport: [],
              totalProducer:'',
              promedioSAF:'',
              rendimientoPromedio:'',
              rendimientoPlanta:'',
              ingresoGenerado:'',
              sinDatos: false,
              activeReport: false,
              selectedDateFrom: null,
              selectedDateTo: null,

              form:{
                    "id": 0,
                    "full_name": "",

                    "uuid": "",
                    "names": "",
                    "surnames": "",
                    "department_id": "",
                    "municipality_id": "",
                    "community_id": "",
                    "saf_size": 0,
                    "start_year_saf": 0,
                    "lat": 0,
                    "lng": 0,
                },
            }
        },
        mounted:function(){
          /* axios.get("producer-all")
            .then( response => {
                //console.log(response);
                this.form.id = response.data.data.id;
                this.form.full_name = response.data.data.full_name;
            }); */
            //this.getDepartments();
            this.getMunicipalities();
            this.getProducers();
        },
        methods:{
            tableToExcel(table, name){
              if (!table.nodeType) table = this.$refs.table
              var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
              window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },

            getMunicipalities(){
                const municipalities = localStorage.getItem("municipalities");
                if(municipalities){
                    this.currMunicipalities = JSON.parse(municipalities);
                    //console.log(this.currMunicipalities);
                    return;
                }
                axios.get("parametrics/municipalities")
                .then( responseMun => {
                    this.currMunicipalities = responseMun.data;
                    localStorage.setItem('municipalities', JSON.stringify(responseMun.data));
                });
                //console.log(this.currMunicipalities);
            },
            getCommunitiesNew(val){
              this.isLoading = true;
                axios.get("parametrics/communities/" + val)
                .then( responseCom => {
                    this.currCommunities = responseCom.data;
                    localStorage.setItem('communities', JSON.stringify(responseCom.data));
                });
                this.isLoading = false;
            },
            
            getProducers(){
              axios.get("producer-all")
              .then( responseProd => {
                  this.currProducers = responseProd.data.data;
                  localStorage.setItem('producer', JSON.stringify(responseProd.data));
                  //console.log('producer-all: '+this.currProducers);
                  //console.log(responseDep.data[1].name);
              }).catch((error) => {
                if (error.response.status === 401) {
                  this.$router.push({ name: 'Login'})
                }
              });
            },
            report(){
              //alert(this.form.municipality_id);
              this.isLoading = true;
              this.axios.get('producer-report?municipality_id='+this.form.municipality_id
              +'||community_id='+this.form.community_id
              +'||producer_id='+this.form.id
              +'||from='+this.selectedDateFrom
              +'||to='+this.selectedDateTo)
              .then(response => {
                if(response.data.data.total_producers > 0){
                  this.activeReport = true;
                }else{
                  this.sinDatos = true;
                }
                //console.log(response.data);
                //console.log(this.axios.defaults.headers.common['Auth']);
                this.producersReport = response.data.data.producers;
                this.totalProducer = response.data.data.total_producers;
                this.promedioSAF = response.data.data.SAF_average_area;
                this.rendimientoPromedio = response.data.data.average_cocoa;
                this.rendimientoPlanta = response.data.data.average_plants;
                this.ingresoGenerado = response.data.data.income_sale_cocoa;
                //this.promedioSAF = response.data.data.SAF_average_area;
              });
              //this.$router.push('/listproducer');
              this.isLoading = false;
              //downloadXls(table, title, desc);
            },
            onCancel () {
              return;
              //this.$router.push('/listproducer');
            },
            onConfirm (table, name) {
              if (!table.nodeType) table = this.$refs.table
              var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
              window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
        },
        computed:{
            /* formatDepartments(){
                return Object.values(this.currDepartments);
            } */
            messageClass () {
                return {
                    'md-invalid': this.hasMessages
                }
            }
        }
    }
</script>