<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Verses
        </h1>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Side-by-side passage translations for deeper scripture study.
        </p>
      </div>

      <div
        v-for="quarter in quarters"
        class="mx-auto mt-4 max-w-2xl pt-4 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none border-t border-gray-200"
      >
        <hgroup class="mb-4">
          <h2 class="text-xl font-bold tracking-light text-gray-800">
            {{ quarter.title }}
          </h2>
          <p>{{ quarter.date }}</p>
        </hgroup>
        <ol class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
          <li v-for="unit in quarter.units" class="border rounded-xl shadow">
            <div class="p-6 gap-x-4 bg-gray-50 border-b">
              {{ unit.title }}
            </div>
            <dl class="divide-y py-2 px-6">
              <div
                v-for="lesson in unit.lessons"
                class="group relative flex justify-between py-3 gap-x-4"
              >
                <dt>
                  <NuxtLink
                    :to="lesson.slug"
                    class="text-gray-900 group-hover:text-gray-600"
                  >
                    <span class="absolute inset-1" />
                    {{ lesson.title }}
                  </NuxtLink>
                  <p class="text-sm">{{ lesson.passage }}</p>
                </dt>
                <dd class="text-sm shrink-0">
                  {{
                    lesson.date.toLocaleDateString("en-us", {
                      dateStyle: "medium",
                      timeZone: "UTC",
                    })
                  }}
                </dd>
              </div>
            </dl>
          </li>
        </ol>
      </div>
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
            date: new Date(Date.UTC(2022, 8, 4)),
            title: "The Call of Abram",
            slug: "call-of-abram",
            passage: "Gensis 12:1-5, 7; 15:1-7",
          },
          {
            date: new Date(Date.UTC(2022, 8, 11)),
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
            date: new Date(Date.UTC(2022, 9, 2)),
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
            date: new Date(Date.UTC(2022, 10, 6)),
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
            date: new Date(Date.UTC(2022, 11, 4)),
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
