<template>
  <Page>
      <UCard>
      <UTabs :items="items" variant="link">
        <template #content="{ item }">
          <p>{{ item.content }}</p>

          <UCard v-for="group in item.books" variant="soft" class="mt-6 bg-default">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold uppercase tracking-tight">{{ group.title.en }}</h3>
                <h3 v-if="group.title.he" class="text-xl font-medium" dir="rtl">{{ group.title.he }}</h3>
              </div>
            </template>

            <ol class="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <li v-for="book in group.books">
                <USlideover :title="book.title?.en">
                  <UButton :label="book.title?.en" variant="link" color="neutral" class="hover:underline" />

                  <template #body>
                    <UCard variant="soft" class="bg-default">
                      <template #header>
                        <h3 class="font-semibold tracking-tight">Chapters</h3>
                      </template>
                      <ol class="flex flex-wrap gap-2">
                        <ULink as="li" v-for="text, chapter in book.chapters" :to='`${book.slug}/${chapter + 1}`' class="flex items-center justify-center size-[50px] border border-accented hover:underline hover:bg-elevated">
                          {{ chapter + 1 }}
                        </ULink>
                      </ol>
                    </UCard>

                    <UCard v-if="book.description" variant="soft" class="bg-default">
                      <template #header>
                        <div class="flex items-center justify-between">
                          <h3 class="font-semibold tracking-tight">{{ book.title.roma }}</h3>
                          <h3 class="text-lg" dir="rtl">{{ book.title.he }}</h3>
                        </div>
                      </template>

                      <p>{{ book.description }}</p>
                    </UCard>

                    <UCard v-if="book.readings" variant="soft" class="bg-default">
                      <template #header>
                        <h3 class="font-semibold tracking-tight">Readings</h3>
                      </template>
                      <ol>
                        <li v-for="reading in book.readings" class="grid grid-cols-7 gap-2 hover:bg-elevated">
                          <p class="col-span-2">{{ reading.title.en }}</p>
                          <p class="col-span-2 text-right text-lg" dir="rtl">{{ reading.title.he }}</p>
                          <p class="col-span-3 text-right">{{ reading.start.chapter }}.{{ reading.start.verse }} - {{ reading.end.chapter }}.{{ reading.end.verse }}</p>
                        </li>
                      </ol>
                    </UCard>
                    
                  </template>
                </USlideover>
              </li>
            </ol>
          </UCard>
          
        </template>
      </UTabs>
      </UCard>
  </Page>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { newTestament, oldTestament, tanakh } from '@/constants/books';

const items = ref<TabsItem[]>([
  {
    label: 'Tanakh',
    content: 'Original ordering of the Jewish Bible.',
    books: tanakh,
  },
  {
    label: 'Old Testament',
    content: 'Traditional ordering of modern Christian Bibles.',
    books: oldTestament,
  },
  {
    label: 'New Testament',
    content: '',
    books: newTestament,
  }
])
</script>