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
          <li><a class="nav-link scrollto" target="_blank"  v-bind:href="tcUrl">Terms & Condition</a>
          </li>
          <li><a class="nav-link scrollto" target="_blank"  v-bind:href="privacyUrl">Privacy Policy</a>
          </li>
          <li><a class="start_free scrollto" href="javascript://" @click="modal.show()">Start Free Trial</a>
          </li>
          <li><a class="getstarted scrollto ms-0 signin" v-tooltip title="Easy connection to MyProHelper application after your company is setup for a trial or a subscription" target="_blank" href="https://myprohelper.com/login">Login</a></li>
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
          <p style="color: #09426a; font-size: 17px; font-weight: bold;" class="text-center"><i class="bi bi-telephone-fill"></i> (844) 376-0001</p>
          <h5><p class=""> class="text-center text-success">Thank you for your business.</p></h5>


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
<! -- Karen added 
              <div class="col-12 ">
                <input type="MainPhone" class="form-control" name="MainPhone" placeholder="Company main Phone Number" required="">
              </div>
<! -- Karen added 
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

export default {
  name: 'Header',
  data() {
    return {
      navbar_mobile: false,
      modal: null,
      maineLoginUrl : "https://myprohelper.com/login",
     // privacyUrl: "https://myprohelper.com:5005/api/PrivacyPolicy", // this was here but doesn't work
      privacyUrl: "http://localhost:5011/api/PrivacyPolicy",
//      privacyUrl: "https://myprohelper.com:5005/api/Privacypolicy",
      //privacyUrl: "https://mph2.myprohelper.com/Privacy", //klb this works but old way with pdf
//      tcUrl: "https://mph2.myprohelper.com/Terms"  // this works on mph2 the correct way.
      // https://myprohelper.com/Terms this works on myprohelper the correct way.
      
      //for localhost: alias /alta/static/terms_policy.pdf;
      // file:///C:/myprohelper/static/terms_policy.pdf
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
  },
  beforeMount(){

    let protocol = window.location.protocol;
    let host_name = window.location.hostname;
    let port = window.location.port;

    this.maineLoginUrl = protocol+"//"+host_name+"/login";  
    
    // KLB This if statement is no longer needed as the api name is 
    // in the appsettings.json and has the port and ends with /
//    if(port != ""){
    //  this.privacyUrl = `${protocol}//${host_name}:${port}/api/privacypolicy`; 
    //}
    //else{
    //  this.privacyUrl = `${protocol}//${host_name}/api/privacypolicy`;
    //}
    // KLB this.privacyUrl should get from api in appsettings.json
    // and it will have the correct hostname where it is running.
//    this.privacyUrl = protocol+"//"+host_name+":5011"+"/api/PrivacyPolicy";
if (window.location.origin == "http://localhost:5173")
  {
    //this.tcUrl = "http:"+"//"+"localhost:5173/terms_policy.pdf"; // working here KLB
    this.privacyUrl = "http://localhost:5011/api/PrivacyPolicy";
    this.tcUrl = window.location.origin+"/terms_policy.pdf"; // working here KLB
  }
  else
  {
    //this.privacyUrl = "https://myprohelper.com:5005/api/Privacypolicy";
    this.privacyUrl = window.location.origin+ "/api/Privacypolicy";
    this.tcUrl = protocol+"//"+host_name+"/Terms";
  }

//   this.privacyUrl = "http://localhost:5011/api/PrivacyPolicy";  // to run on local, works now
// this.privacyUrl = "https://myprohelper.com:5005/api/Privacypolicy"; // to run on myprohelper server works now
//        this.tcUrl = "http:"+"//"+"localhost:5173/terms_policy.pdf"; // working here KLB 
// this.tcUrl = protocol+"//"+host_name+"/Terms"; working on myprohelper.com
  },
  mounted() {
    this.vueOnScroll()
    const myModalEl = this.$refs.modal
    this.modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
  }
};
</script>
