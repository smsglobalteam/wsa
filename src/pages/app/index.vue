<script setup lang="tsx">

</script>

<template>
  <div class="flex flex-col items-center text-center">
    <n-h1>Welcome!</n-h1>
    <n-p>
      We are delighted to offer you a seamless and convenient platform to commence your journey with our esteemed organization. Upon completing this form, you will gain access to our comprehensive suite of communication services, specifically tailored to meet your individual needs. Our commitment to providing unparalleled customer support ensures that you will receive world-class connectivity solutions, streamlined for a truly exceptional experience. Thank you for choosing Pivotel, and we look forward to fostering a long-lasting partnership with you.
    </n-p>
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
