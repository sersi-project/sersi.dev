<template>
  <main class="flex flex-col lg:flex-row mt-10">
    <div class="w-full lg:w-1/2 flex flex-col">
      <ProPlans v-for="plan in plans" :key="plan.id" :plan="plan" />
    </div>
    <div class="w-full lg:w-1/2">
      <div
        class="hidden lg:block bg-slate-900 h-[100vh] rounded-2xl inset-12"
      ></div>
    </div>
  </main>
</template>

<script setup lang="ts">
const plans = ref([
  {
    id: 1,
    name: 'Pro',
    monthly_price: '$10',
    yearly_price: '$100',
    description:
      'The best plan for streamlining freelance projects and getting paid faster.',
    features: [
      'Everything in Core',
      'Custom Hooks',
      'Scaffold store',
      'CI/CD workflows',
    ],
  },
  {
    id: 2,
    name: 'Teams',
    monthly_price: '$50',
    yearly_price: '$500',
    description:
      'The best plan for streamlining freelance projects and getting paid faster.',
    features: [
      'Everything in Pro',
      'Custom Shared Hooks',
      'Shraed Private Scaffold store',
      'Shareable Private CI/CD workflows',
    ],
  },
]);

useHead({
  title: 'Sersi Pro — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
  meta: [
    {
      name: 'description',
      content:
        'Sersi Pro is a plan for streamlining freelance projects and getting paid faster.',
    },
    {
      property: 'og:title',
      content:
        'Sersi Pro — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
    },
    {
      property: 'og:description',
      content:
        'Sersi Pro is a plan for streamlining freelance projects and getting paid faster.',
    },
    {
      property: 'og:image',
      content: '/social-preview-pro.png',
    },
    { property: 'og:url', content: 'https://sersi.dev/pro' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content:
        'Sersi Pro — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
    },
    {
      name: 'twitter:description',
      content:
        'Sersi Pro is a plan for streamlining freelance projects and getting paid faster.',
    },
    { name: 'twitter:image', content: '/social-preview-pro.png' },
    { name: 'twitter:url', content: 'https://sersi.dev/pro' },
  ],
});
</script>

<style></style>
