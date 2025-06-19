<template>
  <Page>
    <template #header>
      <PageHeader>
        <template #crumbs>
          <UBreadcrumb :items="[{label:'Old Testament'}, {label: 'Pentateuch'}]" />
        </template>
        <template #crumbs-rtl>
          <UBreadcrumb separator-icon="i-lucide-chevron-left" :items="[{label: 'תורה'}]" :ui="{list: 'flex-row-reverse'}" />
        </template>
      </PageHeader>
    </template>

    <NuxtPage />
  </Page>
</template>

<script setup lang="ts">
definePageMeta({ title: 'Exodus', titleRtl: 'שמות' })
</script>