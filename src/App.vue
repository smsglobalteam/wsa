<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1780E7',
    primaryColorPressed: '#0066BB',
    primaryColorHover: '#4B9BEC',
    primaryColorSuppl: '#4B9BEC',
    borderColor: '#909090',
    inputColor: '#f1f4ff',
    fontFamily: 'SwissNow, sans-serif',
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
