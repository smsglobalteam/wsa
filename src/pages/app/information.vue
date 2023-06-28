<script setup lang="ts">
import type { FormSchema } from '@/components/app/form-items.vue'
import { useFormStore } from '@/utils/store'

const { state } = useFormStore()

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
    label: 'Primary Contact (Full Name)',
    span: 6,
    rules: {
      required: true,
    },
  },
  birthdate: {
    type: 'date',
    label: 'Date of Birth',
    span: 6,
    rules: {
      required: true,
    },
  },
  company_name: {
    type: 'input',
    label: 'Company Name',
    span: 6,
    placeholder: 'Leave blank if not applicable',
  },
  trading_name: {
    type: 'input',
    label: 'Trading Name',
    span: 6,
    placeholder: 'Leave blank if not applicable',
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
    label: 'Telephone Number (Daytime)',
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

const billingAddressSchema: FormSchema = {
  primary_street_address: {
    type: 'input',
    label: 'Street Address',
    span: 6,
    rules: {
      required: true,
    },
  },
  primary_city: {
    type: 'input',
    label: 'City',
    span: 3,
    rules: {
      required: true,
    },
  },
  primary_state: {
    type: 'input',
    label: 'State',
    span: 3,
    rules: {
      required: true,
    },
  },
  primary_zip_code: {
    type: 'input',
    label: 'ZIP Code',
    span: 3,
    rules: {
      required: true,
    },
  },
  primary_country: {
    type: 'input',
    label: 'Country',
    span: 3,
    rules: {
      required: true,
    },
  },
  primary_email: {
    type: 'input',
    label: 'Email Address (Primary Contact)',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const shippingAddressSchema = computed(() => {
  const shipping_same_as_primary = {
    same_as_billing: {
      type: 'checkbox',
      label: 'Same as Primary Address',
      span: 12,
    },
  }
  if (state.same_as_billing)
    return shipping_same_as_primary

  return {
    ...shipping_same_as_primary,
    shipping_street_address: {
      type: 'input',
      label: 'Street Address',
      span: 6,
      rules: {
        required: true,
      },
    },
    shipping_city: {
      type: 'input',
      label: 'City',
      span: 3,
      rules: {
        required: true,
      },
    },
    shipping_state: {
      type: 'input',
      label: 'State',
      span: 3,
      rules: {
        required: true,
      },
    },
    shipping_zip_code: {
      type: 'input',
      label: 'ZIP Code',
      span: 3,
      rules: {
        required: true,
      },
    },
    shipping_country: {
      type: 'input',
      label: 'Country',
      span: 3,
      rules: {
        required: true,
      },
    },
    shipping_email: {
      type: 'input',
      label: 'Email Address (Billing/Accounts)',
      span: 6,
      rules: {
        required: true,
      },
    },
  }
})

const emergencySchema: FormSchema = {
  emergency_contact: {
    type: 'input',
    label: 'Emergency Contact (Full Name)',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_telephone: {
    type: 'input',
    label: 'Emergency Telephone',
    span: 3,
    rules: {
      required: true,
    },
  },
  emergency_mobile: {
    type: 'input',
    label: 'Emergency Mobile',
    span: 3,
    rules: {
      required: true,
    },
  },
  emergency_email: {
    type: 'input',
    label: 'Email Address (Emergency Contact)',
    span: 6,
    rules: {
      required: true,
    },
  },
  emergency_relationship: {
    type: 'input',
    label: 'Relationship',
    span: 6,
    rules: {
      required: true,
    },
  },
}

const idSchema: FormSchema = {
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
    label: 'Expiry Date',
    span: 6,
    rules: {
      required: true,
    },
  },
  social_security_no: {
    type: 'input',
    label: 'Social Security Number',
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

// const serviceSchema: FormSchema = {
//   satellite_network: {
//     type: 'select',
//     label: 'Satellite Network',
//     span: 6,
//     options: [
//       { label: 'Bivy', value: 'Bivy' },
//       { label: 'Garmin', value: 'Garmin' },
//       { label: 'SPOT', value: 'SPOT' },
//       { label: 'Iridium', value: 'Iridium' },
//       { label: 'Inmarsat', value: 'Inmarsat' },
//       { label: 'Starlink', value: 'Starlink' },
//       { label: 'Thuraya', value: 'Thuraya' },
//       { label: 'Pulsar VSAT', value: 'Pulsar VSAT' },
//       { label: 'Xgate', value: 'Xgate' },
//     ],
//     rules: {
//       required: true,
//     },
//   },
//   service_type: {
//     type: 'select',
//     label: 'Service Type',
//     span: 6,
//     options: [
//       { label: 'Voice', value: 'Voice' },
//       { label: 'Land IP', value: 'Land IP' },
//       { label: 'Maritime', value: 'Maritime' },
//       { label: 'Messaging', value: 'Messaging' },
//       { label: 'Tracertrak', value: 'Tracertrak' },
//     ],
//     rules: {
//       required: true,
//     },
//   },
//   service_plan: {
//     type: 'input',
//     label: 'Service Plan',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   sim_number: {
//     type: 'input',
//     label: 'SIM Number',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   equipment_provider: {
//     type: 'select',
//     label: 'Equipment Provider',
//     span: 6,
//     options: [
//       { label: 'Pivotel', value: 'Pivotel' },
//       { label: 'Other', value: 'Other' },
//     ],
//     rules: {
//       required: true,
//     },
//   },
//   hardware_model: {
//     type: 'input',
//     label: 'Hardware Model',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   imei_esn: {
//     type: 'input',
//     label: 'IMEI/ESN',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   vessel_narrative: {
//     type: 'input',
//     label: 'Vessel/Narrative',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   requested_activation_date: {
//     type: 'date',
//     label: 'Requested Activation Date',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   cost_center: {
//     type: 'input',
//     label: 'Cost Center',
//     span: 6,
//     placeholder: 'Leave blank if not applicable',
//   },
// }

const form = ref()
const router = useRouter()
const message = useMessage()
function handleNext() {
  form.value.submit((errors) => {
    if (errors)
      return message.error('Please fill in all required fields.')

    return router.push('/plan')
  })
}
</script>

<template>
  <main>
    <div>
      <n-h1 class="text-center">
        Application Form
      </n-h1>
      <app-form ref="form" :model="state">
        <app-form-h2>
          Your Information
          <template #helper>
            If you’re an individual or sole trader you can skip the fields that are not applicable.
          </template>
        </app-form-h2>
        <app-form-items v-model="state" :schema="personalInformationSchema" />

        <app-form-h2>
          Billing Address
        </app-form-h2>
        <app-form-items v-model="state" :schema="billingAddressSchema" />

        <app-form-h2>
          Shipping Address
        </app-form-h2>
        <app-form-items v-model="state" :schema="shippingAddressSchema" />

        <app-form-h2>
          Emergency Contact
        </app-form-h2>
        <app-form-items v-model="state" :schema="emergencySchema" />

        <app-form-h2>
          Your Identification
          <template #helper>
            At least one form of ID is required. Don’t forget to choose an enquiry password so we can identify you when you make account enquiries.
          </template>
        </app-form-h2>
        <app-form-items v-model="state" :schema="idSchema" />

        <!--        <app-form-h2> -->
        <!--          Satellite Service & Equipment -->
        <!--          <template #helper> -->
        <!--            Information about the service and equipment you’re applying for. -->
        <!--          </template> -->
        <!--        </app-form-h2> -->
        <!--        <app-form-items v-model="state" :schema="serviceSchema" /> -->
      </app-form>
    </div>
    <n-divider />
    <div class="flex justify-between">
      <router-link v-slot="{ navigate }" custom to="/">
        <n-button size="large" @click="navigate">
          Back
        </n-button>
      </router-link>
      <n-button size="large" type="primary" @click="handleNext">
        Next
      </n-button>
    </div>
  </main>
</template>
