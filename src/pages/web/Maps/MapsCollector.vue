<template>
  <div class="md-size-100 md-medium-size-50 md-xsmall-size-100">
    <!-- <form novalidate class="md-layout" @submit.prevent="validateUser"> -->
    <md-card>
      <md-toolbar md-elevation="0" class="md-transparent md-layout-item md-size-100 md-small-size-100">
        <div class="md-layout md-size-90">
          <div class="md-layout-item md-small-size-100 md-size-18">
              <md-field>
                  <label >{{i18.es.producer.municipality_id}}</label>
                      <md-select v-model="form.municipality_id" name="municipalities" id="municipalities" md-dense>
                      <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                  </md-select>
              </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-18">
              <md-field>
                  <label >{{i18.es.producer.community_id}}</label>
                      <md-select v-model="form.community_id" name="communities" id="communities" md-dense>
                      <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                  </md-select>
              </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-18">
            <md-field>
              <label >{{i18.es.collector.group_name}}</label>
              <md-select v-model="form.id" name="collectors" id="collectors" md-dense>
                <md-option v-for="collector in currCollectors" :value="collector.id" :key="collector.id" >{{collector.full_name}}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-18">
            <md-datepicker v-model="selectedDateFrom" md-immediately :md-model-type="String">
              <label>Desde</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-18">
            <md-datepicker v-model="selectedDateTo" md-immediately :md-model-type="String">
              <label>Hasta</label>
            </md-datepicker>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-18">
            <md-autocomplete 
              v-model="customer"
              :md-options="customers" 
              @md-changed="getCustomers" 
              @md-opened="getCustomers"
              @md-selected="getSelected" 
              md-dense
            >
              <label>Customers</label>
            </md-autocomplete>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-18">
            <md-button v-on:click="verlatlng()" class="md-cpk-success md-round">VER MAPA</md-button>
          </div>
        </div>
      </md-toolbar>
    
    <!-- </form> -->
      <gmap-map
        :center="mapCenter"
        :zoom="8"
        style="width: 100%; height: 500px"
      >
        <gmap-info-window
          :options="infoWindowOptions"
          :position="infoWindowPosition"
          :opened="infoWindowOpened"
          @closeclick="handleInfoWindowClose"
        >
        <div class="info-window">
          <h4 v-text="'UUID: '+activeCipcas.uuid"></h4>
          <h5 v-text="'Fecha: '+activeCipcas.created_at"></h5>
          <p v-text="'Grupo: '+activeCipcas.group_name"></p>
          <p v-text="'Isla: '+activeCipcas.island_name"></p>
          <p v-text="'Latitud: '+activeCipcas.lat"></p>
          <p v-text="'Longitud: '+activeCipcas.lng"></p>
        </div>
        </gmap-info-window>
        <gmap-marker
          v-for="r in markCipcas"
          :key="r.id"
          :position="getPosition(r)"
          :clickable="true"
          :draggable="false"
          @click="handleMarkerClicked(r)"
        ></gmap-marker>
      </gmap-map>
    </md-card>
    <md-dialog-alert
      :md-active.sync="sinDatos"
      md-title="Alerta!"
      md-content="No existen <strong>Datos para mostrar</strong> en el mapa." />
    <div class="loading" v-show="isLoading"></div>
  </div>
  
</template>

<script>
import { API_KEY } from "@/pages/web/API_KEY";
import { Loader, LoaderOptions } from "google-maps";

import GoogleMap from "@/components/GoogleMap";

import axios from "axios";
import labelsi18 from "@/utils/labels.js";
//const GET_CUSTOMERS=[];
export default {
  name:"MapsProducer",
  data(){
    //let dateFormat = this.$material.locale.dateFormat;
    return{

      i18: labelsi18,
      isLoading: false,
      sinDatos: false,

      form:{
        "id":"",
        "uuid": "",
        "group_name": "",
        "island_name": "",
        "department_id": 0,
        "municipality_id": 0,
        "community_id": 0,
        "lat": 0,
        "lng": 0,
        "idaux": "",
        "full_nameaux": "",
        
        /* "created_by": 1,
        "updated_by": null,
        "created_at": "2022-08-30T13:19:40.000000Z",
        "updated_at": "2022-08-30T13:24:49.000000Z" */
      },
      selectedDateFrom: null,
      selectedDateTo: null, 
      currMunicipalities:{},
      currCommunities:{},
      currCollectors:{},
      /* customers: ['x'],
      customer: '', */

      markCipcas: [],
      infoWindowOptions:{
        pixelOffset:{
          width: 0,
          height: -35
        }
      },
      activeCipcas:{},
      infoWindowOpened: false
    }
  },
  mounted() {
    this.isLoading = true;
    this.getMunicipalities();
    this.getCommunities();
    this.getCollectors();
    //this.getCustomers();
    this.isLoading = false;
  },
  methods:{
    getMunicipalities(){
      const municipalities = localStorage.getItem("municipalities");
      if(municipalities){
          this.currMunicipalities = JSON.parse(municipalities);
          return;
      }
      axios.get("parametrics/municipalities")
      .then( responseMun => {
          this.currMunicipalities = responseMun.data;
          localStorage.setItem('municipalities', JSON.stringify(responseMun.data));
          //console.log(responseMun);
          //console.log(responseDep.data[1].name);
      });
    },
    getCommunities(){
        const communities = localStorage.getItem("communities");
        if(communities){
            this.currCommunities = JSON.parse(communities);
            return;
        }
        axios.get("parametrics/communities")
        .then( responseCom => {
            this.currCommunities = responseCom.data;
            localStorage.setItem('communities', JSON.stringify(responseCom.data));
            //console.log(responseCom);
            //console.log(responseDep.data[1].name);
        });
    },
    getCollectors(){
        axios.get("collector-all")
        .then( responseCol => {
            this.currCollectors = responseCol.data.data;
            localStorage.setItem('collector', JSON.stringify(responseCol.data.data));
            //GET_CUSTOMERS = localStorage.collector;
            /* console.log(this.form.idaux);
            console.log(this.form.full_nameaux); */
            //console.log('currCollectors '+localStorage.collector);
        });
    },
    verlatlng(){
      this.markCipcas= [];
      axios.get('collector-geolocation?municipality_id='+this.form.municipality_id
      +'||community_id='+this.form.community_id
      +'||collector_id='+this.form.id
      +'||from='+this.selectedDateFrom
      +'||to='+this.selectedDateTo)
      .then(responseLtdLng => {
        if(responseLtdLng.data.data.length > 0){
          this.markCipcas = responseLtdLng.data.data;
        }else{
          this.sinDatos = true;
        }


        //console.log(responseLtdLng);
        //this.markCipcas = responseLtdLng.data.data;
        //console.log('marca cipca: '+this.customer)
      })
      .catch(error => {
        //console.error(error);
      })
    },
    getPosition(r){
      return{
        lat: parseFloat(r.lat),
        lng: parseFloat(r.lng)
      }
    },
    handleMarkerClicked(r){
      this.activeCipcas = r; 
      this.infoWindowOpened = true;
    },
    handleInfoWindowClose(){
      this.activeCipcas = {}; 
      this.infoWindowOpened = false;
    },
    /* getCustomers(searchTerm) {
      this.customers = new Promise(resolve => {
        if (!searchTerm) {
          resolve(this.currCollectors.map(x => x.full_name));
        } else {
          const term = searchTerm.toLowerCase();
          this.customers = this.currCollectors.filter(({ full_name }) => {
            return full_name.toLowerCase().includes(term);
           }).map(x => x.full_name);
          resolve(this.customers);
        }
      }); 
    },*/
    /* getSelected() {
      console.log('getSelected', this.customer);

    } */
  },
  computed:{
    mapCenter(){
      if(!this.markCipcas.length){
        return{
          lat:-13.312480,
          lng:-65.206696
        }
      }
      return{
        lat: parseFloat(this.markCipcas[0].lat),
        lng: parseFloat(this.markCipcas[0].lng)
      }
    },
    infoWindowPosition(){
      return{
        lat: parseFloat(this.activeCipcas.lat),
        lng: parseFloat(this.activeCipcas.lng),
      }
    }
  }
};
</script>
