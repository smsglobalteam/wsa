<script setup lang="tsx">
import type { ComputedRef } from 'vue'
import { useFormStore } from '@/utils/store'
import type { FormSchema } from '@/components/app/form-items.vue'

const { state } = useFormStore()

// const types = ['Postpaid', 'Prepaid'].map((type) => {
//   return {
//     label: type,
//     value: type,
//   }
// })
//
// const networks = [
//   'Bivy',
//   'Garmin',
//   'SPOT',
//   'Iridium',
//   'Inmarsat',
//   'Starlink',
//   'Thuraya',
//   'Pulsar VSAT',
//   'Xgate',
// ].map((network) => {
//   return {
//     label: network,
//     value: network,
//   }
// })
//
// const terms = ['12 Months', 'Month to Month'].map((term) => {
//   return {
//     label: term,
//     value: term,
//   }
// })
//
// const options = ['Sample 1', 'Sample 2', 'Sample 3'].map((option) => {
//   return {
//     label: option,
//     value: option,
//   }
// })

// function mockPlanGenerator() {
//   const plans: {
//     type: string
//     network: string
//     term: string
//     name: string
//   }[] = []
//   types.forEach((type) => {
//     networks.forEach((network) => {
//       terms.forEach((term) => {
//         [55, 75, 150, 250, 350].forEach((amount) => {
//           plans.push({
//             type: type.value,
//             network: network.value,
//             term: term.value,
//             name: `Placeholder ${amount} ${term.label} ${network.label} ${type.label}`,
//           })
//         })
//       })
//     })
//   })
//   return plans
// }

// const plans = mockPlanGenerator()
// const filteredPlans = computed(() => {
//   return plans.filter((plan) => {
//     return (
//       plan.type === state?.type
//       && plan.network === state?.network
//       && plan.term === state?.term
//     )
//   }).map((plan) => {
//     return {
//       label: plan.name,
//       value: plan.name,
//     }
//   },
//   )
// })

// const rules: FormRules = {
//   type: {
//     required: true,
//     message: 'Please select a type',
//   },
//   network: {
//     required: true,
//     message: 'Please select a network',
//   },
//   term: {
//     required: true,
//     message: 'Please select a term',
//   },
//   plan: {
//     required: true,
//     message: 'Please select a plan',
//   },
// }

watch(
  [() => state.type, () => state.network, () => state.term],
  () => {
    state.plan = null
  },
)

const serviceSchema: ComputedRef<FormSchema> = computed(() => ({
  satellite_network: {
    type: 'select',
    label: 'Satellite Network',
    span: 12,
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
  ...state.satellite_network && {
    hardware_type: {
      type: 'select',
      label: 'Hardware Type',
      span: 12,
      options: ['HW Placeholder 1', 'HW Placeholder 2', 'HW Placeholder 3'].map((option) => {
        return {
          label: `${state.satellite_network} ${option}`,
          value: `${state.satellite_network} ${option}`,
        }
      }),
      rules: {
        required: true,
      },
    },
  },
  ...state.hardware_type && {
    plan_family: {
      type: 'select',
      label: 'Plan Family',
      span: 12,
      options: ['PF Placeholder 1', 'PF Placeholder 2', 'PF Placeholder 3'].map((option) => {
        return {
          label: `${state.hardware_type} ${option}`,
          value: `${state.hardware_type} ${option}`,
        }
      }),
      rules: {
        required: true,
      },
    },
  },
  sim_number: {
    type: 'input',
    label: 'SIM Number',
    span: 12,
    rules: {
      required: true,
    },
  },
  imei_esn: {
    type: 'input',
    label: 'IMEI/ESN',
    span: 12,
    rules: {
      required: true,
    },
  },
  vessel_narrative: {
    type: 'input',
    label: 'Vessel/Narrative',
    span: 12,
    rules: {
      required: true,
    },
  },
  requested_activation_date: {
    type: 'date',
    label: 'Requested Activation Date',
    span: 12,
    rules: {
      required: true,
    },
  },
  is_for_maritime: {
    type: 'checkbox',
    label: 'This device will be used primarily on a commercial maritime vessel',
    span: 12,
  },
}))

const form = ref()
const router = useRouter()
const message = useMessage()
function handleNext() {
  form.value.submit((errors) => {
    if (errors)
      return message.error('Please fill in all required fields.')

    if (state.is_for_maritime)
      return router.push('/maritime')

    return router.push('/payment')
  })
}
</script>

<template>
  <main>
    <div class="mx-auto">
      <div class="text-center">
        <n-h1>Select Plan</n-h1>
        <n-p class="!mb-6">
          Information about the service and equipment you’re applying for. You can find out more about plans at <n-a>pivotel.com</n-a>
        </n-p>

        <!--        <app-form-h2> -->
        <!--          Satellite Service & Equipment -->
        <!--          <template #helper> -->
        <!--            Information about the service and equipment you’re applying for. -->
        <!--          </template> -->
        <!--        </app-form-h2> -->
        <app-form ref="form" class="mx-auto max-w-sm" :model="state" size="large">
          <app-form-items v-model="state" :schema="serviceSchema" />
        </app-form>

        <!--        <n-form :model="state" :rules="rules" :show-feedback="false" :show-label="false"> -->
        <!--          <n-h3> -->
        <!--            Type -->
        <!--          </n-h3> -->
        <!--          <n-form-item class="justify-items-center" label="Type" path="type"> -->
        <!--            <app-radio-button v-model:value="state.type" :options="types" /> -->
        <!--          </n-form-item> -->
        <!--          <n-h3> -->
        <!--            Satellite Service -->
        <!--          </n-h3> -->
        <!--          <n-form-item label="Satellite Service" path="network"> -->
        <!--            <n-select -->
        <!--              v-model:value="state.network" -->
        <!--              clearable -->
        <!--              :options="networks" -->
        <!--              placeholder="Select network" size="large" -->
        <!--            /> -->
        <!--          </n-form-item> -->
        <!--          <n-h3> -->
        <!--            Hardware Type -->
        <!--          </n-h3> -->
        <!--          <n-form-item label="Hardware Type" path="hardware_type"> -->
        <!--            <n-select -->
        <!--              v-model:value="state.hardware_type" -->
        <!--              clearable -->
        <!--              :options="networks" -->
        <!--              placeholder="Select hardware type" size="large" -->
        <!--            > -->
        <!--              <template #empty> -->
        <!--                Please fill the above options first. -->
        <!--              </template> -->
        <!--            </n-select> -->
        <!--          </n-form-item> -->
        <!--          <n-h3> -->
        <!--            Term -->
        <!--          </n-h3> -->
        <!--          <n-form-item class="justify-items-center" label="Term" path="term"> -->
        <!--            <app-radio-button v-model:value="state.term" :options="terms" /> -->
        <!--          </n-form-item> -->
        <!--          <n-h3>Plan</n-h3> -->
        <!--          <n-form-item label="Plan" path="plan"> -->
        <!--            <n-select -->
        <!--              :key="`${state.type + state.network + state.term}key`" -->
        <!--              v-model:value="state.plan" -->
        <!--              clearable -->
        <!--              :options="filteredPlans" -->
        <!--              placeholder="Select plan" size="large" -->
        <!--            > -->
        <!--              <template #empty> -->
        <!--                Please fill the above options first. -->
        <!--              </template> -->
        <!--            </n-select> -->
        <!--          </n-form-item> -->
        <!--          <n-h3>Options</n-h3> -->
        <!--          <n-form-item label="Options" path="options"> -->
        <!--            <n-checkbox-group v-model:value="state.options" size="large"> -->
        <!--              <div class="flex flex-col gap-2"> -->
        <!--                <n-checkbox v-for="item in options" :key="item.value" v-bind="item" /> -->
        <!--              </div> -->
        <!--            </n-checkbox-group> -->
        <!--          </n-form-item> -->
        <!--        </n-form> -->
      </div>
      <n-divider />
    </div>
    <div class="flex justify-between">
      <router-link v-slot="{ navigate }" custom to="/information">
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
