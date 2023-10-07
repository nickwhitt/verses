<template>
  <article class="prose sm:prose-sm lg:prose-base">
    <p class="text-center">{{ translation }}</p>
    <slot />
  </article>
</template>

<script setup>
const props = defineProps(["translation"]);
</script>
