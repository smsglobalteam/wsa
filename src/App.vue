<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#87179d',
    primaryColorPressed: '#5b0f6a',
    primaryColorHover: '#a24ab2',
    primaryColorSuppl: '#a24ab2',
    borderColor: '#909090',
    inputColor: '#f1f4ff',
  },
  Typography: {
    headerFontSize1: '26px',
    headerFontWeight: 700,
  },
}
</script>

<template>
  <n-config-provider v-bind="{ themeOverrides }">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <router-view />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
