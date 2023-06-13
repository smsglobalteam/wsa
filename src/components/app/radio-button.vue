<script setup lang="ts">
defineProps<{
  options: {
    label: string
    value: string
  }[]
}>()

const value = defineModel('value')
</script>

<template>
  <n-button-group>
    <n-button v-for="option in options" :key="option.value" size="large" :type="value === option.value ? 'primary' : 'default'" @click="value = option.value">
      {{ option.label }}
    </n-button>
  </n-button-group>
</template>
