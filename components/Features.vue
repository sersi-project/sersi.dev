<template>
  <div class="flex justify-center h-[235vh] my-32">
    <div class="w-1/2 h-[148vh] text-left">
      <div class="h-[56vh] flex flex-col justify-center items-start gap-8">
        <div class="flex items-center gap-2 text-xl text-primary"><UIcon name="i-lucide-code" class="size-5" />Code infrastructure</div>
        <p class="text-4xl font-bold">Comprehensive Scaffold-as-Code</p>
        <p class="text-xl text-gray-500 w-4/5">
          Effortlessly generate complex project structures with a single YAML configuration. 
          Define everything from file organization to dependencies, making project setup 
          consistent and automated across your team.
        </p>
        <div class="flex justify-center items-center mb-4">
      <div
        class="border border-gray-200 p-5 px-8 w-auto flex justify-center items-center gap-10 rounded-sm shadow-lg"
      >
        <code>npx sersi<span class="text-purplish">@alpha</span> build -f sersi.yaml</code>
        <UButton
          icon="i-lucide-copy"
          @click="handleCopy"
          :color="copied ? 'neutral' : 'primary'"
        />
      </div>
    </div>
      </div>
      <div class="h-[26vh]"></div>
      <div class="h-[60vh] flex flex-col justify-center items-start gap-8">
        <div class="flex justify-center items-center gap-2 text-xl text-primary"><UIcon name="i-lucide-file" class="size-5" />File management</div>
        <p class="text-4xl font-bold">Standardised File Structure</p>
        <p class="text-xl text-gray-500 w-4/5">
          Maintain consistent project organization with predefined templates and conventions. 
          Streamline development with a clear, predictable structure that makes it easy for 
          new team members to get started and maintain code quality across your projects.
        </p>
      </div>
      <div class="h-[26vh]"></div>
      <div class="h-[60vh] ">
        <div class="border border-primary border-dashed flex flex-col justify-center items-start gap-8 p-8 py-12 mr-12">
          <div class="flex justify-center items-center gap-2 text-xl text-primary"><UIcon name="i-hugeicons-stars" class="size-5" />Pro Features</div>
        <p class="text-4xl font-bold">Fully Customizable Scaffolds</p>
        <p class="text-xl text-gray-500 w-4/5">
          Join Pro to unlock customizability - 
          Add custom hooks for pre and post installation scripts that you can run to install extra dependencies, seed databse or initialise third party integrations.
        </p>
        <UButton icon="i-hugeicons-stars" variant="outline" to="/pro" size="xl">Join Pro</UButton>
      </div>
        </div>
        
    </div>
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{
        duration: 0.2,
        type: 'tween',
        ease: 'easeInOut'
      }"
      :whileHover="{ scale: 1.02 }"
      class="w-[500px] h-[56vh] border border-gray-200 shadow-lg rounded-lg sticky top-32 transition-discrete ease-in duration-700"
    >
      <motion.div v-if="scrollValue < 0.40"
      key="yaml"
      :initial="{ opacity: 0, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut'
      }"
      >
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
      </motion.div>
      <motion.div v-if="scrollValue >= 0.40 && scrollValue < 0.55"
      key="tree"
      :initial="{ opacity: 0, scale: 1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.6,
        type: 'tween',
        ease: 'easeInOut'
      }"
      class="h-full w-full p-4 overflow-y-auto">
        <UTree :items="treeData" size="lg" />
      </motion.div>
      <motion.div v-if="scrollValue >= 0.55">
        <CodeTypeWriter />
      </motion.div>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { motion, useScroll } from 'motion-v';
import { useClipboard } from '@vueuse/core';

const scrollValue = ref(0);
const { scrollYProgress } = useScroll();
const { copy } = useClipboard();
const copied = ref(false);

const handleCopy = () => {
  copy('npx sersi@alpha build -f sersi.yaml');
  copied.value = true;
};

scrollYProgress.on('change', (value) => {
  console.log(scrollValue.value); // Uncomment this line if you want to debug the scroll value
  scrollValue.value = value;
});

const yamlSnippet = `
template: "my-favourite-arch"
type: personal
structure: monorepo
scaffold:
  frontend:
    framework: "vue"
    css: "tailwind"
    lang: "ts"
  backend:
    framework: "express"
    lang: "ts"
    database: "mongodb"
    cache: "redis"
  devops:
    docker: true
    CICD: "github-actions"
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
            label: '.github/',
            children: [
              {
                label: 'workflows/',
                children: [
                  {
                    label: 'ci.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                  {
                    label: 'release.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                ],
              },
            ],
          },
          {
            label: 'public/',
            children: [
              { label: 'vite.svg', icon: 'i-vscode-icons-file-type-svg' },
            ],
          },
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
          { label: 'Dockerfile', icon: 'i-vscode-icons-file-type-docker' },
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
            label: '.github/',
            children: [
              {
                label: 'workflows/',
                children: [
                  {
                    label: 'ci.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                  {
                    label: 'release.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                ],
              },
            ],
          },
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
          { label: 'Dockerfile', icon: 'i-vscode-icons-file-type-docker' },
          { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
          { label: 'tsconfig.json', icon: 'i-vscode-icons-file-type-json' },
        ],
      },
    ],
  },
]);
</script>
