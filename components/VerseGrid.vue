<template>
  <slot name="header">
    <div class="contents font-semibold text-center dark:text-slate-100">
      <h2 class="hidden lg:block">New King James Version</h2>
      <h2>English Standard Version</h2>
      <h2>Christian Standard Bible</h2>
      <h2 class="hidden lg:block">New English Translation</h2>
      <h2>New Living Translation</h2>
    </div>
  </slot>

  <ul v-for="verse in verses" class="contents text-sm xl:text-base">
    <VerseRow :chapter="chapter" :verse="verse" />
  </ul>
</template>

<script setup>
defineProps(["chapter", "verses"]);
</script>
