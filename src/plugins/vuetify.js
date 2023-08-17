/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4ea1d3',
          secondary: '#d8e9ef',
          dark: '#454552',
          danger: '#e85a7e'
        },
      },
    },
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
