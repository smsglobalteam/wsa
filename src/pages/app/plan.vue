<script setup lang="tsx">
import type { FormRules } from 'naive-ui'

const types = ['Postpaid', 'Prepaid'].map((type) => {
  return {
    label: type,
    value: type,
  }
})

const networks = ['Iridium', 'Inmarsat', 'Thuraya'].map((network) => {
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
const formValue = useLocalStorage('form', {})

const plans = mockPlanGenerator()
const filteredPlans = computed(() => {
  return plans.filter((plan) => {
    return (
      plan.type === formValue.value?.type
      && plan.network === formValue.value?.network
      && plan.term === formValue.value?.term
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
  [() => formValue.value.type, () => formValue.value.network, () => formValue.value.term],
  () => {
    formValue.value.plan = null
  },
)
</script>

<template>
  <main>
    <div class="flex flex-col items-center text-center">
      <n-h1>Select Plan</n-h1>
      <n-p>You can find out more about plans at <n-a>pivotel.com</n-a></n-p>

      <n-form :model="formValue" :rules="rules" :show-feedback="false" :show-label="false">
        <n-h3>
          Type
        </n-h3>
        <n-form-item class="justify-items-center" label="Type" path="type">
          <app-radio-button v-model:value="formValue.type" :options="types" />
        </n-form-item>
        <n-h3>
          Network
        </n-h3>
        <n-form-item class="justify-items-center" label="Network" path="network">
          <app-radio-button v-model:value="formValue.network" :options="networks" />
        </n-form-item>
        <n-h3>
          Term
        </n-h3>
        <n-form-item class="justify-items-center" label="Term" path="term">
          <app-radio-button v-model:value="formValue.term" :options="terms" />
        </n-form-item>
        <n-h3>Plan</n-h3>
        <n-form-item class="min-w-max" label="Plan" path="plan">
          <n-select
            :key="`${formValue.type + formValue.network + formValue.term}key`"
            v-model:value="formValue.plan"
            class="min-w-max"
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
          <n-checkbox-group v-model:value="formValue.options" size="large">
            <div class="flex flex-col gap-2">
              <n-checkbox v-for="item in options" :key="item.value" v-bind="item" />
            </div>
          </n-checkbox-group>
        </n-form-item>
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
        <n-button :disabled="!formValue.plan" size="large" type="primary" @click="navigate">
          Next
        </n-button>
      </router-link>
    </div>
  </main>
</template>
