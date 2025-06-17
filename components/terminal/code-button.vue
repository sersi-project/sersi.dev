<template>
    <button class="bg-white/20 p-3 rounded-sm inline-flex">
        <h3><span class="text-[#F39999] mr-4">{{ prefix }}</span> {{ command }}</h3>
    </button>
</template>

<script lang="ts" setup>
defineProps({
    prefix: {
        type: String,
        required: true
    },
    command: {
        type: String,
        required: true
    }
})
</script>