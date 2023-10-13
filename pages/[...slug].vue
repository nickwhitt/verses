<template>
  <ContentDoc v-slot="{ doc }">
    <header class="bg-gray-200 shadow">
      <div class="container mx-auto px-2 lg:max-w-screen-lg py-10">
        <p>{{ doc.quarter }} / {{ doc.unit }}</p>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ doc.title }}
        </h1>
      </div>
    </header>

    <div class="lg:container mx-auto px-2 lg:max-w-screen-lg py-10">
      <ContentRenderer :value="doc" tag="main" class="grid gap-6" />
    </div>

    <footer class="border-t bg-gray-200">
      <div class="lg:container mx-auto px-2 lg:max-w-screen-lg py-4">
        <div class="grid sm:grid-cols-3 gap-3">
          <!-- <p class="text-xs">
            Scripture taken from the New King James Version®. Copyright © 1982
            by Thomas Nelson. Used by permission. All rights reserved.
          </p> -->
          <p class="text-xs px-2">
            Scripture quotations marked (ESV) are taken from the ESV® Bible (The
            Holy Bible, English Standard Version®), © 2001 by Crossway, a
            publishing ministry of Good News Publishers. Used by permission. All
            rights reserved.
          </p>
          <p class="text-xs px-2">
            Scripture quotations marked CSB have been taken from the Christian
            Standard Bible®, Copyright © 2017 by Holman Bible Publishers. Used
            by permission. Christian Standard Bible® and CSB® are federally
            registered trademarks of Holman Bible Publishers.
          </p>
          <!-- <p class="text-xs px-2">
            Scripture quotations marked (NIV) are taken from the Holy Bible, New
            International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011 by
            Biblica, Inc.™ Used by permission of Zondervan. All rights reserved
            worldwide.
          </p> -->
          <p class="text-xs px-2">
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
