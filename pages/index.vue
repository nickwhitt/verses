<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const { data: cycles } = await useFetch("/api/cycles");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <header class="py-8">
      <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">
        International Sunday School Lessons
      </h1>
    </header>

    <TabGroup :defaultIndex="0">
      <p>2022-2023</p>
      <TabList class="flex gap-6 border-b dark:border-slate-700">
        <Tab v-for="cycle in cycles" v-slot="{ selected }">
          <span :class="{ 'border-b': selected }">{{ cycle.quarter }}</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="cycle in cycles">
          <div class="py-6">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ cycle.name }}
            </h2>
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
                    class="hover:dark:text-slate-200 hover:underline"
                  >
                    {{ lesson.name }}
                  </NuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
