<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <!-- <md-card-header>
                    <div class="md-title">{{this.$route.name}}</div>
                </md-card-header> -->
                <md-card-content>
                    <div class="md-toolbar-section-start md-size-100">
                        <h1 class="md-title">{{this.$route.name}}</h1>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.names}}</label>
                                <md-input v-model="form.names" id="names" name="names" type="text" required></md-input>
                                <span class="md-error" v-if="errors && errors.names">
                                    {{errors.names[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.surnames}}</label>
                                <md-input v-model="form.surnames" id="surnames" name="surnames" type="text" required></md-input>
                                <span class="md-error" v-if="errors && errors.surnames">
                                    {{errors.surnames[0]}}
                                </span>
                            </md-field>
                        </div>
                        <!-- <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.producer.uuid}}</label>
                                <md-input v-model="form.uuid" id="uuid" name="uuid" type="text"></md-input>
                            </md-field>
                        </div> -->
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.producer.department_id}}</label>
                                    <md-select v-model="form.department_id" name="departments" id="departments" required>
                                    <md-option v-for="department in currDepartments" :value="department.id" :key="department.id" >{{department.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.department_id">
                                    {{errors.department_id[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.producer.municipality_id}}</label>
                                    <md-select v-model="form.municipality_id" name="municipalities" id="municipalities" @md-selected="getCommunitiesNew(form.municipality_id)" required>
                                    <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.municipality_id">
                                    {{errors.municipality_id[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.producer.community_id}}</label>
                                    <md-select v-model="form.community_id" name="communities" id="communities" required>
                                    <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.community_id">
                                    {{errors.community_id[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.saf_size}}</label>
                                <md-input v-model="form.saf_size" id="saf_size" name="saf_size" type="number" :step="0.01" required></md-input>
                                <span class="md-error" v-if="errors && errors.saf_size">
                                    {{errors.saf_size[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.start_year_saf}}</label>
                                <md-input v-model="form.start_year_saf" id="start_year_saf" name="start_year_saf" type="number" :step="0.01" required></md-input>
                                <span class="md-error" v-if="errors && errors.start_year_saf">
                                    {{errors.start_year_saf[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number" required></md-input>
                                <span class="md-error" v-if="errors && errors.lat">
                                    {{errors.lat[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label>{{i18.es.producer.lng}}</label>
                                <md-input v-model="form.lng" id="lng" name="lng" type="number" required></md-input>
                                <span class="md-error" v-if="errors && errors.lng">
                                    {{errors.lng[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end md-layout md-size-100">
                        <md-button v-on:click="salir()" class="md-cpk-danger md-round">SALIR</md-button>
                        <md-button v-on:click="guardar()" class="md-cpk-success md-round" :disabled="form_submitting">GUARDAR</md-button>
                    </div>
                </md-card-content>
            </md-card>
         </form>
    </div>
</template>
<script>
    import axios from "axios";
    import labelsi18 from "@/utils/labels.js";
    export default {
        name:"CreateProducer",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                inhabilita: true,
                form:{
                    "uuid": "",
                    "names": "",
                    "surnames": "",
                    "department_id": 0,
                    "municipality_id": 0,
                    "community_id": 0,
                    "saf_size": null,
                    "start_year_saf": null,
                    "lat": null,
                    "lng": null,
                    /* "created_by": 1,
                    "updated_by": null,
                    "created_at": "2022-08-30T13:19:40.000000Z",
                    "updated_at": "2022-08-30T13:24:49.000000Z" */
                },
                currDepartments:{},
                currMunicipalities:{},
                currCommunities:{},
                errors: {},
                hasMessages: true,
                form_submitting: false
            }
        },
        mounted:function(){
            this.getDepartments();
            this.getMunicipalities();
            //this.getCommunities();
        },
        methods:{
            getDepartments(){
                const departments = localStorage.getItem("departments");
                if(departments){
                    this.currDepartments = JSON.parse(departments);
                    return;
                }
                axios.get("parametrics/departments")
                .then( responseDep => {
                    this.currDepartments = responseDep.data;
                    localStorage.setItem('departments', JSON.stringify(responseDep.data));
                    //console.log(responseDep);
                    //console.log(responseDep.data[1].name);
                });
            },
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
            /* getCommunities(){
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
            }, */
            getCommunitiesNew(val){
                //console.log(val);
                /* const communities = localStorage.getItem("communities");
                if(communities){
                    this.currCommunities = JSON.parse(communities);
                    return;
                } */
                axios.get("parametrics/communities/" + val)
                .then( responseCom => {
                    this.currCommunities = responseCom.data;
                    localStorage.setItem('communities', JSON.stringify(responseCom.data));
                    //console.log(responseCom);
                });
            },
            guardar(){
                this.form_submitting = true;
                axios.post("producer", this.form)
                .then(response=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información del <b>productor</b> se almacenó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.form_submitting = false;
                    this.$router.push('/listproducer');
                }).catch(error => {
                    if(error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.form_submitting = false;
                    }
                });
            },
            salir(){
                this.$router.push('/listproducer');
            }
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
<style scoped>
    .md-autocomplete + strong {
    margin-top: 36px;
    display: block;
  }

</style>