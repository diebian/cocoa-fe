<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-content>
                    <div class="md-toolbar-section-start md-layout md-size-100">
                        <div class="md-title">{{this.$route.name}}</div>
                    </div>
                    <div class="md-layout md-size-100">
                        <!-- <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.uuid}}</label>
                                <md-input v-model="form.uuid" id="uuid" name="uuid" type="text"></md-input>
                            </md-field>
                        </div> -->
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.group_name}}</label>
                                <md-input v-model="form.group_name" id="group_name" name="group_name" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.group_name">
                                    {{errors.group_name[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.island_name}}</label>
                                <md-input v-model="form.island_name" id="island_name" name="island_name" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.island_name">
                                    {{errors.island_name[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                                        
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.collector.department_id}}</label>
                                    <md-select v-model="form.department_id" name="departments" id="departments">
                                    <md-option v-for="department in currDepartments" :value="department.id" :key="department.id" >{{department.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.department_id">
                                    {{errors.department_id[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.collector.municipality_id}}</label>
                                    <md-select v-model="form.municipality_id" name="municipalities" id="municipalities" @md-selected="getCommunitiesNew(form.municipality_id)">
                                    <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.municipality_id">
                                    {{errors.municipality_id[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.collector.community_id}}</label>
                                    <md-select v-model="form.community_id" name="communities" id="communities">
                                    <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.community_id">
                                    {{errors.community_id[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.number_collectors}}</label>
                                <md-input v-model="form.number_collectors" id="number_collectors" name="number_collectors" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.number_collectors">
                                    {{errors.number_collectors[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.name_president}}</label>
                                <md-input v-model="form.name_president" id="name_president" name="name_president" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.name_president">
                                    {{errors.name_president[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.size_chocolate}}</label>
                                <md-input v-model="form.size_chocolate" id="size_chocolate" name="size_chocolate" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.size_chocolate">
                                    {{errors.size_chocolate[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.start_year_handle}}</label>
                                <md-input v-model="form.start_year_handle" id="start_year_handle" name="start_year_handle" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.start_year_handle">
                                    {{errors.start_year_handle[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.lat">
                                    {{errors.lat[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label>{{i18.es.collector.lng}}</label>
                                <md-input v-model="form.lng" id="lng" name="lng" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.lng">
                                    {{errors.lng[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end md-layout md-size-100">
                        <md-button v-on:click="salir()" class="md-cpk-danger md-round">SALIR</md-button>
                        <md-button v-on:click="guardar()" class="md-cpk-success md-round" :disabled="form_submitting">GUARDAR</md-button>
                        <!-- <md-button v-on:click="guardar()" class="md-cpk-success md-round" :disabled="form_submitting">{{form_submitting ? 'GUARDANDO...' : 'GUARDAR'}}</md-button> -->
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
        name:"CreateCollector",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                form:{
                    "uuid": "",
                    "group_name": "",
                    "island_name": "",
                    "department_id": null,
                    "municipality_id": null,
                    "community_id": null,
                    "number_collectors": null,
                    "name_president": "",
                    "size_chocolate": null,
                    "start_year_handle": null,
                    "lat": null,
                    "lng": null,
                    /* "created_by": 1,
                    "updated_by": null,
                    "created_at": "2022-08-29T22:34:37.000000Z",
                    "updated_at": "2022-08-29T23:39:58.000000Z" */
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
                /* const departments = localStorage.getItem("departments");
                if(departments){
                    this.currDepartments = JSON.parse(departments);
                    return;
                } */
                axios.get("parametrics/departments")
                .then( responseDep => {
                    this.currDepartments = responseDep.data;
                    localStorage.setItem('departments', JSON.stringify(responseDep.data));
                    //console.log(responseDep);
                }).catch((error) => {
                    if (error.responseDep.status === 401) {
                    this.$router.push({ name: 'Login'})
                    }
                });
            },
            getMunicipalities(){
                /* const municipalities = localStorage.getItem("municipalities");
                if(municipalities){
                    this.currMunicipalities = JSON.parse(municipalities);
                    return;
                } */
                axios.get("parametrics/municipalities")
                .then( responseMun => {
                    this.currMunicipalities = responseMun.data;
                    localStorage.setItem('municipalities', JSON.stringify(responseMun.data));
                    //console.log(responseMun);
                }).catch((error) => {
                    if (error.responseMun.status === 401) {
                    this.$router.push({ name: 'Login'})
                    }
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
                axios.post("collector", this.form)
                .then(response=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información del <b>recolector</b> se almacenó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.form_submitting = false;
                    this.$router.push('/listcollector');
                }).catch(error => {
                    if(error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.form_submitting = false;
                    }
                });
            },
            salir(){
                this.$router.push('/listcollector');
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

</style>