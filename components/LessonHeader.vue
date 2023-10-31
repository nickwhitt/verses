<template>
  <hgroup class="prose prose-slate dark:prose-invert py-8">
    <p class="font-light mb-0">{{ unit }}</p>
    <h1 class="m-0">{{ title }}</h1>
    <p class="flex items-center font-light gap-2 mt-0">
      <BookOpenIcon class="h-5 w-5" />
      {{ description }}
    </p>
  </hgroup>
</template>

<script setup>
import { BookOpenIcon } from "@heroicons/vue/24/outline";
defineProps(["unit", "title", "description"]);
</script>
