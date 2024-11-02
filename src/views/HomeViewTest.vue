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
          <p>Check our Pricing</p>
        </header>

        <div class="row gy-4" data-aos="fade-left">

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h3 style="color: #07d5c0;">Free Plan</h3>
              <div class="price"><sup>$</sup>0<span> / mo</span></div>
              <img src="@/assets/img/pricing-free.png" class="img-fluid" alt="">
              <ul>
                <li>No installation required</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>
                <li class="na">Works on all devices</li>
                <li class="na">Runs on IOS and Android Phones and tablets</li>
              </ul>
              <!--  <a href="#" class="btn-buy">Buy Now</a> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <span class="featured">Featured</span>
              <h3 style="color: #65c600;">Monthly Plan</h3>
              <div class="price"><sup>$</sup>131.95<span> / mo</span></div>
              <img src="@/assets/img/pricing-starter.png" class="img-fluid" alt="">
              <ul>
                <li>No installation required</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>
                <li class="na">Works on all devices</li>
                <li class="na">Runs on IOS and Android Phones and tablets</li>
              </ul>
              <!--  <a href="#" class="btn-buy">Buy Now</a> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="box">
              <h3 style="color: #ff901c;">Yearly Plan</h3>
              <div class="price"><sup>$</sup>109.95<span> / Year</span></div>
              <img src="@/assets/img/pricing-business.png" class="img-fluid" alt="">
              <ul>
                <li>No installation required</li>
                <li>60 day free trial</li>
                <li>Free Customer Support</li>
                <li class="na">Works on all devices</li>
                <li class="na">Runs on IOS and Android Phones and tablets</li>
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
            :autoplay="autoplay" :loop="loop">
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



  </main><!-- End #main -->
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

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
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay],
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },       
      }
    };
  },
};
</script>