<template>
  <li class="flex justify-between items-end">
    <NuxtLink
      :to="slug"
      class="underline decoration-sky-500 hover:text-gray-900"
    >
      {{ title }}
    </NuxtLink>
    <span class="hidden md:inline-block text-sm">
      {{ passage }}
    </span>
  </li>
</template>

<script setup>
const props = defineProps(["title", "slug", "passage"]);
</script>
