<template>
  <UContainer class="my-6">
    <main>
      <UCard>
        <template #header>
          {{ title }}
        </template>

        <div class="max-w-prose mx-auto">
          <slot />
        </div>

        <template #footer>
          <div class="text-center">
            <UButton :to="lastPage" icon="i-lucide-chevron-left" variant="link" size="xl" />
            <UButton :to="nextPage" icon="i-lucide-chevron-right" variant="link" size="xl" />
          </div>
        </template>
      </UCard>
    </main>
  </UContainer>
</template>

<script setup lang="ts">
defineProps<{ title?:string, lastPage?:string, nextPage?:string }>()
</script>