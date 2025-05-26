<template>
  <motion.div
    class="flex flex-col justify-start pt-10 mt-5 mb-36"
    :initial="{ opacity: 0, scale: 0 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{
      duration: 0.5,
      scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
    }"
  >
    <div class="flex flex-col items-center lg:px-16">
      <div class="flex items-center gap-2 text-sm">
        <code
          >powered by
          <NuxtLink to="https://vitejs.dev/" target="_blank" class="underline"
            >vite</NuxtLink
          ></code
        >
        <UIcon name="i-devicon-vitejs" class="size-4" />
      </div>
      <h1
        class="text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] font-bold tracking-tight text-center leading-tight"
      >
        Kickstart modern apps in seconds. Your
        <span class="whitespace-nowrap text-purplish">stacks</span>, your
        <span class="text-primary">rules</span>.
      </h1>
    </div>
    <div
      class="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 justify-center items-center my-10 font-bold"
    >
      <NuxtLink to="/docs">
        <UButton
          leading-icon="i-lucide-book-open"
          size="lg"
          :class="mode.value === 'dark' ? 'bg-white' : 'bg-black'"
          :ui="{
            base: 'w-52 h-16 text-xl justify-center ',
          }"
        >
          Documentation
        </UButton>
      </NuxtLink>

      <NuxtLink to="https://github.com/sersi-project" target="_blank">
        <UButton
          trailing-icon="i-lucide-github"
          size="lg"
          :class="mode.value === 'dark' ? 'bg-white' : 'bg-black'"
          :ui="{
            base: 'text-xl w-52 lg:w-36 justify-center h-16',
          }"
        >
          Github
        </UButton>
      </NuxtLink>
    </div>
    <div class="flex justify-center items-center mb-4">
      <div
        class="border border-gray-200 p-5 px-8 w-auto flex justify-center items-center gap-10 rounded-sm mt-18 shadow-lg"
      >
        <code>npx sersi create</code>
        <UButton
          icon="i-lucide-copy"
          @click="handleCopy"
          :color="copied ? 'neutral' : 'primary'"
        />
      </div>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import { useClipboard } from '@vueuse/core';
const { copy } = useClipboard();
const copied = ref(false);
const mode = useColorMode();

const handleCopy = () => {
  copy('npx sersi create');
  copied.value = true;
};
</script>
