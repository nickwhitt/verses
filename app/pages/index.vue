<template>
  <Page>
      <UCard>
        <template #header>
          <h2>Old Testament</h2>
        </template>

        <div class="grid grid-rows gap-4">
          <UCard v-for="group in ot" variant="soft" class="bg-default">
            <template #header>
              <h3>{{ group.title }}</h3>
            </template>
            <ol class="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <li v-for="book in group.books">
                <USlideover :title="book.en" :description="book.he">
                  <UButton :label="book.en" variant="link" color="neutral" class="hover:underline" />

                  <template #body>
                    <p>Chapters</p>
                    <ol class="flex flex-wrap gap-2 py-4">
                      <ULink as="li" v-for="chapter in book.chapters" :to='`${book.slug}/${chapter}`' class="flex items-center justify-center size-[50px] border border-accented hover:underline">
                        {{ chapter }}
                      </ULink>
                    </ol>
                  </template>
                </USlideover>
              </li>
            </ol>
          </UCard>
        </div>
      </UCard>
  </Page>
</template>

<script setup lang="ts">
const ot = [
  { title:'Pentateuch', books: [{ slug: '', en: 'Genesis'}, { slug: 'exodus', en: 'Exodus', he: 'שמות', roma:'Shemot', chapters: 40}, { slug: '', en: 'Leviticus'}, { slug: '', en: 'Numbers'}, { slug: '', en: 'Deuteronomy'}] },
  { title:'History', books: [{ slug: '', en: 'Joshua'}, { slug: '', en: 'Judges'}, { slug: '', en: 'Ruth'}, { slug: '', en: '1 Samuel'}, { slug: '', en: '2 Samuel'}, { slug: '', en: '1 Kings'}, { slug: '', en: '2 Kings'}, { slug: '', en: '1 Chronicles'}, { slug: '', en: '2 Chronicles'}, { slug: '', en: 'Ezra'}, { slug: '', en: 'Nehemiah'}, { slug: '', en: 'Esther'}] },
  { title:'Poetry', books: [{ slug: '', en: 'Job'}, { slug: '', en: 'Psalms'}, { slug: '', en: 'Proverbs'}, { slug: '', en: 'Ecclesiastes'}, { slug: '', en: 'Song of Songs'}] },
  { title:'Prophets', books: [{ slug: '', en: 'Isaiah'}, { slug: '', en: 'Jeremiah'}, { slug: '', en: 'Lamentations'}, { slug: '', en: 'Ezekiel'}, { slug: '', en: 'Daniel'}, { slug: '', en: 'Hosea'}, { slug: '', en: 'Joel'}, { slug: '', en: 'Amos'}, { slug: '', en: 'Obadiah'}, { slug: '', en: 'Jonah'}, { slug: '', en: 'Micha'}, { slug: '', en: 'Nahum'}, { slug: '', en: 'Habakkuk'}, { slug: '', en: 'Zephaniah'}, { slug: '', en: 'Haggai'}, { slug: '', en: 'Zechariah'}, { slug: '', en: 'Malachi'}] },
]

const tanakh = [
  { title: { en: 'Torah (Law)', he: 'תורה' }, books: [{ slug: '', en: 'Genesis'}, { slug: 'exodus', en: 'Exodus'}, { slug: '', en: 'Leviticus'}, { slug: '', en: 'Numbers'}, { slug: '', en: 'Deuteronomy'}] },
  { title: { en: "Nevi'im (Prophets)", he: 'נביאים' }, books: [{ slug: '', en: 'Joshua'}, { slug: '', en: 'Judges'}, { slug: '', en: '1 Samuel'}, { slug: '', en: '2 Samuel'}, { slug: '', en: '1 Kings'}, { slug: '', en: '2 Kings'}, { slug: '', en: 'Isaiah'}, { slug: '', en: 'Jeremiah'}, { slug: '', en: 'Ezekiel'}, { slug: '', en: 'Hosea'}, { slug: '', en: 'Joel'}, { slug: '', en: 'Amos'}, { slug: '', en: 'Obadiah'}, { slug: '', en: 'Jonah'}, { slug: '', en: 'Micha'}, { slug: '', en: 'Nahum'}, { slug: '', en: 'Habakkuk'}, { slug: '', en: 'Zephaniah'}, { slug: '', en: 'Haggai'}, { slug: '', en: 'Zechariah'}, { slug: '', en: 'Malachi'}] },
  { title: { en: 'Ketuvim (Writings)', he: 'כתובים' }, books: [{ slug: '', en: 'Psalms'}, { slug: '', en: 'Proverbs'}, { slug: '', en: 'Job'}, { slug: '', en: 'Song of Songs'}, { slug: '', en: 'Ruth'}, { slug: '', en: 'Lamentations'}, { slug: '', en: 'Ecclesiastes'}, { slug: '', en: 'Esther'}, { slug: '', en: 'Daniel'}, { slug: '', en: 'Ezra'}, { slug: '', en: 'Nehemiah'}, { slug: '', en: '1 Chronicles'}, { slug: '', en: '2 Chronicles'}] },
]
</script>