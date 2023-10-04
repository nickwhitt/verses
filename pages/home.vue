<template>
  <Html class="bg-gray-100 text-gray-700" />
  <div class="bg-gray-800">
    <div class="container mx-auto lg:max-w-screen-lg px-4">
      <div class="flex h-16 items-center justify-between">
        <p class="text-gray-100 text-2xl">Verses</p>
        <p class="hidden md:block text-gray-300"></p>
      </div>
    </div>
  </div>

  <div class="container mx-auto lg:max-w-screen-lg px-4 py-6 bg-white shadow">
    <p class="text-2xl pb-12">
      Side-by-side passage translations for deeper scripture study.
    </p>

    <div class="grid md:grid-cols-3 gap-4">
      <div class="">
        <p class="text-xl">God's Exceptional Choice</p>
      </div>
      <div class="md:col-span-2">
        <div class="grid gap-y-4 gap-4 md:border-l md:pl-4">
          <div>
            <p class="font-bold">God Calls Abraham's Family</p>
            <ol class="mx-4">
              <li class="flex justify-between">
                <NuxtLink
                  to="/call-of-abram"
                  class="underline decoration-sky-500 hover:text-gray-900 shrink-0"
                >
                  The Call of Abram
                </NuxtLink>
                <span class="text-sm">Gensis 12:1-5, 7; 15:1-7</span>
              </li>
              <li class="flex justify-between">
                <NuxtLink
                  to="/god-chooses-younger-twin"
                  class="underline decoration-sky-500 hover:text-gray-900 shrink-0"
                >
                  God Chooses The Younger Twin
                </NuxtLink>
                <span class="text-sm">Genesis 25:19-34</span>
              </li>
            </ol>
          </div>
          <div>
            <p class="font-bold">Out of Slavery to Nationhood</p>
          </div>
          <div>
            <p class="font-bold">We Are God's Artwork</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
