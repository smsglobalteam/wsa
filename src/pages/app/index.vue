<script setup lang="tsx">
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <n-h1>Welcome!</n-h1>
    <n-p>Placeholder text</n-p>
    <n-p>If you have a dealer code, please enter it below:</n-p>
    <n-form-item class="w-96" :show-label="false">
      <n-input placeholder="Dealer Code" size="large" />
    </n-form-item>
    <n-divider />
  </div>
  <div class="flex justify-end">
    <router-link v-slot="{ navigate }" custom to="/plan">
      <n-button size="large" type="primary" @click="navigate">
        Next
      </n-button>
    </router-link>
  </div>
</template>
