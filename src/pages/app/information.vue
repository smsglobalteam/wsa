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

const emergencySchema = {
  emergency_contact: {
    type: 'input',
    label: 'Emergency Contact',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_telephone: {
    type: 'input',
    label: 'Emergency Telephone',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_mobile: {
    type: 'input',
    label: 'Emergency Mobile',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_email: {
    type: 'input',
    label: 'Emergency Email',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_address: {
    type: 'input',
    label: 'Emergency Address',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_relationship: {
    type: 'input',
    label: 'Emergency Relationship',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const idSchema = {
  id_type: {
    type: 'select',
    label: 'ID Type',
    span: 6,
    options: [
      { label: 'Driver\'s License', value: 'Driver\'s License' },
      { label: 'Passport', value: 'Passport' },
    ],
    rules: {
      required: true,
    },
  },
  id_expiry: {
    type: 'date',
    label: 'ID Expiry',
    span: 6,
    rules: {
      required: true,
    },
  },
  social_security_no: {
    type: 'input',
    label: 'Social Security No.',
    span: 6,
    rules: {
      required: true,
    },
  },
  inquiry_password: {
    type: 'input',
    label: 'Inquiry Password',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const ccSchema = {
  card_type: {
    type: 'select',
    label: 'Card Type',
    span: 6,
    options: [
      { label: 'Mastercard', value: 'Mastercard' },
      { label: 'Visa', value: 'Visa' },
      { label: 'American Express', value: 'American Express' },
      { label: 'Discover', value: 'Discover' },
    ],
    rules: {
      required: true,
    },
  },
  card_holder_name: {
    type: 'input',
    label: 'Card Holder Name',
    span: 6,
    rules: {
      required: true,
    },
  },
  card_number: {
    type: 'input',
    label: 'Card Number',
    span: 6,
    rules: {
      required: true,
      validator: (_, value) => {
        const card = formValue.value.card_type
        switch (card) {
          case 'Mastercard':
            return value.length === 16
          case 'Visa':
            return value.length === 16
          case 'American Express':
            return value.length === 15
          case 'Discover':
            return value.length === 16
          default:
            return false
        }
      },
    },
  },
  card_expiry_date: {
    type: 'date',
    label: 'Card Expiry Date',
    span: 3,
    rules: {
      required: true,
      validator: (_, value) => {
        const today = new Date()
        const expiry = new Date(value)
        return expiry > today
      },
    },
  },
  card_ccv: {
    type: 'input',
    label: 'Card CVV',
    span: 3,
    rules: {
      required: true,
      validator: (_, value) => {
        const card = formValue.value.card_type
        switch (card) {
          case 'Mastercard':
            return value.length === 3
          case 'Visa':
            return value.length === 3
          case 'American Express':
            return value.length === 4
          case 'Discover':
            return value.length === 3
          default:
            return false
        }
      },
    },
  },
}

const serviceSchema = {
  satellite_network: {
    type: 'select',
    label: 'Satellite Network',
    span: 6,
    options: [
      { label: 'Bivy', value: 'Bivy' },
      { label: 'Garmin', value: 'Garmin' },
      { label: 'SPOT', value: 'SPOT' },
      { label: 'Iridium', value: 'Iridium' },
      { label: 'Inmarsat', value: 'Inmarsat' },
      { label: 'Starlink', value: 'Starlink' },
      { label: 'Thuraya', value: 'Thuraya' },
      { label: 'Pulsar VSAT', value: 'Pulsar VSAT' },
      { label: 'Xgate', value: 'Xgate' },
    ],
    rules: {
      required: true,
    },
  },
  service_type: {
    type: 'select',
    label: 'Service Type',
    span: 6,
    options: [
      { label: 'Voice', value: 'Voice' },
      { label: 'Land IP', value: 'Land IP' },
      { label: 'Maritime', value: 'Maritime' },
      { label: 'Messaging', value: 'Messaging' },
      { label: 'Tracertrak', value: 'Tracertrak' },
    ],
    rules: {
      required: true,
    },
  },
  service_plan: {
    type: 'input',
    label: 'Service Plan',
    span: 6,
    rules: {
      required: true,
    },
  },
  plan_term: {
    type: 'select',
    label: 'Plan Term',
    span: 6,
    options: [
      { label: 'Month to Month', value: 'Month to Month' },
      { label: '12 Months', value: '12 Months' },
    ],
    rules: {
      required: true,
    },
  },
  sim_number: {
    type: 'input',
    label: 'SIM Number',
    span: 6,
    rules: {
      required: true,
    },
  },
  equipment_provider: {
    type: 'select',
    label: 'Equipment Provider',
    span: 6,
    options: [
      { label: 'Pivotel', value: 'Pivotel' },
      { label: 'Other', value: 'Other' },
    ],
    rules: {
      required: true,
    },
  },
  hardware_model: {
    type: 'input',
    label: 'Hardware Model',
    span: 6,
    rules: {
      required: true,
    },
  },
  imei_esn: {
    type: 'input',
    label: 'IMEI/ESN',
    span: 6,
    rules: {
      required: true,
    },
  },
}
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

      <n-h2 class="col-span-12">
        Emergency Contact
      </n-h2>
      <app-form-items v-model="formValue" :schema="emergencySchema" />

      <n-h2 class="col-span-12">
        Your Identification
      </n-h2>
      <app-form-items v-model="formValue" :schema="idSchema" />

      <n-h2 class="col-span-12">
        Credit Card
      </n-h2>
      <app-form-items v-model="formValue" :schema="ccSchema" />

      <n-h2 class="col-span-12">
        Satellite Service & Equipment
      </n-h2>
      <app-form-items v-model="formValue" :schema="serviceSchema" />
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
