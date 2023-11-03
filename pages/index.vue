<script setup>
const units = [
  {
    name: "God Calls Abraham's Family",
    lessons: [
      { name: "The Call of Abram", slug: "call-of-abram" },
      {
        name: "God Chooses The Younger Twin",
        slug: "god-chooses-younger-twin",
      },
      { name: "Jacob Called Israel", slug: "jacob-called-israel" },
      { name: "The Scepter Given to Judah", slug: "scepter-given-to-judah" },
    ],
  },
  {
    name: "Out of Slavery to Nationhood",
    lessons: [
      { name: "The Birth of Moses" },
      { name: "Song of Moses" },
      { name: "The Call of Gideon" },
      { name: "Who Is King?" },
      { name: "David Anointed as King" },
    ],
  },
  {
    name: "We Are God's Artwork",
    lessons: [
      { name: "God Picked You!" },
      { name: "Christ Is Wisdom" },
      { name: "We Are God's Handiwork" },
      { name: "God Gives Tools for Our Protection" },
    ],
  },
];
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <header class="prose prose-slate dark:prose-invert py-8">
      <h1 class="m-0">International Sunday School Lessons</h1>
    </header>

    <div class="prose prose-slate dark:prose-invert">
      <h2 class="mb-4 md:mb-6">God's Exceptional Choice</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <div
        v-for="unit in units"
        class="md:border dark:border-slate-700 rounded-lg h-fit"
      >
        <div class="py-2 md:px-4 border-b dark:border-slate-700">
          <h3 class="text-lg tracking-tight font-medium">
            {{ unit.name }}
          </h3>
        </div>
        <ol class="py-2 px-4 list-none space-y-2">
          <li v-for="lesson in unit.lessons">
            <NuxtLink
              :to="lesson.slug"
              class="not-prose hover:dark:text-slate-200 hover:underline"
            >
              {{ lesson.name }}
            </NuxtLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
