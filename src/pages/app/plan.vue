<script setup lang="tsx">
const types = [
  {
    label: 'Postpaid',
    value: 'postpaid',
  },
  {
    label: 'Prepaid',
    value: 'prepaid',
  },
]

const networks = [
  {
    label: 'Iridium',
    value: 'iridium',
  },
  {
    label: 'Inmarsat',
    value: 'inmarsat',
  },
  {
    label: 'Thuraya',
    value: 'thuraya',
  },
]

const terms = [
  {
    label: '12 Months',
    value: '0',
  },
  {
    label: 'Month to Month',
    value: '1',
  },
]

const plans = [
  {
    label: 'Pivotel 55 Iridium US',
    value: 'Pivotel 55 Iridium US',
  },
  {
    label: 'Pivotel 75 Iridium US',
    value: 'Pivotel 75 Iridium US',
  },
  {
    label: 'Pivotel 130 Iridium US',
    value: 'Pivotel 130 Iridium US',
  },
  {
    label: 'Pivotel 160 Iridium US',
    value: 'Pivotel 160 Iridium US',
  },
  {
    label: 'Pivotel 250 Iridium US',
    value: 'Pivotel 250 Iridium US',
  },
  {
    label: 'Pivotel 400 Iridium US',
    value: 'Pivotel 400 Iridium US',
  },
  {
    label: 'Pivotel 550 Iridium US',
    value: 'Pivotel 550 Iridium US',
  },
  {
    label: 'Pivotel 750 Iridium US',
    value: 'Pivotel 750 Iridium US',
  },
  // Inmarsat
  {
    label: 'Pivotel 35 Inmarsat US',
    value: 'Pivotel 35 Inmarsat US',
  },
  {
    label: 'Pivotel 55 Inmarsat US',
    value: 'Pivotel 55 Inmarsat US',
  },
  {
    label: 'Pivotel 75 Inmarsat US',
    value: 'Pivotel 75 Inmarsat US',
  },
  {
    label: 'Pivotel 130 Inmarsat US',
    value: 'Pivotel 130 Inmarsat US',
  },
  {
    label: 'Pivotel 160 Inmarsat US',
    value: 'Pivotel 160 Inmarsat US',
  },
  {
    label: 'Pivotel 250 Inmarsat US',
    value: 'Pivotel 250 Inmarsat US',
  },
  {
    label: 'Pivotel 400 Inmarsat US',
    value: 'Pivotel 400 Inmarsat US',
  },
  {
    label: 'Pivotel 550 Inmarsat US',
    value: 'Pivotel 550 Inmarsat US',
  },
  {
    label: 'Pivotel 750 Inmarsat US',
    value: 'Pivotel 750 Inmarsat US',
  },
  // Thuraya
  {
    label: 'Pivotel 35 Thuraya US',
    value: 'Pivotel 35 Thuraya US',
  },
  {
    label: 'Pivotel 55 Thuraya US',
    value: 'Pivotel 55 Thuraya US',
  },
  {
    label: 'Pivotel 75 Thuraya US',
    value: 'Pivotel 75 Thuraya US',
  },
  {
    label: 'Pivotel 130 Thuraya US',
    value: 'Pivotel 130 Thuraya US',
  },
  {
    label: 'Pivotel 160 Thuraya US',
    value: 'Pivotel 160 Thuraya US',
  },
  {
    label: 'Pivotel 250 Thuraya US',
    value: 'Pivotel 250 Thuraya US',
  },
  {
    label: 'Pivotel 400 Thuraya US',
    value: 'Pivotel 400 Thuraya US',
  },
  {
    label: 'Pivotel 550 Thuraya US',
    value: 'Pivotel 550 Thuraya US',
  },
  {
    label: 'Pivotel 750 Thuraya US',
    value: 'Pivotel 750 Thuraya US',
  },
]

const formValue = ref({})
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <n-h1>Select Plan</n-h1>
    <n-p>You can find out more about plans at <n-a>pivotel.com</n-a></n-p>

    <n-form :show-feedback="false" :show-label="false">
      <n-h3>
        Type
      </n-h3>
      <n-form-item class="justify-items-center" label="Type">
        <app-radio-button v-model:value="formValue.type" :options="types" />
      </n-form-item>
      <n-h3>
        Network
      </n-h3>
      <n-form-item class="justify-items-center" label="Network">
        <app-radio-button v-model:value="formValue.network" :options="networks" />
      </n-form-item>
      <n-h3>
        Term
      </n-h3>
      <n-form-item class="justify-items-center" label="Term">
        <app-radio-button v-model:value="formValue.term" :options="terms" />
      </n-form-item>
      <n-h3>Plan</n-h3>
      <n-form-item label="Plan">
        <n-select
          v-model:value="formValue.plan" :options="plans" size="large"
        />
      </n-form-item>
      <n-h3>Options</n-h3>
      <n-form-item label="Options" />
    </n-form>
    <n-divider />
  </div>
  <div class="flex justify-between">
    <router-link v-slot="{ navigate }" custom to="/">
      <n-button size="large" @click="navigate">
        Back
      </n-button>
    </router-link>
    <router-link v-slot="{ navigate }" custom to="/information">
      <n-button size="large" type="primary" @click="navigate">
        Next
      </n-button>
    </router-link>
  </div>
</template>
