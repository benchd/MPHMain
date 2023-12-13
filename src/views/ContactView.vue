<template>
  <div class="breadcrumb_img breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcumbs_content">
            <h2>Contact</h2>
            <ol>
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="active">Contact Us</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="contact">
    <div class="container">
      <div class="row gy-4">

        <div class="col-lg-6">

          <div class="row gy-4">
            <div class="col-md-6">
              <div class="info-box">
                <i class="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>P.O. Box 112 Piney Flats,<br>TN 37686-0112</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box">
                <i class="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p><a href="tel:+18443760001">+1 844 376 0001</a><br><br></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box">
                <i class="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p><a href="mailto:support@myprohelper.com">support@myprohelper.com</a><br><br></p>
                <p></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box">
                <i class="bi bi-clock"></i>
                <h3>Open Hours</h3>
                <p>Monday - Friday<br>8:00 AM - 5:00 PM Eastern Time</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-6">
          <form name="frm-contact" @submit.prevent="onSubmit" method="post" class="php-email-form">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" autocomplete="off"
                  :class="{ 'is-invalid': v$.name.$error }" placeholder="Your Name" v-model="state.name">
              </div>

              <div class="col-md-6 ">
                <input type="email" class="form-control" name="email" autocomplete="off"
                  :class="{ 'is-invalid': v$.email.$error }" placeholder="Your Email" v-model="state.email">
              </div>

              <div class="col-md-6 ">
                <input type="text" maxlength="16" class="form-control" name="phone" autocomplete="off"
                  :class="{ 'is-invalid': v$.phone.$error }" placeholder="Phone Number" v-model="state.phone">
              </div>

              <div class="col-md-6">
                <input type="text" class="form-control" name="subject" autocomplete="off"
                  :class="{ 'is-invalid': v$.subject.$error }" placeholder="Subject" v-model="state.subject">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" :class="{ 'is-invalid': v$.description.$error }"
                  placeholder="Description" v-model="state.description"></textarea>
              </div>

              <div class="col-md-12 text-center">
                <button type="submit" v-if="!state.submitted">Submit</button>
                <div class="spinner-border text-primary" role="status" v-if="state.submitted">
                  <span class="visually-hidden">Loading...</span>
                </div>

              </div>
              <div class="col-md-12 text-center" v-if="state.res_msg">
                <Transition>
                  <div class="alert text-white h5"
                    :class="{ 'alert-danger bg-danger': !state.res_msg, 'alert-success bg-success ': state.res_msg }"
                    role="alert">
                    {{ state.res_msg }}
                  </div>
                </Transition>
              </div>

            </div>
          </form>

        </div>

      </div>
    </div>
  </section>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import axios from 'axios'
export default {

  setup() {
    const state = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      description: '',
      submitted: false,
      res_msg: ""
    })

    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email: email },
        phone: { required, maxLength: maxLength(16) },
        subject: { required },
        description: { required },
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$
    }
  },


  methods: {
    onSubmit() {

      this.v$.$validate();

      if (!this.v$.$error) {

        let body_params = {}
        body_params.Name = this.state.name;
        body_params.EmailAddress = this.state.email;
        body_params.PhoneNumber = this.state.phone;
        body_params.Subject = this.state.subject;
        body_params.Content = this.state.description;


        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body_params)
        };

        this.state.submitted = true
        const that = this

        axios.post('/Contact', JSON.stringify(body_params)
          , {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
              // Add other headers if needed
            },
          }
        ).then(response => {
          that.v$.$reset();
          that.state.name = "";
          that.state.email = "";
          that.state.subject = "";
          that.state.phone = "";
          that.state.description = "";
          that.state.submitted = false;
          that.state.res_msg = "Inquiry submitted successfully"
          setTimeout(() => {
            this.state.res_msg = ""
          }, 4000)
        })
      }
    }
  },
  mounted(){
    
  }
}
</script>
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
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style> 
