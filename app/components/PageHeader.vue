<template>
  <header class="bg-default shadow-sm sticky top-0">
    <UContainer class="py-2 lg:py-4">
      <div class="flex justify-between">
        <div>
          <slot name="crumbs" />
          <slot name="title">
            <h1 class="text-3xl font-bold tracking-tight text-highlighted">
              <slot>
                {{ $route.meta.title || 'Title' }}
              </slot>
            </h1>
          </slot>
        </div>

        <div v-if="$route.meta.titleRtl" class="hidden md:block">
          <slot name="crumbs-rtl" />
          <slot name="title-rtl">
            <h1 dir="rtl" class="text-3xl font-bold tracking-tight text-highlighted">
              {{ $route.meta.titleRtl }}
            </h1>
          </slot>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">

</script>
