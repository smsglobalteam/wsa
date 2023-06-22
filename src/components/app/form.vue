<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import type { FormValidateMessages } from 'naive-ui/es/form/src/interface'

defineProps<{
  model: object
}>()

const validateMessages: FormValidateMessages = {
  required: 'This field is required',
  whitespace: 'This field cannot be empty',
  types: {
    email: 'Please enter a valid email',
    url: 'Please enter a valid URL',
  },
}

const form = ref<FormInst>()
const errors = ref()
function submit(callback: (errors: Array<Record<string, any>> | undefined) => void) {
  return form.value?.validate(e => callback(e))
}
defineExpose({ submit, errors })
</script>

<template>
  <n-form ref="form" class="grid shrink-0 grid-cols-6 gap-x-3 gap-y-2 md:grid-cols-12" v-bind="{ model, validateMessages }">
    <slot />
  </n-form>
</template>
