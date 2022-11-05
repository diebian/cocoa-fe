<template>
    <div>
        <form novalidate class="md-layout" >
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
                            <md-field>
                                <label>{{i18.es.collector.group_name}}</label>
                                <md-input v-model="form.group_name" id="group_name" name="group_name" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label>{{i18.es.collector.island_name}}</label>
                                <md-input v-model="form.island_name" id="island_name" name="island_name" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                                        
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.collector.department_id}}</label>
                                    <md-select v-model="form.department_id" name="departments" id="departments">
                                    <md-option v-for="department in currDepartments" :value="department.id" :key="department.id" >{{department.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.collector.municipality_id}}</label>
                                    <md-select v-model="form.municipality_id" name="municipalities" id="municipalities" @md-selected="getCommunitiesNew(form.municipality_id)">
                                    <md-option v-for="municipality in currMunicipalities" :value="municipality.id" :key="municipality.id" >{{municipality.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.collector.community_id}}</label>
                                    <md-select v-model="form.community_id" name="communities" id="communities">
                                    <md-option v-for="community in currCommunities" :value="community.id" :key="community.id" >{{community.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.number_collectors}}</label>
                                <md-input v-model="form.number_collectors" id="number_collectors" name="number_collectors" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.name_president}}</label>
                                <md-input v-model="form.name_president" id="name_president" name="name_president" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.size_chocolate}}</label>
                                <md-input v-model="form.size_chocolate" id="size_chocolate" name="size_chocolate" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.start_year_handle}}</label>
                                <md-input v-model="form.start_year_handle" id="start_year_handle" name="start_year_handle" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label>{{i18.es.collector.lng}}</label>
                                <md-input v-model="form.lng" id="lng" name="lng" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end md-size-100 md-medium-size-50 md-xsmall-size-50">
                        <md-button to="/listcollector" class="md-cpk-danger md-round">CANCELAR</md-button>
                        <md-button v-on:click="editar()" class="md-cpk-success md-round">GUARDAR</md-button>
                    </div>
                </md-card-content>
            </md-card>
            <md-dialog-alert
            v-if="error"
            :md-active.sync="error"
            md-title="Error!"
            md-content="No se realizo la actualización." />
        </form>
    </div>
</template>
<script>
    import axios from "axios";
    import labelsi18 from "@/utils/labels.js";
    export default {
        name:"EditCollector",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                error: false,
                error_msj: "",
                form:{
                    "id": "",
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
            }
        },
        mounted:function(){
            this.form.id = this.$route.params.id;
            axios.get("collector/" + this.form.id)
            .then( response => {
                //console.log(response);
                this.form.uuid = response.data.data.uuid;
                this.form.group_name = response.data.data.group_name;
                this.form.island_name = response.data.data.island_name;
                this.form.department_id = response.data.data.department_id;
                this.form.municipality_id = response.data.data.municipality_id;
                this.form.community_id = response.data.data.community_id;
                this.form.number_collectors = response.data.data.number_collectors;
                this.form.name_president = response.data.data.name_president;
                this.form.size_chocolate = response.data.data.size_chocolate;
                this.form.start_year_handle = response.data.data.start_year_handle;
                this.form.lat = response.data.data.lat;
                this.form.lng = response.data.data.lng;
                //console.log(this.form);
            }).catch((error) => {
                if (error.response.status === 401) {
                  this.$router.push({ name: 'Login'})
                }
              });

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
            editar(){
                axios.put("collector/"+this.form.id, this.form)
                .then(data=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información del <b>recolector</b> se actualizó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.$router.push('/listcollector');
                }).catch((err) => {
                    this.error = true;
                    let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                    //console.log(message);
                })
            },
        },
        computed:{
            /* formatDepartments(){
                return Object.values(this.currDepartments);
            } */
        }
    }
</script>
<style scoped>

</style>