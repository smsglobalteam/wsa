<script setup lang="tsx">
import { useFormStore } from '@/utils/store'
import type { FormSchema } from '@/components/app/form-items.vue'
import { countries, usStates } from '@/utils/places'

const { state } = useFormStore()

const typeOfServiceSchema: FormSchema = {
  type_of_service: {
    type: 'select',
    label: 'Satellite Service Type',
    span: 6,
    options: ['Inmarsat Fleet One', 'Inmarsat Fleet Broadband', 'Inmarsat Fleet Xpress', 'Iridium Certus'].map(value => ({ label: value, value })),
  },
}

const typeOfUseSchema: FormSchema = {
  type_of_user: {
    type: 'select',
    label: 'Primary Use',
    span: 6,
    options: ['Maritime Mobile', 'Maritime Fixed'].map(value => ({ label: value, value })),
  },
}

const vesselInformationSchema = computed<FormSchema>(() => ({
  vessel_name: {
    type: 'input',
    label: 'Vessel Name',
    span: 6,
  },
  fleet_id: {
    type: 'input',
    label: 'Fleet ID',
    span: 6,
  },
  country_of_registry: {
    type: 'input',
    label: 'Country of Registry',
    span: 6,
  },
  number_of_persons_onboard: {
    type: 'input',
    label: 'Number of Persons Onboard',
    span: 6,
  },
  home_port: {
    type: 'input',
    label: 'Home Port',
    span: 6,
  },
  port_of_registry: {
    type: 'input',
    label: 'Port of Registry',
    span: 6,
  },
  vessel_type: {
    type: 'select',
    label: 'Vessel Type',
    span: 6,
    options: ['Yacht/Pleasure', 'Bridge Merchant', 'Cruise', 'Crew/Passenger Merchant', 'Coastal Fishing', 'Deep Sea Fishing', 'Civil Government', 'Military'].map(value => ({ label: value, value })),
  },
  sea_going_flag: {
    type: 'input',
    label: 'Sea Going Flag',
    span: 6,
  },
  self_propelled_flag: {
    type: 'input',
    label: 'Self Propelled Flag',
    span: 6,
  },
  over_100_gt_flag: {
    type: 'input',
    label: 'Over 100 GT Flag',
    span: 6,
  },
  ...state.over_100_gt_flag && {
    tonnage_of_vessel: {
      type: 'input',
      label: 'Tonnage of Vessel',
      span: 6,
    },
    year_of_build: {
      type: 'input',
      label: 'Year of Build',
      span: 6,
    },
    imo_number: {
      type: 'input',
      label: 'IMO Number',
      span: 6,
    },
  },
  call_sign: {
    type: 'input',
    label: 'Call Sign',
    span: 6,
  },
  aaic: {
    type: 'input',
    label: 'AAIC (Not Required for Fleet One)',
    span: 6,
  },
  mmsi: {
    type: 'input',
    label: 'Mobile Maritime Safety ID (MMSI)',
    span: 6,
  },
}))

// vessel_emergency_contact_name: string
// vessel_emergency_contact_address: string
// vessel_emergency_street_address: string
// vessel_emergency_city: string
// vessel_emergency_zip_code: string
// vessel_emergency_country: string
// vessel_emergency_state: string
// vessel_emergency_contact_mobile: string
// vessel_emergency_contact_email: string
const emergencyContactSchema = computed<FormSchema>(() => ({
  vessel_emergency_contact_name: {
    type: 'input',
    label: 'Name',
    span: 6,
  },
  vessel_emergency_contact_address: {
    type: 'input',
    label: 'Address',
    span: 6,
  },
  vessel_emergency_street_address: {
    type: 'input',
    label: 'Street Address',
    span: 6,
  },
  vessel_emergency_city: {
    type: 'input',
    label: 'City',
    span: 3,
  },
  vessel_emergency_zip_code: {
    type: 'input',
    label: 'ZIP Code',
    span: 3,
  },
  vessel_emergency_country: {
    type: 'select',
    label: 'Country',
    span: 3,
    options: Object.entries(countries).map(([value, label]) => ({ value, label })),
  },
  ...state.vessel_emergency_country === 'US'
    ? {
        vessel_emergency_state: {
          type: 'select',
          label: 'State',
          span: 3,
          options: usStates.map(state => ({
            label: state,
            value: state,
          })),
        },
      }
    : {
        vessel_emergency_state: {
          type: 'input',
          label: 'State',
          span: 3,
        },
      },
  vessel_emergency_contact_mobile: {
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
  vessel_emergency_contact_email: {
    type: 'input',
    label: 'Email',
    span: 6,
    rules: [
      {
        type: 'email',
      },
    ],
  },
}))

const form = ref()
const router = useRouter()
const message = useMessage()
function handleNext() {
  // form.value.submit((errors) => {
  //   if (errors)
  //     return message.error('Please fill in all required fields.')

  return router.push('/payment')
  // })
}
</script>

<template>
  <main>
    <n-h1 class="text-center">
      Maritime Terminal and Vessel Information
    </n-h1>
    <n-p class="text-center">
      Please complete this form if you are planning to use your Pulsar provided service(s) for Maritime.
    </n-p>
    <app-form ref="form" :model="state">
      <app-form-h2>
        Type of Service
      </app-form-h2>
      <app-form-items v-model="state" :schema="typeOfServiceSchema" />
      <app-form-h2>
        Type of Use
      </app-form-h2>
      <app-form-items v-model="state" :schema="typeOfUseSchema" />
      <app-form-h2>
        Vessel Information
      </app-form-h2>
      <app-form-items v-model="state" :schema="vesselInformationSchema" />
      <app-form-h2>
        Emergency Contact
      </app-form-h2>
      <app-form-items v-model="state" :schema="emergencyContactSchema" />
    </app-form>
    <n-divider />
    <div class="flex justify-between">
      <router-link v-slot="{ navigate }" custom to="/plan">
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
