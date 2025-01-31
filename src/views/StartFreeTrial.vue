<template>
      <!-- <div class="breadcrumb_img breadcrumbs">
            <div class="container">
                  <div class="row">
                        <div class="col-12">
                              <div class="breadcumbs_content">
                                    <h2>Start Free Trial</h2>
                                    <ol>
                                          <li>
                                                <RouterLink to="/">Home</RouterLink>
                                          </li>
                                          <li class="active">Start Free Trial</li>
                                    </ol>
                              </div>
                        </div>
                  </div>
            </div>
      </div> -->
      <section class="feature_content">
            <div class="container">
                  <!-- <div class="row">
                        <div class="col-12">
                              <header class="section-header">
                                    <h2>Start Free Trial</h2>
                                    <h6>Unlock limitless possibilities with our free trial! Dive into a world of premium features and exclusive content, risk-free. Experience firsthand how our platform revolutionizes your workflow, whether it's boosting productivity, enhancing creativity, or simplifying tasks. With no strings attached, explore all the tools and resources tailored to your needs. Discover why thousands trust us for their success. Start your free trial today and embark on a journey towards unparalleled efficiency and innovation. Don't miss out on this opportunity to elevate your endeavors to new heights. Join us and let's shape the future together!</h6>
                              </header>
                        </div>
                  </div> -->
                  <div class="row justify-content-center position-relative p-2">
                        <div class="col-lg-6">
                              <header class="section-header">
                                    <h2>Start Free Trial</h2>
                                    <h6>Unlock limitless possibilities with our free trial! Dive into a world of premium
                                          features and exclusive content, risk-free. Experience firsthand how our
                                          platform revolutionizes your workflow, whether it's boosting productivity,
                                          enhancing creativity, or simplifying tasks. With no strings attached, explore
                                          all the tools and resources tailored to your needs. Discover why thousands
                                          trust us for their success. Start your free trial today and embark on a
                                          journey towards unparalleled efficiency and innovation. Don't miss out on this
                                          opportunity to elevate your endeavors to new heights. Join us and let's shape
                                          the future together!</h6>
                              </header>
                        </div>
                        <div class="col-lg-6" v-if="!state.otp_section">
                              <form name="frm-contact" @submit.prevent="onUserSubmit" method="post"
                                    class="php-email-form free_form">
                                    <div class="row gy-4">

                                          <div class="col-md-6">
                                                <label class="form-control">
                                                      {{ state.CompanyName }}
                                                </label>
                                                <!-- <input type="text" name="CompanyName" class="form-control"
                                                      autocomplete="off"
                                                      :class="{ 'is-invalid': v$.CompanyName.$error }"
                                                      placeholder="Company Name" v-model=""> -->
                                          </div>

                                          <div class="col-md-6">
                                                <input type="text" name="CompanyAddress" class="form-control"
                                                      autocomplete="off"
                                                      :class="{ 'is-invalid': v$.CompanyAddress.$error }"
                                                      placeholder="Address Line 1" v-model="state.CompanyAddress">
                                          </div>
                                          <div class="col-md-6">
                                                <input type="text" name="CompanyAddress2" class="form-control"
                                                      autocomplete="off" placeholder="Address Line 2"
                                                      v-model="state.CompanyAddress2">
                                          </div>

                                          <div class="col-md-6">
                                                <input type="text" name="CompanyCity" class="form-control"
                                                      autocomplete="off"
                                                      :class="{ 'is-invalid': v$.CompanyCity.$error }"
                                                      placeholder="City" v-model="state.CompanyCity">
                                          </div>

                                          <div class="col-md-6">
                                                <input type="text" name="CompanyState" class="form-control"
                                                      autocomplete="off"
                                                      :class="{ 'is-invalid': v$.CompanyState.$error }"
                                                      placeholder="State" v-model="state.CompanyState">
                                          </div>

                                          <div class="col-md-6">
                                                <input type="text" name="CompanyZip" class="form-control"
                                                      autocomplete="off" :class="{ 'is-invalid': v$.CompanyZip.$error }"
                                                      placeholder="Zip" v-model="state.CompanyZip">
                                          </div>


                                          <div class="col-md-6">
                                                <input type="text" name="FirstName" class="form-control"
                                                      autocomplete="off" :class="{ 'is-invalid': v$.FirstName.$error }"
                                                      placeholder="First Name" v-model="state.FirstName">
                                          </div>

                                          <div class="col-md-6">
                                                <input type="text" name="LastName" class="form-control"
                                                      autocomplete="off" :class="{ 'is-invalid': v$.LastName.$error }"
                                                      placeholder="Last Name" v-model="state.LastName">
                                          </div>

                                          <div class="col-md-6 ">
                                                <input type="text" maxlength="16" class="form-control"
                                                      name="PhoneNumber" autocomplete="off" v-maska
                                                      data-maska="###-###-####"
                                                      :class="{ 'is-invalid': v$.PhoneNumber.$error }"
                                                      placeholder="Phone Number" v-model="state.PhoneNumber">
                                          </div>

                                          <div class="col-md-6 ">
                                                <input type="text" maxlength="16" class="form-control"
                                                      name="CompanyPhone" autocomplete="off" v-maska
                                                      data-maska="###-###-####"
                                                      :class="{ 'is-invalid': v$.CompanyPhone.$error }"
                                                      placeholder="Company Phone Number" v-model="state.CompanyPhone">
                                          </div>

                                          <div class="col-md-6 ">
                                                <input type="text" class="form-control" name="EmailAddress"
                                                      autocomplete="off"
                                                      :class="{ 'is-invalid': v$.EmailAddress.$error }"
                                                      placeholder="Your Email" v-model="state.EmailAddress">
                                          </div>

                                          <div class="col-md-6 ">
                                                <input type="text" class="form-control" name="Website"
                                                      autocomplete="off" placeholder="Website" v-model="state.Website">
                                          </div>

                                          <div class="col-md-12 text-center">
                                                <button type="submit" v-if="!state.submitted">Submit</button>
                                                <div class="spinner-border text-primary" role="status"
                                                      v-if="state.submitted">
                                                      <span class="visually-hidden">Loading...</span>
                                                </div>

                                          </div>


                                    </div>
                              </form>

                        </div>

                        <div class="col-lg-6" v-if="state.otp_section">
                              <form name="frm-contact" @submit.prevent="onOTPSubmit" method="post"
                                    class="php-email-form free_form">
                                    <div class="row gy-4">
                                          <div class="col-md-12">
                                                For email address verification an OTP sent to {{ state.EmailAddress }}.
                                                Please enter an OTP here.
                                          </div>
                                          <div class="col-md-12">
                                                <input type="text" name="VerifyCode" v-model="otpState.VerifyCode"
                                                      class="form-control" autocomplete="off" maxlength="4"
                                                      style="text-align:center;letter-spacing: 15px;"
                                                      :class="{ 'is-invalid': o$.VerifyCode.$error }">
                                          </div>


                                          <div class="col-md-12 text-center">
                                                <button type="submit" v-if="!otpState.otpSubmitted">Verify</button>
                                                <div class="spinner-border text-primary" role="status"
                                                      v-if="otpState.otpSubmitted">
                                                      <span class="visually-hidden">Loading...</span>
                                                </div>

                                          </div>

                                    </div>


                              </form>
                        </div>
                        <div class="col-md-12 text-center sweet_notification" v-if="state.res_msg">
                              <Transition>
                                    <div class="alert text-white h5 notification_part"
                                          :class="{ 'alert-danger bg-danger': state.isError, 'alert-success bg-success ': !state.isError }"
                                          role="alert">
                                          {{ state.res_msg }}
                                    </div>
                              </Transition>
                        </div>
                  </div>
            </div>
      </section>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, maxLength, minLength, numeric } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import axios from 'axios'
import { vMaska } from "maska"
import { inject } from "vue";

export default {

      setup() {

            const $cookies = inject('$cookies');
            let CustDetail = $cookies.get('MPHQR1') || {};


            const state = reactive({
                  CompanyName: CustDetail.CompanyName || "",
                  CompanyAddress: CustDetail.CompanyAddress || "",
                  CompanyAddress2: CustDetail.CompanyAddress2 || "",
                  CompanyCity: CustDetail.CompanyCity || "",
                  CompanyState: CustDetail.CompanyState || "",
                  CompanyZip: CustDetail.CompanyZip || "",
                  CompanyPhone: CustDetail.CompanyPhone || "",
                  PhoneNumber: CustDetail.PhoneNumber || "",
                  FirstName: CustDetail.FirstName || "",
                  LastName: CustDetail.LastName || "",
                  EmailAddress: CustDetail.EmailAddress || "",
                  Website: CustDetail.Website || "",
                  res_msg: "",
                  otp_section: false,
                  isError: false,
                  submitted: false

            })

            const otpState = reactive(
                  {
                        VerifyCode: "",
                        otpSubmitted: false
                  })

            const rules = computed(() => {
                  // CompanyName: { required },
                  return {

                        CompanyAddress: { required },
                        CompanyCity: { required },
                        CompanyState: { required },
                        CompanyZip: { required },
                        CompanyPhone: { required, maxLength: maxLength(16) },
                        PhoneNumber: { required, maxLength: maxLength(16) },
                        FirstName: { required },
                        LastName: { required },
                        EmailAddress: { required, email: email },
                  }
            })

            const rulesOTP = computed(() => {
                  return {
                        VerifyCode: { required, numeric, minLength: minLength(4) },

                  }
            })

            const v$ = useVuelidate(rules, state)
            const o$ = useVuelidate(rulesOTP, otpState)

            return {
                  state,
                  otpState,
                  v$,
                  o$
            }
      },

      directives: { maska: vMaska },

      methods: {
            onUserSubmit() {

                  this.v$.$validate();

                  if (!this.v$.$error) {

                        let body_params = {}

                        body_params.CompanyName = this.state.CompanyName;
                        body_params.CompanyAddress = this.state.CompanyAddress;
                        body_params.CompanyAddress2 = this.state.CompanyAddress2;
                        body_params.CompanyCity = this.state.CompanyCity;
                        body_params.CompanyState = this.state.CompanyState;
                        body_params.CompanyZip = this.state.CompanyZip;
                        body_params.CompanyPhone = this.state.CompanyPhone;
                        body_params.PhoneNumber = this.state.PhoneNumber;
                        body_params.FirstName = this.state.FirstName;
                        body_params.LastName = this.state.LastName;
                        body_params.emailAddress = this.state.EmailAddress;
                        body_params.Website = this.state.Website;

                        this.state.submitted = true
                        const that = this

                        axios.get('/ValidateEmailAddress', {
                              params: body_params,
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
                                    // Add other headers if needed
                              },
                        }
                        ).then(response => {
                              that.v$.$reset();

                              that.state.submitted = false;
                              // that.state.CompanyName = "";
                              // that.state.CompanyAddress = "";
                              // that.state.CompanyAddress2 = "";
                              // that.state.CompanyCity = "";
                              // that.state.CompanyState = "";
                              // that.state.CompanyZip = "";
                              // that.state.CompanyPhone = "";
                              // that.state.PhoneNumber = "";
                              // that.state.FirstName = "";
                              // that.state.LastName = "";
                              // that.state.EmailAddress = "";
                              // that.state.Website = "";
                              if (response.status == 200) {
                                    that.state.otp_section = true
                              }
                              else if (response.status == 406) {
                                    this.state.isError = true;
                                    this.state.res_msg = "Email address already exist in the system";
                              }
                        })
                  }
            },
            onOTPSubmit() {
                  this.o$.$validate();

                  if (!this.o$.$error) {
                        const body_params = {};
                        body_params.VerifyCode = this.otpState.VerifyCode;
                        body_params.emailAddress = this.state.EmailAddress;
                        this.otpState.otpSubmitted = true;
                        const that = this
                        axios.get('/ValidateEmailAddress', {
                              params: body_params,
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
                                    // Add other headers if needed
                              },
                        }
                        ).then(response => {
                              if (response.status == 200) {

                                    let body_params = {}
                                    body_params.CompanyName = this.state.CompanyName;
                                    body_params.CompanyAddress = this.state.CompanyAddress;
                                    body_params.CompanyAddress2 = this.state.CompanyAddress2;
                                    body_params.CompanyCity = this.state.CompanyCity;
                                    body_params.CompanyState = this.state.CompanyState;
                                    body_params.CompanyZip = this.state.CompanyZip;
                                    body_params.CompanyPhone = this.state.CompanyPhone;
                                    body_params.PhoneNumber = this.state.PhoneNumber;
                                    body_params.FirstName = this.state.FirstName;
                                    body_params.LastName = this.state.LastName;
                                    body_params.emailAddress = this.state.EmailAddress;
                                    body_params.Website = this.state.Website;

                                    // New POST request
                                    const guid = $cookies.get('guid');
                                    axios.post(`/StartTrial?g=${guid}`, body_params, {
                                          headers: {
                                                'Content-Type': 'application/json',
                                                'Access-Control-Allow-Origin': '*',
                                                'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
                                                // Add other headers if needed
                                          },
                                    }).then(postResponse => {
                                          if (postResponse.status == 200) {
                                                // Handle post response if that.o$.$reset();
                                                $cookies.remove('MPHQR1');
                                                $cookies.remove('guid');
                                                this.otpState.otpSubmitted = false;
                                                that.state.EmailAddress = "";
                                                that.state.isError = false;
                                                that.state.otp_section = false;
                                                that.state.res_msg = "Thanks for showing interest in MyProHelper. Our representive will contact you sortly..!";
                                          }
                                    }).catch(postError => {
                                          // Handle post error if needed
                                    });

                              }

                        })
                  }

            },
            mounted() {

            }
      }
}
</script>

<style>
#header {
      /* border-bottom: 1px solid #f1f1f1; */
}

.section-header {
      text-align: left !important;
}

.feature_content {
      padding-top: 110px;
}

.section-header h2 {
      font-size: 20px !important;
      margin: 10px 0 5px 0 !important;
}

.section-header h6 {
      text-align: justify;
}

.breadcrumb_img {
      margin-top: 85px;
      background-image: url('@/assets/img/about.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: background .3s, border .3s, border-radius .3s, box-shadow .3s;
      padding: 100px 0 95px;
      position: relative;
}

.free_form {
      color: #696969;
      background: #fafbff;
      padding: 30px;
      margin-bottom: 20px;
}

.free_form .form-control {
      padding: 10px 15px;
}

.free_form button[type=submit] {
      background: #09426a;
      border: 0;
      padding: 10px 30px;
      color: #fff;
      transition: 0.4s;
      border-radius: 4px;
}

.free_form button[type=submit]:hover {
      background: #51c2eb;
}

.free_form .form-control:focus {
      border-color: #51c2eb;
      box-shadow: none;
}

.notification_part {
      width: 49%;
      margin: 10px auto;
      padding: 8px !important;
}

@media(max-width:991px) {
      .notification_part {
            width: 100%;
            font-size: 15px !important;
            line-height: 22px !important;
      }
}

.section-header h2 {
      font-size: 22px;
      letter-spacing: 1px;
      font-weight: 700;
      margin: 0;
      color: var(--color-secondary);
      text-transform: uppercase;
      margin-top: 15px;
}
</style>