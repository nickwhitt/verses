<template>
  <div class="">
    <p class="flex items-center gap-2">
      <ArrowLongLeftIcon class="h-5 w-5" />
      Previous
    </p>
    <p>
      <NuxtLink :to="slug">
        <slot />
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ArrowLongLeftIcon } from "@heroicons/vue/24/outline";
defineProps(["slug"]);
</script>
