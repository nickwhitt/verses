<template>
  <figure class="px-2 py-1">
    <figcaption class="inline">
      <cite>
        {{ number }}
        <span class="sm:hidden">{{ translation }}</span>
      </cite>
    </figcaption>
    <slot />
  </figure>
</template>

<script setup>
const props = defineProps(["number", "translation"]);
</script>

<style>
figure s {
  font-weight: 100;
}
figure u {
  text-decoration-line: underline;
}
figure i {
  font-style: italic;
}
</style>
