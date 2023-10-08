<template>
  <div>
    <div class="border-b pb-4 mb-4">
      <h2 class="text-xl font-bold text-gray-900">{{ passage }}</h2>
    </div>
    <div class="grid sm:grid-cols-3 gap-4">
      <slot name="left" />
      <slot name="middle" />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["passage"]);
</script>
