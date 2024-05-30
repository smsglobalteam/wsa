<script setup lang="tsx">
definePage({
  path: '/',
})

const top = ref()
const router = useRouter()
function handleScroll() {
  top.value.scrollIntoView()
}
router.afterEach(() => {
  handleScroll()
})
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header class="!bg-[#1A1B41]">
      <div ref="top" class="mx-auto flex items-center justify-between px-8 py-4">
        <img alt="Pulsar logo" class="w-40" src="/pulsar-blue.png">
        <n-h1 class="!my-0 !text-white">
          Service Application
        </n-h1>
      </div>
    </n-layout-header>
    <div class="mx-auto max-w-screen-lg px-8 py-4">
      <router-view />
    </div>
  </n-layout>
</template>
