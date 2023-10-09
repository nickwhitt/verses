<template>
  <div>
    <h3 class="font-bold text-gray-900">{{ title }}</h3>
    <ol class="ml-4">
      <slot />
    </ol>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
