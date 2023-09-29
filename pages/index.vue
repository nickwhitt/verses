<script setup>
const { data } = await useAsyncData("body", () =>
  queryContent("gen", "12")
    .where({ verse: { $lte: 7 } })
    .where({ verse: { $ne: 6 } })
    .find()
);
</script>

<template>
  <article class="container mx-auto px-4">
    <h1 class="text-4xl font-bold">God Calls Abraham's Family</h1>

    <div>
      <h2 class="text-2xl font-bold my-4 border-b">Genesis 12:1-5, 7</h2>
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <section>
          <h3 class="text-l mb-4 underline">King James Version</h3>
          <ol class="">
            <Verse
              v-for="verse in data"
              :chapter="verse.chapter"
              :verse="verse.verse"
              :lines="verse.kjv"
            />
          </ol>
        </section>
        <section>
          <h3 class="text-l mb-4 underline">New King James Version</h3>
          <ol class="">
            <Verse
              v-for="verse in data"
              :chapter="verse.chapter"
              :verse="verse.verse"
              :lines="verse.nkjv"
            />
          </ol>
        </section>
        <section>
          <h3 class="text-l mb-4 underline">New International Version</h3>
          <ol>
            <Verse
              v-for="verse in data"
              :chapter="verse.chapter"
              :verse="verse.verse"
              :lines="verse.niv"
            />
          </ol>
        </section>
        <section>
          <h3 class="text-l mb-4 underline">English Standard Version</h3>
          <ol>
            <Verse
              v-for="verse in data"
              :chapter="verse.chapter"
              :verse="verse.verse"
              :lines="verse.esv"
            />
          </ol>
        </section>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold my-4 border-b">Genesis 15:1-7</h2>
      <div></div>
    </div>
  </article>
</template>
