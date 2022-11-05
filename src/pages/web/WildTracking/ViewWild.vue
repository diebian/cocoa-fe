<template>
    <div>
        <form novalidate class="md-layout" >
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-content>
                    <div class="md-toolbar-section-start md-layout md-size-100">
                        <div class="md-title">{{this.$route.name}}</div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                            <md-field>
                                <label >{{i18.es.wildTrackings.collector_id}}</label>
                                <md-select :disabled="inhabilita" v-model="form.collector_id" name="collector" id="collector" md-dense>
                                    <md-option v-for="collector in currCollector" :value="collector.id" :key="collector.id" >{{collector.group_name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.wildTrackings.q1title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_1}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_1" id="q1_1" name="q1_1" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_2}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_2" id="q1_2" name="q1_2" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_3}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_3" id="q1_3" name="q1_3" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_4}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_4" id="q1_4" name="q1_4" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_5}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_5" id="q1_5" name="q1_5" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_6}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_6" id="q1_6" name="q1_6" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_7}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_7" id="q1_7" name="q1_7" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_8}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_8" id="q1_8" name="q1_8" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q1_9}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q1_9" id="q1_9" name="q1_9" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.wildTrackings.q2title}}</label>
                           <div class="md-layout-item md-small-size-100 md-size-100">
                                <label>{{i18.es.wildTrackings.q2_1title}}</label>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_1a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_1a" id="q2_1a" name="q2_1a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_1b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_1b" id="q2_1b" name="q2_1b" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_2a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_2a" id="q2_2a" name="q2_2a" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_3a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_3a" id="q2_3a" name="q2_3a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_3b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_3b" id="q2_3b" name="q2_3b" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q2_3c}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_3c" id="q2_3c" name="q2_3c" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.wildTrackings.q3title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q3_1a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3_1a" id="q3_1a" name="q3_1a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q3_2a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3_2a" id="q3_2a" name="q3_2a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q3_2b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3_2b" id="q3_2b" name="q3_2b" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q3_2c}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3_2c" id="q3_2c" name="q3_2c" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q3_3a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3_3a" id="q3_3a" name="q3_3a" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.wildTrackings.q4title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.q4}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q4" id="q4" name="q4" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.lat}}</label>
                                <md-input :disabled="inhabilita" v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.wildTrackings.lng}}</label>
                                <md-input :disabled="inhabilita" v-model="form.lng" id="lng" name="lng" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end md-size-100 md-medium-size-50 md-xsmall-size-50">
                        <md-button v-on:click="volver()" class="md-cpk-danger md-round">VOLVER</md-button>
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
        name:"ViewWild",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                error: false,
                error_msj: "",
                inhabilita: true,
                idCollector: null,
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
                currCollector:{},
            }
        },
        mounted:function(){
            this.idCollector=localStorage.idCollector;
            this.form.id = this.$route.params.id;
            axios.get("wild-tracking/" + this.form.id)
            .then( response => {
                //console.log(response);
                this.form.uuid = response.data.data.uuid;
                this.form.collector_id = response.data.data.collector_id;
                this.form.q1_1 = response.data.data.q1_1;
                this.form.q1_2 = response.data.data.q1_2;
                this.form.q1_3 = response.data.data.q1_3;
                this.form.q1_4 = response.data.data.q1_4;
                this.form.q1_5 = response.data.data.q1_5;
                this.form.q1_6 = response.data.data.q1_6;
                this.form.q1_7 = response.data.data.q1_7;
                this.form.q1_8 = response.data.data.q1_8;
                this.form.q1_9 = response.data.data.q1_9;
                this.form.q2_1a = response.data.data.q2_1a;
                this.form.q2_1b = response.data.data.q2_1b;
                this.form.q2_2a = response.data.data.q2_2a;
                this.form.q6_2a = response.data.data.q6_2a;
                this.form.q2_3a = response.data.data.q2_3a;
                this.form.q2_3b = response.data.data.q2_3b;
                this.form.q2_3c = response.data.data.q2_3c;
                this.form.q3_1a = response.data.data.q3_1a;
                this.form.q3_2a = response.data.data.q3_2a;
                this.form.q3_2b = response.data.data.q3_2b;
                this.form.q3_2c = response.data.data.q3_2c;
                this.form.q3_3a = response.data.data.q3_3a;
                this.form.q4 = response.data.data.q4;
                this.form.lat = response.data.data.lat;
                this.form.lng = response.data.data.lng;
                //console.log(response);
            }).catch((error) => {
                if (error.response.status === 401) {
                  this.$router.push({ name: 'Login'})
                }
              });
            this.getCollector();
        },
        methods:{
            getCollector(){
                axios.get("collector")
                .then( response => {
                    this.currCollector = response.data.data.data;
                    //console.log(response.data.data.data);
                });
            },
            editar(){
                axios.put("saf-tracking/"+this.form.id, this.form)
                .then(data=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información de <b>BOSQUES</b> se actualizó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.$router.push('/listwild/'+this.idCollector);
                }).catch((err) => {
                    this.error = true;
                    let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                    //console.log(message);
                })
            },
            volver(){
                this.$router.push('/listwild/'+this.idCollector);
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

</style>