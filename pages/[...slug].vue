<template>
  <ContentDoc v-slot="{ doc }">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ doc.title }}
      </h1>
      <div class="mt-2 flex items-center text-sm text-gray-500">
        <svg
          class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
            clip-rule="evenodd"
          />
        </svg>
        <time :datetime="doc.date">
          {{ dayjs(doc.date).format("MMM D, YYYY") }}
        </time>
      </div>
    </header>

    <ContentRenderer :value="doc" tag="main" />

    <footer class="border-t mt-12 py-4">
      <div class="grid sm:grid-cols-3 gap-4">
        <p class="text-xs">
          Scripture taken from the New King James Version®. Copyright © 1982 by
          Thomas Nelson. Used by permission. All rights reserved.
        </p>
        <p class="text-xs">
          Scripture quotations are from the ESV® Bible (The Holy Bible, English
          Standard Version®), © 2001 by Crossway, a publishing ministry of Good
          News Publishers. Used by permission. All rights reserved.
        </p>
        <p class="text-xs">
          Scriptures taken from the Holy Bible, New International Version®,
          NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by
          permission of Zondervan. All rights reserved worldwide.
        </p>
      </div>
    </footer>
  </ContentDoc>
</template>

<script setup>
import dayjs from "dayjs";
</script>
