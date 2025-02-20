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
                        <div class="col-lg-6">
                              <div class="row">
                                    <div class="col-lg-12" v-if="!state.otp_section && !state.phone_section">
                                          <form name="frm-contact" @submit.prevent="onUserSubmit" method="post"
                                                class="php-email-form free_form">

                                                <div class="row gy-4">
                                                      <div class="col-md-12 text-danger">
                                                            <p style="font-size: 18px; margin: 0;"></p>
                                                      </div>
                                                      <div class="col-md-6">
                                                            <input type="text" name="FirstName" class="form-control"
                                                                  autocomplete="off"
                                                                  :class="{ 'is-invalid': v$.FirstName.$error }"
                                                                  placeholder="First Name" v-model="state.FirstName">
                                                      </div>

                                                      <div class="col-md-6">
                                                            <input type="text" name="LastName" class="form-control"
                                                                  autocomplete="off"
                                                                  :class="{ 'is-invalid': v$.LastName.$error }"
                                                                  placeholder="Last Name" v-model="state.LastName">
                                                      </div>

                                                      <div class="col-md-12 ">
                                                            <input type="text" class="form-control" name="EmailAddress"
                                                                  autocomplete="off"
                                                                  :class="{ 'is-invalid': v$.EmailAddress.$error }"
                                                                  placeholder="Your Email" v-model="state.EmailAddress">
                                                      </div>

                                                      <div class="col-md-12 text-center">
                                                            <button type="submit" v-if="!state.submitted">Start Free
                                                                  Trail</button>
                                                            <div class="spinner-border text-primary" role="status"
                                                                  v-if="state.submitted">
                                                                  <span class="visually-hidden">Loading...</span>
                                                            </div>

                                                      </div>


                                                </div>
                                          </form>

                                    </div>

                                    <div class="col-lg-12" v-if="state.otp_section">
                                          <form name="frm-contact" @submit.prevent="onOTPSubmit" method="post"
                                                class="php-email-form free_form">
                                                <div class="row gy-4">
                                                      <div class="col-md-12">
                                                            A verification code has been sent to {{ state.EmailAddress }}. Please enter the code below to verify your email.
                                                      </div>
                                                      <div class="col-md-12">
                                                            <input type="text" name="VerifyCode"
                                                                  v-model="otpState.VerifyCode" class="form-control"
                                                                  autocomplete="off" maxlength="4"
                                                                  style="text-align:center;letter-spacing: 15px;"
                                                                  :class="{ 'is-invalid': o$.VerifyCode.$error }">
                                                      </div>


                                                      <div class="col-md-12 text-center">
                                                            <button type="submit"
                                                                  v-if="!otpState.otpSubmitted">Verify</button>
                                                            <div class="spinner-border text-primary" role="status"
                                                                  v-if="otpState.otpSubmitted">
                                                                  <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>

                                    <div class="col-lg-12" v-if="state.phone_section">
                                          <form name="frm-contact" @submit.prevent="onPhoneNumberSubmit" method="post"
                                                class="php-email-form free_form">
                                                <div class="row gy-4">
                                                      <div class="col-md-12">
                                                            Your Cell Phone Number
                                                      </div>
                                                      <div class="col-md-12">

                                                            <input type="text" maxlength="16" class="form-control"
                                                                  name="phoneNumber" autocomplete="off" v-maska
                                                                  data-maska="(###) ###-####"
                                                                  :class="{ 'is-invalid': pn$.phoneNumber.$error }"
                                                                  placeholder="Phone Number"
                                                                  v-model="phoneState.phoneNumber">
                                                      </div>


                                                      <div class="col-md-12 text-center">
                                                            <button type="submit"
                                                                  v-if="!phoneState.phoneSubmitted">Start Free
                                                                  Trial</button>
                                                            <div class="spinner-border text-primary" role="status"
                                                                  v-if="phoneState.phoneSubmitted">
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
            const appSettings = inject('appSettings');
            let CustDetail = $cookies.get('MPHQR1') || {};
            const state = reactive({
                  FirstName: CustDetail.FirstName || "",
                  LastName: CustDetail.LastName || "",
                  EmailAddress: CustDetail.EmailAddress || "",
                  res_msg: "",
                  otp_section: false,
                  phone_section: false,
                  isError: false,
                  submitted: false

            })

            const otpState = reactive(
                  {
                        VerifyCode: "",
                        otpSubmitted: false
                  })

            const phoneState = reactive(
                  {
                        phoneNumber: "",
                        phoneSubmitted: false
                  })

            const rules = computed(() => {
                  // CompanyName: { required },
                  return {
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
            const rulesphoneNumber = computed(() => {
                  return {
                        phoneNumber: { required, maxLength: maxLength(16) },
                  }
            })

            const v$ = useVuelidate(rules, state)
            const o$ = useVuelidate(rulesOTP, otpState)
            const pn$ = useVuelidate(rulesphoneNumber, phoneState)

            return {
                  appSettings,
                  state,
                  otpState,
                  phoneState,
                  v$,
                  o$,
                  pn$
            }
      },
      directives: { maska: vMaska },
      methods: {
            onUserSubmit() {

                  this.v$.$validate();

                  if (!this.v$.$error) {

                        let body_params = {}
                        body_params.FirstName = this.state.FirstName;
                        body_params.LastName = this.state.LastName;
                        body_params.emailAddress = this.state.EmailAddress;
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
                                    that.state.otp_section = false;
                                    that.state.phone_section = true;
                              }
                        })
                  }
            },
            onPhoneNumberSubmit() {
                  this.pn$.$validate();

                  if (!this.pn$.$error) {
                        this.phoneState.phoneSubmitted = true;
                        this.callStartTrial()
                  }
            },
            callStartTrial() {
                  // New POST request
                  const guid = $cookies.get('guid');
                  const that = this
                  let body_params = {}
                  body_params.Guid = guid;                  
                  body_params.PhoneNumber = this.phoneState.phoneNumber;
                  body_params.FirstName = this.state.FirstName;
                  body_params.LastName = this.state.LastName;
                  body_params.EmailAddress = this.state.EmailAddress;                  
                  body_params.CurTime = new Date().getTime();
                  const u = new URLSearchParams(body_params).toString();

                  axios.put(`/StartTrial/StartTrial2?${u}`,{}, {
                        headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
                              // Add other headers if needed
                        },
                  }).then(postResponse => {
                        if (postResponse.status == 200) {

                              if (postResponse.data.DidCreateNewCompany) {
                                    // Handle post response if that.o$.$reset();
                                    $cookies.remove('MPHQR1');
                                    $cookies.remove('guid');
                                    that.phoneState.phoneSubmitted = false;
                                    that.state.EmailAddress = "";
                                    that.state.isError = false;
                                    that.state.otp_section = false;
                                    that.state.res_msg = "Company has been created and connecting to your account..!";
                                    setTimeout(function () {
                                          window.location.href = postResponse.data.RedirectURL
                                    }, 2000);
                              } else {
                                    that.state.res_msg = "Your company has not been created. Please contact the admin at (844) 376-0001.";
                                    that.state.isError = true;
                                    that.phoneState.phoneSubmitted = false;                                   
                              }
                        }
                  }).catch(postError => {
                        alert(postError.response.status + " " + postError.response.statusText);
                        that.otpState.otpSubmitted = false;
                        that.state.isError = false;
                        that.state.otp_section = false;
                        that.state.submitted = false;

                  });
            },
            mounted() {

            }
      }
}
</script>

<style>
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