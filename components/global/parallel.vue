<template>
  <h2 class="border-b py-4 my-4 lg:my-8">{{ passage }}</h2>
  <div class="grid sm:grid-cols-3 gap-4">
    <slot name="left" />
    <slot name="middle" />
    <slot name="right" />
  </div>
</template>

<script setup>
const props = defineProps(["passage"]);
</script>
