<script setup lang="tsx">
definePage({
  path: '/',
})
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header bordered class="!bg-primary">
      <div class="mx-auto flex max-w-screen-lg items-center justify-between px-8 py-4">
        <img alt="Pivotel logo" class="w-40" src="/pivotel-logo.png">
        <n-h1 class="!my-0 !text-white">
          Service Application
        </n-h1>
      </div>
    </n-layout-header>
    <n-layout>
      <div class="mx-auto max-w-screen-lg px-8 py-4">
        <router-view />
      </div>
    </n-layout>
  </n-layout>
</template>
