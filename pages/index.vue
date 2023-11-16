<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const { data: cycle22 } = await useFetch("/api/cycle22");
const { data: cycle11 } = await useFetch("/api/cycle11");
</script>

<template>
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <header class="py-8">
      <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">
        International Sunday School Lessons
      </h1>
    </header>

    <TabGroup :defaultIndex="0" v-for="cycle in [cycle22]">
      <div class="border-b dark:border-slate-700">
        <div class="md:flex items-baseline">
          <h3 class="font-semibold">{{ cycle.name }}</h3>
          <div class="mt-4 md:mt-0 md:ml-10">
            <TabList as="nav" class="flex -mb-px">
              <Tab
                as="a"
                v-for="quarter in cycle.quarters"
                v-slot="{ selected }"
                class="font-light px-1 pb-2"
              >
                <span
                  class="hover:border-b-2 border-slate-700 dark:border-slate-300 pb-2"
                  :class="{
                    'font-normal text-sky-500 border-b-2 !border-sky-500':
                      selected,
                  }"
                >
                  {{ quarter.title }}
                </span>
              </Tab>
            </TabList>
          </div>
        </div>
      </div>
      <TabPanels>
        <TabPanel v-for="quarter in cycle.quarters">
          <div class="py-6">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ quarter.name }}
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="unit in quarter.units"
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
