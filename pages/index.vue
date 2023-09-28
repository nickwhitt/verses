<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h1 class="text-3xl font-bold underline">Index page</h1>
  <pre>{{ data }}</pre>
</template>
