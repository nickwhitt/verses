<script setup>
const lesson = {
  unit: "God Calls Abraham's Family",
  title: "The Call of Abram",
  description: "Genesis 12:1-5, 7; 15:1-7",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});

const { data: gen12 } = await useFetch("/api/gen12", {
  transform: (verses) => {
    return verses.filter((verse) => {
      return verse.number != 6;
    });
  },
});
const { data: gen15 } = await useFetch("/api/gen15");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="KJV" class="space-y-4">
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">12</span>
            <b>1</b>Now the <Lord /> had said unto Abram, Get thee out of thy
            country, and from thy kindred, and from thy father's house, unto a
            land that I will shew thee: <b>2</b>And I will make of thee a great
            nation, and I will bless thee, and make thy name great; and thou
            shalt be a blessing: <b>3</b>And I will bless them that bless thee,
            and curse him that curseth thee: and in thee shall all families of
            the earth be blessed.
          </p>
          <p>
            <b>4</b>So Abram departed, as the <Lord /> had spoken unto him; and
            Lot went with him: and Abram <i>was</i> seventy and five years old
            when he departed out of Haran. <b>5</b>And Abram took Sarai his
            wife, and Lot his brother's son, and all their substance that they
            had gathered, and the souls that they had gotten in Haran; and they
            went forth to go into the land of Canaan; and into the land of
            Canaan they came.
          </p>
          <p>
            <b>7</b>And the <Lord /> appeared unto Abram, and said, Unto thy
            seed will I give this land: and there builded he an altar unto the
            <Lord />, who appeared unto him.
          </p>
        </div>
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">15</span>
            <b>1</b>After these things the word of the <Lord /> came unto Abram
            in a vision, saying, Fear not, Abram: I <i>am</i> thy shield,
            <i>and</i> thy exceeding great reward.
          </p>
          <p>
            <b>2</b>And Abram said, Lord <Lord>God</Lord>, what wilt thou give
            me, seeing I go childless, and the steward of my house
            <i>is</i> this Eliezer of Damascus? <b>3</b>And Abram said, Behold,
            to me thou hast given no seed: and, lo, one born in my house is mine
            heir.
          </p>
          <p>
            <b>4</b>And, behold, the word of the <Lord /> <i>came</i> unto him,
            saying, This shall not be thine heir; but he that shall come forth
            out of thine own bowels shall be thine heir. <b>5</b>And he brought
            him forth abroad, and said, Look now toward heaven, and tell the
            stars, if thou be able to number them: and he said unto him, So
            shall thy seed be.
          </p>
          <p>
            <b>6</b>And he believed in the <Lord />; and he counted it to him
            for righteousness.
          </p>
          <p>
            <b>7</b>And he said unto him, I <i>am</i> the <Lord /> that brought
            thee out of Ur of the Chaldees, to give thee this land to inherit
            it.
          </p>
        </div>
      </Passage>
      <Passage translation="NIV" class="space-y-4">
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">12</span>
            <b>1</b>The <Lord /> had said to Abram, "Go from your country, your
            people and your father's household to the land I will show you.
          </p>
          <ol class="my-4">
            <li><b>2</b>"I will make you into a great nation,</li>
            <li class="ml-6">and I will bless you;</li>
            <li>I will make your name great,</li>
            <li class="ml-6">and you will be a blessing.</li>
            <li><b>3</b>I will bless those who bless you,</li>
            <li class="ml-6">and whoever curses you I will curse;</li>
            <li>and all peoples on earth</li>
            <li class="ml-6">will be blessed through you.</li>
          </ol>
          <p>
            <b>4</b>So Abram went, as the <Lord /> had told him; and Lot went
            with him. Abram was seventy-five years old when he set out from
            Harran. <b>5</b>He took his wife Sarai, his nephew Lot, all the
            possessions they had accumulated and the people they had acquired in
            Harran, and they set out for the land of Canaan, and they arrived
            there.
          </p>
          <p>
            <b>7</b>The <Lord /> appeared to Abram and said, "To your offspring
            I will give this land." So he built an altar there to the <Lord />,
            who had appeared to him.
          </p>
        </div>
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">15</span>
            <b>1</b>After this, the word of the <Lord /> came to Abram in a
            vision:
          </p>
          <ol class="my-4">
            <li>"Do not be afraid, Abram.</li>
            <li class="ml-6">I am your shield,</li>
            <li class="ml-6">your very great reward."</li>
          </ol>
          <p>
            <b>2</b>But Abram said, "Sovereign <Lord />, what can you give me
            since I remain childless and the one who will inherit my estate is
            Eliezer of Damascus?" <b>3</b>And Abram said, "You have given me no
            children; so a servant in my household will be my heir."
          </p>
          <p>
            <b>4</b>Then the word of the <Lord /> came to him: "This man will
            not be your heir, but a son who is your own flesh and blood will be
            your heir." <b>5</b>He took him outside and said, "Look up at the
            sky and count the stars--if indeed you can count them." Then he said
            to him, "So shall your offspring be."
          </p>
          <p>
            <b>6</b>Abram believed the <Lord />, and he credited it to him as
            righteousness.
          </p>
          <p>
            <b>7</b>He also said to him, "I am the <Lord />, who brought you out
            of Ur of the Chaldeans to give you this land to take possession of
            it."
          </p>
        </div>
      </Passage>
    </main>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <VerseGrid chapter="12" :verses="gen12" />
      <VerseGrid chapter="15" :verses="gen15">
        <template #header><p class="hidden" /></template>
      </VerseGrid>
    </aside>
  </div>
</template>
