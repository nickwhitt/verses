<script setup>
const gen25 = [
  {
    number: 19,
    kjv: "And these <i>are</i> the generations of Isaac, Abraham's son: Abraham begat Isaac:",
    nkjv: "<del>And these <i>are</i></del><ins>This <i>is</i></ins> the <del>generations</del><ins>genealogy</ins> of Isaac, Abraham's son. Abraham <del>begat</del><ins>begot</ins> Isaac.",
    esv: "<del>And</del><ins>These</ins> are the generations of Isaac, Abraham's son: Abraham <del>begat</del><ins>fathered</ins> Isaac,",
    nasb20:
      "<del>And</del><ins>Now</ins> these are <ins>[the records of]</ins> the generations of Isaac, Abraham's son: Abraham <del>begat</del><ins>fathered</ins> Isaac;",
  },
];
</script>

<template>
  <h1 class="text-center text-xl font-bold dark:text-white py-6">
    Genesis 25:19-34
  </h1>

  <main class="grid mx-auto px-2 xl:grid-cols-3 2xl:container">
    <article>
      <h2 class="text-center dark:text-white pb-2">King James Version</h2>
      <div class="sm:columns-2 xl:columns-auto pb-4 lg:text-lg">
        <p class="indent-6">
          <cite>19</cite>
          And these <i>are</i> the generations of Isaac, Abraham's son: Abraham
          begat Isaac: <cite>20</cite> And Isaac was forty years old when he
          took Rebekah to wife, the daughter of Bethuel the Syrian of Padanaram,
          the sister to Laban the Syrian. <cite>21</cite> And Isaac intreated
          the LORD for his wife, because she <i>was</i> barren: and the LORD was
          intreated of him, and Rebekah his wife conceived. <cite>22</cite> And
          the children struggled together within her; and she said, If
          <i>it be</i> so, why <i>am</i> I thus? And she went to enquire of the
          LORD.
        </p>
        <p class="indent-6">
          <cite>23</cite> And the LORD said unto her, Two nations <i>are</i> in
          thy womb, and two manner of people shall be separated from thy bowels;
          and <i>the one</i> people shall be stronger than
          <i>the other</i> people; and the elder shall serve the younger.
        </p>
        <p class="indent-6">
          <cite>24</cite> And when her days to be delivered were fulfilled,
          behold, <i>there were</i> twins in her womb. <cite>25</cite> And the
          first came out red, all over like an hairy garment; and they called
          his name Esau. <cite>26</cite> And after that came his brother out,
          and his hand took hold on Esau's heel; and his name was called Jacob:
          and Isaac <i>was</i> threescore years old when she bare them.
        </p>
        <p class="indent-6">
          <cite>27</cite> And the boys grew: and Esau was a cunning hunter, a
          man of the field; and Jacob <i>was</i> a plain man, dwelling in tents.
          <cite>28</cite> And Isaac loved Esau, because he did eat of
          <i>his</i> venison: but Rebekah loved Jacob.
        </p>
        <p class="indent-6">
          <cite>29</cite> And Jacob sod pottage: and Esau came from the field,
          and he <i>was</i> faint: <cite>30</cite> And Esau said to Jacob, Feed
          me, I pray thee, with that same red <i>pottage</i>; for I
          <i>am</i> faint: therefore was his name called Edom.
        </p>
        <p class="indent-6">
          <cite>31</cite> And Jacob said, Sell me this day thy birthright.
        </p>
        <p class="indent-6">
          <cite>32</cite> And Esau said, Behold, I <i>am</i> at the point to
          die: and what profit shall this birthright do to me?
        </p>
        <p class="indent-6">
          <cite>33</cite> And Jacob said, Swear to me this day; and he sware
          unto him: and he sold his birthright unto Jacob. <cite>34</cite> Then
          Jacob gave Esau bread and pottage of lentiles; and he did eat and
          drink, and rose up, and went his way: thus Esau despised
          <i>his</i> birthright.
        </p>
      </div>
    </article>

    <aside class="hidden sm:grid sm:grid-cols-3 xl:col-span-2">
      <p class="text-center dark:text-white pb-2">
        New American Standard Bible (2020)
      </p>
      <p class="text-center dark:text-white pb-2">New King James Version</p>
      <p class="text-center dark:text-white pb-2">English Standard Version</p>

      <div v-for="verse in gen25" class="contents sm:text-sm lg:text-base">
        <article
          v-for="translation in [verse.nasb20, verse.nkjv, verse.esv]"
          class="px-2 py-1"
        >
          <cite>{{ verse.number }}</cite>
          <span v-html="translation"></span>
        </article>
      </div>

      <Verse number="20" translation="NASB20"></Verse>
      <Verse number="20" translation="NKJV">
        Isaac was forty years old when he took Rebekah <ins>as</ins> wife, the
        daughter of Bethuel the Syrian of Padan Aram, the sister
        <ins>of</ins> Laban the Syrian.
      </Verse>
      <Verse number="20" translation="ESV">
        and Isaac was forty years old when he took Rebekah, the daughter of
        Bethuel the <ins>Aramean</ins> of Paddan-aram, the sister
        <ins>of</ins> Laban the <ins>Aramean, to be his wife</ins>.
      </Verse>

      <Verse number="21" translation="NASB20"></Verse>
      <Verse number="21" translation="NKJV">
        Now Isaac pleaded with the LORD for his wife, because she
        <i>was</i> barren; and the LORD granted his plea, and Rebekah his wife
        conceived.
      </Verse>
      <Verse number="21" translation="ESV">
        And Isaac prayed to the LORD for his wife, because she was barren. And
        the LORD granted his prayer, and Rebekah his wife conceived.
      </Verse>

      <Verse number="22" translation="NASB20"></Verse>
      <Verse number="22" translation="NKJV">
        But the children struggled together within her; and she said, "If
        <i>all is</i> well, why <i>am I like</i> this?" So she went to inquire
        of the LORD.
      </Verse>
      <Verse number="22" translation="ESV">
        The children struggled together within her, and she said, "If it is
        thus, why is this happening to me?" So she went to inquire of the LORD.
      </Verse>

      <Verse number="23" translation="NASB20"></Verse>
      <Verse number="23" translation="NKJV">
        And the LORD said to her: "Two nations <i>are</i> in your womb, Two
        peoples shall be separated from your body; <i>One</i> people shall be
        stronger than the other, And the older shall serve the younger."
      </Verse>
      <Verse number="23" translation="ESV">
        And the LORD said to her, "Two nations are in your womb, and two peoples
        from within you shall be divided; the one shall be stronger than the
        other, the older shall serve the younger."
      </Verse>

      <Verse number="24" translation="NASB20"></Verse>
      <Verse number="24" translation="NKJV">
        So when her days were fulfilled <i>for her</i> to give birth, indeed
        <i>there were</i> twins in her womb.
      </Verse>
      <Verse number="24" translation="ESV">
        When her days to give birth were completed, behold, there were twins in
        her womb.
      </Verse>

      <Verse number="25" translation="NASB20"></Verse>
      <Verse number="25" translation="NKJV">
        And the first came out red. <i>He was</i> like a hairy garment all over;
        so they called his name Esau.
      </Verse>
      <Verse number="25" translation="ESV">
        The first came out red, all his body like a hairy cloak, so they called
        his name Esau.
      </Verse>

      <Verse number="26" translation="NASB20"></Verse>
      <Verse number="26" translation="NKJV">
        Afterward his brother came out, and his hand took hold of Esau's heel;
        so his name was called Jacob. Isaac
        <i>was</i> sixty years old when she bore them.
      </Verse>
      <Verse number="26" translation="ESV">
        Afterward his brother came out with his hand holding Esau's heel, so his
        name was called Jacob. Isaac was sixty years old when she bore them.
      </Verse>

      <Verse number="27" translation="NASB20"></Verse>
      <Verse number="27" translation="NKJV">
        So the boys grew. And Esau was a skillful hunter, a man of the field;
        but Jacob was a mild man, dwelling in tents.
      </Verse>
      <Verse number="27" translation="ESV">
        When the boys grew up, Esau was a skillful hunter, a man of the field,
        while Jacob was a quiet man, dwelling in tents.
      </Verse>

      <Verse number="28" translation="NASB20"></Verse>
      <Verse number="28" translation="NKJV">
        And Isaac loved Esau because he ate
        <i>of his</i> game, but Rebekah loved Jacob.
      </Verse>
      <Verse number="28" translation="ESV">
        Isaac loved Esau because he ate of his game, but Rebekah loved Jacob.
      </Verse>

      <Verse number="29" translation="NASB20"></Verse>
      <Verse number="29" translation="NKJV">
        Now Jacob cooked a stew; and Esau came in from the field, and he
        <i>was</i> weary.
      </Verse>
      <Verse number="29" translation="ESV">
        Once when Jacob was cooking stew, Esau came in from the field, and he
        was exhausted.
      </Verse>

      <Verse number="30" translation="NASB20"></Verse>
      <Verse number="30" translation="NKJV">
        And Esau said to Jacob, "Please feed me with that same red
        <i>stew</i>, for I <i>am</i> weary." Therefore his name was called Edom.
      </Verse>
      <Verse number="30" translation="ESV">
        And Esau said to Jacob, "Let me eat some of that red stew, for I am
        exhausted!" (Therefore his name was called Edom.)
      </Verse>

      <Verse number="31" translation="NASB20"></Verse>
      <Verse number="31" translation="NKJV">
        But Jacob said, "Sell me your birthright as of this day."
      </Verse>
      <Verse number="31" translation="ESV">
        Jacob said, "Sell me your birthright now."
      </Verse>

      <Verse number="32" translation="NASB20"></Verse>
      <Verse number="32" translation="NKJV">
        And Esau said, "Look, I <i>am</i> about to die; so what <i>is</i> this
        birthright to me?"
      </Verse>
      <Verse number="32" translation="ESV">
        Esau said, "I am about to die; of what use is a birthright to me?"
      </Verse>

      <Verse number="33" translation="NASB20"></Verse>
      <Verse number="33" translation="NKJV">
        Then Jacob said, "Swear to me as of this day." So he swore to him, and
        sold his birthright to Jacob.
      </Verse>
      <Verse number="33" translation="ESV">
        Jacob said, "Swear to me now." So he swore to him and sold his
        birthright to Jacob.
      </Verse>

      <Verse number="34" translation="NASB20"></Verse>
      <Verse number="34" translation="NKJV">
        And Jacob gave Esau bread and stew of lentils; then he ate and drank,
        arose, and went his way. Thus Esau despised
        <i>his</i> birthright.
      </Verse>
      <Verse number="34" translation="ESV">
        Then Jacob gave Esau bread and lentil stew, and he ate and drank and
        rose and went his way. Thus Esau despised his birthright.
      </Verse>
    </aside>
  </main>
</template>
