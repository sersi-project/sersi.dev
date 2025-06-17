<template>
  <main class="pt-10 ">
    <section class="flex justify-between w-[60rem]">
      <div class="relative flex">
      <span class="z-20 w-auto px-3 h-16 flex items-center justify-center bg-white text-black pr-8 rounded-r-full">
        <h3>~/get-started/with/sersi</h3>
      </span>
      <span class="absolute z-10 w-auto px-8 h-16 flex items-center justify-center bg-accent -right-30 rounded-r-full">
        <Icon name="jam:branch-f" size="24" />
        <h3>main</h3>
      </span>
    </div>
    <TerminalCodeButton prefix="npx" command="sersi@latest create" />
  </section>
  <section class="min-w-md max-w-[70vw] mt-16 space-x-8">
    <h2>Scaffold Your Projects in Record Time</h2>
    <p class="mt-5">With sersi, you can generate a project with your favourite framework, alongside your most used libraries and utilities. Gone are the days of repetitive setup workflows.</p>
  </section>
  <section class="min-w-md max-w-[70vw] mt-16 space-x-8">
    <h3 class="text-primary">Code Infrastructure </h3>
    <p class="mt-5">Define everything from file organization to dependencies, making project setup consistent and automated across your team.</p>
    <div class="flex">
      <div class="flex h-36 p-6 ml-10">
        <img src="~/assets/svg/tree.svg" alt="Tree" class="h-full w-full">
      </div>
      <div class="flex flex-col justify-center space-y-2 mt-8">
        <p>Effortlessly generate complex project structures with a single YAML configuration. </p>
        <div class="w-4/5">
        <TerminalCodeButton prefix="npx" command="sersi@latest build -f sersi.yaml" />
        </div>
      </div>
    </div>
  </section>
  <section class="min-w-md max-w-[70vw] mt-8 space-x-8">
    <h3 class="text-primary">Standardised File Structure</h3>
    <p class="mt-5">Maintain consistent project organization with predefined templates and conventions.</p>
    <div class="flex flex-col ">
      <div class="flex"><div class="flex h-48 p-6 ml-24">
        <img src="~/assets/svg/tree-2.svg" alt="Tree" class="h-full w-full">
      </div>
      <div class="flex flex-col justify-center space-y-2 mt-8 pb-9">
        <p>Streamline development with a clear, predictable structure that makes it easy for new team members to get started and maintain code quality across your projects. </p>  
      </div></div>
      <div class="w-1/2">
      <TerminalCodeButton prefix="" command="show example file structure" />
      </div>
    </div>
  </section>  
  </main>
</template>

