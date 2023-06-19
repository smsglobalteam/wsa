<script setup>
</script>

<template>
  <div class="col-span-full mb-2">
    <h2 class="text-lg font-semibold text-primary">
      <slot />
    </h2>
    <p class="text-primary">
      <slot name="helper" />
    </p>
    <hr class="mt-1 border-b-2 border-primary">
  </div>
</template>
