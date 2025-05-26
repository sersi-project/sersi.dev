<template>
  <div class="flex flex-col justify-center items-center my-10">
    <p class="text-center text-4xl font-bold w-2/3">
      Supporting the most popular frameworks and libraries
    </p>
    <p class="text-center text-xl w-2/3">
      All frameworks are powered by vite, and are ready to use with your
      favourite libraries
    </p>
  </div>
  <div
    class="flex flex-col lg:grid lg:grid-flow-row 2xl:grid-rows-2 grid-cols-2 2xl:grid-cols-3 gap-4"
  >
    <UCard
      v-for="framework in frameworks"
      variant="subtle"
      :key="framework.name"
      class="p-4 border border-gray-200 m-5 shadow-lg hover:"
    >
      <UIcon :name="framework.icon" :class="`size-8 mb-4 ${framework.color}`" />
      <p class="text-xl font-bold mb-2 text-highlighted">
        {{ framework.name }}
      </p>
      <p class="text-base">{{ framework.description }}</p>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { Framework } from '~/types';

const frameworks: Framework[] = [
  {
    name: 'Vue',
    description:
      'Vue provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.',
    icon: 'i-simple-icons-vuedotjs',
    link: 'https://vuejs.org',
    color: 'bg-green-500',
  },
  {
    name: 'React',
    description:
      'A JavaScript library using reusable components and a virtual DOM for efficient rendering, making it ideal for modern web apps.',
    icon: 'i-simple-icons-react',
    link: 'https://reactjs.org',
    color: 'bg-blue-500',
  },
  {
    name: 'Svelte',
    description:
      'A modern JavaScript framework that compiles components into highly efficient, vanilla JavaScript at build time. It offers fast performance and a simple, reactive syntax for building web apps.',
    icon: 'i-simple-icons-svelte',
    link: 'https://svelte.dev',
    color: 'bg-red-500',
  },
  {
    name: 'Tailwind',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
    icon: 'i-simple-icons-tailwindcss',
    link: 'https://tailwindcss.com',
    color: 'bg-teal',
  },
  {
    name: 'Bootstrap',
    description:
      'A CSS framework for building responsive, mobile-first projects on the web.',
    icon: 'i-simple-icons-bootstrap',
    link: 'https://getbootstrap.com',
    color: 'bg-purple-500',
  },
  {
    name: 'Typescript',
    description:
      'A superset of JavaScript that adds static typing for enhanced code quality and developer experience.',
    icon: 'i-simple-icons-typescript',
    link: 'https://www.typescriptlang.org',
    color: 'bg-blue-500 text-white',
  },
];
</script>
