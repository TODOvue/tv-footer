<script setup>
import { useFooter } from '../composables/useFooter.js'

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  }
})

const { brand, navigation, social, legal, version, copyright } = useFooter(props.config)
</script>

<template>
  <footer class="tv-footer">
    <div class="tv-footer__container">
      <div v-if="brand" class="tv-footer__brand">
        <a :href="brand.url || '/'" class="tv-footer__logo">
          <img v-if="brand.logo" :src="brand.logo" :alt="brand.name" />
          <span v-if="brand.name">{{ brand.name }}</span>
        </a>
        <span v-if="version" class="tv-footer__version">{{ version }}</span>
      </div>

      <div v-for="(group, index) in navigation" :key="index" class="tv-footer__section">
        <h3 v-if="group.title" class="tv-footer__section-title">{{ group.title }}</h3>
        <ul class="tv-footer__links">
          <li v-for="(link, i) in group.items" :key="i">
            <a :href="link.url" class="tv-footer__link">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <div v-if="social && social.length" class="tv-footer__section">
        <div class="tv-footer__social">
          <a v-for="(item, index) in social" :key="index" :href="item.url" class="tv-footer__social-link" target="_blank" rel="noopener noreferer">
            <img v-if="item.iconUrl" :src="item.iconUrl" :alt="item.label" class="tv-footer__social-icon-img" />
            <i v-else-if="item.icon" :class="item.icon"></i>
            <span v-else>{{ item.label }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="tv-footer__bottom">
      <div v-if="copyright">{{ copyright }}</div>
      <div v-if="legal && legal.length" class="tv-footer__legal">
        <ul class="tv-footer__links" style="flex-direction: row; gap: 1.5rem;">
          <li v-for="(link, index) in legal" :key="index">
            <a :href="link.url" class="tv-footer__link">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
