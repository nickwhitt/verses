<template>
  <li
    v-for="t in ['nkjv', 'esv', 'csb', 'net', 'nlt']"
    :class="{ 'hidden lg:block': t == 'nkjv' || t == 'net' }"
  >
    <b>{{ chapter }}:{{ verse.number }}</b>
    <span v-html="verse[t]"></span>
  </li>
</template>

<script setup>
defineProps(["chapter", "verse"]);
</script>

<style scoped>
:slotted(i) {
  font-style: italic;
}
b {
  font-weight: lighter;
  margin-right: 0.25rem;
}
</style>
