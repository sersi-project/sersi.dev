<template>
  <MotionConfig
    :transition="{
      duration: 0.2,
      ease: 'easeInOut',
    }"
  >
    <NuxtLayout>
      <UApp>
        <NuxtPage />
      </UApp>
    </NuxtLayout>
  </MotionConfig>
</template>

<script lang="ts" setup>
import { MotionConfig } from 'motion-v';
</script>
