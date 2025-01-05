
import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { enhanceAppWithClientScripts } from './clientScripts'
import { registerComponents } from './utils/components'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    // Register components
    registerComponents(app)
    
    // Setup client-side scripts
    if (typeof window !== 'undefined') {
      enhanceAppWithClientScripts(router)
    }
  }
} as Theme