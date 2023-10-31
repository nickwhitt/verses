<script setup>
defineProps(["translation"]);
</script>

<template>
  <article class="prose prose-slate dark:prose-invert">
    <h2 class="sm:text-center">{{ translation }}</h2>
    <div class="sm:prose-sm md:prose-base xl:prose-lg">
      <slot></slot>
    </div>
  </article>
</template>

<style scoped>
:slotted(i) {
  font-style: italic;
}
:slotted(li b) {
  font-weight: lighter;
}
:slotted(p b) {
  font-weight: lighter;
  font-size: 0.75rem;
  line-height: 1rem;
  vertical-align: text-top;
  margin-right: 0.125rem;
}
</style>
