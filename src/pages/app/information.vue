<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { FormSchema } from '@/components/app/form-items.vue'
import { useFormStore } from '@/utils/store'
import { countries, usStates } from '@/utils/places'

const { state } = useFormStore()

const accountSchema: ComputedRef<FormSchema> = computed(() => {
  const is_for_existing_account: FormSchema = {
    is_for_existing_account: {
      type: 'checkbox',
      label: 'Is this for an existing account?',
      span: 12,
      showFeedback: !state.is_for_existing_account,
    },
  }
  if (!state.is_for_existing_account)
    return is_for_existing_account

  return {
    ...is_for_existing_account,
    account_number: {
      type: 'input',
      label: 'Account Number',
      span: 6,
      rules: {
        required: true,
      },
    },
  }
})

const personalInformationSchema: FormSchema = {
  title: {
    type: 'select',
    label: 'Title',
    span: 2,
    options: ['Mr.', 'Mrs.', 'Ms.'].map(title => ({ label: title, value: title })),
    rules: {
      required: true,
    },
  },
  first_name: {
    type: 'input',
    label: 'First Name',
    span: 4,
    rules: {
      required: true,
    },
  },
  last_name: {
    type: 'input',
    label: 'Last Name',
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
  email: {
    type: 'input',
    label: 'Email Address',
    span: 6,
    rules: [
      {
        required: true,
      },
      {
        type: 'email',
      },
    ],
  },
  telephone_number: {
    type: 'input',
    label: 'Telephone Number (Daytime)',
    span: 6,
    rules: [
      { required: true },
      {
        validator: (_, value) => {
          // Validate E.164 format
          return /^\+?[1-9]\d{1,14}$/.test(value)
        },
        message: 'Invalid telephone number',
      },
    ],
  },
  mobile: {
    type: 'input',
    label: 'Mobile Number',
    span: 6,
    rules: [
      { required: true },
      {
        validator: (_, value) => {
          // Validate E.164 format
          return /^\+?[1-9]\d{1,14}$/.test(value)
        },
        message: 'Invalid mobile number',
      },
    ],
  },
  sign_up_marketing: {
    type: 'checkbox',
    label: 'Opt in to receive news and product information from Pulsar',
    span: 6,
  },
}

const billingAddressSchema = computed<FormSchema>(() => ({
  billing_email: {
    type: 'input',
    label: 'Email Address (Billing/Accounts)',
    span: 6,
    rules: {
      required: true,
    },
  },
  billing_street_address: {
    type: 'input',
    label: 'Street Address',
    span: 6,
    rules: {
      required: true,
    },
  },
  billing_city: {
    type: 'input',
    label: 'City',
    span: 3,
    rules: {
      required: true,
    },
  },
  billing_zip_code: {
    type: 'input',
    label: 'ZIP Code',
    span: 3,
    rules: {
      required: true,
    },
  },
  billing_country: {
    type: 'select',
    label: 'Country',
    span: 3,
    options: Object.entries(countries).map(([value, label]) => ({ value, label })),
    rules: {
      required: true,
    },
  },
  ...state.billing_country === 'US'
    ? {
        billing_state: {
          type: 'select',
          label: 'State',
          span: 3,
          options: usStates.map(state => ({
            label: state,
            value: state,
          })),
          rules: {
            required: true,
          },
        },
      }
    : {
        billing_state: {
          type: 'input',
          label: 'State',
          span: 3,
          rules: {
            required: true,
          },
        },
      },
}))

const shippingAddressSchema: ComputedRef<FormSchema> = computed(() => {
  const is_shipping_same_as_primary: FormSchema = {
    is_same_as_billing: {
      type: 'checkbox',
      label: 'Same as primary address',
      span: 12,
    },
  }
  if (state.is_same_as_billing)
    return is_shipping_same_as_primary

  return {
    ...is_shipping_same_as_primary,
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
    shipping_zip_code: {
      type: 'input',
      label: 'ZIP Code',
      span: 3,
      rules: {
        required: true,
      },
    },
    shipping_country: {
      type: 'select',
      label: 'Country',
      span: 3,
      options: Object.entries(countries).map(([value, label]) => ({ value, label })),
      rules: {
        required: true,
      },
    },
    ...state.shipping_country === 'US'
      ? {
          shipping_state: {
            type: 'select',
            label: 'State',
            span: 3,
            options: usStates.map(state => ({
              label: state,
              value: state,
            })),
            rules: {
              required: true,
            },
          },
        }
      : {
          shipping_state: {
            type: 'input',
            label: 'State',
            span: 3,
            rules: {
              required: true,
            },
          },
        },
  }
})

// const emergencySchema: FormSchema = {
//   emergency_contact: {
//     type: 'input',
//     label: 'Emergency Contact (Full Name)',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   emergency_telephone: {
//     type: 'input',
//     label: 'Emergency Telephone',
//     span: 3,
//     rules: {
//       required: true,
//     },
//   },
//   emergency_mobile: {
//     type: 'input',
//     label: 'Emergency Mobile',
//     span: 3,
//     rules: {
//       required: true,
//     },
//   },
//   emergency_email: {
//     type: 'input',
//     label: 'Email Address (Emergency Contact)',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
//   emergency_relationship: {
//     type: 'input',
//     label: 'Relationship',
//     span: 6,
//     rules: {
//       required: true,
//     },
//   },
// }

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
//       { label: 'Pulsar', value: 'Pulsar' },
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
  form.value.submit((errors: any) => {
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
        <app-form-items v-model="state" :schema="accountSchema" />

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

        <!--        <app-form-h2> -->
        <!--          Emergency Contact -->
        <!--        </app-form-h2> -->
        <!--        <app-form-items v-model="state" :schema="emergencySchema" /> -->
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
