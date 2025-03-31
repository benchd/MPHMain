<template>
    <header id="header" class="header fixed-top bg-white" ref="headRef">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <a href="/" class="logo d-flex align-items-center">
          <img src="@/assets/img/logo.png" alt="">
        </a>
  
        <nav id="navbar" :class="navbar_mobile ? 'navbar navbar-mobile' : 'navbar'">
          <ul>
  
            <router-link to="/" class="nav-link scrollto">Home</router-link>
            <router-link to="/about" class="nav-link scrollto">About Us</router-link>
            <router-link to="/features" class="nav-link scrollto">Features</router-link>
  
            <li><a class="nav-link scrollto" target="_blank" v-bind:href="tcUrl">Terms & Condition</a>
            </li>
            <li><a class="nav-link scrollto" target="_blank" v-bind:href="privacyUrl">Privacy Policy</a>
            </li>
            <li><button class="start_free scrollto" type="button" :disabled="disableStartTrial"
                @click="handleStartFreeTrial">Start Free Trial</button>
            </li>
            <li><a class="getstarted scrollto ms-0 signin" v-tooltip
                title="Easy connection to MyProHelper application after your company is setup for a trial or a subscription"
                target="_blank" :href="loginUrl">Login</a></li>
          </ul>
          <i :class="navbar_mobile ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'" @click="showMenu"></i>
        </nav>
  
      </div>
  
    </header>
  
    <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Start Free Trial</b></h1>
            <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
          </div>
          <div class="modal-body contact" v-if="isValidGuid">
  
            <div class="row">
              <div class="col-lg-12" v-if="!state.otp_section && !state.phone_section">
                <form name="frm-contact" @submit.prevent="onUserSubmit(true)" method="post"
                  class="php-email-form free_form">
  
                  <div class="row gy-4 mt-1">
                    
                    <div class="col-md-6">
                      <input type="text" name="FirstName" class="form-control" autocomplete="off" ref="inpFirstName"
                        :class="{ 'is-invalid': v$.FirstName.$error }" placeholder="First Name"
                        v-model="state.FirstName">
                    </div>
  
                    <div class="col-md-6">
                      <input type="text" name="LastName" class="form-control" autocomplete="off"
                        :class="{ 'is-invalid': v$.LastName.$error }" placeholder="Last Name" v-model="state.LastName">
                    </div>
  
                    <div class="col-md-12 ">
                      <input type="text" class="form-control" name="EmailAddress" autocomplete="off"
                        :class="{ 'is-invalid': v$.EmailAddress.$error }" placeholder="Your Email"
                        v-model="state.EmailAddress">
                    </div>
  
                    <div class="col-md-12 text-center">
                      <button type="submit" v-if="!state.submitted">Start Free
                        Trial</button>
                      <div class="spinner-border text-primary" role="status" v-if="state.submitted">
                        <span class="visually-hidden">Loading...</span>
                      </div>
  
                    </div>
  
                    <p>
                      Start your free trial today and embark on a journey towards unparalleled efficiency and innovation. Don't miss out on this opportunity to elevate your endeavors to new heights. Join us and let's shape the future together!
                    </p>
                  </div>
                </form>
  
              </div>
  
              <div class="col-lg-12" v-if="state.otp_section">
                <form name="frm-contact" @submit.prevent="onOTPSubmit" method="post" class="php-email-form free_form">
                  <div class="row gy-4">
                    <div class="col-md-12 text-center">
                      A verification code has been sent to {{ state.EmailAddress
                      }}. Please enter the code below to verify your email.
                    </div>
                    <div class="col-md-12">
                      <input type="text" name="VerifyCode" v-model="otpState.VerifyCode" class="form-control"
                        autocomplete="off" maxlength="4" style="text-align:center;letter-spacing: 15px;"
                        :class="{ 'is-invalid': o$.VerifyCode.$error }" ref="verifyCodeInput">
                    </div>
  
  
                    <div class="col-md-12 text-center">
                      <button type="submit" v-if="!otpState.otpSubmitted">Next</button>
                      <br><br>
  
                      <div class="d-flex justify-content-between mt-2">
                        <a href="javascript://" @click="changeEmailAddress">Change Email</a>
                        <a href="javascript://" @click="resendEmail" :disabled="!otpState.canResendEmail">
                          Resend Email
                        </a>
                      </div>
  
                      <div class="spinner-border text-primary" role="status" v-if="otpState.otpSubmitted">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
  
              <div class="col-lg-12" v-if="state.phone_section">
                <form name="frm-contact" @submit.prevent="onWorkersCellPhoneSubmit" method="post"
                  class="php-email-form free_form">
                  <div class="row gy-4">
                    <div class="col-md-12 text-center">
                      Your Cell Phone Number
                    </div>
                    <div class="col-md-12 mt-1">
                      <input type="text" maxlength="16" class="form-control" name="WorkersCellPhone" autocomplete="off" v-maska
                        data-maska="(###) ###-####"  ref="WorkersCellPhoneInput"
                        :class="{ 'is-invalid': pn$.WorkersCellPhone.$error }" placeholder="Worker Cell Phone Number"
                        v-model="phoneState.WorkersCellPhone">
                    </div>
  
                    <div class="col-md-12" v-if="phoneState.phoneOtpSection">
                      <input type="text" 
                        name="phoneVerifyCode" 
                        v-model="phoneState.phoneVerifyCode" 
                        class="form-control verification-code"
                        autocomplete="off" 
                        maxlength="4" 
                        style="text-align:center;letter-spacing: 15px;"
                        :class="{ 'is-invalid': pn$.phoneVerifyCode.$error }" 
                        placeholder="Enter 4-digit code" ref="phoneVerifyCodeInput">
                      
                      <div class="d-flex justify-content-center mt-2">
                        <a href="javascript://" 
                          @click="resendPhoneOTP" 
                          :class="{'disabled-link': !phoneState.canResendPhone}">
                          Resend Code
                        </a>
                      </div>
                    </div>
  
                    <div class="col-md-12 text-center">
                      <button type="submit" v-if="!phoneState.phoneSubmitted">
                        {{ phoneState.phoneOtpSection ? 'Verify Code' : 'Send Code' }}
                      </button>
                      <div class="spinner-border text-primary" role="status" v-if="phoneState.phoneSubmitted">
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
          <div class="modal-body contact" v-else>
            <p class="" style="margin-bottom: 0;">
              In order to start your Free Trial for <b>MyProHelper</b>, please reach out to us at:
            </p>
            <p style="color: #09426a; font-size: 17px; font-weight: bold;" class="text-center">(844) 376-0001</p>
            <h5>
              <p class="text-center text-success">Thank you for choosing us!</p>
            </h5>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import { tooltip } from './Tooltip';
  import { useRouter } from 'vue-router';
  import axios from 'axios'
  import { inject, nextTick } from 'vue';
  import { required, email, maxLength, minLength, numeric } from '@vuelidate/validators'
  import useVuelidate from '@vuelidate/core'
  import { vMaska } from "maska"
  
  export default {
    name: 'Header',
    inject: ['appSettings'],
    data() {
      let CustDetail = this.$cookies.get('MPHQR1') || {};
  
      return {
        navbar_mobile: false,
        modal: null,
        loginUrl: "https://myprohelper.com/login",
        privacyUrl: "https://myprohelper.com:5005/api/PrivacyPolicy", // this was here but doesn't work
        tcUrl: "terms_policy.pdf",
        state: {
          FirstName: CustDetail.FirstName || "",
          LastName: CustDetail.LastName || "",
          EmailAddress: CustDetail.EmailAddress || "",
          CompanyName: CustDetail.CompanyName || "",
          res_msg: "",
          otp_section: false,
          phone_section: false,
          isError: false,
          submitted: false
        },
        otpState: {
          VerifyCode: "",
          otpSubmitted: false,
          canResendEmail: false,
          timer: 30
        },
        phoneState: {
          WorkersCellPhone: "",
          phoneSubmitted: false,
          phoneOtpSection: false,
          phoneVerifyCode: "",
          canResendPhone: false,
          phoneTimer: 30
        },
        disableStartTrial: false,
        isValidGuid: false,
        v$: null,
        o$: null,
        pn$: null,
      }
    },
    directives: { tooltip: tooltip, maska: vMaska },
    validations() {
      return {
        state: {
          FirstName: { required },
          LastName: { required },
          EmailAddress: { required, email: email },
        },
        otpState: {
          VerifyCode: { required, minLength: minLength(4) },
        },
        phoneState: {
          WorkersCellPhone: { required, maxLength: maxLength(16) },
          phoneVerifyCode: { required, numeric, minLength: minLength(4) },
        },
      }
    },
    created() {
      // Create separate Vuelidate instances for each form
      this.v$ = useVuelidate(this.$options.validations().state, this.state);
      this.o$ = useVuelidate(this.$options.validations().otpState, this.otpState);
      this.pn$ = useVuelidate(this.$options.validations().phoneState, this.phoneState);
    },
    methods: {
      showMenu() {
        this.navbar_mobile = (this.navbar_mobile) ? false : true;
      },
      vueOnScroll() {
        const selectHeader = this.$refs.headRef; // assign the reference in variable
        window.addEventListener("load", () => {
          if (window.scrollY > 20) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        });
  
        window.addEventListener("scroll", () => {
          if (window.scrollY > 1) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        });
      },
      async handleStartFreeTrial() {
        const guid = this.$cookies.get('guid');
        const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  
        if (guid && guidRegex.test(guid)) {
          this.disableStartTrial = true;
          try {
            const response = await axios.get(`StartTrial/LookupGuid?Guid=${guid}`);
  
            if (response.status === 200) {
              let coookie_data = {};
              coookie_data.CompanyName = response.data.Name;
              coookie_data.CompanyAddress = response.data.Address;
              coookie_data.CompanyAddress2 = "";
              coookie_data.CompanyCity = response.data.City;
              coookie_data.CompanyState = response.data.State;
              coookie_data.CompanyZip = response.data.ZipCode;
              coookie_data.CompanyPhone = response.data.WorkersCellPhone;
              coookie_data.WorkersCellPhone = "";
              coookie_data.FirstName = "";
              coookie_data.LastName = "";
              coookie_data.EmailAddress = "";
              coookie_data.Website = coookie_data.Website;
  
              this.$cookies.set('MPHQR1', coookie_data);
  
              this.state.CompanyName = response.data.Name
  
              // this.$router.push({ name: 'customer_detail' });
              this.isValidGuid = true;
            }
            this.showModal();
  
          } catch (error) {
  
            this.showModal();
          }
        } else {
          this.showModal();
        }
      },
      hideModal(){
        let CustDetail = this.$cookies.get('MPHQR1') || {};
          this.state.FirstName = CustDetail.FirstName || "";
          this.state.LastName = CustDetail.LastName || "";
          this.state.EmailAddress = CustDetail.EmailAddress || "";
          this.state.CompanyName = CustDetail.CompanyName || "";
          this.state.res_msg = "";
          this.state.otp_section = false;
          this.state.phone_section = false;
          this.state.isError = false;
          this.state.submitted = false;    
        
          this.otpState.VerifyCode = "";
          this.otpState.otpSubmitted = false;
          this.otpState.canResendEmail = false;
          this.otpState.timer = 30;
          this.phoneState.WorkersCellPhone = "";
          this.phoneState.phoneSubmitted = false;
          this.phoneState.phoneOtpSection = false;
          this.phoneState.phoneVerifyCode = "";
          this.phoneState.canResendPhone = false;
          this.phoneState.phoneTimer = 30;
          this.modal.hide();
      },
      showModal() {      
        this.modal.show();
        if (this.isValidGuid == true) {
         
          setTimeout(() => {  
            nextTick(() => {
              const input = this.$refs.inpFirstName;
              if (input) {
                input.focus();
                // Force focus persistently
                setTimeout(() => {
                  input.focus();
                }, 500); // Repeat focus after a delay to reinforce it
              }
            });
          }, 400);

        }
        this.disableStartTrial = false;
      },
      onUserSubmit(inresponse = true) {
  
        this.v$.$validate();
  
        if (!this.v$.$error) {
  
          let body_params = {}
          body_params.FirstName = this.state.FirstName;
          body_params.LastName = this.state.LastName;
          body_params.emailAddress = this.state.EmailAddress;
          this.state.submitted = true
          const that = this
          if (!inresponse) {
            this.resendEmailTimer();
          }
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
              that.state.otp_section = true;
              that.otpState.canResendEmail = true;
              that.state.isError = false;
              that.state.res_msg = "";
  
              nextTick(() => {
                that.$refs.verifyCodeInput.focus();
              });
              if (inresponse) {
                this.resendEmailTimer();
              }
  
            }
            else if (response.status == 406) {
              that.state.submitted = false;
              that.state.isError = true;
              that.state.res_msg = "Email address already exist in the system";
            }
          }).catch(postError => {
            that.state.submitted = false;
            that.state.isError = true;
  
            if (postError.response.status == 406) {
              that.state.res_msg = "Email address already exist in the system";
            }
            else {
              that.state.res_msg = postError.response.statusText;
            }
  
          });
        }
      },
      onOTPSubmit() {
        this.o$.$validate();
        this.state.isError = false;
        this.state.res_msg = "";
        if (!this.o$.$error) {
          const body_params = {};
          body_params.VerifyCode = this.otpState.VerifyCode;
          body_params.emailAddress = this.state.EmailAddress;
          this.otpState.otpSubmitted = true;
          const that = this;
          
          axios.get('/ValidateEmailAddress/ValidateEmailAddress', {
            params: body_params,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
            },
          }).then(response => {
            that.otpState.otpSubmitted = false;
            if (response.status == 200) {
              that.state.otp_section = false;
              that.state.phone_section = true;
              nextTick(() => {
                that.$refs.WorkersCellPhoneInput.focus();
              });
            } else {
              that.state.isError = true;
              that.state.res_msg = "Please check your email, the validation code you entered did not match.";
              that.otpState.VerifyCode = ""; // Clear the input
              nextTick(() => {
                that.$refs.verifyCodeInput.focus();
              });
            }
          }).catch(error => {
            that.otpState.otpSubmitted = false;
            that.state.isError = true;
            that.state.res_msg = "Please check your email, the validation code you entered did not match.";
            that.otpState.VerifyCode = ""; // Clear the input
            nextTick(() => {
              that.$refs.verifyCodeInput.focus();
            });
          });
        }
      },
      formatPhoneNumber(phone) {
        return phone.replace(/\D/g, '');
      },
      async sendPhoneOTP() {
        try {
          
          const formattedPhone = this.formatPhoneNumber(this.phoneState.WorkersCellPhone);
          const response = await axios.get(`/ValidatePhone/SendCode`, {
            params: { PhoneNumber: formattedPhone },
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
            }
          });
          if (response.data.issueValidatePhoneNumberResponseEnum === 0) {
           
            this.phoneState.phoneOtpSection = true;
            this.phoneState.canResendPhone = true; // Always allow resend
            this.state.isError = false;
            this.state.res_msg = "";
            const that = this;
            nextTick(() => {
              that.$refs.phoneVerifyCodeInput.focus();
            });
          } else if (response.data.issueValidatePhoneNumberResponseEnum === 1) {
            // Wait 5 minutes
            this.state.isError = true;
            this.state.res_msg = "Please wait 5 minutes before trying again";
          } else if (response.data.issueValidatePhoneNumberResponseEnum === 2) {
            // Already validated
            this.state.isError = false;
            this.state.res_msg = "";
            this.callStartTrial();
          } else if (response.data.issueValidatePhoneNumberResponseEnum === 3) {
            // Too many attempts
            this.state.isError = true;
            this.state.res_msg = "There was a problem validating your phone number. Please contact support at (844) 376-0001 for assistance";
          }
        } catch (error) {
          this.state.isError = true;
          this.state.res_msg = "Failed to send phone verification code";
        }
      },
  
      async validatePhoneOTP() {
        try {
          const formattedPhone = this.formatPhoneNumber(this.phoneState.WorkersCellPhone);
          const response = await axios.get(`/ValidatePhone/Validate`, {
            params: {
              PhoneNumber: formattedPhone,
              VerifyCode: this.phoneState.phoneVerifyCode
            },
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
            }
          });
  
          if (response.status == 200) {
            if (response.data == true) {
              // Success
              this.callStartTrial();
            } else {
              this.state.isError = true;
              this.state.res_msg = "Please check your text message on your phone, the Verification code you entered did not match.";
              this.phoneState.phoneVerifyCode = "";
            }
          }else{
            this.state.isError = true;
            this.state.res_msg = "Please try again";
            this.phoneState.phoneVerifyCode = "";
          }
          
        } catch (error) {
          this.state.isError = true;
          this.state.res_msg = "Invalid phone verification code";
          this.phoneState.phoneVerifyCode = "";
        }
      },
  
      resendPhoneOTP() {
        if (this.phoneState.canResendPhone) {
          this.phoneState.phoneVerifyCode = "";
          this.sendPhoneOTP();
        }
      },
  
      onWorkersCellPhoneSubmit() {
        this.pn$.$validate();
        console.log('errrrrorr',this.pn$.$error);
        // if (!this.pn$.$error) {
          if (!this.phoneState.phoneOtpSection) {
            // First time - send OTP
            this.sendPhoneOTP();
          } else {
            // Validate OTP
            this.validatePhoneOTP();
          }
        // }
      },
      resendEmail() {
        if (this.otpState.canResendEmail) {
          this.otpState.canResendEmail = false;
          this.otpState.VerifyCode = "";
          this.onUserSubmit(false);
        }
      },
      changeEmailAddress() {
        this.state.otp_section = false;
      },
      resendEmailTimer() {
        this.otpState.timer = 30;
        const that = this
        const interval = setInterval(() => {
          that.otpState.timer--;
          if (that.otpState.timer <= 0) {
            that.otpState.canResendEmail = true;
            clearInterval(interval);
          }
        }, 1000);
      },
      callStartTrial() {
        const guid = this.$cookies.get('guid');
        const that = this;
        let body_params = {};
        body_params.Guid = guid;
        body_params.WorkerCellPhone = this.formatPhoneNumber(this.phoneState.WorkersCellPhone);
        body_params.FirstName = this.state.FirstName;
        body_params.LastName = this.state.LastName;
        body_params.EmailAddress = this.state.EmailAddress;
        body_params.CurTime = new Date().getTime();
        const u = new URLSearchParams(body_params).toString();
  
        this.phoneState.phoneSubmitted = true;
  
        axios.put(`/StartTrial/StartTrial2?${u}`, {}, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Richmond': '06A658EA-73C5-4C8D-8280-F5A638EDE2AC'
          },
        }).then(postResponse => {
          if (postResponse.status == 200) {
            if (postResponse.data.DidCreateNewCompany) {
              // Handle post response
              this.$cookies.remove('MPHQR1');
              this.$cookies.remove('guid');
              that.phoneState.phoneSubmitted = false;
              that.state.EmailAddress = "";
              that.state.isError = false;
              that.state.otp_section = false;
              that.state.res_msg = `MyProHelper is now set up for ${that.state.CompanyName}, connecting to your account!`;
              setTimeout(function () {
                window.location.href = postResponse.data.RedirectURL
              }, 2000);
            } else {
              that.state.res_msg = `MyProHelper has not finished setting up for ${that.state.CompanyName} Please contact MyProHelper, Customer Support at (844) 376-0001.`;
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
      }
    },
    beforeMount() {
      this.loginUrl = this.appSettings.LoginUrl;
      this.tcUrl = this.appSettings.TermCondtionUrl;
      this.privacyUrl = this.appSettings.PrivacyUrl;
    },
    mounted() {
      this.vueOnScroll()
      const myModalEl = this.$refs.modal
      this.modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
    }
  };
  </script>
  <style>
  .start_free
  {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    font-family: Nunito,sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #013289;
    white-space: nowrap;
    transition: .3s;
    box-shadow: none;
    background: transparent;
  }
  .contact .php-email-form
  {
     padding: 0 15px !important;
     background: transparent !important;
  }
  
  .verification-code {
    font-size: 18px;
    padding: 10px;
    letter-spacing: 15px !important;
  }
  
  .verification-code::placeholder {
    letter-spacing: normal;
    font-size: 14px;
  }
  
  .disabled-link {
    color: #6c757d;
    pointer-events: none;
    text-decoration: none;
  }
  </style>