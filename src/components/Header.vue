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
                      Trail</button>
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
                      autocomplete="off" maxlength="4" autofocus style="text-align:center;letter-spacing: 15px;"
                      :class="{ 'is-invalid': o$.VerifyCode.$error }" ref="verifyCodeInput">
                  </div>


                  <div class="col-md-12 text-center">
                    <button type="submit" v-if="!otpState.otpSubmitted">Next</button>
                    <br><br>

                    <div class="d-flex justify-content-between mt-2">
                      <a href="javascript://" @click="changeEmailAddress">Change Email</a>
                      <a href="javascript://" @click="resendEmail" :disabled="!otpState.canResendEmail">
                        Resend Email <span v-if="!otpState.canResendEmail"> ({{
                          otpState.timer }}s)</span>
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
              <form name="frm-contact" @submit.prevent="onPhoneNumberSubmit" method="post"
                class="php-email-form free_form">
                <div class="row gy-4">
                  <div class="col-md-12 text-center">
                    Your Cell Phone Number
                  </div>
                  <div class="col-md-12 mt-1">

                    <input type="text" maxlength="16" class="form-control" name="phoneNumber" autocomplete="off" v-maska
                      data-maska="(###) ###-####" autofocus ref="phoneNumberInput"
                      :class="{ 'is-invalid': pn$.phoneNumber.$error }" placeholder="Phone Number"
                      v-model="phoneState.phoneNumber">
                  </div>


                  <div class="col-md-12 text-center">
                    <button type="submit" v-if="!phoneState.phoneSubmitted">Start Free
                      Trial</button>
                    <div class="spinner-border text-primary" role="status" v-if="phoneState.phoneSubmitted">
                      <span class="visually-hidden">Loading...</span>
                    </div><br>
                    <span v-if="phoneState.phoneSubmitted" style="font-weight: bold;color: #013289;">Getting
                      MyProHelper set up for '{{ state.CompanyName
                      }}'</span>
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
        FirstName: CustDetail.FirstName || "Viral",
        LastName: CustDetail.LastName || "Prajapati",
        EmailAddress: CustDetail.EmailAddress || "viraldoe1001@yopmail.com",
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
        phoneNumber: "",
        phoneSubmitted: false
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
        VerifyCode: { required, numeric, minLength: minLength(4) },
      },
      phoneState: {
        phoneNumber: { required, maxLength: maxLength(16) },
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
            coookie_data.CompanyPhone = response.data.PhoneNumber;
            coookie_data.PhoneNumber = "";
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
        this.state.FirstName = CustDetail.FirstName || "Viral";
        this.state.LastName = CustDetail.LastName || "Prajapati";
        this.state.EmailAddress = CustDetail.EmailAddress || "viraldoe1001@yopmail.com";
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
        this.phoneState.phoneNumber = "";
        this.phoneState.phoneSubmitted = false;
        this.modal.hide();
    },
    showModal() {      
      this.modal.show();
      if (this.isValidGuid == true) {
            // this.$refs.inpFirstName.focus();
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
            that.state.otp_section = true
            that.otpState.canResendEmail = false;
            that.state.isError = false;
            that.state.res_msg = "";

            setTimeout(() => {
              that.otpState.canResendEmail = true;
            }, 30000);

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
            nextTick(() => {
              that.$refs.phoneNumberInput.focus();
            });

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

      axios.put(`/StartTrial/StartTrial2?${u}`, {}, {
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
            // that.state.res_msg = "Company has been created and connecting to your account..!";
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
    },
    resendEmail() {
      if (this.otpState.canResendEmail) {
        this.otpState.canResendEmail = false;
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
</style>