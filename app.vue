<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <nav class="bg-gray-800">
    <div class="xl:container mx-auto xl:max-w-screen-xl px-4">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="text-white">Vs</NuxtLink>
        <button
          class="hidden dark:flex"
          @click="$colorMode.preference = 'light'"
        >
          <SunIcon class="h-6 w-6 text-gray-200" />
        </button>
        <button class="dark:hidden" @click="$colorMode.preference = 'dark'">
          <MoonIcon class="h-6 w-6 text-gray-200" />
        </button>
      </div>
    </div>
  </nav>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
useHead({
  htmlAttrs: { lang: "en-US" },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
useSeoMeta({
  titleTemplate: (title?: string) => (!title ? "Verses" : `${title} - Verses`),
});
</script>
