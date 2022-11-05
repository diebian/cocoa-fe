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
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.collector_id}} (SOLO LECTURA)</label>
                                <!-- <md-select v-model="form.collector_id" name="collector" id="collector" md-dense>
                                    <md-option v-for="collector in currCollector" :value="collector.id" :key="collector.id" >{{collector.group_name}}</md-option>
                                </md-select> -->
                                <md-input :disabled="inhabilita" v-model="collector.group_name" id="collector_id" name="collector_id" type="text">{{this.collector.group_name}}</md-input>
                                <md-input v-show="false" v-model="form.collector_id" id="collector_id" name="collector_id" type="text"></md-input>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_1}}</label>
                                <md-input v-model="form.q1_1" id="q1_1" name="q1_1" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_1">
                                    {{errors.q1_1[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_2}}</label>
                                <md-input v-model="form.q1_2" id="q1_2" name="q1_2" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_2">
                                    {{errors.q1_2[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_3}}</label>
                                <md-input v-model="form.q1_3" id="q1_3" name="q1_3" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_3">
                                    {{errors.q1_3[0]}}
                                </span>
                            </md-field>
                         </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_4}}</label>
                                <md-input v-model="form.q1_4" id="q1_4" name="q1_4" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_4">
                                    {{errors.q1_4[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_5}}</label>
                                <md-input v-model="form.q1_5" id="q1_5" name="q1_5" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_5">
                                    {{errors.q1_5[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_6}}</label>
                                <md-input v-model="form.q1_6" id="q1_6" name="q1_6" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_6">
                                    {{errors.q1_6[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_7}}</label>
                                <md-input v-model="form.q1_7" id="q1_7" name="q1_7" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_7">
                                    {{errors.q1_7[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_8}}</label>
                                <md-input v-model="form.q1_8" id="q1_8" name="q1_8" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_8">
                                    {{errors.q1_8[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q1_9}}</label>
                                <md-input v-model="form.q1_9" id="q1_9" name="q1_9" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q1_9">
                                    {{errors.q1_9[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_1a}}</label>
                                <md-input v-model="form.q2_1a" id="q2_1a" name="q2_1a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_1a">
                                    {{errors.q2_1a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_1b}}</label>
                                <md-input v-model="form.q2_1b" id="q2_1b" name="q2_1b" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_1b">
                                    {{errors.q2_1b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_2a}}</label>
                                <md-input v-model="form.q2_2a" id="q2_2a" name="q2_2a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_2a">
                                    {{errors.q2_2a[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_3a}}</label>
                                <md-input v-model="form.q2_3a" id="q2_3a" name="q2_3a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_3a">
                                    {{errors.q2_3a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_3b}}</label>
                                <md-input v-model="form.q2_3b" id="q2_3b" name="q2_3b" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_3b">
                                    {{errors.q2_3b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q2_3c}}</label>
                                <md-input v-model="form.q2_3c" id="q2_3c" name="q2_3c" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_3c">
                                    {{errors.q2_3c[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q3_1a}}</label>
                                <md-input v-model="form.q3_1a" id="q3_1a" name="q3_1a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q3_1a">
                                    {{errors.q3_1a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q3_2a}}</label>
                                <md-input v-model="form.q3_2a" id="q3_2a" name="q3_2a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q3_2a">
                                    {{errors.q3_2a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q3_2b}}</label>
                                <md-input v-model="form.q3_2b" id="q3_2b" name="q3_2b" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q3_2b">
                                    {{errors.q3_2b[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q3_2c}}</label>
                                <md-input v-model="form.q3_2c" id="q3_2c" name="q3_2c" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q3_2c">
                                    {{errors.q3_2c[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q3_3a}}</label>
                                <md-input v-model="form.q3_3a" id="q3_3a" name="q3_3a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q3_3a">
                                    {{errors.q3_3a[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.q4}}</label>
                                <md-input v-model="form.q4" id="q4" name="q4" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q4">
                                    {{errors.q4[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.lat">
                                    {{errors.lat[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.wildTrackings.lng}}</label>
                                <md-input v-model="form.lng" id="lng" name="lng" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.lng">
                                    {{errors.lng[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end md-size-100 md-medium-size-50 md-xsmall-size-50">
                        <md-button v-on:click="salir()" class="md-cpk-danger md-round">SALIR</md-button>
                        <md-button v-on:click="guardar()" class="md-cpk-success md-round" :disabled="form_submitting">GUARDAR</md-button>
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
        name:"CreateWild",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                error: false,
                error_msj: "",
                currCollector:{},
                idCollector: null,
                collector_names: "",
                inhabilita: true,
                collector:{
                    "id": null,
                    "group_name": null,
                },
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
                errors: {},
                hasMessages: true,
                form_submitting: false
            }
        },
        mounted:function(){
            this.idCollector=localStorage.idCollector;
            this.form.collector_id = this.idCollector;
            this.getCollectors();
        },
        methods:{
            getCollectors(){
                axios.get("collector/" + this.idCollector)
                .then( response => {
                    this.collector.id = response.data.data.id;
                    this.collector.group_name = response.data.data.group_name;
                });
            },
            guardar(){
                //console.log('entra');
                //console.log(this.form);
                this.form_submitting = true;
                axios.post("wild-tracking", this.form)
                .then(response=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información de <b>bosques</b> se almacenó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });/* .catch((error) => {
                        console.log('error:'+error)
                    }); */
                    this.form_submitting = false;
                    this.$router.push('/listwild/'+this.idCollector);
                }).catch(error => {
                    if(error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.form_submitting = false;
                    }
                });
            },
            salir(){
                this.$router.push('/listwild/'+this.idCollector);
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