<script setup lang="tsx">
const formValue = useLocalStorage('wsa-', {})
</script>

<template>
  <main>
    <div class="flex flex-col items-center text-center">
      <n-h1>Welcome!</n-h1>
      <n-p>
        Welcome to the Pulsar Satellite Service Application.
      </n-p>
      <n-p>
        Activate your satellite devices with Pulsar service. Need a satellite phone or terminal? Visit
        <!-- eslint-disable-next-line -->
        <n-text underline><n-a href="https://www.pulsarbeyond.com">pulsarbeyond.com</n-a></n-text>.
        Satellite devices are typically activated within 24 hours, upon activation, you will receive an email from a pulsarbeyond.com address with confirmation. Thank you for choosing Pulsar.
      </n-p>
      <n-p>
        If we can be of further help, Contact Us <n-text underline>
          <n-a href="https://www.pulsarbeyond.com/contact-us">
            pulsarbeyond.com/contact-us
          </n-a>
        </n-text>
      </n-p>
      <n-ul>
        <n-li>
          Email:
          <n-text underline>
            <n-a href="mailto:activations@pulsarbeyond.com">
              activations@pulsarbeyond.com
            </n-a>
          </n-text>
        </n-li>
        <n-li>
          US:
          <n-text underline>
            <n-a href="tel:+1 (954) 763-8650">
              +1 (954) 763-8650
            </n-a>
          </n-text>
          - Option 1
        </n-li>
        <n-li>
          US:
          <n-text underline>
            <n-a href="tel:+1 (865) 379-8723">
              +1 (865) 379-8723
            </n-a>
          </n-text>
          - Option 1
        </n-li>
      </n-ul>
      <app-form-h2 class="mt-6">
        What You Need to Activate Your Service
      </app-form-h2>
      <n-ul class="mb-4">
        <n-li>• Your Information: Billing and contact information for you or your company</n-li>
        <n-li>•	Satellite Information: SIM card numbers for the phones or terminals you want to activate </n-li>
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
