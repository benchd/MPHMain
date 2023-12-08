<template>
  <header id="header" class="header fixed-top" ref="headRef">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center">
        <img src="@/assets/img/logo.png" alt="">
      </a>

      <nav id="navbar" :class="navbar_mobile?'navbar navbar-mobile':'navbar'">
        <ul>
          <!-- <li> -->
            <router-link to="/" class="nav-link scrollto active" >Home</router-link>
            <router-link to="/about" class="nav-link scrollto" >About Us</router-link>
            <router-link to="/features" class="nav-link scrollto" >Features</router-link>
            <!-- <a class="nav-link scrollto active" href="/">Home</a></li> -->
          <!-- <li><a class="nav-link scrollto" :to="about">About Us</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="/features">Features</a></li> -->
          <li><a class="nav-link scrollto" target="_blank" href="https://mph2.myprohelper.com/Terms">Terms & Condition</a></li>
          <li><a class="nav-link scrollto" target="_blank" href="https://mph2.myprohelper.com/Privacy">Privacy Policy</a></li>
          <li><a class="start_free scrollto" target="_blank" href="https://myprohelper.com/login">Start Free Trial</a></li>
          <li><a class="getstarted scrollto ms-0" target="_blank" href="https://myprohelper.com/login">Sign in</a></li>
        </ul>
        <i :class="navbar_mobile?'bi bi-x mobile-nav-toggle':'bi bi-list mobile-nav-toggle'" @click="showMenu"></i>
      </nav>  

    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      navbar_mobile: false
    }
  },
  methods: {
   showMenu(){
    this.navbar_mobile = (this.navbar_mobile)?false:true;
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
  }
};
</script>
