
// Component registration utility
import Badge from '../components/Badge.vue'
import Card from '../components/Card.vue'
import TokenScanner from '../components/TokenScanner.vue'
import TokenDecoder from '../components/TokenDecoder.vue'
import type { App } from 'vue'

export function registerComponents(app: App) {
  app.component('Badge', Badge)
  app.component('Card', Card)
  app.component('TokenScanner', TokenScanner)
  app.component('TokenDecoder', TokenDecoder)
}