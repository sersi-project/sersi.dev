<template>
  <MotionConfig
    :transition="{
      duration: 0.5,
      ease: 'easeInOut',
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </MotionConfig>
</template>

<script lang="ts" setup>
import { MotionConfig } from 'motion-v';
</script>
