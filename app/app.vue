<template>
  <UApp>
    <AppHeader/>
    
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'bg-elevated' },
})
</script>
