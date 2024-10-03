<template>
  <div class="breadcrumb_img breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcumbs_content">
            <h2>About Us</h2>
            <ol>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li class="active">About Us</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12">
          <div class="about_img">
            <img src="@/assets/img/about1.jpg" alt="image" width="100%" height="100%" class="img-fluid">
            <div class="video_view">
              <a href="https://www.youtube.com/watch?v=7X8II6J-6mU" target="_blank" class="popup-youtube">
                <i class="bi bi-play-circle"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-lg-1">
          <div class="about_us_content">
            <header class="section-header">
              <h2>MyProHelper</h2>
              <h2>About Us</h2>
              <p><b>>Welcome To MyProHelper - Simplifying HVAC Service Management</b></p>
            </header>
            <p>Bring Technology Into Your Everyday With MyProHelper
With years of technology experience under our belt, we specialize in delivering high-quality solutions that deliver high-impact performance. We also have an in-depth understanding of the challenges that HVAC contractors face. Not only out in the field, but with administration, invoicing, parts inventory, maintenance, collections, reporting, scheduling, and so much more. 
</p>
            <p>Inspired by our forward-thinking technology expertise and our passion for the HVAC industry, we created MyProHelper. Designed just for HVAC companies, our user-friendly field service management solution handles your greatest business challenges, from start to finish.</p>
            
            <p>We are a local company right here in Johnson City. We are Co-Founders of an application to help manage the
              Scheduling, Estimating, Invoicing, Payments, Assets, Vendors and other aspects specifically designed for use
              in a small HVAC installation and service business.</p>
              <p><b>MyProHelper keeps you connected to your business 24/7, so you can be sure all your moving parts are moving in the same direction.</b></p>
              <p>Our cloud-based mobile application enables seamless record keeping, scheduling, inventory tracking, worker scheduling, reporting, customer communication, and much more. With one user-friendly, centralized dashboard, you’ll no longer have to rely on multiple applications or manual paperwork to drive your business forward.</p>
              <p>We know that the success of your business is on your shoulders. But the weight of the world shouldn’t be. MyProHelper alleviates the challenges of running your business, helps you save more time, and improves customer satisfaction, all with one simple solution.</p>
              <p><b>Efficient workflows. Abundant time savings. High-level operational performance. User-friendly design. Industry-leading customer service.</b></p>
              <p><b>It’s all an integral part of the MyProHelper experience.</b></p>
              <p>MyProHelper is the 24/7 assistant you never knew you needed, and the one you’ll never want to live without.</p>
              <h2>Are You Ready To Take Control Of Your Business Operations?</h2>
              <p>Contact us to sign up for your Free 90-Day Trial. Even if you don’t consider yourself tech savvy, we’ll show you how technology can make your life easier. Really.</p>
              <p><b>Sign Up For Your Free Trial</b></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.breadcrumb_img {
  margin-top: 85px;
  background-image: url('@/assets/img/about.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background .3s, border .3s, border-radius .3s, box-shadow .3s;
  padding: 100px 0 95px;
  position: relative;
}</style>
