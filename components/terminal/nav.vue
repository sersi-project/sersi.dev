<template>
   <div class="border-b-4 border-gray-400 h-16 flex justify-between items-center w-full">
        <navbar class="text-gray-200" >
          <span class="flex items-center mx-24 h-16">
            <Icon name="gala:menu-left" size="36" class="text-gray-400 mr-22" />
            <ul class="flex items-center justify-center h-full">
              <li v-for="item in navItems"
              :key="item.id"
              :class="item.id === selectedId ? selectedClass : ''"
              class="h-full"
              @click="selectedId = item.id">
              <NuxtLink :to="item.path" class="flex items-center justify-center space-x-4 h-full w-48 cursor-pointer hover:bg-white/30 transtion duration-500 ease-in-out">
              <Icon name="ri:terminal-box-fill" size="16" class="text-gray-200" />
              <p class="text-lg">{{ item.name }}</p>
              </NuxtLink>
            </li>
          </ul>
        </span>
      </navbar>
      <button class=" text-lg text-orange-400 border-2 rounded-full px-6 py-1 mr-12 hover:text-orange-200 hover:border-orange-200">help</button>
      </div> 
</template>

<script lang="ts" setup>
const selectedId = ref(1)

const selectedClass = "bg-white/20 border-b-5 border-primary"
const navItems = ref([
    {
      id: 1,
        name: '~/Features',
        path: '/'
    },
    {
      id: 2,
        name: '~/Docs',
        path: '/docs'
    },
    {
      id: 3,
        name: '~/Pro',
        path: '/pro'
    },
])
</script>