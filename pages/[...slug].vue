<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <header class="border-b pb-4 mb-4 lg:mb-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ doc.title }}
        </h1>
        <h2>{{ doc.description }}</h2>
      </header>

      <ContentRenderer :value="doc" tag="main" />
    </article>
  </ContentDoc>
</template>
