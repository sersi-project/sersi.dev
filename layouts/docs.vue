<template>
  <div class="px-64">
    <NavBar />
    <div class="flex flex-row space-x-12">
      <DocNavBar />
      <div class="flex flex-col gap-4">
        <UBreadcrumb :items="items">
          <template #separator>
            <span class="mx-2 text-muted">/</span>
          </template>
        </UBreadcrumb>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui';
const items: BreadcrumbItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Docs',
    to: '/docs',
  },
];
</script>
