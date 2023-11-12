<template>
  <slot name="header">
    <div class="contents font-semibold text-center dark:text-slate-100">
      <h2 class="hidden lg:block">NKJV</h2>
      <h2>ESV</h2>
      <h2>CSB</h2>
      <h2 class="hidden lg:block">NET</h2>
      <h2>NLT</h2>
    </div>
  </slot>

  <ul v-for="verse in verses" class="contents text-sm xl:text-base">
    <VerseRow :chapter="chapter" :verse="verse" />
  </ul>
</template>

<script setup>
defineProps(["chapter", "verses"]);
</script>
