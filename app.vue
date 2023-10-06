<template>
  <Html class="bg-gray-100" />
  <nav class="bg-gray-800">
    <div class="container mx-auto lg:max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center">
        <div class="flex items-baseline">
          <p class="shrink-0 text-white"><NuxtLink to="/">Verses</NuxtLink></p>
          <ul class="flex items-baseline ml-10 space-x-4">
            <li class="text-gray-300 hover:text-white text-sm font-medium">
              <!-- Lessons -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div
    class="container mx-auto lg:max-w-screen-lg py-6 px-4 sm:px-6 lg:px-8 bg-white shadow"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
