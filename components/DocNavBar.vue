<template>
  <UNavigationMenu
    :items="items"
    orientation="vertical"
    expa
    :ui="{
      link: 'text-xl',
      childLink: 'text-base',
    }"
  />
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';
const items = ref<NavigationMenuItem[]>([
  {
    label: 'Guide',
    type: 'label',
  },
  {
    label: 'Getting Started',
    href: '/docs',
  },
  {
    label: 'Core',
    defaultOpen: true,
    children: [
      {
        label: 'Installation',
        href: '/docs/installation',
      },
      {
        label: 'Usage',
        href: '/docs/usage',
      },
    ],
  },
  {
    label: 'Contributing',
    href: '/docs/contributing',
  },
  {
    label: 'Pro',
    class: 'text-primary border border-primary border-dashed ',
    href: '/docs/pro',
  },
]);
</script>
