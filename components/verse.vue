<script setup lang="ts">
defineProps({
  number: Number,
  lines: Array<string>
})
</script>

<template>
  <li :value="number">
    <span v-for="line in lines">{{ line }}</span>
  </li>
</template>
