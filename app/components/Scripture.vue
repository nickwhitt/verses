<template>
  <USlideover title="Translations" :description="reference" :ui="{ footer: 'justify-end' }">
    <div class="grid grid-cols-11 items-baseline hover:bg-primary/5 dark:hover:bg-primary/15 select-none py-1 lg:py-2">
      <p class="col-span-5 text-sm md:text-base lg:text-lg text-right">
        <slot name="left" />
      </p>
      <p class="text-center text-xs md:text-sm lg:text-base text-muted">
        {{ verse || '' }}
      </p>
      <p class="col-span-5 text-sm md:text-base lg:text-lg">
        <slot name="right" />
      </p>
    </div>

    <template #body>
        <div class="flex flex-col gap-4">
          <slot />
        </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
const props = defineProps<{ book: string, chapter: number|string, verse: number|string }>()
const reference = `${props.book} ${props.chapter}:${props.verse}`
</script>