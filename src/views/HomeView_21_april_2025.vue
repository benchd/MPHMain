<template>
  <div>
    <!-- Section Carousel - This is where sections will rotate in the same position -->
    <div class="section-carousel">
      <!-- Each section is conditionally shown based on the current active section -->
      <div v-for="(sectionId, index) in sectionIds" :key="sectionId" 
           v-show="currentSection === sectionId"
           :class="['section-display', currentSection === sectionId ? 'active-section' : '', 'section-' + sectionId]">
        
        <!-- Hero Section -->
        <section v-if="sectionId === 'hero'" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Welcome to MyProHelper - Simplifying HVAC Service Management</h1>
                <h6 data-aos="fade-up" data-aos-delay="400">Explore MyProHelper, your ultimate solution for Heating and Air
                  Conditioning Service companies. Learn about our features, how we address pain points, and why you need MyProHelper.
                  Discover the perfect tool designed to streamline your business operations.</h6>
              </div>
              <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src="@/assets/img/step.png" class="img-fluid animated" alt="">
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section v-if="sectionId === 'features'" class="features">
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
            </div>
          </div>
        </section>

        <!-- Resources Section -->
        <section v-if="sectionId === 'resources'" class="feature_content">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-12">
                <header class="section-header">
                  <h3 class="subtitle">HELPFUL RESOURCES</h3>
                  <h2 class="title">MyProHelper - Helpful Resources</h2>
                  <p class="description">Browse our collection of guides, tutorials, and documentation to help you get the most out of MyProHelper.</p>
                </header>
              </div>
            </div>
        
            <!-- Resource Tabs -->
            <div class="resource_tabs">
              <div class="tabs_header">
                <button 
                  :class="['tab_button', activeTab === 'all' ? 'active' : '']" 
                  @click="activeTab = 'all'"
                >
                  All Resources
                </button>
                <button 
                  :class="['tab_button', activeTab === 'videos' ? 'active' : '']" 
                  @click="activeTab = 'videos'"
                >
                  Videos
                </button>
                <button 
                  :class="['tab_button', activeTab === 'images' ? 'active' : '']" 
                  @click="activeTab = 'images'"
                >
                  Images
                </button>
                <button 
                  :class="['tab_button', activeTab === 'other' ? 'active' : '']" 
                  @click="activeTab = 'other'"
                >
                  Other
                </button>
              </div>
            </div>
        
            <!-- Resource Cards -->
            <div class="row">
              <template v-if="filteredDocuments.length > 0">
                <div v-for="(doc, index) in filteredDocuments" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div class="resource_card">
                    <div class="resource_type">
                      <div class="icon_wrapper" :class="getIconClass(doc.FileType)">
                        <div v-html="getFileIconSvg(doc.FileType)"></div>
                      </div>
                      <span class="type_badge" :class="getFileTypeBadgeClass(doc.FileType)">
                        {{ getFileTypeLabel(doc.FileType) }}
                      </span>
                    </div>
                    <h4 class="resource_title">{{ doc.Description }}</h4>
                    <a :href="getFileUrl(doc)" target="_blank" class="view_resource_btn">
                      View Resource
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </template>
              <div v-else class="col-12 empty_state">
                <div class="empty_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-question">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <h3>No resources found</h3>
                <p>Try adjusting your search query</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Pricing Section -->
        <section v-if="sectionId === 'pricing'" class="pricing">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Pricing</h2>
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
                    <li>Runs on iOS and Android Phones  and tablets</li>
                  </ul>
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
                    <li>Runs on iOS and Android Phones and tablets</li>
                  </ul>
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
                    <li>Runs on iOS and Android Phones and tablets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials Section -->
        <section v-if="sectionId === 'testimonials'" class="testimonials">
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
                      I would sometimes miss an appointment because of a lost or misplaced paper note with the name and address, but not anymore. This helps keep everything together in one place.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                      <h3>Mark D.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
                
                <swiper-slide>
                  <div class="testimonial-item">
                    <p>
                      The app makes it easier to keep track of all the parts we have and where they are stored.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                      <h3>Alex T.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="testimonial-item">
                    <p>
                      Helps keep jobs and supplies organized for me and my workers. No need to return
                      to the store for a part if we already have it on the shelf or in one of our trucks.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                      <h3>Tom A.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="testimonial-item">
                    <p>
                      This helped me to track what I have paid for the parts and what we charged for them on invoices. 
                      So I can make sure that my markup is reasonable and covering my costs.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                      <h3>Frank P.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="testimonial-item">
                    <p>
                      We can collect payment for jobs faster by letting them pay using a credit card 
                      while we are there. A lot easier and quicker than a check that has to be deposited 
                      and then wait on it to clear, or maybe bounce.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                      <h3>Mack E.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="testimonial-item">
                    <p>
                      This program saves us time and gas money by making it easy to schedule jobs
                      in sequence that are close together.
                    </p>
                    <div class="profile mt-auto">
                      <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                      <h3>Gary R.</h3>
                      <h4></h4>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </section>

        <!-- Technical Support Section -->
        <section v-if="sectionId === 'technical_support'" class="technical_supports">
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
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="section-navigation">
      <button @click="prevSection" class="nav-button prev-button">&lt;</button>
      <div class="section-indicators">
        <span 
          v-for="(section, index) in sectionIds" 
          :key="index" 
          :class="['indicator', currentSection === section ? 'active' : '']"
          @click="goToSection(section)"
        ></span>
      </div>
      <button @click="nextSection" class="nav-button next-button">&gt;</button>
    </div>

    <!-- Original sections (hidden but kept for reference) -->
    <div style="display: none;">
      <!-- Original sections would be here but are hidden -->
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { inject, ref, computed, onMounted, onUnmounted } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ['appSettings'],
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    // Define section IDs
    const sectionIds = ref([
      'hero',
      'features',
      'resources',
      'pricing',
      'testimonials',
      'technical_support'
    ]);
    
    // Track current section
    const currentSection = ref(sectionIds.value[0]);
    let sectionInterval = ref(null);
    let transitionInProgress = ref(false);

    // Function to go to next section
    const nextSection = () => {
      if (transitionInProgress.value) return;
      
      transitionInProgress.value = true;
      const currentIndex = sectionIds.value.indexOf(currentSection.value);
      const nextIndex = (currentIndex + 1) % sectionIds.value.length;
      
      // Apply transition out class
      const currentElement = document.querySelector(`.section-${currentSection.value}`);
      if (currentElement) {
        currentElement.classList.add('section-exit');
      }
      
      // Wait for transition to complete
      setTimeout(() => {
        currentSection.value = sectionIds.value[nextIndex];
        transitionInProgress.value = false;
        
        // Remove transition classes after changing
        if (currentElement) {
          currentElement.classList.remove('section-exit');
        }
      }, 500); // Match this with CSS transition duration
    };

    // Function to go to previous section
    const prevSection = () => {
      if (transitionInProgress.value) return;
      
      transitionInProgress.value = true;
      const currentIndex = sectionIds.value.indexOf(currentSection.value);
      const prevIndex = (currentIndex - 1 + sectionIds.value.length) % sectionIds.value.length;
      
      // Apply transition out class
      const currentElement = document.querySelector(`.section-${currentSection.value}`);
      if (currentElement) {
        currentElement.classList.add('section-exit');
      }
      
      // Wait for transition to complete
      setTimeout(() => {
        currentSection.value = sectionIds.value[prevIndex];
        transitionInProgress.value = false;
        
        // Remove transition classes after changing
        if (currentElement) {
          currentElement.classList.remove('section-exit');
        }
      }, 500); // Match this with CSS transition duration
    };

    // Function to go to a specific section
    const goToSection = (sectionId) => {
      if (transitionInProgress.value || currentSection.value === sectionId) return;
      
      transitionInProgress.value = true;
      
      // Apply transition out class
      const currentElement = document.querySelector(`.section-${currentSection.value}`);
      if (currentElement) {
        currentElement.classList.add('section-exit');
      }
      
      // Wait for transition to complete
      setTimeout(() => {
        currentSection.value = sectionId;
        transitionInProgress.value = false;
        
        // Remove transition classes
        sectionIds.value.forEach(id => {
          const element = document.querySelector(`.section-${id}`);
          if (element) {
            element.classList.remove('section-exit');
          }
        });
      }, 500); // Match this with CSS transition duration
    };

    // Start automatic section rotation
    const startSectionRotation = () => {
      // Clear any existing interval
      if (sectionInterval.value) {
        clearInterval(sectionInterval.value);
      }
      
      // Set new interval to change sections
      sectionInterval.value = setInterval(() => {
        nextSection();
      }, 5000); // Change section every 5 seconds (adjust as needed)
    };

    // Resources section data
    const appSettings = inject('appSettings');
    const searchQuery = ref('');
    const activeTab = ref('all');
    const documents = ref([]);

    // Filter documents based on search query and active tab
    const filteredDocuments = computed(() => {
      let filtered = documents.value.filter(doc => 
        doc.Description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

      // Filter by tab
      if (activeTab.value === 'videos') {
        return filtered.filter(doc => doc.FileType === 2);
      } else if (activeTab.value === 'images') {
        return filtered.filter(doc => doc.FileType === 1);
      } else if (activeTab.value === 'other') {
        return filtered.filter(doc => ![1, 2].includes(doc.FileType));
      }
      
      return filtered;
    });

    // File type helper functions
    const getFileTypeLabel = (fileType) => {
      switch(fileType) {
        case 1: return 'Image';
        case 2: return 'Video';
        case 3: return 'PDF';
        case 4: return 'Text';
        default: return 'Document';
      }
    };

    const getFileTypeBadgeClass = (fileType) => {
      switch(fileType) {
        case 1: return 'badge-blue';
        case 2: return 'badge-purple';
        case 3: return 'badge-red';
        case 4: return 'badge-green';
        default: return 'badge-gray';
      }
    };

    const getIconClass = (fileType) => {
      switch(fileType) {
        case 1: return 'icon-blue';
        case 2: return 'icon-purple';
        case 3: return 'icon-red';
        case 4: return 'icon-green';
        default: return 'icon-gray';
      }
    };

    const getFileIconSvg = (fileType) => {
      switch(fileType) {
        case 1: // Image
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>`;
        case 2: // Video
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>`;
        case 3: // PDF
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 15h6"></path>
                    <path d="M9 11h6"></path>
                  </svg>`;
        case 4: // Text
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>`;
        default: // Generic document
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>`;
      }
    };

    const getFileUrl = (doc) => {
      // Determine if we're in development or production
      const isDevelopment = process.env.NODE_ENV === 'development';
      const staticFilesConfig = isDevelopment 
        ? appSettings.StaticFilesDevelopment 
        : appSettings.StaticFilesProduction;
      
      // Construct the URL based on the configuration
      return `${staticFilesConfig.StaticFileStartURL}${doc.FileName}`;
    };

    // Initialize on component mount
    onMounted(() => {
      // Load documents if available
      if (appSettings && appSettings.DocumentsToDisplay) {
        documents.value = appSettings.DocumentsToDisplay;
        console.log('Documents loaded:', documents.value);
      } else {
        console.warn('No documents found in appSettings');
      }

      // Start section rotation
      startSectionRotation();
    });

    // Clean up on component unmount
    onUnmounted(() => {
      if (sectionInterval.value) {
        clearInterval(sectionInterval.value);
      }
    });

    return {
      supportPhoneNo: '(844) 876-0001',
      supportEmail: 'support@myprohelper.com',
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
      },
      // Resources section
      appSettings,
      searchQuery,
      activeTab,
      documents,
      filteredDocuments,
      getFileTypeLabel,
      getFileTypeBadgeClass,
      getIconClass,
      getFileIconSvg,
      getFileUrl,
      // Section transition
      sectionIds,
      currentSection,
      nextSection,
      prevSection,
      goToSection,
      startSectionRotation,
      transitionInProgress
    };
  },
};
</script>

<style>
/* Resources Section Styles */
.feature_content {
  padding: 60px 0;
  background-color: #f8fafc;
}

.tabs_header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tab_button {
  padding: 10px 20px;
  background: #f5f7fa;
  border: none;
  border-radius: 6px;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab_button:hover {
  background: #e2e8f0;
}

.tab_button.active {
  background: #013289;
  color: white;
}

/* Add row spacing */
.feature_content .row {
  row-gap: 30px;
}

.resource_card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-bottom: 0; /* Remove bottom margin since we're using row-gap */
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
}

.resource_card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.resource_type {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon_wrapper {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.icon-blue {
  background-color: #ebf5ff;
  color: #3b82f6;
}

.icon-purple {
  background-color: #f3effb;
  color: #8b5cf6;
}

.icon-red {
  background-color: #fef2f2;
  color: #ef4444;
}

.icon-green {
  background-color: #ecfdf5;
  color: #22c55e;
}

.icon-gray {
  background-color: #f3f4f6;
  color: #6b7280;
}

.type_badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-blue {
  background-color: #ebf5ff;
  color: #3b82f6;
}

.badge-purple {
  background-color: #f3effb;
  color: #8b5cf6;
}

.badge-red {
  background-color: #fef2f2;
  color: #ef4444;
}

.badge-green {
  background-color: #ecfdf5;
  color: #22c55e;
}

.badge-gray {
  background-color: #f3f4f6;
  color: #6b7280;
}

.resource_title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 20px;
  flex-grow: 1;
  line-height: 1.4;
}

.view_resource_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #0253b3;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.view_resource_btn:hover {
  background-color: #013289;
}

.view_resource_btn svg {
  transition: transform 0.3s ease;
}

.view_resource_btn:hover svg {
  transform: translateX(3px);
}

.empty_state {
  text-align: center;
  padding: 60px 0;
}

.empty_icon {
  color: #cbd5e1;
  margin-bottom: 20px;
}

.empty_state h3 {
  font-size: 24px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 10px;
}

.empty_state p {
  color: #64748b;
}

/* Section Carousel Styles */
.section-carousel {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
}

.section-display {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1;
}

.section-display.active-section {
  opacity: 1;
  transform: translateY(0);
  z-index: 2;
}

.section-display.section-exit {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Navigation Controls */
.section-navigation {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-button {
  background-color: #013289;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #0253b3;
}

.section-indicators {
  display: flex;
  gap: 8px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: #013289;
  transform: scale(1.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-header .title {
    font-size: 28px;
  }
  
  .resource_card {
    padding: 20px;
  }
  
  .section-navigation {
    bottom: 10px;
    padding: 8px 12px;
  }
  
  .nav-button {
    width: 25px;
    height: 25px;
  }
  
  .indicator {
    width: 8px;
    height: 8px;
  }
}
</style>