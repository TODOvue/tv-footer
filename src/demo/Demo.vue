<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'
import { TvDemo } from '@todovue/tv-demo'

const TvFooter = defineAsyncComponent(/* webpackChunkName: "tvFooter" */() => import('../components/TvFooter.vue'))
</script>

<template>
  <TvDemo
    hide-background
    :component="TvFooter"
    :variants="demos"
    :manual-emits="['subscribe']"
    component-name="TvFooter"
    npm-install="@todovue/tv-footer"
    source-link="https://github.com/TODOvue/tv-footer"
    url-clone="https://github.com/TODOvue/tv-footer.git"
    version="1.1.1"
  />
</template>
