<template>
  <div class="font-display overflow-x-hidden bg-white dark:bg-slate-950">
    <AppHeader />
    <Terminal>
      <slot />
    </Terminal>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>
