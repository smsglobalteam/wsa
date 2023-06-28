import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export const useFormStore = defineStore('form', () => {
  const { get, set } = useCookies(['form'])
  const state = ref<Record<string, any>>(get('form') || {})

  watch(state, () => {
    set('form', state.value)
  }, {
    deep: true,
  })

  return { state }
})
