<script setup lang="tsx">
definePage({
  path: '/',
})

const collapsed = useLocalStorage('collapsed', false)
</script>

<template>
    <n-layout position="absolute">
      <n-layout-header bordered>
        <div class="px-8 py-4 justify-between flex items-center max-w-screen-lg mx-auto">
          <img class="w-40" src="/logo.svg"/>
          <n-h1 class="!my-0">Service Application</n-h1></div>
      </n-layout-header>
      <n-layout >
        <div class="px-8 py-4 max-w-screen-lg mx-auto">
          <router-view /></div>
      </n-layout>
  </n-layout>
</template>
