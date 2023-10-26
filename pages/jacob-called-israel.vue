<template>
  <div class="xl:container mx-auto px-4">
    <hgroup class="py-12">
      <p>God Calls Abraham's Family</p>
      <h1 class="text-2xl font-bold text-zinc-900">Jacob Called Israel</h1>
      <p class="flex items-center gap-2">
        <BookOpenIcon class="h-5 w-5" />
        Genesis 32:22-32
      </p>
    </hgroup>
    <main class="grid sm:grid-cols-2 gap-4">
      <article class="prose">
        <h2 class="not-prose sm:text-center">King James Version</h2>
      </article>
      <article class="prose">
        <h2 class="not-prose sm:text-center">New International Version</h2>
      </article>
    </main>
    <aside class="hidden md:grid grid-cols-3 lg:grid-cols-5 py-4 gap-4">
      <div class="contents prose">
        <h2 class="hidden lg:grid not-prose text-center">
          New King James Version
        </h2>
        <h2 class="not-prose text-center">English Standard Version</h2>
        <h2 class="not-prose text-center">Christian Standard Bible</h2>
        <h2 class="hidden lg:grid not-prose text-center">
          New English Translation
        </h2>
        <h2 class="not-prose text-center">New Living Translation</h2>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { BookOpenIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
</script>
