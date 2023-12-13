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
              <h2>OUR INTRODUCTION</h2>
              <p>Welcome To MyProHelper - Simplifying HVAC Service Management</p>
            </header>
            <p>MyProHelper is designed to address the specific needs of a small HVAC service business. It was designed to
              make record keeping, and managing of your HVAC business easy and convenient whether you are in the office or
              anywhere else.</p>
            <p>What's the catch? We'd like you to meet with us for one hour sitting in a conference room chair and
              providing feedback on our HVAC service product based on your HVAC service experience.</p>
            
            <p>We are a local company right here in Johnson City. We are Co-Founders of an application to help manage the
              Scheduling, Estimating, Invoicing, Payments, Assets, Vendors and other aspects specifically designed for use
              in a small HVAC installation and service business.</p>
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
