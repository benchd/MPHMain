<template>
  <header id="header" class="header fixed-top" ref="headRef">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center">
        <img src="@/assets/img/logo.png" alt="">
      </a>

      <nav id="navbar" :class="navbar_mobile ? 'navbar navbar-mobile' : 'navbar'">
        <ul>
          <!-- <li> -->
          <router-link to="/" class="nav-link scrollto">Home</router-link>
          <router-link to="/about" class="nav-link scrollto">About Us</router-link>
          <router-link to="/features" class="nav-link scrollto">Features</router-link>
          <!-- <a class="nav-link scrollto active" href="/">Home</a></li> -->
          <!-- <li><a class="nav-link scrollto" :to="about">About Us</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="/features">Features</a></li> -->
          <li><a class="nav-link scrollto" target="_blank" v-bind:href="tcUrl">Terms & Condition</a>
          </li>
          <li><a class="nav-link scrollto" target="_blank" v-bind:href="privacyUrl">Privacy Policy</a>
          </li>
          <li><a class="start_free scrollto" href="javascript://" @click="handleStartFreeTrial">Start Free Trial</a>
          </li>
          <!-- KLB  target="_blank" href="https://myprohelper.com/login">Login</a></li>  -->
          <!-- target="_blank" href="http://localhost:8080/login">Login</a></li>   -->
          <li><a class="getstarted scrollto ms-0 signin" v-tooltip
              title="Easy connection to MyProHelper application after your company is setup for a trial or a subscription"
              target="_blank" :href="loginUrl">Login</a></li>
        </ul>
        <i :class="navbar_mobile ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'" @click="showMenu"></i>
      </nav>

    </div>

  </header>

  <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Start Free Trial</b></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body contact">
          <p class="" style="margin-bottom: 0;">
            In order to start your Free Trial for <b>MyProHelper</b>, please contact us at:
          </p>
          <p style="color: #09426a; font-size: 17px; font-weight: bold;" class="text-center"><i
              class="bi bi-telephone-fill"></i> (844) 376-0001</p>
          <h5>
            <p class="text-center text-success">Thank you for your business.</p>
          </h5>


          <!-- <form method="post" class="php-email-form bg-transparent p-0">
            <div class="row gy-4">

              <div class="col-12">
                <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
              </div>

              <div class="col-12">
                <input type="text" name="name" class="form-control" placeholder="Company Name" required="">
              </div>

              <div class="col-12 ">
                <input type="email" class="form-control" name="email" placeholder="Your Email" required="">
              </div>

              <div class="col-12 ">
                <input type="number" class="form-control" name="number" placeholder="Phone Number" required="">
              </div>

              <div class="col-12 ">
                <input type="MainPhone" class="form-control" name="MainPhone" placeholder="Company Main Phone Number" required="">
              </div>
              <div class="col-12 ">
                <input type="MainEmail" class="form-control" name="MainEmail" placeholder="Company Main Email" required="">
              </div>
              
              <div class="col-md-12 text-center">
                <button type="submit">Submit</button>
              </div>

            </div>
          </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { tooltip } from './Tooltip';
import { useRouter } from 'vue-router';
import axios from 'axios'
import { inject } from 'vue';


// import appSettings from '@/appsettings.json'; // Import the appsettings.json

export default {
  name: 'Header',
  inject: ['appSettings'],
  data() {
    return {
      navbar_mobile: false,
      modal: null,
      loginUrl: "https://myprohelper.com/login",
      privacyUrl: "https://myprohelper.com:5005/api/PrivacyPolicy", // this was here but doesn't work
      tcUrl: "terms_policy.pdf"
    }
  },
  directives: { tooltip: tooltip },

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
        if (window.scrollY > 20) {
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
        try {
          const response = await axios.get(`/LookupGuid?guid=${guid}`);
          if (response.status === 200) {
            this.$cookies.set('MPHQR1', response.data);
            this.$router.push({ name: 'customer_detail' });
          } else {
            this.showModal();
          }
        } catch (error) {
          console.error('Error looking up GUID:', error);
          // this.showModal();
          this.$router.push({ name: 'customer_detail' });
        }
      } else {
        this.showModal();
      }
    },
    showModal() {
      this.modal.show()
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
