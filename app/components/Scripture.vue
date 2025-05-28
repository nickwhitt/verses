<template>
  <div class="grid grid-cols-11 items-baseline hover:bg-primary/5 dark:hover:bg-primary/15 select-none py-1 lg:py-2">
    <p class="col-span-5 text-sm md:text-base lg:text-lg text-right" :data-ref="refLeft">
      <slot name="left" />
    </p>
    <p class="text-center text-sm md:text-base lg:text-lg text-muted">
      {{ verse || '' }}
    </p>
    <p class="col-span-5 text-sm md:text-base lg:text-lg" :data-ref="refRight">
      <slot name="right" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ verse?:number, refLeft?:string, refRight?:string }>()
</script>