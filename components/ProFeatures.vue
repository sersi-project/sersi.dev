<template>
  <div class="flex justify-center h-[142vh]">
    <motion.div
      :style="{
        opacity: 100,
      }"
      class="w-[500px] h-[56vh] border border-gray-200 shadow-lg rounded-lg sticky top-20"
    >
      <div v-if="scrollValue < 0.85">
        <div
          class="flex justify-between items-center h-10 w-full border-b border-gray-200 px-2"
        >
          <div class="flex items-center text-sm font-bold">
            <UIcon class="size-5" name="i-simple-icons-yaml" />
            <code>sersi.yaml</code>
          </div>
          <UButton size="sm" icon="i-lucide-copy" variant="outline" />
        </div>
        <div class="h-full w-full p-4">
          <pre class="text-sm">{{ yamlSnippet }}</pre>
        </div>
      </div>
      <div v-else class="h-full w-full p-4 overflow-y-auto">
        <UTree :items="treeData" size="lg" />
      </div>
    </motion.div>

    <div class="w-1/2 h-[142vh] text-center">
      <div class="h-[56vh] flex flex-col justify-center items-center">
        <p class="text-2xl font-bold">Advanced Scaffold as Code</p>
        <p class="text-sm text-gray-500">
          Define your project structure and dependencies in a single file.
        </p>
      </div>
      <div class="h-[10vh]"></div>
      <div class="h-[56vh] flex flex-col justify-center items-center">
        <p class="text-2xl font-bold">Standardised File Structure</p>
        <p class="text-sm text-gray-500">
          Define your project structure and dependencies in a single file.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion, useScroll } from 'motion-v';
const scrollValue = ref(0);
const { scrollYProgress } = useScroll();
scrollYProgress.on('change', (value) => {
  scrollValue.value = value;
});
console.log(scrollValue.value);
const yamlSnippet = `
template: "my-favourite-arch"
type: personal
name: "my-fullstack-app"
scaffold:
  frontend:
    framework: "vue"
    css: "tailwind"
    lang: "ts"
    deps:
      - nuxt-ui
      - prettier 
  backend:
    framework: "express"
    lang: "ts"
    database: "mongodb"
    cache: "redis"
  devops:
    docker: true
    CICD: "github-actions"
    monitoring: "prometheus"
`;

const treeData = ref([
  {
    label: 'my-fullstack-app/',
    defaultExpanded: true,
    children: [
      {
        label: 'frontend/',
        defaultExpanded: true,
        children: [
          {
            label: 'src/',
            children: [
              {
                label: 'assets/',
                children: [
                  { label: 'logo.svg', icon: 'i-vscode-icons-file-type-svg' },
                ],
              },
              {
                label: 'components/',
                children: [
                  { label: 'Hero.vue', icon: 'i-vscode-icons-file-type-vue' },
                  { label: 'NavBar.vue', icon: 'i-vscode-icons-file-type-vue' },
                  { label: 'Footer.vue', icon: 'i-vscode-icons-file-type-vue' },
                ],
              },
              { label: 'main.ts', icon: 'i-vscode-icons-file-type-typescript' },
              { label: 'styles.css', icon: 'i-vscode-icons-file-type-css' },
              { label: 'App.vue', icon: 'i-vscode-icons-file-type-vue' },
              { label: 'index.html', icon: 'i-vscode-icons-file-type-html' },
            ],
          },
          {
            label: 'public/',
            children: [
              { label: 'vite.svg', icon: 'i-vscode-icons-file-type-svg' },
            ],
          },
          { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
          { label: 'sersi.yaml', icon: 'i-vscode-icons-file-type-yaml' },
          {
            label: 'vite.config.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          { label: 'tsconfig.json', icon: 'i-vscode-icons-file-type-json' },
          {
            label: 'tsconfig.node.json',
            icon: 'i-vscode-icons-file-type-json',
          },
          { label: 'tsconfig.app.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'index.html', icon: 'i-vscode-icons-file-type-html' },
        ],
      },
      {
        label: 'backend/',
        children: [
          {
            label: 'src/',
            children: [
              { label: 'app.ts', icon: 'i-vscode-icons-file-type-typescript' },
              {
                label: 'server.ts',
                icon: 'i-vscode-icons-file-type-typescript',
              },
              {
                label: 'config/',
                children: [
                  {
                    label: 'mongodb.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'controllers/',
                children: [
                  {
                    label: 'user.controller.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'routes/',
                children: [
                  {
                    label: 'user.route.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'middlewares/',
                children: [
                  {
                    label: 'error.middleware.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'models/',
                children: [
                  {
                    label: 'user.model.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'services/',
                children: [
                  {
                    label: 'user.service.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'utils/',
                children: [
                  {
                    label: 'logger.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
            ],
          },
          { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
          { label: 'tsconfig.json', icon: 'i-vscode-icons-file-type-json' },
        ],
      },
    ],
  },
]);
</script>
