<template>
  <UCard>
    <template #header>
      <h2 class="font-bold tracking-tight">KJV | NIV</h2>
    </template>

    <div class="text-sm sm:text-base space-y-6">
      <div class="flex justify-center items-baseline">
        <h3 class="grow max-w-sm text-center font-medium tracking-tight">King James Version</h3>
        <div class="w-8 md:w-12 flex-none"></div>
        <h3 class="grow max-w-sm text-center font-medium tracking-tight">New International Version</h3>
      </div>

      <Parallel>
        <Scripture>
          Now Moses kept the flock of Jethro his father in law, the priest of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, [even] to Horeb.
        </Scripture>
        <Verse>1</Verse>
        <Scripture>
          Now Moses was tending the flock of Jethro his father-in-law, the priest of Midian, and he led the flock to the far side of the wilderness and came to Horeb, the mountain of God.
        </Scripture>
      </Parallel>

      <Parallel>
        <Scripture>
          And the angel of the LORD appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush [was] not consumed.
        </Scripture>
        <Verse>2</Verse>
        <Scripture>
          There the angel of the LORD appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up.
        </Scripture>
      </Parallel>
    </div>
  </UCard>

  <UCard class="my-6">
    <template #header>
      <h2 class="font-bold tracking-tight">Literal Equivalence (Word-for-Word)</h2>
    </template>

    <div class="text-sm sm:text-base space-y-6">
      <div class="flex items-baseline gap-4">
        <div class="flex-none w-6 text-right"></div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <h3 class="text-center font-medium tracking-tight">New American Standard Bible, 2020</h3>
          <h3 class="text-center font-medium tracking-tight hidden md:block">Amplified Bible</h3>
          <h3 class="text-center font-medium tracking-tight">English Standard Version</h3>
        </div>
      </div>

      <Parallel>
        <Verse>1</Verse>
        <Scripture>
          Now Moses was pasturing the flock of his father-in-law Jethro, the priest of Midian; and he led the flock to the west side of the wilderness and came to Horeb, the mountain of God.
        </Scripture>
        <div class="grow max-w-sm hidden md:block">
          Now Moses was keeping the flock of Jethro (Reuel) his father-in-law, the priest of Midian; and he led his flock to the west side of the wilderness and came to Horeb (Sinai), the mountain of God.
        </div>
        <Scripture>
          Now Moses was keeping the flock of his father-in-law, Jethro, the priest of Midian, and he led his flock to the west side of the wilderness and came to Horeb, the mountain of God.
        </Scripture>
      </Parallel>

      <div class="flex justify-center items-baseline hover:bg-accented">
        <div class="w-8 md:w-12 flex-none">
          <p class="text-xs sm:text-sm font-light text-muted text-center">2</p>
        </div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 font-serif">
          <p data-ref="Exo 3:2 NASB20">Then the angel of the LORD appeared to him in a blazing fire from the midst of a bush; and he looked, and behold, the bush was burning with fire, yet the bush was not being consumed.</p>
          <p class="hidden md:block" data-ref="Exo 3:2 AMP">The Angel of the LORD appeared to him in a blazing flame of fire from the midst of a bush; and he looked, and behold, the bush was on fire, yet it was not consumed.</p>
          <p data-ref="Exo 3:2 ESV">And the angel of the LORD appeared to him in a flame of fire out of the midst of a bush. He looked, and behold, the bush was burning, yet it was not consumed.</p>
        </div>
      </div>
    </div>
  </UCard>

  <UCard class="my-6">
    <template #header>
      <h2 class="font-bold tracking-tight">Functional Equivalence (Thought-for-Thought)</h2>
    </template>

    <div class="text-sm sm:text-base space-y-6">
      <div class="flex items-baseline gap-4">
        <div class="flex-none w-6 text-right"></div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <h3 class="text-center font-medium tracking-tight">Christian Standard Bible</h3>
          <h3 class="text-center font-medium tracking-tight">New English Translation</h3>
          <h3 class="text-center font-medium tracking-tight hidden md:block">New Living Translation</h3>
        </div>
      </div>

      <div class="flex items-baseline gap-4 hover:bg-accented">
        <div class="flex-none w-6 text-right">
          <p class="text-xs sm:text-sm font-light text-muted">1</p>
        </div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 font-serif">
          <p data-ref="Exo 3:1 CSB">Meanwhile, Moses was shepherding the flock of his father-in-law Jethro, the priest of Midian. He led the flock to the far side of the wilderness and came to Horeb, the mountain of God.</p>
          <p>Now Moses was shepherding the flock of his father-in-law Jethro, the priest of Midian, and he led the flock to the far side of the desert and came to the mountain of God, to Horeb.</p>
          <p class="hidden md:block" data-ref="Exo 3:1 NLT">One day Moses was tending the flock of his father-in-law, Jethro, the priest of Midian. He led the flock far into the wilderness and came to Sinai, the mountain of God.</p>
        </div>
      </div>

      <div class="flex items-baseline gap-4 hover:bg-accented">
        <div class="flex-none w-6 text-right">
          <p class="text-xs sm:text-sm font-light text-muted">2</p>
        </div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 font-serif">
          <p data-ref="Exo 3:2 CSB">Then the angel of the LORD appeared to him in a flame of fire within a bush. As Moses looked, he saw that the bush was on fire but was not consumed.</p>
          <p>The angel of the LORD appeared to him in a flame of fire from within a bush. He looked - and the bush was ablaze with fire, but it was not being consumed!</p>
          <p class="hidden md:block" data-ref="Exo 3:2 NLT">There the angel of the LORD appeared to him in a blazing fire from the middle of a bush. Moses stared in amazement. Though the bush was engulfed in flames, it didn't burn up.</p>
        </div>
      </div>
    </div>
  </UCard>

  <UCard>
    <template #header>
      <div class="flex justify-between">
        <h2 class="font-bold tracking-tight">Torah</h2>
        <h2 class="font-bold tracking-tight">תורה</h2>
      </div>
    </template>

    <div class="text-sm sm:text-base space-y-6">
      <div class="flex items-baseline gap-4">
        <div class="flex-none w-6 text-right"></div>
        <div class="grow grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <h3 class="grow max-w-sm text-center font-medium tracking-tight">Westminster Leningrad Codex</h3>
          <h3 class="grow max-w-sm text-center font-medium tracking-tight">Jewish Publication Society, 1985</h3>
          <h3 class="grow max-w-sm text-center font-medium tracking-tight">The Contemporary Torah</h3>
        </div>
      </div>

      <Parallel>
        <Verse>1</Verse>
        <div class="grow max-w-sm">
          <p dir="rtl" class="font-serif text-lg sm:text-xl">
            וּמֹשֶׁה הָיָה רֹעֶה אֶת־צֹאן יִתְרוֹ חֹתְנוֹ כֹּהֵן מִדְיָן וַיִּנְהַג אֶת־הַצֹּאן אַחַר הַמִּדְבָּר וַיָּבֹא אֶל־הַר הָאֱלֹהִים חֹרֵבָה׃
          </p>
        </div>
        <Scripture>
          Now Moses, tending the flock of his father-in-law Jethro, the priest of Midian, drove the flock into the wilderness, and came to Horeb, the mountain of God.
        </Scripture>
        <Scripture>
          Now Moses, tending the flock of his father-in-law Jethro, the priest of Midian, drove the flock into the wilderness, and came to Horeb, the mountain of God.
        </Scripture>
      </Parallel>

      <Parallel>
        <Verse>2</Verse>
        <div class="grow max-w-sm">
          <p dir="rtl" class="font-serif text-lg sm:text-xl">
            וַיֵּרָא מַלְאַךְ יְהֹוָה אֵלָיו בְּלַבַּת־אֵשׁ מִתּוֹךְ הַסְּנֶה וַיַּרְא וְהִנֵּה הַסְּנֶה בֹּעֵר בָּאֵשׁ וְהַסְּנֶה אֵינֶנּוּ אֻכָּל׃
          </p>
        </div>
        <Scripture>
          An angel of the LORD appeared to him in a blazing fire out of a bush. He gazed, and there was a bush all aflame, yet the bush was not consumed.
        </Scripture>
        <Scripture>
          A messenger of יהוה appeared to him in a blazing fire out of a bush. He gazed, and there was a bush all aflame, yet the bush was not consumed.
        </Scripture>
      </Parallel>

      <Parallel>
        <Verse>14</Verse>
        <div class="grow max-w-sm">
          <p dir="rtl" class="font-serif text-lg sm:text-xl">
            וַיֹּאמֶר אֱלֹהִים אֶל־מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה וַיֹּאמֶר כֹּה תֹאמַר לִבְנֵי יִשְׂרָאֵל אֶהְיֶה שְׁלָחַנִי אֲלֵיכֶם׃
          </p>
        </div>
        <Scripture>
          And God said to Moses, "Ehyeh-Asher-Ehyeh." He continued, "Thus shall you say to the Israelites, 'Ehyeh sent me to you.'"
        </Scripture>
        <Scripture>
          And God said to Moses, "Ehyeh-Asher-Ehyeh," continuing, "Thus shall you say to the Israelites, 'Ehyeh sent me to you.'"
        </Scripture>
      </Parallel>

      <Parallel>
        <Verse>15</Verse>
        <div class="grow max-w-sm">
          <p dir="rtl" class="font-serif text-lg sm:text-xl">
            וַיֹּאמֶר עוֹד אֱלֹהִים אֶל־מֹשֶׁה כֹּה־תֹאמַר אֶל־בְּנֵי יִשְׂרָאֵל יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב שְׁלָחַנִי אֲלֵיכֶם זֶה־שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר׃
          </p>
        </div>
        <Scripture>
          And God said further to Moses, "Thus shall you speak to the Israelites: The LORD, the God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has sent me to you: This shall be My name forever, This My appellation for all eternity.
        </Scripture>
        <Scripture>
          And God said further to Moses, "Thus shall you speak to the Israelites: יהוה, the God of your fathers' [house]--the God of Abraham, the God of Isaac, and the God of Jacob--has sent me to you: This shall be My name forever, This My appellation for all eternity.
        </Scripture>
      </Parallel>

      <Parallel>
        <Verse>16</Verse>
        <div class="grow max-w-sm">
          <p dir="rtl" class="font-serif text-lg sm:text-xl">
            לֵךְ וְאָסַפְתָּ אֶת־זִקְנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם נִרְאָה אֵלַי אֱלֹהֵי אַבְרָהָם יִצְחָק וְיַעֲקֹב לֵאמֹר פָּקֹד פָּקַדְתִּי אֶתְכֶם וְאֶת־הֶעָשׂוּי לָכֶם בְּמִצְרָיִם׃
          </p>
        </div>
        <Scripture>
          "Go and assemble the elders of Israel and say to them: the LORD, the God of your fathers, the God of Abraham, Isaac, and Jacob, has appeared to me and said, 'I have taken note of you and of what is being done to you in Egypt,
        </Scripture>
        <Scripture>
          "Go and assemble the elders of Israel and say to them: יהוה, the God of your fathers' [house]--the God of Abraham, Isaac, and Jacob--has appeared to me and said, 'I have taken note of you and of what is being done to you in Egypt,
        </Scripture>
      </Parallel>
    </div>
  </UCard>
</template>

<script setup lang="ts">
definePageMeta({ title: 'Exodus 3' })
</script>