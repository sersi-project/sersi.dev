<template>
  <div class="prose mx-auto p-4">
    <ContentRenderer class="prose w-[60vw]" v-if="page" :value="page" />
    <div v-else>No page found</div>
  </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: page } = await useAsyncData(`${slug}`, () => {
  return queryCollection('content').path(`/${slug}`).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

definePageMeta({
  layout: 'docs',
});
</script>
