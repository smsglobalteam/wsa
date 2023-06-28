<script setup lang="tsx">
import type { FormRules } from 'naive-ui'
import { useFormStore } from '@/utils/store'

const types = ['Postpaid', 'Prepaid'].map((type) => {
  return {
    label: type,
    value: type,
  }
})

const networks = [
  'Bivy',
  'Garmin',
  'SPOT',
  'Iridium',
  'Inmarsat',
  'Starlink',
  'Thuraya',
  'Pulsar VSAT',
  'Xgate',
].map((network) => {
  return {
    label: network,
    value: network,
  }
})

const terms = ['12 Months', 'Month to Month'].map((term) => {
  return {
    label: term,
    value: term,
  }
})

const options = ['Sample 1', 'Sample 2', 'Sample 3'].map((option) => {
  return {
    label: option,
    value: option,
  }
})

function mockPlanGenerator() {
  const plans: {
    type: string
    network: string
    term: string
    name: string
  }[] = []
  types.forEach((type) => {
    networks.forEach((network) => {
      terms.forEach((term) => {
        [55, 75, 150, 250, 350].forEach((amount) => {
          plans.push({
            type: type.value,
            network: network.value,
            term: term.value,
            name: `Placeholder ${amount} ${term.label} ${network.label} ${type.label}`,
          })
        })
      })
    })
  })
  return plans
}
const { state } = useFormStore()

const plans = mockPlanGenerator()
const filteredPlans = computed(() => {
  return plans.filter((plan) => {
    return (
      plan.type === state?.type
      && plan.network === state?.network
      && plan.term === state?.term
    )
  }).map((plan) => {
    return {
      label: plan.name,
      value: plan.name,
    }
  },
  )
})

const rules: FormRules = {
  type: {
    required: true,
    message: 'Please select a type',
  },
  network: {
    required: true,
    message: 'Please select a network',
  },
  term: {
    required: true,
    message: 'Please select a term',
  },
  plan: {
    required: true,
    message: 'Please select a plan',
  },
}

watch(
  [() => state.type, () => state.network, () => state.term],
  () => {
    state.plan = null
  },
)
</script>

<template>
  <main>
    <div class="mx-auto max-w-sm">
      <div class="text-center">
        <n-h1>Select Plan</n-h1>
        <n-p>
          You can find out more about plans at <n-a>pivotel.com</n-a>
        </n-p>

        <n-form :model="state" :rules="rules" :show-feedback="false" :show-label="false">
          <n-h3>
            Type
          </n-h3>
          <n-form-item class="justify-items-center" label="Type" path="type">
            <app-radio-button v-model:value="state.type" :options="types" />
          </n-form-item>
          <n-h3>
            Satellite Service
          </n-h3>
          <n-form-item label="Satellite Service" path="network">
            <n-select
              v-model:value="state.network"
              clearable
              :options="networks"
              placeholder="Select network" size="large"
            />
          </n-form-item>
          <n-h3>
            Hardware Type
          </n-h3>
          <n-form-item label="Hardware Type" path="hardware_type">
            <n-select
              v-model:value="state.hardware_type"
              clearable
              :options="networks"
              placeholder="Select hardware type" size="large"
            >
              <template #empty>
                Please fill the above options first.
              </template>
            </n-select>
          </n-form-item>
          <n-h3>
            Term
          </n-h3>
          <n-form-item class="justify-items-center" label="Term" path="term">
            <app-radio-button v-model:value="state.term" :options="terms" />
          </n-form-item>
          <n-h3>Plan</n-h3>
          <n-form-item label="Plan" path="plan">
            <n-select
              :key="`${state.type + state.network + state.term}key`"
              v-model:value="state.plan"
              clearable
              :options="filteredPlans"
              placeholder="Select plan" size="large"
            >
              <template #empty>
                Please fill the above options first.
              </template>
            </n-select>
          </n-form-item>
          <n-h3>Options</n-h3>
          <n-form-item label="Options" path="options">
            <n-checkbox-group v-model:value="state.options" size="large">
              <div class="flex flex-col gap-2">
                <n-checkbox v-for="item in options" :key="item.value" v-bind="item" />
              </div>
            </n-checkbox-group>
          </n-form-item>
        </n-form>
      </div>
      <n-divider />
    </div>
    <div class="flex justify-between">
      <router-link v-slot="{ navigate }" custom to="/information">
        <n-button size="large" @click="navigate">
          Back
        </n-button>
      </router-link>
      <router-link v-slot="{ navigate }" custom to="/payment">
        <n-button :disabled="!state.plan" size="large" type="primary" @click="navigate">
          Next
        </n-button>
      </router-link>
    </div>
  </main>
</template>
