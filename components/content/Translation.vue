<template>
  <article class="prose sm:prose-sm lg:prose-base bg-white rounded shadow p-2">
    <p class="text-center">{{ title }}</p>
    <ContentSlot :use="$slots.default" />
  </article>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
