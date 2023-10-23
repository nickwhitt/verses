<script setup>
const gen25 = [
  {
    number: 19,
    kjv: "And these <i>are</i> the generations of Isaac, Abraham's son: Abraham begat Isaac:",
    nkjv: "<s>And these <i>are</i></s><u>This <i>is</i></u> the <s>generations</s><u>genealogy</u> of Isaac, Abraham's son. Abraham <s>begat</s><u>begot</u> Isaac.",
    esv: "<s>And</s><u>These</u> are the generations of Isaac, Abraham's son: Abraham <s>begat</s><u>fathered</u> Isaac,",
  },
];
</script>

<template>
  <main class="lg:container mx-auto px-2">
    <p class="text-center text-xl font-bold dark:text-white py-6">
      Genesis 25:19-34<br />Word for Word
    </p>
    <div class="grid sm:grid-cols-3 sm:text-sm lg:text-base xl:text-lg">
      <p class="hidden sm:block text-center dark:text-white pb-2">
        King James Version
      </p>
      <p class="hidden sm:block text-center dark:text-white pb-2">
        New King James Version
      </p>
      <p class="hidden sm:block text-center dark:text-white pb-2">
        English Standard Version
      </p>
    </div>

    <div
      v-for="verse in gen25"
      class="grid sm:grid-cols-3 sm:text-sm lg:text-base xl:text-lg"
    >
      <div
        v-for="translation in [verse.kjv, verse.nkjv, verse.esv]"
        class="px-2 py-1"
      >
        <cite>{{ verse.number }}</cite>
        <p v-html="translation" class="inline"></p>
      </div>
    </div>

    <div class="grid sm:grid-cols-3 sm:text-sm lg:text-base xl:text-lg">
      <Verse number="20" translation="KJV">
        And Isaac was forty years old when he took Rebekah to wife, the daughter
        of Bethuel the Syrian of Padanaram, the sister to Laban the Syrian.
      </Verse>
      <Verse number="20" translation="NKJV">
        Isaac was forty years old when he took Rebekah <u>as</u> wife, the
        daughter of Bethuel the Syrian of Padan Aram, the sister <u>of</u> Laban
        the Syrian.
      </Verse>
      <Verse number="20" translation="ESV">
        and Isaac was forty years old when he took Rebekah, the daughter of
        Bethuel the <u>Aramean</u> of Paddan-aram, the sister <u>of</u> Laban
        the <u>Aramean, to be his wife</u>.
      </Verse>

      <Verse number="21" translation="KJV">
        And Isaac intreated the LORD for his wife, because she
        <i class="italic">was</i> barren: and the LORD was intreated of him, and
        Rebekah his wife conceived.
      </Verse>
      <Verse number="21" translation="NKJV">
        Now Isaac pleaded with the LORD for his wife, because she
        <i class="italic">was</i> barren; and the LORD granted his plea, and
        Rebekah his wife conceived.
      </Verse>
      <Verse number="21" translation="ESV">
        And Isaac prayed to the LORD for his wife, because she was barren. And
        the LORD granted his prayer, and Rebekah his wife conceived.
      </Verse>

      <Verse number="22" translation="KJV">
        And the children struggled together within her; and she said, If
        <i class="italic">it be</i> so, why <i class="italic">am</i> I thus? And
        she went to enquire of the LORD.
      </Verse>
      <Verse number="22" translation="NKJV">
        But the children struggled together within her; and she said, "If [all
        is] well, why <i class="italic">am I like</i> this?" So she went to
        inquire of the LORD.
      </Verse>
      <Verse number="22" translation="ESV">
        The children struggled together within her, and she said, "If it is
        thus, why is this happening to me?" So she went to inquire of the LORD.
      </Verse>

      <Verse number="23" translation="KJV">
        And the LORD said unto her, Two nations <i class="italic">are</i> in thy
        womb, and two manner of people shall be separated from thy bowels; and
        <i class="italic">the one</i> people shall be stronger than
        <i class="italic">the other</i> people; and the elder shall serve the
        younger.
      </Verse>
      <Verse number="23" translation="NKJV">
        And the LORD said to her: "Two nations <i class="italic">are</i> in your
        womb, Two peoples shall be separated from your body;
        <i class="italic">One</i> people shall be stronger than the other, And
        the older shall serve the younger."
      </Verse>
      <Verse number="23" translation="ESV">
        And the LORD said to her, "Two nations are in your womb, and two peoples
        from within you shall be divided; the one shall be stronger than the
        other, the older shall serve the younger."
      </Verse>

      <Verse number="24" translation="KJV">
        And when her days to be delivered were fulfilled, behold,
        <i class="italic">there were</i> twins in her womb.
      </Verse>
      <Verse number="24" translation="NKJV">
        So when her days were fulfilled <i class="italic">for her</i> to give
        birth, indeed [there were] twins in her womb.
      </Verse>
      <Verse number="24" translation="ESV">
        When her days to give birth were completed, behold, there were twins in
        her womb.
      </Verse>

      <Verse number="25" translation="KJV">
        And the first came out red, all over like an hairy garment; and they
        called his name Esau.
      </Verse>
      <Verse number="25" translation="NKJV">
        And the first came out red. <i class="italic">He was</i> like a hairy
        garment all over; so they called his name Esau.
      </Verse>
      <Verse number="25" translation="ESV">
        The first came out red, all his body like a hairy cloak, so they called
        his name Esau.
      </Verse>

      <Verse number="26" translation="KJV">
        And after that came his brother out, and his hand took hold on Esau's
        heel; and his name was called Jacob: and Isaac
        <i class="italic">was</i> threescore years old when she bare them.
      </Verse>
      <Verse number="26" translation="NKJV">
        Afterward his brother came out, and his hand took hold of Esau's heel;
        so his name was called Jacob. Isaac <i class="italic">was</i> sixty
        years old when she bore them.
      </Verse>
      <Verse number="26" translation="ESV">
        Afterward his brother came out with his hand holding Esau's heel, so his
        name was called Jacob. Isaac was sixty years old when she bore them.
      </Verse>

      <Verse number="27" translation="KJV">
        And the boys grew: and Esau was a cunning hunter, a man of the field;
        and Jacob <i class="italic">was</i> a plain man, dwelling in tents.
      </Verse>
      <Verse number="27" translation="NKJV">
        So the boys grew. And Esau was a skillful hunter, a man of the field;
        but Jacob was a mild man, dwelling in tents.
      </Verse>
      <Verse number="27" translation="ESV">
        When the boys grew up, Esau was a skillful hunter, a man of the field,
        while Jacob was a quiet man, dwelling in tents.
      </Verse>

      <Verse number="28" translation="KJV">
        And Isaac loved Esau, because he did eat of
        <i class="italic">his</i> venison: but Rebekah loved Jacob.
      </Verse>
      <Verse number="28" translation="NKJV">
        And Isaac loved Esau because he ate <i class="italic">of his</i> game,
        but Rebekah loved Jacob.
      </Verse>
      <Verse number="28" translation="ESV">
        Isaac loved Esau because he ate of his game, but Rebekah loved Jacob.
      </Verse>

      <Verse number="29" translation="KJV">
        And Jacob sod pottage: and Esau came from the field, and he
        <i class="italic">was</i> faint:
      </Verse>
      <Verse number="29" translation="NKJV">
        Now Jacob cooked a stew; and Esau came in from the field, and he
        <i class="italic">was</i> weary.
      </Verse>
      <Verse number="29" translation="ESV">
        Once when Jacob was cooking stew, Esau came in from the field, and he
        was exhausted.
      </Verse>

      <Verse number="30" translation="KJV">
        And Esau said to Jacob, Feed me, I pray thee, with that same red
        <i class="italic">pottage</i>; for I <i class="italic">am</i> faint:
        therefore was his name called Edom.
      </Verse>
      <Verse number="30" translation="NKJV">
        And Esau said to Jacob, "Please feed me with that same red
        <i class="italic">stew</i>, for I <i class="italic">am</i> weary."
        Therefore his name was called Edom.
      </Verse>
      <Verse number="30" translation="ESV">
        And Esau said to Jacob, "Let me eat some of that red stew, for I am
        exhausted!" (Therefore his name was called Edom.)
      </Verse>

      <Verse number="31" translation="KJV">
        And Jacob said, Sell me this day thy birthright.
      </Verse>
      <Verse number="31" translation="NKJV">
        But Jacob said, "Sell me your birthright as of this day."
      </Verse>
      <Verse number="31" translation="ESV">
        Jacob said, "Sell me your birthright now."
      </Verse>

      <Verse number="32" translation="KJV">
        And Esau said, Behold, I <i class="italic">am</i> at the point to die:
        and what profit shall this birthright do to me?
      </Verse>
      <Verse number="32" translation="NKJV">
        And Esau said, "Look, I <i class="italic">am</i> about to die; so what
        <i class="italic">is</i> this birthright to me?"
      </Verse>
      <Verse number="32" translation="ESV">
        Esau said, "I am about to die; of what use is a birthright to me?"
      </Verse>

      <Verse number="33" translation="KJV">
        And Jacob said, Swear to me this day; and he sware unto him: and he sold
        his birthright unto Jacob.
      </Verse>
      <Verse number="33" translation="NKJV">
        Then Jacob said, "Swear to me as of this day." So he swore to him, and
        sold his birthright to Jacob.
      </Verse>
      <Verse number="33" translation="ESV">
        Jacob said, "Swear to me now." So he swore to him and sold his
        birthright to Jacob.
      </Verse>

      <Verse number="34" translation="KJV">
        Then Jacob gave Esau bread and pottage of lentiles; and he did eat and
        drink, and rose up, and went his way: thus Esau despised
        <i class="italic">his</i>
        birthright.
      </Verse>
      <Verse number="34" translation="NKJV">
        And Jacob gave Esau bread and stew of lentils; then he ate and drank,
        arose, and went his way. Thus Esau despised
        <i class="italic">his</i> birthright.
      </Verse>
      <Verse number="34" translation="ESV">
        Then Jacob gave Esau bread and lentil stew, and he ate and drank and
        rose and went his way. Thus Esau despised his birthright.
      </Verse>
    </div>
  </main>
</template>
