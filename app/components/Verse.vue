<template>
  <div>
    <p class="text-sm md:text-base lg:text-lg" :dir="rtl ? 'rtl' : 'ltr'">
      <slot />
    </p>
    <p class="text-xs md:text-sm lg:text-base text-muted">
      <cite>{{ source }}</cite>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ source:string, rtl?:boolean }>()
</script>