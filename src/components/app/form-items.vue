<script setup lang="ts">
import type { FormItemRule, SelectOption } from 'naive-ui'

interface FormItem {
  label: string
  placeholder?: string
  span?: number
  rules?: FormItemRule
}

// Add form item checkbox

interface FormItemDate extends FormItem {
  type: 'date'
}

interface FormItemInput extends FormItem {
  type: 'input'
}

interface FormItemRadio extends FormItem {
  type: 'radio'
  options: SelectOption[]
}

interface FormItemSelect extends FormItem {
  type: 'select'
  options: SelectOption[]
}

interface FormItemTextarea extends FormItem {
  type: 'textarea'
  mono?: boolean
}

interface FormSpacer {
  type: 'space'
  span: number
}

type FormItems = FormItemDate | FormItemInput | FormItemRadio | FormItemSelect | FormSpacer | FormItemTextarea

export interface FormSchema {
  [path: string]: FormItems
}

defineProps<{
  schema: FormSchema
}>()

const modelValue = defineModel()
</script>

<template>
  <template v-for="[path, item] in Object.entries(schema)" :key="path">
    <n-form-item v-if="item.type !== 'checkbox' || item.type !== 'space'" class="col-span-3" :label="item.label" :path="path" :rule="item.rules" :style="`grid-column: span ${item.span || 12} / span ${item.span || 12}`">
      <n-date-picker v-if="item.type === 'date'" v-model:formatted-value="modelValue[path]" :placeholder="item.placeholder || 'YYYY-MM-DD'" type="date" value-format="yyyy-MM-dd" />

      <n-input v-if="item.type === 'input'" v-model:value="modelValue[path]" clearable :placeholder="item.placeholder || ''" />

      <n-radio-group v-if="item.type === 'radio'" v-model:value="modelValue[path]">
        <n-space>
          <n-radio
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </n-space>
      </n-radio-group>

      <n-select v-if="item.type === 'select'" v-model:value="modelValue[path]" clearable :options="item.options" :placeholder="item.placeholder || ''" />

      <n-input v-if="item.type === 'textarea'" v-model:value="modelValue[path]" :class="item.mono && '!font-mono'" clearable :placeholder="item.placeholder || ''" type="textarea" />
    </n-form-item>
    <div v-else class="invisible" :style="`grid-column: span ${item.span || 12} / span ${item.span || 12}`" />
  </template>
</template>
