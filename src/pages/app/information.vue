<script setup lang="ts">
import type { FormSchema } from '@/components/app/form-items.vue'

const formValue = ref({})

const personalInformationSchema: FormSchema = {
  tax_id: {
    type: 'input',
    label: 'Tax ID',
    span: 6,
    rules: {
      required: true,
    },
  },
  full_name: {
    type: 'input',
    label: 'Full Name',
    span: 6,
    rules: {
      required: true,
    },
  },
  birthdate: {
    type: 'date',
    label: 'Birthdate',
    span: 6,
    rules: {
      required: true,
    },
  },
  company_name: {
    type: 'input',
    label: 'Company Name',
    span: 6,
  },
  trading_name: {
    type: 'input',
    label: 'Trading Name',
    span: 6,
  },
  industry: {
    type: 'input',
    label: 'Industry',
    span: 6,
    rules: {
      required: true,
    },
  },
  telephone_number: {
    type: 'input',
    label: 'Telephone Number',
    span: 6,
    rules: {
      required: true,
    },
  },
  mobile: {
    type: 'input',
    label: 'Mobile',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const billingAddressSchema = {
  billing_street_address: {
    type: 'input',
    label: 'Primary Street Address',
    span: 6,
    rules: {
      required: true,
    },
  },
  billing_city: {
    type: 'input',
    label: 'Primary City',
    span: 6,
    rules: {
      required: true,
    },
  },
  billing_zip_code: {
    type: 'input',
    label: 'Primary Zip Code',
    span: 6,
    rules: {
      required: true,
    },
  },
  billing_email: {
    type: 'input',
    label: 'Primary Email',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const shippingAddressSchema = computed(() => {
  const same_as_billing = {
    // same_as_billing: {
    //   type: 'radio',
    //   label: 'Same as Primary Address',
    //   span: 12,
    //   options: [
    //     { label: 'Yes', value: true },
    //     { label: 'No', value: false },
    //   ],
    //   rules: {
    //     required: true,
    //   },
    // },
    same_as_billing: {
      type: 'checkbox',
      label: 'Same as Primary Address',
      span: 12,
    },
  }
  if (formValue.value.same_as_billing)
    return same_as_billing

  return {
    ...same_as_billing,
    shipping_street_address: {
      type: 'input',
      label: 'Billing Street Address',
      span: 6,
      rules: {
        required: true,
      },
    },
    shipping_city: {
      type: 'input',
      label: 'Billing City',
      span: 6,
      rules: {
        required: true,
      },
    },
    shipping_zip_code: {
      type: 'input',
      label: 'Billing Zip Code',
      span: 6,
      rules: {
        required: true,
      },
    },
    shipping_email: {
      type: 'input',
      label: 'Billing Email',
      span: 6,
      rules: {
        required: true,
      },
    },
  }
})
</script>

<template>
  <div>
    <n-h1 class="text-center">
      Application Form
    </n-h1>
    <n-h2>Your Information</n-h2>
    <app-form ref="form" :model="formValue">
      <app-form-items v-model="formValue" :schema="personalInformationSchema" />

      <n-h2 class="col-span-12">
        Billing Address
      </n-h2>
      <app-form-items v-model="formValue" :schema="billingAddressSchema" />

      <n-h2 class="col-span-12">
        Shipping Address
      </n-h2>
      <app-form-items v-model="formValue" :schema="shippingAddressSchema" />
    </app-form>
  </div>
  <n-divider />
  <div class="flex justify-between">
    <router-link v-slot="{ navigate }" custom to="/plan">
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
