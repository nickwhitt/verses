<template>
  <figure class="p-2">
    <figcaption class="inline">
      <cite>{{ number }}</cite>
    </figcaption>
    <slot />
  </figure>
</template>

<script setup>
const props = defineProps(["number"]);
</script>
