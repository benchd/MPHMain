<template>
  <footer id="footer" class="footer">


    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src="@/assets/img/logo.png" alt="">
            </a>
            <p>The Help You Need From A Pro You Can Trust
As an HVAC contractor, you need tools that will empower your teams to work smarter, without working harder. MyProHelper is the all-in-one field management software solution that will transform the way you do business, so that you can focus more time on what matters most.
Get Started Today
</p>
            <div class="social-links mt-3" v-if="socialIcon">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-6 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Pricing</a></li>
              <li><i class="bi bi-chevron-right"></i>
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li><i class="bi bi-chevron-right"></i> <a target="_blank" href="https://mph2.myprohelper.com/Terms">Terms &
                  Condition</a></li>
              <li><i class="bi bi-chevron-right"></i> <a target="_blank"
                  href="https://mph2.myprohelper.com/Privacy">Privacy policy</a></li>
            </ul>
          </div>


          <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              P.O. Box 112<br>
              Piney Flats, TN 37686-0112 <br><br>
              <strong>Phone:</strong> (844) 376-0001<br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright 2023 <strong><span>MyProHelper</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center" ref="backToTop"><i
      class="bi bi-arrow-up-short"></i></a>
</template>


<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialIcon: false
    }
  },
  methods: {

    footerScroll() {
      const backtotop = this.$refs.backToTop; // assign the reference in variable
      window.addEventListener("load", () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      });

      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      });
    },
  },
  mounted() {
    this.footerScroll()
  }
};
</script>
/**
   * Back to top button
   */
 
