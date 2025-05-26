<template>
  <div class="flex justify-center gap-12">
    <UCard
      v-for="plan in plans"
      :key="plan.id"
      class="flex flex-col justify-between w-96 shadow-lg"
    >
      <template #header>
        <p
          class="flex text-2xl font-bold items-center justify-center"
          :class="plan.name_color"
        >
          <UIcon :name="plan.icon" class="" /><code>{{ plan.name }}</code>
        </p>
      </template>
      <div class="flex flex-col h-[32vh]">
        <p class="text-gray-500 text-center">
          {{ plan.description }}
        </p>

        <div
          :class="plan.name_color"
          class="text-center text-4xl font-bold mt-10"
        >
          {{ plan.price }}
          <span v-if="plan.alt_price" class="text-gray-400 text-center text-lg"
            >/year</span
          >
          <div
            v-if="plan.alt_price"
            class="flex flex-col items-center text-center"
          >
            <p class="text-gray-500 text-center text-sm font-bold">or</p>
            <p class="text-primary text-center text-lg font-bold">
              {{ plan.alt_price }}
              <span class="text-gray-400 text-center text-sm">/month</span>
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center mt-6">
          <ul class="text-sm">
            <li
              v-for="feature in plan.featureList"
              :key="feature"
              class="flex gap-2 items-center text-gray-500"
            >
              <UIcon name="i-gg-check-o" class="text-primary" />
              <p>{{ feature }}</p>
            </li>
          </ul>
        </div>
      </div>

      <template #footer>
        <UButton
          block
          :color="plan.call_to_action_color"
          :variant="plan.call_to_action_variant"
          :label="plan.call_to_action"
          class="py-3"
          :ui="{
            label: 'text-lg',
          }"
        />
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { Plan } from '~/types';

const plans: Plan[] = [
  {
    id: 1,
    name: 'Core',
    name_color: 'text-purplish',
    icon: 'i-bx-chip',
    description:
      'Great for solo devs learning new frameworks, and starting new projects.',
    price: 'FREE',
    alt_price: '',
    call_to_action: 'Get Started',
    call_to_action_variant: 'outline',
    call_to_action_color: 'neutral',
    featureList: [
      'New features',
      'Community support',
      'Popular frameworks',
      'Basic IaC',
    ],
  },
  {
    id: 2,
    name_color: 'text-primary',
    name: 'Pro',
    icon: 'i-hugeicons-stars',
    description:
      'The best plan for streamlining freelance projects and getting paid faster.',
    price: '$150',
    alt_price: '$15',
    call_to_action: 'Join Waitlist',
    call_to_action_variant: 'solid',
    call_to_action_color: 'primary',
    featureList: [
      'Everything in Core',
      'Advanced IaC',
      'Scaffold store',
      'CI/CD workflows',
      'Cloud integration',
    ],
  },
];
</script>

<style></style>
