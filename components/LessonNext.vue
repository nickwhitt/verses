<template>
  <div>
    <p class="flex flex-row-reverse items-center gap-2">
      <ArrowLongRightIcon class="h-5 w-5" />
      Next
    </p>
    <p>
      <NuxtLink :to="slug">
        <slot />
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";
defineProps(["slug"]);
</script>
