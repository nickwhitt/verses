<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "Who Is King?",
  description: "1 Samuel 8:4-7; 10:17-24",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>
</template>
