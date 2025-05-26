<template>
  <nav class="flex justify-between pt-6 items-center">
    <div class="flex items-center">
      <NuxtLink to="/">
        <img
          class="font-bold hover:cursor-pointer w-30 mr-5"
          :src="mode.value === 'dark' ? dark_logo : light_logo"
          alt="SERSI"
        />
      </NuxtLink>
      <UNavigationMenu
        :items="leftItems"
        :ui="{
          link: 'text-lg',
        }"
        class="hidden xl:flex"
      />
      <UButton icon="i-lucide-menu" class="xl:hidden" />
    </div>
    <div class="flex items-center gap-4">
      <UInput
        v-model="search_input"
        icon="i-lucide-search"
        placeholder="Search ..."
        class="hidden lg:flex"
      />
      <UButton
        icon="i-lucide-search"
        variant="outline"
        color="neutral"
        class="lg:hidden"
      />
      <UButton
        icon="i-bi-github"
        to="https://github.com/sersi-project"
        target="_blank"
        :class="mode.value === 'dark' ? 'bg-white' : 'bg-black'"
      />
      <ColorModeButton />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';
import light_logo from '@/assets/img/sersi-light.png';
import dark_logo from '@/assets/img/sersi-dark.png';

const mode = useColorMode();

const search_input = ref('');

const leftItems = ref<NavigationMenuItem[]>([
  {
    label: 'Docs',
    to: '/docs',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Pro',
    to: '/pro',
    class: 'border-2 border-dashed border-primary font-bold text-primary',
  },
  {
    to: '/help',
    trailingIcon: 'i-lucide-help-circle',
  },
]);
</script>
