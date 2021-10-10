import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faTwitter as freeFabFaTwitter,
  faGithub as freeFabFaGithub,
  faLinkedin as freeFabFaLinkedin,
  faFacebook as freeFabFaFacebook,
  faGoogle as freeFabFaGoogle
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFabFaTwitter,
  freeFabFaGithub,
  freeFabFaLinkedin,
  freeFabFaFacebook,
  freeFabFaGoogle
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
