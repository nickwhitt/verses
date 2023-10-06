<template>
  <slot />
  <div class="grid sm:grid-cols-3 gap-4">
    <slot name="left" />
    <slot name="middle" />
    <slot name="right" />
  </div>
</template>
