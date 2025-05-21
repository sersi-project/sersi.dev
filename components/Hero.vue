<template>
  <div class="h-[80vh] flex flex-col justify-center">
    <div class="flex flex-col items-center px-16">
      <h1 class="text-[5.5rem] font-bold tracking-tight text-white text-center leading-tight">
        Kickstart modern apps in seconds. 
        Your <span class="whitespace-nowrap text-[hsl(280,100%,60%)]">stacks</span>,
        your <span class="text-[hsl(240,100%,70%)]">rules</span>.
      </h1>
    </div>
    <div class="flex space-x-6 justify-center items-center my-10 font-bold">
      <div class="flex border bg-white text-black text-xl w-auto p-4 rounded-xl items-center gap-3">
        <p>Documentation</p>
        <UIcon name="i-lucide-book" class="size-5" />
      </div>
      <div class="flex border text-xl text-black bg-white w-auto p-4 rounded-xl items-center gap-3">
        <p class="">Github</p>
        <UIcon name="i-lucide-github" class="size-5" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="border p-6 px-8 w-auto flex justify-center items-center gap-6">
        <code>npm create sersi-app@latest</code>
        <UButton icon="i-lucide-copy" />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
</script>