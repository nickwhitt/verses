<template>
  <header class="bg-gray-200 shadow">
    <div class="container mx-auto px-2 lg:max-w-screen-lg py-10">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        International Sunday School Lessons
      </h1>
    </div>
  </header>

  <div class="container mx-auto px-2 lg:max-w-screen-lg py-4 lg:py-10">
    <main class="grid gap-12">
      <article v-for="quarter in quarters" class="rounded shadow">
        <header class="border-b bg-gray-200">
          <h2 class="text-xl font-bold text-gray-900 p-2">
            {{ quarter.title }}
          </h2>
        </header>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
          <article
            v-for="lesson in quarter.lessons"
            class="relative bg-white hover:bg-gray-100 rounded shadow p-2"
          >
            <p class="text-xs">
              Unit {{ lesson.unit }} / Lesson {{ lesson.lesson }}
            </p>
            <h3 class="text-lg font-bold text-gray-900">
              <NuxtLink :to="lesson.slug">
                <span class="absolute inset-px"></span>
                {{ lesson.title }}
              </NuxtLink>
            </h3>
            <p class="text-sm">
              <em>{{ lesson.passage }}</em>
            </p>
          </article>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
const quarters = [
  {
    title: "God's Exceptional Choice",
    lessons: [
      {
        unit: 1,
        lesson: 1,
        title: "The Call of Abram",
        slug: "/call-of-abram",
        passage: "Genesis 12:1-5, 7; 15:1-7",
        date: new Date(Date.UTC(2022, 8, 4)),
      },
      {
        unit: 1,
        lesson: 2,
        title: "God Chooses The Younger Twin",
        // slug: "/god-chooses-younger-twin",
        passage: "Genesis 25:19-34",
        date: new Date(Date.UTC(2022, 8, 11)),
      },
      {
        unit: 1,
        lesson: 3,
        title: "Jacob Called Israel",
        slug: "/jacob-called-israel",
        passage: "Genesis 32:22-32",
        date: new Date(Date.UTC(2022, 8, 18)),
      },
      {
        unit: 1,
        lesson: 4,
        title: "The Scepter Given to Judah",
        // slug: "/scepter-given-to-judah",
        passage: "Genesis 32:22-26; 38:24-26; 49:10-12",
        date: new Date(Date.UTC(2022, 8, 25)),
      },
      {
        unit: 2,
        lesson: 1,
        title: "The Birth of Moses",
        slug: "#",
        passage: "Exodus 2:1-10",
        date: new Date(Date.UTC(2022, 9, 2)),
      },
      {
        unit: 2,
        lesson: 2,
        title: "Song of Moses",
        slug: "#",
        passage: "Deuteronomy 32:3-6, 10-14, 18",
        date: new Date(Date.UTC(2022, 9, 9)),
      },
      {
        unit: 2,
        lesson: 3,
        title: "The Call of Gideon",
        slug: "#",
        passage: "Judges 6:1-2, 7-16",
        date: new Date(Date.UTC(2022, 9, 16)),
      },
      {
        unit: 2,
        lesson: 4,
        title: "Who Is King?",
        slug: "#",
        passage: "1 Samuel 8:4-7; 10:17-24",
        date: new Date(Date.UTC(2022, 9, 23)),
      },
      {
        unit: 2,
        lesson: 5,
        title: "David Anointed as King",
        slug: "#",
        passage: "1 Samuel 16:1-13",
        date: new Date(Date.UTC(2022, 9, 30)),
      },
      {
        unit: 3,
        lesson: 1,
        title: "God Picked You!",
        slug: "#",
        passage: "Ephesians 1:1-14",
        date: new Date(Date.UTC(2022, 10, 6)),
      },
      {
        unit: 3,
        lesson: 2,
        title: "Christ Is Wisdom",
        slug: "#",
        passage: "Ephesians 1:15-23",
        date: new Date(Date.UTC(2022, 10, 13)),
      },
      {
        unit: 3,
        lesson: 3,
        title: "We Are God's Handiwork",
        slug: "#",
        passage: "Ephesians 2:1-10",
        date: new Date(Date.UTC(2022, 10, 20)),
      },
      {
        unit: 3,
        lesson: 4,
        title: "God Gives Tools for Our Protection",
        slug: "#",
        passage: "Ephesians 6:10-18",
        date: new Date(Date.UTC(2022, 10, 27)),
      },
    ],
  },
];
</script>
