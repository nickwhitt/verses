<script setup>
const props = defineProps(["translation"]);
</script>

<template>
  <article class="prose sm:prose-sm md:prose-base lg:prose-sm xl:prose-base">
    <p class="text-center">{{ translation }}</p>
    <slot />
  </article>
</template>

<style scoped>
:slotted(b.verse-number) {
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
  vertical-align: text-top;
  margin-right: -0.2rem;
}
:slotted(li) {
  margin-top: 0px;
  margin-bottom: 0px;
}
:slotted(ol:not(.poetry)) {
  list-style-position: inside;
  padding-left: 0px;
}
:slotted(ol.poetry) {
  list-style-type: none;
}
:slotted(ol.poetry li) {
  text-indent: 1rem hanging;
}
:slotted(ol.poetry li.verse-number) {
  list-style-type: decimal;
}
:slotted(ol.poetry li.verse-number::marker) {
  font-size: 0.75rem;
}
</style>
