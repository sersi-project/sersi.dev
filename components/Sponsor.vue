<template>
  <div class="flex flex-col justify-center items-center space-y-10 h-[70vh]">
    <UIcon name="i-lucide-heart" class="size-24 bg-red-500" />
    <div class="flex items-center gap-2">
      <div class="text-4xl font-bold">
        Let's Make SERSI
        <code class="border border-primary p-1 border-dashed text-primary"
          >pro</code
        >
        Open-Source
      </div>
    </div>
    <div class="flex flex-col items-center space-y-1 text-xl">
      <p class="text-xl">
        Our goal is to make the
        <span class="font-bold text-purplish">WHOLE</span> project open source.
      </p>
      <p class="text-xl">
        If you value this project, please consider become a sponsor.
      </p>
      <p class="text-xl">Thank you for your support!</p>
    </div>
    <UButton
    to
      :ui="{
        base: 'w-52 h-16 text-xl justify-center cursor-pointer',
      }"
      >Support</UButton
    >
  </div>
</template>
<script lang="ts"></script>
