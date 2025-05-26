<template>
    <UNavigationMenu :items="items" orientation="vertical" expa :ui="{
        link: 'text-xl',
        childLink: 'text-base'
    }" />
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
const items = ref<NavigationMenuItem[]>([
  {
    label: "Guide",
    type: 'label',
  },    
  {
    label: "Getting Started",
    href: "/docs/getting-started",
    defaultOpen: true,
    children: [
      {
        label: "Installation",
        href: "/docs/getting-started/installation",
      },
      {
        label: "Configuration",
        href: "/docs/getting-started/configuration",
    },
      
    ]
  },
    
  {
    label: "Usage",
    href: "/docs/usage",
    defaultOpen: true,
    children: [
      {
        label: "Commands",
        href: "/docs/usage/commands",
      },
      {
        label: "File Structure",
        href: "/docs/usage/configuration",
      },
    ]
  },
  {
    label: "Contributing",
    href: "/docs/contributing",
  },
  {
    label: "About",
    href: "/docs/about",
  }
]);
</script>

