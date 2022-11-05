<template>
    <div>
        <form novalidate class="md-layout">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-content>
                    <div class="md-toolbar-section-start md-layout md-size-100">
                        <div class="md-title">{{this.$route.name}}</div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.producer_id}} (SOLO LECTURA)</label>
                                <!-- <md-select v-model="producer_id" name="producer" id="producer" md-dense>
                                    <md-option v-for="producer in currProducers" :value="producer.id" :key="producer.names" >{{producer.names}}</md-option>
                                </md-select> -->
                                <md-input :disabled="inhabilita" v-model="producer.names" id="producer_id" name="producer_id" type="text">{{this.producer.names}}</md-input>
                                <md-input v-show="false" v-model="form.producer_id" id="producer_id" name="producer_id" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q1}}</label>
                                <md-select v-model="form.q1" name="q1" id="q1" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q1">
                                    {{errors.q1[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q2_1}}</label>
                                <md-input v-model="form.q2_1" id="q2_1" name="q2_1" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_1">
                                    {{errors.q2_1[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q2_2}}</label>
                                <md-input v-model="form.q2_2" id="q2_2" name="q2_2" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_2">
                                    {{errors.q2_2[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q2_3}}</label>
                                <md-input v-model="form.q2_3" id="q2_3" name="q2_3" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q2_3">
                                    {{errors.q2_3[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q3}}</label>
                                <md-input v-model="form.q3" id="q3" name="q3" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q3">
                                    {{errors.q3[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q4}}</label>
                                <md-input v-model="form.q4" id="q4" name="q4" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q4">
                                    {{errors.q4[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q5_1}}</label>
                                <md-input v-model="form.q5_1" id="q5_1" name="q5_1" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q5_1">
                                    {{errors.q5_1[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q5_2}}</label>
                                <md-input v-model="form.q5_2" id="q5_2" name="q5_2" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q5_2">
                                    {{errors.q5_2[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q5_3}}</label>
                                <md-input v-model="form.q5_3" id="q5_3" name="q5_3" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q5_3">
                                    {{errors.q5_3[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q5_4}}</label>
                                <md-input v-model="form.q5_4" id="q5_4" name="q5_4" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q5_4">
                                    {{errors.q5_4[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_1a}}</label>
                                <md-input v-model="form.q6_1a" id="q6_1a" name="q6_1a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_1a">
                                    {{errors.q6_1a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_1b}}</label>
                                <md-input v-model="form.q6_1b" id="q6_1b" name="q6_1b" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_1b">
                                    {{errors.q6_1b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_2a}}</label>
                                <md-input v-model="form.q6_2a" id="q6_2a" name="q6_2a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_2a">
                                    {{errors.q6_2a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_2b}}</label>
                                <md-input v-model="form.q6_2b" id="q6_2b" name="q6_2b" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_2b">
                                    {{errors.q6_2b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_3a}}</label>
                                <md-input v-model="form.q6_3a" id="q6_3a" name="q6_3a" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_3a">
                                    {{errors.q6_3a[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_4a}}</label>
                                <md-select v-model="form.q6_4a" name="q6_4a" id="q6_4a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q6_4a">
                                    {{errors.q6_4a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-50">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q6_5a}}</label>
                                <md-input v-model="form.q6_5a" id="q6_5a" name="q6_5a" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q6_5a">
                                    {{errors.q6_5a[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q7_1}}</label>
                                <md-input v-model="form.q7_1" id="q7_1" name="q7_1" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q7_1">
                                    {{errors.q7_1[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q7_2}}</label>
                                <md-input v-model="form.q7_2" id="q7_2" name="q7_2" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q7_2">
                                    {{errors.q7_2[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q7_3}}</label>
                                <md-input v-model="form.q7_3" id="q7_3" name="q7_3" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q7_3">
                                    {{errors.q7_3[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q7_4}}</label>
                                <md-input v-model="form.q7_4" id="q7_4" name="q7_4" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q7_4">
                                    {{errors.q7_4[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-size-20">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q7_5}}</label>
                                <md-input v-model="form.q7_5" id="q7_5" name="q7_5" type="text"></md-input>
                                <span class="md-error" v-if="errors && errors.q7_5">
                                    {{errors.q7_5[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_1a}}</label>
                                <md-select v-model="form.q8_1a" name="q8_1a" id="q8_1a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_1a">
                                    {{errors.q8_1a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_1b}}</label>
                                <md-select v-model="form.q8_1b" name="q8_1b" id="q8_1b" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_1b">
                                    {{errors.q8_1b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_1c}}</label>
                                <md-select v-model="form.q8_1c" name="q8_1c" id="q8_1c" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_1c">
                                    {{errors.q8_1c[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_1d}}</label>
                                <md-select v-model="form.q8_1d" name="q8_1d" id="q8_1d" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_1d">
                                    {{errors.q8_1d[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_2a}}</label>
                                <md-input v-model="form.q8_2a" id="q8_2a" name="q8_2a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q8_2a">
                                    {{errors.q8_2a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_3a}}</label>
                                <md-select v-model="form.q8_3a" name="q8_3a" id="q8_3a" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_3a">
                                    {{errors.q8_3a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_3b}}</label>
                                <md-select v-model="form.q8_3b" name="q8_3b" id="q8_3b" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_3b">
                                    {{errors.q8_3b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q8_3c}}</label>
                                <md-select v-model="form.q8_3c" name="q8_3c" id="q8_3c" md-dense>
                                    <md-option v-for="resp in currResp" :value="resp.id" :key="resp.id" >{{resp.id}}</md-option>
                                </md-select>
                                <span class="md-error" v-if="errors && errors.q8_3c">
                                    {{errors.q8_3c[0]}}
                                </span>
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
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q9_1a}}</label>
                                <md-input v-model="form.q9_1a" id="q9_1a" name="q9_1a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q9_1a">
                                    {{errors.q9_1a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q9_2a}}</label>
                                <md-input v-model="form.q9_2a" id="q9_2a" name="q9_2a" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q9_2a">
                                    {{errors.q9_2a[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q9_2b}}</label>
                                <md-input v-model="form.q9_2b" id="q9_2b" name="q9_2b" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q9_2b">
                                    {{errors.q9_2b[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-25">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q9_2c}}</label>
                                <md-input v-model="form.q9_2c" id="q9_2c" name="q9_2c" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q9_2c">
                                    {{errors.q9_2c[0]}}
                                </span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-100">
                           <label>{{i18.es.safTrackings.q10title}}</label>
                        </div>
                    </div>
                    <div class="md-layout md-size-100">
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.q10}}</label>
                                <md-input v-model="form.q10" id="q10" name="q10" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.q10">
                                    {{errors.q10[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.lat}}</label>
                                <md-input v-model="form.lat" id="lat" name="lat" type="number"></md-input>
                                <span class="md-error" v-if="errors && errors.lat">
                                    {{errors.lat[0]}}
                                </span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100 md-size-33">
                            <md-field :class="messageClass">
                                <label >{{i18.es.safTrackings.lng}}</label>
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
            <!-- <md-dialog-alert
            v-if="error"
            :md-active.sync="error"
            md-title="Error!"
            md-content="No se realizo la actualización." /> -->
        </form>
    </div>
</template>
<script>
    import axios from "axios";
    import labelsi18 from "@/utils/labels.js";
    export default {
        name:"CreateSaf",
        data: function(){
            return{
                userId: null,
                i18: labelsi18,
                error: false,
                error_msj: "",
                currResp:{},
                currProducers:{},
                idProducer: null,
                producer_names: "",
                inhabilita: true,
                //producer_surnames: "",
                producer:{
                    "id": null,
                    "names": null,
                    "surnames": null
                },
                form:{
                    /* "uuid": "", */
                    "producer_id": null,
                    "q1": null,
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
                    "lat":null,
                    "lng":null,
                    /* "lat": null,
                    "lng": null, */
                    /* "created_by": 1,
                    "updated_by": null,
                    "created_at": "2022-09-02T16:33:19.000000Z",
                    "updated_at": "2022-09-02T16:33:19.000000Z" */
                },
                errors: {},
                hasMessages: true,
                form_submitting: false
            }
        },
        mounted:function(){
            this.idProducer=localStorage.idProducer;
            this.form.producer_id = this.idProducer;
            this.getProducers();
            this.currResp=[
                    {id: false},
                    {id: true}
                ]
        },
        methods:{
            getProducers(){
                //this.form.producer_id = this.idProducer;
                axios.get("producer/" + this.idProducer)
                .then( response => {
                    //console.log(response);
                    //this.currProducers = response.data.data;
                    this.producer.id = response.data.data.id;
                    this.producer.names = response.data.data.names +' '+response.data.data.surnames;
                    //this.producer.surnames = response.data.data.surnames;

                    /* this.form.producer_id = response.data.data.id;
                    this.producer_names = response.data.data.names;
                    this.producer_surnames = response.data.data.surnames; */
                    /* console.log('id: '+response.data.data.id);
                    console.log('data: '+response.data.data.names);
                    console.log(response.data.data); */
                });
            },
            guardar(){
                //console.log('entra');
                //console.log(this.form);
                this.form_submitting = true;
                axios.post("saf-tracking", this.form)
                .then(response=>{
                    //console.log(data);
                    this.$notify({
                        message:
                        "Toda la información de <b>saf</b> se almacenó satisfactoriamente.",
                        icon: "thumb_up",
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: "cpk-success",
                    });
                    this.form_submitting = false;
                    this.$router.push('/listsaf/'+this.idProducer);
                }).catch(error => {
                    if(error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        this.form_submitting = false;
                    }
                });
            },
            salir(){
                this.$router.push('/listsaf/'+this.idProducer);
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