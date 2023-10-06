<template>
  <Html class="bg-gray-100" />
  <nav class="bg-gray-800">
    <div class="container mx-auto lg:max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center">
        <div class="flex items-baseline">
          <p class="shrink-0 text-white">Verses</p>
          <ul class="flex items-baseline ml-10 space-x-4">
            <li class="text-gray-300 hover:text-white text-sm font-medium">
              Lessons
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div
    class="container mx-auto lg:max-w-screen-lg py-6 px-4 sm:px-6 lg:px-8 bg-white shadow"
  >
    <header class="border-b pb-4 mb-4 lg:mb-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        International Sunday School Lessons
      </h1>
    </header>

    <main class="grid gap-12">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        atque suscipit consequatur eaque sit, quas nemo, praesentium assumenda
        animi enim doloremque! Harum dolorem magni sit, molestiae nulla vel
        soluta quas.
      </p>
      <article class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <header class="my-auto">
          <p class="text-xl">God's Exceptional Choice</p>
          <p class="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            dolorum, ducimus incidunt et praesentium aliquam nisi, nihil
            perspiciatis quis dolorem nobis tempore est. Nostrum architecto
            impedit nam, dicta obcaecati ipsa.
          </p>
        </header>
        <div class="lg:col-span-2">
          <div class="grid gap-y-4 gap-4 md:border-l md:pl-4">
            <LessonUnit v-for="unit in units" :title="unit.title">
              <LessonItem
                v-for="lesson in unit.lessons"
                :title="lesson.title"
                :slug="lesson.slug"
                :passage="lesson.passage"
              />
            </LessonUnit>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
const units = [
  {
    title: "God Calls Abraham's Family",
    lessons: [
      {
        title: "The Call of Abram",
        slug: "/call-of-abram",
        passage: "Gensis 12:1-5, 7; 15:1-7",
        date: new Date(Date.UTC(2022, 8, 4)),
      },
      {
        title: "God Chooses The Younger Twin",
        slug: "/god-chooses-younger-twin",
        passage: "Genesis 25:19-34",
        date: new Date(Date.UTC(2022, 8, 11)),
      },
      {
        title: "Jacob Called Israel",
        slug: "#",
        passage: "Genesis 32:22-32",
        date: new Date(Date.UTC(2022, 8, 18)),
      },
      {
        title: "The Scepter Given to Judah",
        slug: "#",
        passage: "Genesis 32:22-26; 38:24-26; 49:10-12",
        date: new Date(Date.UTC(2022, 8, 25)),
      },
    ],
  },
  {
    title: "Out of Slavery to Nationhood",
    lessons: [
      {
        title: "The Birth of Moses",
        slug: "#",
        passage: "Exodus 2:1-10",
        date: new Date(Date.UTC(2022, 9, 2)),
      },
      {
        title: "Song of Moses",
        slug: "#",
        passage: "Deuteronomy 32:3-6, 10-14, 18",
        date: new Date(Date.UTC(2022, 9, 9)),
      },
      {
        title: "The Call of Gideon",
        slug: "#",
        passage: "Judges 6:1-2, 7-16",
        date: new Date(Date.UTC(2022, 9, 16)),
      },
      {
        title: "Who Is King?",
        slug: "#",
        passage: "1 Samuel 8:4-7; 10:17-24",
        date: new Date(Date.UTC(2022, 9, 23)),
      },
      {
        title: "David Anointed as King",
        slug: "#",
        passage: "1 Samuel 16:1-13",
        date: new Date(Date.UTC(2022, 9, 30)),
      },
    ],
  },
  {
    title: "We Are God's Artwork",
    lessons: [
      {
        title: "God Picked You!",
        slug: "#",
        passage: "Ephesians 1:1-14",
        date: new Date(Date.UTC(2022, 10, 6)),
      },
      {
        title: "Christ Is Wisdom",
        slug: "#",
        passage: "Ephesians 1:15-23",
        date: new Date(Date.UTC(2022, 10, 13)),
      },
      {
        title: "We Are God's Handiwork",
        slug: "#",
        passage: "Ephesians 2:1-10",
        date: new Date(Date.UTC(2022, 10, 20)),
      },
      {
        title: "God Gives Tools for Our Protection",
        slug: "#",
        passage: "Ephesians 6:10-18",
        date: new Date(Date.UTC(2022, 10, 27)),
      },
    ],
  },
];
</script>
