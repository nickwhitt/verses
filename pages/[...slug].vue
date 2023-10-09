<template>
  <Body class="bg-gray-50" />
  <ContentDoc v-slot="{ doc }">
    <header class="bg-gray-100 shadow">
      <div class="container mx-auto py-10 px-4">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ doc.title }}
        </h1>
      </div>
    </header>

    <div class="md:container mx-auto py-10 px-4">
      <ContentRenderer :value="doc" tag="main" class="grid gap-6" />
    </div>

    <footer class="border-t py-4 bg-gray-100">
      <div class="md:container mx-auto px-4">
        <div class="grid sm:grid-cols-3 gap-3">
          <!-- <p class="text-xs">
            Scripture taken from the New King James Version®. Copyright © 1982
            by Thomas Nelson. Used by permission. All rights reserved.
          </p> -->
          <p class="text-xs">
            Scripture quotations are from the ESV® Bible (The Holy Bible,
            English Standard Version®), © 2001 by Crossway, a publishing
            ministry of Good News Publishers. Used by permission. All rights
            reserved.
          </p>
          <p class="text-xs">
            Scriptures taken from the Holy Bible, New International Version®,
            NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by
            permission of Zondervan. All rights reserved worldwide.
          </p>
          <p class="text-xs">
            Scripture quotations marked (NLT) are taken from the Holy Bible, New
            Living Translation, copyright ©1996, 2004, 2015 by Tyndale House
            Foundation. Used by permission of Tyndale House Publishers, Carol
            Stream, Illinois 60188. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </ContentDoc>
</template>
