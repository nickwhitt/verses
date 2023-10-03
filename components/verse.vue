<script setup>
const props = defineProps(["number"]);
</script>

<template>
  <b class="text-xs font-light align-text-top mr-1">{{ number }}</b>
  <slot />
</template>
