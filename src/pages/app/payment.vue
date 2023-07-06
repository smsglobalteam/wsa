<script setup lang="tsx">
import { useFormStore } from '@/utils/store'
import type { FormSchema } from '@/components/app/form-items.vue'

const { state } = useFormStore()

const ccSchema: FormSchema = {
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
        if (/[^0-9-\s]+/.test(value))
          return false

        let nCheck = 0
        let bEven = false
        value = value.replace(/\D/g, '')

        for (let n = value.length - 1; n >= 0; n--) {
          const cDigit = value.charAt(n)
          let nDigit = Number.parseInt(cDigit, 10)

          if (bEven && (nDigit *= 2) > 9)
            nDigit -= 9

          nCheck += nDigit
          bEven = !bEven
        }

        return (nCheck % 10) === 0
      },
      message: 'Invalid credit card number',
    },
  },
  card_expiry_date: {
    type: 'date',
    label: 'Card Expiry Date',
    span: 3,
    rules: [
      { required: true },
      {
        validator: (_, value) => {
          const today = new Date()
          const expiry = new Date(value)
          return !value || expiry > today
        },
        message: 'Your card is expired',
      }],
  },
  card_ccv: {
    type: 'number',
    label: 'Card CVV',
    span: 3,
    rules: [
      { required: true },
      {
        type: 'number',
        message: 'Invalid CVV',
        validator: (_, value: number) => {
          if (!value)
            return true
          const card = state.card_type
          switch (card) {
            case 'Mastercard':
            case 'Discover':
            case 'Visa':
              return String(value).length === 3
            case 'American Express':
              return String(value).length === 4
            default:
              return false
          }
        },
      },
    ],
  },
}

const form = ref()
const router = useRouter()
const message = useMessage()
function handleNext() {
  form.value.submit((errors) => {
    if (errors)
      return message.error('Please fill in all required fields.')

    return router.push('/terms')
  })
}
</script>

<template>
  <main>
    <n-h1 class="text-center">
      Payment Information
    </n-h1>
    <n-p class="text-center">
      Your credit card will be charged on the due date shown on your invoice for monthly services, or at the time of voucher recharge.
    </n-p>
    <app-form ref="form" :model="state">
      <app-form-items v-model="state" :schema="ccSchema" />
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
