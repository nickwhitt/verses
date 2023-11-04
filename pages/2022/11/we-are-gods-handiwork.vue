<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "We Are God's Handiwork",
  description: "Ephesians 2:1-10",
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
