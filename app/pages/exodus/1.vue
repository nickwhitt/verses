<script setup lang="ts">
definePageMeta({ 
  title: 'Exodus',
  crumbs: [{label:'Old Testament'}, {label: 'Pentateuch'}],
  layout: false,
})
</script>

<template>
  <NuxtLayout name="parallel" title="Chapter 1" last-page="/genesis/50" next-page="/exodus/2">
    <div class="grid grid-cols-11 py-1 lg:py-2">
      <div class="col-span-5 space-y text-sm md:text-base">
        <p class="text-primary text-right tracking-tight">King James Version (KJV)</p>
        <p class="text-secondary text-right">Israel Multiplies in Egypt</p>
      </div>
      <p></p>
      <div class="col-span-5 space-y text-sm md:text-base">
        <p class="text-primary tracking-tight">New International Version (NIV)</p>
        <p class="text-secondary">The Israelites Oppressed</p>
      </div>
    </div>

    <Scripture :verse="1" ref-left="Exo 1:1 KJV" ref-right="Exo 1:1 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        Now these [are] the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.
      </template>
      <template #right>
        These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:
      </template>
    </Scripture>

    <Scripture :verse="2" ref-left="Exo 1:2 KJV" ref-right="Exo 1:2 NIV">
      <template #left>Reuben, Simeon, Levi, and Judah,</template>
      <template #right>Reuben, Simeon, Levi and Judah;</template>
    </Scripture>

    <Scripture :verse="3" ref-left="Exo 1:3 KJV" ref-right="Exo 1:3 NIV">
      <template #left>Issachar, Zebulun, and Benjamin,</template>
      <template #right>Issachar, Zebulun and Benjamin;</template>
    </Scripture>

    <Scripture :verse="4" ref-left="Exo 1:4 KJV" ref-right="Exo 1:4 NIV">
      <template #left>Dan, and Naphtali, Gad, and Asher.</template>
      <template #right>Dan and Naphtali; Gad and Asher.</template>
    </Scripture>

    <Scripture :verse="5" ref-left="Exo 1:5 KJV" ref-right="Exo 1:5 NIV">
      <template #left>
        And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt [already].
      </template>
      <template #right>
        The descendants of Jacob numbered seventy in all; Joseph was already in Egypt.
      </template>
    </Scripture>

    <Scripture :verse="6" ref-left="Exo 1:6 KJV" ref-right="Exo 1:6 NIV">
      <template #left>And Joseph died, and all his brethren, and all that generation.</template>
      <template #right>Now Joseph and all his brothers and all that generation died,</template>
    </Scripture>

    <Scripture :verse="7" ref-left="Exo 1:7 KJV" ref-right="Exo 1:7 NIV">
      <template #left>
        And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them.
      </template>
      <template #right>
        but the Israelites were exceedingly fruitful; they multiplied greatly, increased in numbers and became so numerous that the land was filled with them.
      </template>
    </Scripture>

    <Scripture :verse="8" ref-left="Exo 1:8 KJV" ref-right="Exo 1:8 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        Now there arose up a new king over Egypt, which knew not Joseph.
      </template>
      <template #right>
        Then a new king, to whom Joseph meant nothing, came to power in Egypt.
      </template>
    </Scripture>

    <Scripture :verse="9" ref-left="Exo 1:9 KJV" ref-right="Exo 1:9 NIV">
      <template #left>
        And he said unto his people, Behold, the people of the children of Israel [are] more and mightier than we:
      </template>
      <template #right>
        "Look," he said to his people, "the Israelites have become far too numerous for us.
      </template>
    </Scripture>

    <Scripture :verse="10" ref-left="Exo 1:10 KJV" ref-right="Exo 1:10 NIV">
      <template #left>
        Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and [so] get them up out of the land.
      </template>
      <template #right>
        Come, we must deal shrewdly with them or they will become even more numerous and, if war breaks out, will join our enemies, fight against us and leave the country."
      </template>
    </Scripture>

    <Scripture :verse="11" ref-left="Exo 1:11 KJV" ref-right="Exo 1:11 NIV">
      <template #left>
        Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses.
      </template>
      <template #right>
        So they put slave masters over them to oppress them with forced labor, and they built Pithom and Rameses as store cities for Pharaoh.
      </template>
    </Scripture>

    <Scripture :verse="12" ref-left="Exo 1:12 KJV" ref-right="Exo 1:12 NIV">
      <template #left>
        But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel.
      </template>
      <template #right>
        But the more they were oppressed, the more they multiplied and spread; so the Egyptians came to dread the Israelites
      </template>
    </Scripture>

    <Scripture :verse="13" ref-left="Exo 1:13 KJV" ref-right="Exo 1:13 NIV">
      <template #left>And the Egyptians made the children of Israel to serve with rigour:</template>
      <template #right>and worked them ruthlessly.</template>
    </Scripture>

    <Scripture :verse="14" ref-left="Exo 1:14 KJV" ref-right="Exo 1:14 NIV">
      <template #left>
        And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, [was] with rigour.
      </template>
      <template #right>
        They made their lives bitter with harsh labor in brick and mortar and with all kinds of work in the fields; in all their harsh labor the Egyptians worked them ruthlessly.
      </template>
    </Scripture>

    <Scripture :verse="15" ref-left="Exo 1:15 KJV" ref-right="Exo 1:15 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        And the king of Egypt spake to the Hebrew midwives, of which the name of the one [was] Shiphrah, and the name of the other Puah:
      </template>
      <template #right>
        The king of Egypt said to the Hebrew midwives, whose names were Shiphrah and Puah,
      </template>
    </Scripture>

    <Scripture :verse="16" ref-left="Exo 1:16 KJV" ref-right="Exo 1:16 NIV">
      <template #left>
        And he said, When ye do the office of a midwife to the Hebrew women, and see [them] upon the stools; if it [be] a son, then ye shall kill him: but if it [be] a daughter, then she shall live.
      </template>
      <template #right>
        "When you are helping the Hebrew women during childbirth on the delivery stool, if you see that the baby is a boy, kill him; but if it is a girl, let her live."
      </template>
    </Scripture>

    <Scripture :verse="17" ref-left="Exo 1:17 KJV" ref-right="Exo 1:17 NIV">
      <template #left>
        But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive.
      </template>
      <template #right>
        The midwives, however, feared God and did not do what the king of Egypt had told them to do; they let the boys live.
      </template>
    </Scripture>

    <Scripture :verse="18" ref-left="Exo 1:18 KJV" ref-right="Exo 1:18 NIV">
      <template #left>
        And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?
      </template>
      <template #right>
        Then the king of Egypt summoned the midwives and asked them, "Why have you done this? Why have you let the boys live?"
      </template>
    </Scripture>

    <Scripture :verse="19" ref-left="Exo 1:19 KJV" ref-right="Exo 1:19 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        And the midwives said unto Pharaoh, Because the Hebrew women [are] not as the Egyptian women; for they [are] lively, and are delivered ere the midwives come in unto them.
      </template>
      <template #right>
        The midwives answered Pharaoh, "Hebrew women are not like Egyptian women; they are vigorous and give birth before the midwives arrive."
      </template>
    </Scripture>

    <Scripture :verse="20" ref-left="Exo 1:20 KJV" ref-right="Exo 1:20 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty.
      </template>
      <template #right>
        So God was kind to the midwives and the people increased and became even more numerous.
      </template>
    </Scripture>

    <Scripture :verse="21" ref-left="Exo 1:21 KJV" ref-right="Exo 1:21 NIV">
      <template #left>
        And it came to pass, because the midwives feared God, that he made them houses.
      </template>
      <template #right>
        And because the midwives feared God, he gave them families of their own.
      </template>
    </Scripture>

    <Scripture :verse="22" ref-left="Exo 1:22 KJV" ref-right="Exo 1:22 NIV">
      <template #left>
        <span class="text-dimmed">&para;</span>
        And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive.
      </template>
      <template #right>
        Then Pharaoh gave this order to all his people: "Every Hebrew boy that is born you must throw into the Nile, but let every girl live."
      </template>
    </Scripture>

    <template #translations>
      <Verse source="New American Standard Bible (NASB), 2020">
        Now these are the names of the sons of Israel who came to Egypt with Jacob; they came, each one with his household:
      </Verse>
      <Verse source="Amplified Bible (AMP)">
        Now these are the names of the sons of Israel who came to Egypt with Jacob; each came with his household:
      </Verse>
      <Verse source="English Standard Version (ESV)">
        These are the names of the sons of Israel who came to Egypt with Jacob, each with his household:
      </Verse>
      <Verse source="New King James Version (NKJV)">
        Now these [are] the names of the children of Israel who came to Egypt; each man and his household came with Jacob:
      </Verse>
      <Verse source="Christian Standard Bible (CSB)">
        These are the names of the sons of Israel who came to Egypt with Jacob; each came with his family:
      </Verse>
      <Verse source="New Living Translation (NLT)">
        These are the names of the sons of Israel (that is, Jacob) who moved to Egypt with their father, each with his family:
      </Verse>
      <Verse source="Jewish Publication Society (JPS), 1985">
        These are the names of the sons of Israel who came to Egypt with Jacob, each coming with his household:
      </Verse>
      <Verse source="Masoretic Text" rtl>
        ואלה שמות בני ישראל הבאים מצרימה את יעקב איש וביתו באו
      </Verse>
      <Verse source="Septuagint (LXX)">
        ταῦτα τὰ ὀνόματα τῶν υἱῶν Ισραηλ τῶν εἰσπεπορευμένων εἰς Αἴγυπτον ἅμα Ιακωβ τῷ πατρὶ αὐτῶν ἕκαστος πανοικίᾳ αὐτῶν εἰσήλθοσαν
      </Verse>
    </template>
  
  </NuxtLayout>
</template>
