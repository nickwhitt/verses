<template>
  <Body class="text-gray-500" />
  <nav class="bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center">
        <div class="flex items-baseline">
          <p class="shrink-0 text-white"><NuxtLink to="/">Vs</NuxtLink></p>
          <ul class="flex items-baseline ml-10 space-x-4">
            <li class="text-gray-300 hover:text-white text-sm font-medium">
              <!-- Lessons -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
