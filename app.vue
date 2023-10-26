<template>
  <Body class="text-gray-500 bg-gray-50" />

  <nav class="bg-gray-800">
    <div class="container mx-auto lg:max-w-screen-lg px-2">
      <div class="flex h-16 items-center">
        <NuxtLink to="/" class="text-white">Vs</NuxtLink>
      </div>
    </div>
  </nav>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
