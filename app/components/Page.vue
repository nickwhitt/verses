<template>
  <div>
    <slot name="header">
      <PageHeader />
    </slot>

    <slot name="body">
      <UContainer class="my-6">
        <slot />
      </UContainer>
    </slot>

    <slot name="footer">
      <PageFooter />
    </slot>
  </div>
</template>