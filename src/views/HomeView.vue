<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Welcome to MyProHelper - Simplifying HVAC Service Management</h1>
          <h6 data-aos="fade-up" data-aos-delay="400">Explore MyProHelper, your ultimate solution for Heating and Air
            Conditioning Service
            companies. Learn about our features, how we address pain points, and why you need MyProHelper.
            Discover the perfect tool designed to streamline your business operations.</h6>
        </div>
        <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src="@/assets/img/step.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->
  <main id="main">

    <!-- ======= Features Section ======= -->
    <section id="features" class="features">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Why MyProHelper</h2>
          <p>Addressing HVAC Challenges with MyProHelper</p>
        </header>

        <div class="row align-items-center">

          <div class="col-lg-6">
            <img src="@/assets/img/van.png" class="img-fluid animation-jump" alt="">
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">

              <div class="col-md-12">
                <div class="fearures_contents">
                  <p>MyProHelper was developed for the HVAC business owner who is getting pulled in all directions.</p>
                  <p>From scheduling projects to invoicing and getting paid to managing your field technicians,
                    MyProHelper helps you manage every part of your business.</p>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Keep customers updated on arrival times</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Manage field activities from a distance</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Give more responsibility to your reps in the field</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Stay on top of employee scheduling</h3>
                </div>
              </div>


            </div>
          </div>

        </div> <!-- / row -->

      </div>


    </section><!-- End Features Section -->



    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Pricing</h2>
          <!-- <p>Check our Pricing</p> -->
        </header>

        <div class="row gy-4" data-aos="fade-left">

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <span class="featured">Getting Started</span>
              <h3 style="color: #07d5c0;">Free Trial</h3>
              <div class="price"><sup>$</sup>0<span> / Month</span></div>
              <img src="@/assets/img/pricing-free.png" class="img-fluid" alt="">
              <ul>
                <li>No installation required</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>
                <li>Runs on iOS and Android phones and tablets</li>
              </ul>
              <!--  <a href="#" class="btn-buy">Buy Now</a> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              
              <h3 style="color: #65c600;">Monthly Plan</h3>
              <div class="price"><sup>$</sup>131.95<span> / Month</span></div>
              <img src="@/assets/img/pricing-starter.png" class="img-fluid" alt="">
              <ul>
                <li>No Long-term commitment</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>
                <li>Runs on iOS and Android phones and tablets</li>
              </ul>
              <!--  <a href="#" class="btn-buy">Buy Now</a> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="box">
              <h3 style="color: #ff901c;">Yearly Plan</h3>
              <div class="price"><sup>$</sup>109.95<span> / Month / Paid Yearly</span></div>
              <img src="@/assets/img/pricing-business.png" class="img-fluid" alt="">
              <ul>
                <li>Most economical plan</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>                
                <li>Runs on iOS and Android phones and tablets</li>
              </ul>
              <!--  <a href="#" class="btn-buy">Buy Now</a> -->
            </div>
          </div>

        </div>

      </div>

    </section><!-- End Pricing Section -->



    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </header>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
          <swiper :modules="modules" :slides-per-view="3" :space-between="50" :pagination="{ clickable: true }"
            :autoplay="autoplay" :loop="loop" :breakpoints="breakpoints">
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial-item">

                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
                <div class="profile mt-auto">
                  <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Lorem Ipsum</h3>
                  <h4>Lorem</h4>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

    </section><!-- End Testimonials Section -->

    <section class="technical_supports">
      <div class="container">
        <div class="row ">
          <div class="col-12">
            <header class="section-header">
              <h2> OUR WORKING TIME</h2>
              <p>Need any Support?</p>
            </header>

          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-9">
            <div class="technical_blk">
              <div class="technical_img">
                <img src="@/assets/img/Img-min.jpg" width="100%" height="100%">
              </div>
              <div class="technical_contents text-center">
                <p>MyProHelper is designed to be easy to use.
                  We provide free technical support on MyProHelper to assist with any questions you may have.</p>
                <!-- <h5>Working Hours:</h5> -->
                <div class="working_hours" v-if="enabledSupportSection">
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Monday:</p>
                    <p class="timing">8.00am - 6.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Tuesday:</p>
                    <p class="timing">7.00am - 6.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Wednesday:</p>
                    <p class="timing">9.00am - 7.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Thursday:</p>
                    <p class="timing">9.00am - 7.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Friday:</p>
                    <p class="timing">9.00am - 7.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Saturday:</p>
                    <p class="timing">12.00am - 7.00pm</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-bottom timing_hours">
                    <p class="weekday">Sunday:</p>
                    <p class="timing closed">Closed</p>
                  </div>
                </div>
                <div class="needs_support">
                  <h5>Need Any Support?</h5>
                  <div class="d-flex gap-5">
                    <div>
                    <p class="call_us"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 140 138"
                      fill="none">
                      <path
                        d="M127.83 100.74C124.034 97.5789 101.768 83.5806 98.0668 84.2231C96.3293 84.5293 95.0001 85.9999 91.4426 90.2132C89.7974 92.287 87.9906 94.2293 86.0389 96.0221C82.4631 95.1646 79.0018 93.8907 75.7269 92.2271C62.8836 86.0193 52.5079 75.7152 46.2589 62.9625C44.5832 59.7112 43.3002 56.2747 42.4364 52.7246C44.2422 50.787 46.1985 48.9932 48.2874 47.3599C52.5269 43.8279 54.0125 42.5169 54.3209 40.7833C54.9681 37.1004 40.8552 15.0032 37.6843 11.2341C36.3551 9.67294 35.1475 8.625 33.6012 8.625C29.1184 8.625 8.8418 33.5168 8.8418 36.7425C8.8418 37.0056 9.27617 62.9194 42.2409 96.2162C75.779 128.944 101.881 129.375 102.146 129.375C105.395 129.375 130.467 109.244 130.467 104.794C130.467 103.258 129.411 102.06 127.83 100.74Z"
                        fill="#51c2eb"></path>
                      <path
                        d="M100.061 64.6875H108.748C108.738 55.5407 105.073 46.7714 98.5586 40.3037C92.0439 33.8359 83.2111 30.1978 73.998 30.1875V38.8125C80.9081 38.8194 87.5332 41.5477 92.4194 46.3987C97.3056 51.2497 100.054 57.8271 100.061 64.6875Z"
                        fill="#51c2eb"></path>
                      <path
                        d="M121.779 64.6875H130.467C130.45 49.8241 124.495 35.5743 113.908 25.0642C103.322 14.5542 88.9692 8.64212 73.998 8.625V17.25C86.6658 17.2648 98.8105 22.2675 107.768 31.1605C116.725 40.0536 121.764 52.1108 121.779 64.6875Z"
                        fill="#51c2eb"></path>
                    </svg><span>Call Us:</span></p>
                    <p><u>{{ supportPhoneNo }}</u></p>
                  </div>
                  <div>
                    <p class="call_us">
                      <svg viewBox="0 0 48 48"  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="8-Email" id="_8-Email"><path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z"/></g></svg><span>Email:</span></p>
                  <p><u>{{ supportEmail }}</u></p>
                </div>
                  </div>
               
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main><!-- End #main -->
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      supportPhoneNo:'(844) 876-0001',
      supportEmail:'support@myprohelper.com',
      enabledSupportSection: false,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    };
  },
};
</script>