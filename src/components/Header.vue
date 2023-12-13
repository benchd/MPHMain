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
          <li><a class="nav-link scrollto" target="_blank" href="https://mph2.myprohelper.com/Terms">Terms & Condition</a>
          </li>
          <li><a class="nav-link scrollto" target="_blank" href="https://mph2.myprohelper.com/Privacy">Privacy Policy</a>
          </li>
          <li><a class="start_free scrollto" href="javascript://" @click="modal.show()">Start Free Trial</a>
          </li>
          <li><a class="getstarted scrollto ms-0" target="_blank" href="https://myprohelper.com/login">Sign in</a></li>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Start free trial</b></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body contact">
          <form method="post" class="php-email-form bg-transparent p-0">
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

              
              <div class="col-md-12 text-center">
                <!--  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div> -->

                <button type="submit">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  name: 'Header',
  data() {
    return {
      navbar_mobile: false,
      modal: null,
    }
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
        if (window.scrollY > 20) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      });
    },
  },
  mounted() {
    this.vueOnScroll()
    const myModalEl = this.$refs.modal
    this.modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
  }
};
</script>
