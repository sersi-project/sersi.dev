<template>
  <div class="font-display overflow-x-hidden dark:bg-slate-950">
    <AppHeader />
    <Terminal>
      <div class="flex">
        <DocsSidebar />
        <slot />
      </div>
    </Terminal>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>

</script>