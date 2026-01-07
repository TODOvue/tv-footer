
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-footer',
    configKey: 'tvFooter'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-footer/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
