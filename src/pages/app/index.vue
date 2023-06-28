<script setup lang="tsx">
const formValue = useLocalStorage('wsa-', {})
</script>

<template>
  <main>
    <div class="flex flex-col items-center text-center">
      <n-h1>Welcome!</n-h1>
      <n-p>
        We are delighted to offer you a seamless and convenient platform to commence your journey with our esteemed organization. Upon completing this form, you will gain access to our comprehensive suite of communication services, specifically tailored to meet your individual needs. Our commitment to providing unparalleled customer support ensures that you will receive world-class connectivity solutions, streamlined for a truly exceptional experience. Thank you for choosing Pivotel, and we look forward to fostering a long-lasting partnership with you.
      </n-p>
      <app-form-h2 class="mt-4">
        What You Need to Activate Your Service
      </app-form-h2>
      <n-ul align-text class="mb-4">
        <n-li>• Billing and contact information for you or your company</n-li>
        <n-li>• The SIM card numbers for devices you want to activate</n-li>
        <n-li>• A valid credit card</n-li>
      </n-ul>
      <n-p>If you have a dealer code, please enter it below:</n-p>
      <n-form-item class="w-96" :show-label="false">
        <n-input v-model:value="formValue.dealer_code" placeholder="Dealer Code" size="large" />
      </n-form-item>
      <n-divider />
    </div>
    <div class="flex justify-end">
      <router-link v-slot="{ navigate }" custom to="/information">
        <n-button size="large" type="primary" @click="navigate">
          Next
        </n-button>
      </router-link>
    </div>
  </main>
</template>
