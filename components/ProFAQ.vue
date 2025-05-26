<template>
  <div class="flex flex-col gap-4 justify-center items-center">
    <p class="text-2xl font-bold">Frequently Asked Questions</p>
    <UAccordion :items="faqItems" class="w-1/2 mt-10" />
  </div>
</template>

<script lang="ts" setup>
const faqItems = ref([
  {
    label: 'What is Sersi?',
    content: 'Sersi is a tool that helps you scaffold your project.',
    icon: 'i-lucide-help-circle',
  },
  {
    label: 'What is Sersi?',
    content: 'Sersi is a tool that helps you scaffold your project.',
    icon: 'i-lucide-help-circle',
  },
]);
</script>
