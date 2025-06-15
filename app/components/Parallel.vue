<template>
  <div class="flex justify-center items-baseline gap-4 p-px">
    <div class="flex-none w-6">
      <p v-if="verse" class="text-xs sm:text-sm font-light text-muted text-right">
        {{ verse }}
      </p>
    </div>
    <div class="grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div class="hidden md:block max-w-sm">
        <slot name="left" />
      </div>
      <div class="max-w-sm">
        <slot />
      </div>
      <div class="max-w-sm">
        <slot name="right" />
      </div>
      <div class="hidden lg:block max-w-sm">
        <slot name="far-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{verse?:number}>()
</script>
