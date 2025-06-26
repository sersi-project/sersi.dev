<template>
  <NuxtLayout>
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    name: 'Sersi',
  }),
  defineWebSite({
    name: 'Sersi',
  }),
]);
</script>
