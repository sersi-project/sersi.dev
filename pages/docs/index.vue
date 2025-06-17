<template>
  <div>
    <ContentRenderer class="prose" v-if="docs" :value="docs" />
    <div v-else>No docs found</div>
  </div>
</template>

<script lang="ts" setup>
const { data: docs } = await useAsyncData('docs', () =>
  queryCollection('content').path('/').first()
);

useSeoMeta({
  title: docs.value?.title,
  description: docs.value?.description,
});
</script>
