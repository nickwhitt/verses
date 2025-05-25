<template>
  <UApp>
    <div class="min-h-full">
      <nav class="bg-neutral-900">
        <UContainer>
          <div class="flex items-center justify-between h-16 text-white">
            <p>logo</p>
            <ColorModeButton />
          </div>
        </UContainer>
      </nav>

      <header class="bg-default shadow-sm">
        <UContainer class="py-6">
          <h1 class="text-3xl font-bold tracking-tight text-highlighted">
            {{ $route.meta.title || 'Title' }}
          </h1>
        </UContainer>
      </header>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <footer>
        <UContainer class="py-16 sm:py-24 lg:py-32">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <p class="">logo</p>
            <div class="mt-16 xl:mt-0 grid grid-cols-2 gap-8 xl:col-span-2 text-sm/6">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="font-semibold">1</h3>
                  <ul class="mt-6 space-y-4">
                    <li>foo</li>
                    <li>bar</li>
                    <li>baz</li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="font-semibold">2</h3>
                  <ul class="mt-6 space-y-4">
                    <li>foo</li>
                    <li>bar</li>
                    <li>baz</li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="font-semibold">3</h3>
                  <ul class="mt-6 space-y-4">
                    <li>foo</li>
                    <li>bar</li>
                    <li>baz</li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="font-semibold">4</h3>
                  <ul class="mt-6 space-y-4">
                    <li>foo</li>
                    <li>bar</li>
                    <li>baz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex md:items-center md:justify-between mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-muted">
            <div class="flex gap-6 md:order-2">
              <UButton icon="i-lucide-github" size="xs" color="neutral" variant="link" />
            </div>
            <p class="mt-8 md:mt-0 text-sm/6 md:order-1">&copy; 2025 Project. All rights reserved.</p>
          </div>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { class: 'h-full' },
  bodyAttrs: { class: 'h-full bg-elevated' }
})
</script>
