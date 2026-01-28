import { createApp } from 'vue'
import './style.scss'
import '@todovue/tv-demo/style.css'
import TvFooter from './demo/Demo.vue'

const app = createApp(TvFooter)
app.mount('#tv-footer')
