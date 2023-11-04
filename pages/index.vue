<script setup>
import { CalendarIcon } from "@heroicons/vue/24/outline";
const { data: cycles } = await useFetch("/api/cycles");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <header class="prose prose-slate dark:prose-invert py-8">
      <h1 class="m-0">International Sunday School Lessons</h1>
    </header>

    <article v-for="cycle in cycles" class="">
      <div class="prose prose-slate dark:prose-invert">
        <hgroup>
          <p class="flex items-center font-light gap-2 my-0">
            <CalendarIcon class="h-5 w-5" />
            {{ cycle.quarter }}
          </p>
          <h2 class="mt-0">{{ cycle.name }}</h2>
        </hgroup>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <div
          v-for="unit in cycle.units"
          class="md:border dark:border-slate-700 rounded-lg h-fit"
        >
          <div class="py-2 md:px-4 border-b dark:border-slate-700">
            <h3 class="text-xl font-medium tracking-tight">
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
    </article>
  </div>
</template>
