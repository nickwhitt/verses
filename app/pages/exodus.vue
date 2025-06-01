<template>
  <Page>
    <template #header>
      <PageHeader>
        <template #crumbs>
          <UBreadcrumb :items="[{label:'Old Testament'}, {label: 'Pentateuch'}]" />
        </template>
      </PageHeader>
    </template>
          
    <NuxtPage />
  </Page>
</template>