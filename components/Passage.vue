<script setup>
defineProps(["translation"]);
</script>

<template>
  <article class="sm:text-sm md:text-base xl:text-lg">
    <div class="sm:text-center mb-6">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
        {{ translation }}
      </h2>
    </div>
    <slot></slot>
  </article>
</template>

<style scoped>
:slotted(i) {
  font-style: italic;
}
:slotted(b) {
  font-weight: lighter;
  font-size: 0.75rem;
}
:slotted(p b) {
  line-height: 1rem;
  vertical-align: text-top;
  margin-right: 0.125rem;
}
:slotted(p:not(.lead)) {
  text-indent: 1.5rem;
}
:slotted(ol) {
  margin-left: 2rem;
}
:slotted(li) {
  position: relative;
  text-indent: 1.5rem hanging;
}
:slotted(li b) {
  position: absolute;
  left: -2rem;
}
</style>
