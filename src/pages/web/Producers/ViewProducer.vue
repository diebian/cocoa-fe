<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-content>
                    
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.producer.names}}</label>
                                <md-input v-model="form.names" id="names" name="names" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.producer.surnames}}</label>
                                <md-input v-model="form.surnames" id="surnames" name="surnames" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.producer.uuid}}</label>
                                <md-input v-model="form.uuid" id="uuid" name="uuid" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                                        
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.producer.department_id}}</label>
                                <!-- <md-select v-model="iniDepartment" name="departments" id="departments"> -->
                                    <md-select v-model="form.department_id" name="departments" id="departments">
                                    <md-option v-for="department in currDepartments" :value="department.id" :key="department.id" >{{department.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.producer.municipality_id}}</label>
                                <!-- <md-select v-model="iniDepartment" name="departments" id="departments"> -->
                                    <md-select v-model="form.municipality_id" name="municipalities" id="municipalities">
                                    <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.producer.community_id}}</label>
                                <!-- <md-select v-model="iniDepartment" name="departments" id="departments"> -->
                                    <md-select v-model="form.community_id" name="communities" id="communities">
                                    <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <!-- selected user:{{currDepartments}} -->
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label>{{i18.es.producer.saf_size}}</label>
                                <md-input v-model="form.saf_size" id="saf_size" name="saf_size" type="number" :step="0.01"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label>{{i18.es.producer.start_year_saf}}</label>
                                <md-input v-model="form.start_year_saf" id="start_year_saf" name="start_year_saf" type="number" :step="0.01"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label>{{i18.es.producer.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label>{{i18.es.producer.lng}}</label>
                                <md-input :disabled="inhabilita" v-model="form.lng" id="lng" name="lng" type="number" ></md-input>
                            </md-field>
                        </div>
                    </div>
                    
                    <!-- <div>
                        <md-input-container>
                        <label for="users">Users</label>
                        <md-select name="users" v-model="currUser">
                            <md-option v-for="user in lstUsers" :key="user.id" :value="user.label">{{user.label}}</md-option>
                        </md-select>
                        </md-input-container>
                        selected user:{{currUser}}
                    </div> -->
                    <div class="md-toolbar-section-end md-layout md-size-100">
                        <md-button to="/listproducer" class="md-success md-round">VOLVER</md-button>
                    </div>
                </md-card-content>
            </md-card>
        <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions> -->
     

      <!-- <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar> -->
    </form>
  </div>
</template>
<script>
    import axios from "axios";
    import labelsi18 from "@/utils/labels.js";
    export default {
        name:"EditProducer",
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
                    "saf_size": 0,
                    "start_year_saf": 0,
                    "lat": 0,
                    "lng": 0,
                    /* "created_by": 1,
                    "updated_by": null,
                    "created_at": "2022-08-30T13:19:40.000000Z",
                    "updated_at": "2022-08-30T13:24:49.000000Z" */
                },
                //selectedDep: null,
                currDepartments:{},
                currMunicipalities:{},
                currCommunities:{}
                //iniDepartment: this.form.department_id
            }
        },
        mounted:function(){
            this.userId = this.$route.params.id;
            //console.log(this.userId);
            axios.get("producer/" + this.userId)
            .then( response => {
                //console.log(response);
                this.form.uuid = response.data.data.uuid;
                this.form.names = response.data.data.names;
                this.form.surnames = response.data.data.surnames;
                this.form.department_id = response.data.data.department_id;
                this.form.municipality_id = response.data.data.municipality_id;
                this.form.community_id = response.data.data.community_id;
                this.form.saf_size = response.data.data.saf_size;
                this.form.start_year_saf = response.data.data.start_year_saf;
                this.form.lat = response.data.data.lat;
                this.form.lng = response.data.data.lng;
                //console.log(this.form);
            });

            this.getDepartments();
            this.getMunicipalities();
            this.getCommunities();
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
                    console.log(responseDep);
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
                    console.log(responseMun);
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
                    console.log(responseCom);
                    //console.log(responseDep.data[1].name);
                });
            }
        },
        computed:{
            /* formatDepartments(){
                return Object.values(this.currDepartments);
            } */
        }
    }
</script>
<style scoped>
    .md-autocomplete + strong {
    margin-top: 36px;
    display: block;
  }

</style>