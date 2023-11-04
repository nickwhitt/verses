<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "God Gives Tools for Our Protection",
  description: "Ephesians 6:10-18",
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
