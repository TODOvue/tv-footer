import type { App, Plugin } from 'vue'
import _TvFooter from './components/TvFooter.vue'
import './style.scss'

const TvFooter = _TvFooter as typeof _TvFooter & Plugin;
TvFooter.install = (app: App) => {
  app.component('TvFooter', TvFooter)
};

export { TvFooter }

export const TvFooterPlugin: Plugin = {
  install: TvFooter.install
};
export default TvFooter;

declare module 'vue' {
  export interface GlobalComponents {
    TvFooter: typeof TvFooter;
  }
}
