<script setup>
const lesson = {
  unit: "God Calls Abraham's Family",
  title: "God Chooses The Younger Twin",
  description: "Genesis 25:19-34",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});

const { data: gen25 } = await useFetch("/api/gen25");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="King James Version">
        <p>
          <b>19</b>And these <i>are</i> the generations of Isaac, Abraham's son:
          Abraham begat Isaac: <b>20</b>And Isaac was forty years old when he
          took Rebekah to wife, the daughter of Bethuel the Syrian of Padanaram,
          the sister to Laban the Syrian. <b>21</b>And Isaac intreated the
          <Lord /> for his wife, because she <i>was</i> barren: and the
          <Lord /> was intreated of him, and Rebekah his wife conceived.
          <b>22</b>And the children struggled together within her; and she said,
          If <i>it be</i> so, why <i>am</i> I thus? And she went to enquire of
          the <Lord />.
        </p>
        <p>
          <b>23</b>And the <Lord /> said unto her, Two nations <i>are</i> in thy
          womb, and two manner of people shall be separated from thy bowels; and
          <i>the one</i> people shall be stronger than <i>the other</i> people;
          and the elder shall serve the younger.
        </p>
        <p>
          <b>24</b>And when her days to be delivered were fulfilled, behold,
          <i>there were</i> twins in her womb. <b>25</b>And the first came out
          red, all over like an hairy garment; and they called his name Esau.
          <b>26</b>And after that came his brother out, and his hand took hold
          on Esau's heel; and his name was called Jacob: and Isaac <i>was</i>
          threescore years old when she bare them.
        </p>
        <p>
          <b>27</b>And the boys grew: and Esau was a cunning hunter, a man of
          the field; and Jacob <i>was</i> a plain man, dwelling in tents.
          <b>28</b>And Isaac loved Esau, because he did eat of
          <i>his</i> venison: but Rebekah loved Jacob.
        </p>
        <p>
          <b>29</b>And Jacob sod pottage: and Esau came from the field, and he
          <i>was</i> faint: <b>30</b>And Esau said to Jacob, Feed me, I pray
          thee, with that same red <i>pottage</i>; for I <i>am</i> faint:
          therefore was his name called Edom.
        </p>
        <p><b>31</b>And Jacob said, Sell me this day thy birthright.</p>
        <p>
          <b>32</b>And Esau said, Behold, I <i>am</i> at the point to die: and
          what profit shall this birthright do to me?
        </p>
        <p>
          <b>33</b>And Jacob said, Swear to me this day; and he sware unto him:
          and he sold his birthright unto Jacob. <b>34</b>Then Jacob gave Esau
          bread and pottage of lentiles; and he did eat and drink, and rose up,
          and went his way: thus Esau despised <i>his</i> birthright.
        </p>
      </Passage>
      <Passage translation="New International Version">
        <p>
          <b>19</b>This is the account of the family line of Abraham's son
          Isaac.
        </p>
        <p>
          Abraham became the father of Isaac, <b>20</b>and Isaac was forty years
          old when he married Rebekah daughter of Bethuel the Aramean from
          Paddan Aram and sister of Laban the Aramean.
        </p>
        <p>
          <b>21</b>Isaac prayed to the <Lord /> on behalf of his wife, because
          she was childless. The <Lord /> answered his prayer, and his wife
          Rebekah became pregnant. <b>22</b>The babies jostled each other within
          her, and she said, "Why is this happening to me?" So she went to
          inquire of the <Lord />.
        </p>
        <p><b>23</b>The <Lord /> said to her,</p>
        <p class="ml-4">
          "Two nations are in your womb,
          <span class="ml-8 block">
            and two peoples from within you will be separated;
          </span>
          one people will be stronger than the other,
          <span class="ml-8 block">and the older will serve the younger."</span>
        </p>
        <p>
          <b>24</b>When the time came for her to give birth, there were twin
          boys in her womb. <b>25</b>The first to come out was red, and his
          whole body was like a hairy garment; so they named him Esau.
          <b>26</b>After this, his brother came out, with his hand grasping
          Esau's heel; so he was named Jacob. Isaac was sixty years old when
          Rebekah gave birth to them.
        </p>
        <p>
          <b>27</b>The boys grew up, and Esau became a skillful hunter, a man of
          the open country, while Jacob was content to stay at home among the
          tents. <b>28</b>Isaac, who had a taste for wild game, loved Esau, but
          Rebekah loved Jacob.
        </p>
        <p>
          <b>29</b>Once when Jacob was cooking some stew, Esau came in from the
          open country, famished. <b>30</b>He said to Jacob, "Quick, let me have
          some of that red stew! I'm famished!" (That is why he was also called
          Edom.)
        </p>
        <p><b>31</b>Jacob replied, "First sell me your birthright."</p>
        <p>
          <b>32</b>"Look, I am about to die," Esau said. "What good is the
          birthright to me?"
        </p>
        <p>
          <b>33</b>But Jacob said, "Swear to me first." So he swore an oath to
          him, selling his birthright to Jacob.
        </p>
        <p>
          <b>34</b>Then Jacob gave Esau some bread and some lentil stew. He ate
          and drank, and then got up and left.
        </p>
        <p>So Esau despised his birthright.</p>
      </Passage>
    </main>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <VerseGrid chapter="25" :verses="gen25" />
    </aside>
  </div>
</template>
