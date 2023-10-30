<template>
  <Body class="text-gray-500 bg-gray-50" />

  <nav class="bg-gray-800">
    <div class="container mx-auto lg:max-w-screen-lg px-2">
      <div class="flex h-16 items-center">
        <NuxtLink to="/" class="text-white">Vs</NuxtLink>
      </div>
    </div>
  </nav>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en-US" },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
useSeoMeta({
  titleTemplate: (title?: string) => (!title ? "Verses" : `${title} - Verses`),
});
</script>

<style>
i {
  font-style: italic;
}
li b {
  font-weight: lighter;
}
p b {
  font-weight: lighter;
  font-size: 0.75rem;
  line-height: 1rem;
  vertical-align: text-top;
  margin-right: 0.125rem;
}
</style>
