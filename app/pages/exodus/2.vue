<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-semibold tracking-tight text-center text-secondary">
        The Birth of Moses
      </h2>
      <h2 class="text-xl font-semibold tracking-tight text-center text-secondary">
        Moses Flees to Midian
      </h2>
    </template>

    <div class="max-w-prose mx-auto">
      <Scripture v-for="scripture, verse in data" :verse="verse" book="Exo" :chapter="2">
        <template #left>{{ scripture.kjv }}</template>
        <template #right>{{ scripture.niv }}</template>

        <Verse v-for="text, source in scripture" :source="Sources[source]" :rtl="source === 'heb'">
          {{ text }}
        </Verse>
      </Scripture>
    </div>

    <template #footer>
      <div class="text-center">
        <UButton to="/exodus/1" icon="i-lucide-chevron-left" variant="link" size="xl" />
        <UButton to="/" icon="i-lucide-chevron-right" variant="link" size="xl" />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { Sources } from '~/constants'

definePageMeta({ title: 'Exodus 2' })
const { data } = await useFetch('/api/exodus/2')
</script>