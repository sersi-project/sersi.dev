<template>
  <div class="my-10 pr-32">
    <p
      class="text-primary text-center text-subtitle bg-white/50 p-4 w-42 flex flex-nowrap"
    >
      {{ plan.name }}
    </p>
    <p>{{ plan.description }}</p>
    <div class="flex my-10 justify-between">
      <ul class="space-y-2">
        <li v-for="feature in plan.features" :key="feature">
          <Icon name="i-gg-check-o" class="text-primary" />
          {{ feature }}
        </li>
      </ul>
      <div class="">
        <p class="text-title texzt-center bg-white/20 p-2">
          {{ plan.yearly_price }} <span class="text-base">/year</span>
        </p>
        <p class="text-title texzt-center bg-white/20 p-2">
          {{ plan.monthly_price }} <span class="text-base">/month</span>
        </p>
        <UModal
          :title="`SERSI ${plan.name}`"
          :ui="{
            body: 'bg-slate-900 font-display',
            title: 'font-display',
          }"
          :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full',
          }"
        >
          <UButton
            class="text-white hover-outline hover-scale bg-accent/50 hover:bg-accent rounded-2xl px-6 py-2 mt-4"
          >
            Join Waitlist
          </UButton>
          <template #body>
            <ProWaitingListForm :plan="plan" />
          </template>
          <template #footer>
            <div
              class="text-center text-white flex items-center gap-2 font-display w-full"
            >
              <p>Already on the waitlist?</p>
              <div class="flex items-center gap-2">
                <NuxtLink to="/login" class="text-primary">
                  Join our community
                </NuxtLink>
                <UIcon name="i-simple-icons-discord" class="text-purple-500" />
                <UIcon name="i-simple-icons-reddit" class="text-red-500" />
              </div>
            </div>
          </template>
        </UModal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Plan {
  id: number;
  name: string;
  description: string;
  features: string[];
  yearly_price: string;
  monthly_price: string;
}

defineProps({
  plan: {
    type: Object as PropType<Plan>,
    required: true,
  },
});
</script>

<style></style>
