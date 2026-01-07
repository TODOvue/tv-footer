import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import './style.scss'
import '@todovue/tv-demo/style.css'
import TvFooter from './demo/Demo.vue'

const app = createApp(TvFooter)
app.component('TvDemo', TvDemo)
app.mount('#tv-footer')
