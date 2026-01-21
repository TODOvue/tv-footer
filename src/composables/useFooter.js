import { computed } from 'vue'

export function useFooter(config) {
  const brand = computed(() => config?.brand || null)

  const navigation = computed(() => {
    if (!config?.navigation || !Array.isArray(config.navigation)) return []
    return config.navigation
  })

  const social = computed(() => {
    if (!config?.social || !Array.isArray(config.social)) return []
    return config.social
  })

  const legal = computed(() => {
    if (!config?.legal || !Array.isArray(config.legal)) return []
    return config.legal
  })

  const version = computed(() => config?.version || '')

  const copyright = computed(() => config?.copyright || '')

  const newsletter = computed(() => {
    return config?.newsletter || null
  })

  const currentYear = new Date().getFullYear()

  const formattedCopyright = computed(() => {
    const text = copyright.value
    return text.replace('{year}', currentYear)
  })

  return {
    brand,
    navigation,
    social,
    legal,
    version,
    copyright: formattedCopyright,
    newsletter
  }
}
