<template>
  <div class="px-64">
    <NavBar />
    <div class="flex flex-row space-x-12">
      <DocNavBar />
      <div class="flex flex-col gap-4 prose prose-2xl max-w-4xl">
        <UBreadcrumb :items="items">
          <template #separator>
            <UIcon name="i-lucide-chevron-right" size="16" class="mx-2 text-muted" />
          </template>
        </UBreadcrumb>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui';
import { onMounted } from 'vue';

const route = useRoute();

const items = ref<BreadcrumbItem[]>([
    {
      label: 'Getting Started',
      to: '/docs',
    },
  ]);

watch(() => route.path, () => {

if (items.value.length > 1) {
    items.value.pop();
} 
items.value.push({
    label: route.path.split('/').pop()!,
    to: route.path,
});
});
</script>
