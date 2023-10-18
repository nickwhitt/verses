<template>
  <div>
    <div class="border-b pb-4 mb-4">
      <h2 class="text-xl font-bold text-gray-900">{{ title }}</h2>
    </div>
    <div class="grid sm:grid-cols-3 gap-3">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
