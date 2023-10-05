<template>
  <div>
    <p class="font-bold">{{ title }}</p>
    <ol class="mx-4">
      <slot />
    </ol>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
