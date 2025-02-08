import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import Maska from 'maska'
import VueCookies from 'vue-cookies'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'

axios.defaults.baseURL = "http://localhost:5020/api"

const app = createApp(App)

app.use(router)
app.use(VueCookies)
// app.use(Maska)
app.mount('#app')
