<template>
  <Page>
    <template #header>
      <PageHeader>
        <template #crumbs>
          <UBreadcrumb :items="[{label:'Old Testament'}, {label: 'Pentateuch'}]" />
        </template>
        <template #crumbs-rtl>
          <UBreadcrumb separator-icon="i-lucide-chevron-left" :items="[{label: 'מִקְרָא'}, {label: 'תּוֹרָה'}]" :ui="{list: 'flex-row-reverse'}" />
        </template>
      </PageHeader>
    </template>

    <NuxtPage />
  </Page>
</template>
