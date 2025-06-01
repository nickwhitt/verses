<template>
  <header class="bg-default shadow-sm sticky top-0">
    <UContainer class="py-2 lg:py-4">
      <slot name="crumbs" />
      
      <slot name="title">
        <h1 class="text-3xl font-bold tracking-tight text-highlighted">
          <slot>
            {{ $route.meta.title || 'Title' }}
          </slot>
        </h1>
      </slot>
    </UContainer>
  </header>
</template>