<template>
    <div>
        <form novalidate class="md-layout" >
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-content>
                    <div class="md-toolbar-section-start md-layout md-size-100">
                        <div class="md-title">{{this.$route.name}}</div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.producer_id}}</label>
                                <md-select :disabled="inhabilita" v-model="form.producer_id" name="producer" id="producer" md-dense>
                                    <md-option v-for="producer in currProducers" :value="producer.id" :key="producer.id" >{{producer.names}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.q1}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q1" name="q1" id="q1" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q2title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.safTrackings.q2_1}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_1" id="q2_1" name="q2_1" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.safTrackings.q2_2}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_2" id="q2_2" name="q2_2" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field>
                                <label >{{i18.es.safTrackings.q2_3}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q2_3" id="q2_3" name="q2_3" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.q3}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q3" id="q3" name="q3" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.q4}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q4" id="q4" name="q4" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q5title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q5_1}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q5_1" id="q5_1" name="q5_1" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q5_2}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q5_2" id="q5_2" name="q5_2" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q5_3}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q5_3" id="q5_3" name="q5_3" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q5_4}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q5_4" id="q5_4" name="q5_4" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q6title}}</label>
                           <div class="md-layout-item md-small-size-100 md-size-100">
                                <label>{{i18.es.safTrackings.q6_1title}}</label>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_1a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_1a" id="q6_1a" name="q6_1a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_1b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_1b" id="q6_1b" name="q6_1b" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_2a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_2a" id="q6_2a" name="q6_2a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_2b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_2b" id="q6_2b" name="q6_2b" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_3a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_3a" id="q6_3a" name="q6_3a" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q6_4title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_4a}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q6_4a" name="q6_4a" id="q6_4a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field>
                                <label >{{i18.es.safTrackings.q6_5a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q6_5a" id="q6_5a" name="q6_5a" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q7title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q7_1}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q7_1" id="q7_1" name="q7_1" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q7_2}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q7_2" id="q7_2" name="q7_2" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q7_3}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q7_3" id="q7_3" name="q7_3" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q7_4}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q7_4" id="q7_4" name="q7_4" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field>
                                <label >{{i18.es.safTrackings.q7_5}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q7_5" id="q7_5" name="q7_5" type="text"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q8title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_1a}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_1a" name="q8_1a" id="q8_1a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_1b}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_1b" name="q8_1b" id="q8_1b" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_1c}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_1c" name="q8_1c" id="q8_1c" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_1d}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_1d" name="q8_1d" id="q8_1d" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_2a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q8_2a" id="q8_2a" name="q8_2a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_3a}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_3a" name="q8_3a" id="q8_3a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_3b}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_3b" name="q8_3b" id="q8_3b" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q8_3c}}</label>
                                <md-select :disabled="inhabilita" v-model="form.q8_3c" name="q8_3c" id="q8_3c" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q9title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q9_1a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q9_1a" id="q9_1a" name="q9_1a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q9_2a}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q9_2a" id="q9_2a" name="q9_2a" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q9_2b}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q9_2b" id="q9_2b" name="q9_2b" type="number"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field>
                                <label >{{i18.es.safTrackings.q9_2c}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q9_2c" id="q9_2c" name="q9_2c" type="number"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q10title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                            <md-field>
                                <label >{{i18.es.safTrackings.q10}}</label>
                                <md-input :disabled="inhabilita" v-model="form.q10" id="q10" name="q10" type="number"></md-input>
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
        name:"ViewSaf",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                error: false,
                error_msj: "",
                currResp:{},
                inhabilita: true,
                idProducer: null,
                form:{
                    "id": 0,
                    "uuid": "",
                    "producer_id": 0,
                    "q1": 0,
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
                currProducers:{},
            }
        },
        mounted:function(){
            this.idProducer=localStorage.idProducer;
            this.form.id = this.$route.params.id;
            axios.get("saf-tracking/" + this.form.id)
            .then( response => {
                //console.log(response);
                this.form.uuid = response.data.data.uuid;
                this.form.producer_id = response.data.data.producer_id;
                this.form.q1 = response.data.data.q1;
                this.form.q2_1 = response.data.data.q2_1;
                this.form.q2_2 = response.data.data.q2_2;
                this.form.q2_3 = response.data.data.q2_3;
                this.form.q3 = response.data.data.q3;
                this.form.q4 = response.data.data.q4;
                this.form.q5_1 = response.data.data.q5_1;
                this.form.q5_2 = response.data.data.q5_2;
                this.form.q5_3 = response.data.data.q5_3;
                this.form.q5_4 = response.data.data.q5_4;
                this.form.q6_1a = response.data.data.q6_1a;
                this.form.q6_1b = response.data.data.q6_1b;
                this.form.q6_2a = response.data.data.q6_2a;
                this.form.q6_2b = response.data.data.q6_2b;
                this.form.q6_3a = response.data.data.q6_3a;
                this.form.q6_4a = response.data.data.q6_4a;
                this.form.q6_5a = response.data.data.q6_5a;
                this.form.q7_1 = response.data.data.q7_1;
                this.form.q7_2 = response.data.data.q7_2;
                this.form.q7_3 = response.data.data.q7_3;
                this.form.q7_4 = response.data.data.q7_4;
                this.form.q7_5 = response.data.data.q7_5;
                this.form.q8_1a = response.data.data.q8_1a;
                this.form.q8_1b = response.data.data.q8_1b;
                this.form.q8_1c = response.data.data.q8_1c;
                this.form.q8_1d = response.data.data.q8_1d;
                this.form.q8_2a = response.data.data.q8_2a;
                this.form.q8_3a = response.data.data.q8_3a;
                this.form.q8_3b = response.data.data.q8_3b;
                this.form.q8_3c = response.data.data.q8_3c;
                this.form.q9_1a = response.data.data.q9_1a;
                this.form.q9_2a = response.data.data.q9_2a;
                this.form.q9_2b = response.data.data.q9_2b;
                this.form.q9_2c = response.data.data.q9_2c;
                this.form.q10 = response.data.data.q10;
                this.form.lat = response.data.data.lat;
                this.form.lng = response.data.data.lng;
                //console.log(response);
            }).catch((error) => {
                if (error.response.status === 401) {
                  this.$router.push({ name: 'Login'})
                }
              });
            this.getProducers();
        },
        methods:{
            getProducers(){
                axios.get("producer")
                .then( response => {
                    this.currProducers = response.data.data.data;
                    //console.log(response.data.data.data);
                });
                this.currResp=[
                    {id/* : 0, name */: false},
                    {id/* : 1, name */: true}
                ]
            },
            editar(){
                axios.put("saf-tracking/"+this.form.id, this.form)
                .then(data=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información de <b>SAF</b> se actualizó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.$router.push('/listsaf/'+this.idProducer);
                }).catch((err) => {
                    this.error = true;
                    let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                    //console.log(message);
                })
            },
            volver(){
                this.$router.push('/listsaf/'+this.idProducer);
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