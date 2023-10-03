<template>
  <div class="container mx-auto px-4">
    <h1>Verses</h1>
    <p>Side-by-side scripture translations for deeper passage study</p>
    <div v-for="quarter in quarters" class="mb-4 border-b">
      <h2>{{ quarter.title }}</h2>
      <p>{{ quarter.date }}</p>
      <nav class="grid lg:grid-cols-3 gap-4 py-4">
        <figure v-for="unit in quarter.units">
          <figcaption>{{ unit.title }}</figcaption>
          <ul class="divide-y divide-gray-100">
            <li v-for="lesson in unit.lessons" class="p-4 gap-x-4">
              <NuxtLink :to="lesson.slug">
                <div class="flex justify-between">
                  <p>{{ lesson.title }}</p>
                  <time
                    :datetime="lesson.date.toISOString()"
                    class="text-sm font-light shrink-0"
                  >
                    {{
                      lesson.date.toLocaleDateString("en-us", {
                        dateStyle: "medium",
                        timeZone: "UTC",
                      })
                    }}
                  </time>
                </div>
                <p class="text-sm font-light">{{ lesson.passage }}</p>
              </NuxtLink>
            </li>
          </ul>
        </figure>
      </nav>
    </div>
  </div>
</template>

<script setup>
const quarters = [
  {
    title: "God's Exceptional Choice",
    date: "Fall, 2022",
    units: [
      {
        title: "God Calls Abraham's Family",
        lessons: [
          {
            date: new Date(Date.UTC(2022, 8, 1)),
            title: "The Call of Abram",
            slug: "call-of-abram",
            passage: "Gensis 12:1-5, 7; 15:1-7",
          },
          {
            date: new Date(Date.UTC(2022, 8, 7)),
            title: "God Chooses The Younger Twin",
            slug: "god-chooses-younger-twin",
            passage: "Genesis 25:19-34",
          },
        ],
      },
      {
        title: "Out of Slavery to Nationhood",
        lessons: [
          {
            date: new Date(Date.UTC(2022, 9, 1)),
            title: "The Birth of Moses",
            slug: "",
            passage: "Exodus 2:1-10",
          },
        ],
      },
      {
        title: "We Are God's Artwork",
        lessons: [
          {
            date: new Date(Date.UTC(2022, 10, 1)),
            title: "God Picked You!",
            slug: "",
            passage: "Eph 1:1-14",
          },
        ],
      },
    ],
  },
  {
    title: "From Darkness to Light",
    date: "Winter, 2021-2022",
    units: [
      {
        title: "God's Preparation",
        lessons: [
          {
            date: new Date(Date.UTC(2022, 11, 1)),
            title: "Zacharias Hears from God",
            slug: "",
            passage: "Luke 1:8-20",
          },
        ],
      },
    ],
  },
];
</script>
