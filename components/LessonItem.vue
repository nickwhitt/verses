<template>
  <li class="flex justify-between items-end">
    <NuxtLink :to="slug" class="underline decoration-sky-500 text-gray-700">
      {{ title }}
    </NuxtLink>
    <span class="hidden sm:inline-block md:hidden lg:inline-block text-sm">
      {{ passage }}
    </span>
  </li>
</template>

<script setup>
const props = defineProps(["title", "slug", "passage"]);
</script>
