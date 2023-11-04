<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "Christ Is Wisdom",
  description: "Ephesians 1:15-23",
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
