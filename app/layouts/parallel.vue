<template>
  <UContainer class="grid lg:grid-cols-3 gap-4 my-6">
    <main class="lg:col-span-2">
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

    <aside class="hidden lg:block sticky top-0 h-screen overflow-y-auto">
      <UCard>
        <template #header>
          <p>Translations</p>
        </template>

        <div class="flex flex-col gap-4">
          <slot name="translations" />
        </div>
      </UCard>
    </aside>
  </UContainer>
</template>

<script setup lang="ts">
defineProps<{ title?:string, lastPage?:string, nextPage?:string }>()
</script>