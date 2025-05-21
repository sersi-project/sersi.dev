<template>
  <div class="flex justify-between pt-6 items-center">
    <div class="flex items-center">
      <div class="px-4 text-2xl font-bold hover:cursor-pointer">SERSI</div>
      <UNavigationMenu :items="items" class="" />
    </div>
    <UInput v-model="search_input" icon="i-lucide-search" placeholder="Search ..." />
  </div>
  
</template>

<script lang="ts" setup>
import  type {NavigationMenuItem} from '@nuxt/ui'

const search_input = ref('')

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    to: '/docs',
  },
  {
    label: 'FAQs',
    to: '/faqs'
  },
])
</script>