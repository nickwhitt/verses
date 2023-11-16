<template>
  <hgroup class="py-8">
    <p class="font-light">{{ unit }}</p>
    <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">
      {{ title }}
    </h1>
    <p class="flex items-center font-light gap-2">
      <BookOpenIcon class="h-5 w-5" />
      {{ description }}
      <CalendarDaysIcon v-if="date" class="h-5 w-5" />
      {{ date }}
    </p>
  </hgroup>
</template>

<script setup>
import { BookOpenIcon, CalendarDaysIcon } from "@heroicons/vue/24/outline";
defineProps(["unit", "title", "description", "date"]);
</script>
