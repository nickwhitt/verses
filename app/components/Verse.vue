<template>
  <div>
    <p class="text-sm md:text-base" :dir="rtl ? 'rtl' : 'ltr'">
      <slot />
    </p>
    <p class="text-xs md:text-sm text-muted">
      <cite>{{ source }}</cite>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ source:string, rtl?:boolean }>()
</script>