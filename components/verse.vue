<script setup>
defineProps(["chapter", "verse", "lines"]);
</script>

<template>
  <li class="verse" :value="verse">
    <b class="verse-number">{{ verse }}</b>
    <span class="verse-line" v-for="line in lines">{{ line }}</span>
  </li>
</template>

<style>
.verse-line:not(:first-of-type) {
  display: block;
}
.verse-number {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  vertical-align: top;
  padding-right: 0.25rem;
}
</style>
