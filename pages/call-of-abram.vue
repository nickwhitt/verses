<script setup>
import { BookOpenIcon } from "@heroicons/vue/24/outline";
useSeoMeta({
  title: "The Call of Abram",
  description: "Genesis 12:1-7; 15:1-7",
});

const { data: gen12 } = await useFetch("/api/gen12");
const { data: gen15 } = await useFetch("/api/gen15");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <hgroup class="prose prose-slate dark:prose-invert py-8">
      <p class="font-light mb-0">God Calls Abraham's Family</p>
      <h1 class="m-0">The Call of Abram</h1>
      <p class="flex items-center font-light gap-2 mt-0">
        <BookOpenIcon class="h-5 w-5" />
        Genesis 12:1-5, 7; 15:1-7
      </p>
    </hgroup>

    <main class="grid sm:grid-cols-2 gap-4">
      <article class="prose prose-slate dark:prose-invert">
        <h2 class="sm:text-center">King James Version</h2>
        <div class="sm:prose-sm md:prose-base xl:prose-lg">
          <p>
            <span class="text-4xl mr-1">12</span>
            <b>1</b>Now the
            <span class="uppercase">L<span class="text-sm">ORD</span></span> had
            said unto Abram, Get thee out of thy country, and from thy kindred,
            and from thy father's house, unto a land that I will shew thee:
            <b>2</b>And I will make of thee a great nation, and I will bless
            thee, and make thy name great; and thou shalt be a blessing:
            <b>3</b>And I will bless them that bless thee, and curse him that
            curseth thee: and in thee shall all families of the earth be
            blessed.
          </p>
          <p>
            <b>4</b>So Abram departed, as the LORD had spoken unto him; and Lot
            went with him: and Abram <i>was</i> seventy and five years old when
            he departed out of Haran. <b>5</b>And Abram took Sarai his wife, and
            Lot his brother's son, and all their substance that they had
            gathered, and the souls that they had gotten in Haran; and they went
            forth to go into the land of Canaan; and into the land of Canaan
            they came.
          </p>
          <p>
            <b>7</b>And the LORD appeared unto Abram, and said, Unto thy seed
            will I give this land: and there builded he an altar unto the LORD,
            who appeared unto him.
          </p>
          <p>
            <span class="text-4xl mr-1">15</span>
            <b>1</b>After these things the word of the LORD came unto Abram in a
            vision, saying, Fear not, Abram: I <i>am</i> thy shield,
            <i>and</i> thy exceeding great reward.
          </p>
          <p>
            <b>2</b>And Abram said, Lord GOD, what wilt thou give me, seeing I
            go childless, and the steward of my house <i>is</i> this Eliezer of
            Damascus? <b>3</b>And Abram said, Behold, to me thou hast given no
            seed: and, lo, one born in my house is mine heir.
          </p>
          <p>
            <b>4</b>And, behold, the word of the LORD <i>came</i> unto him,
            saying, This shall not be thine heir; but he that shall come forth
            out of thine own bowels shall be thine heir. <b>5</b>And he brought
            him forth abroad, and said, Look now toward heaven, and tell the
            stars, if thou be able to number them: and he said unto him, So
            shall thy seed be.
          </p>
          <p>
            <b>6</b>And he believed in the LORD; and he counted it to him for
            righteousness.
          </p>
          <p>
            <b>7</b>And he said unto him, I <i>am</i> the LORD that brought thee
            out of Ur of the Chaldees, to give thee this land to inherit it.
          </p>
        </div>
      </article>
      <article class="prose prose-slate dark:prose-invert">
        <h2 class="sm:text-center">New International Version</h2>
        <div class="sm:prose-sm md:prose-base xl:prose-lg">
          <p>
            <span class="text-4xl mr-1">12</span>
            <b>1</b>The
            <span class="uppercase">L<span class="text-sm">ORD</span></span>
            had said to Abram, "Go from your country, your people and your
            father's household to the land I will show you.
          </p>
          <p class="ml-4">
            <b class="">2</b>"I will make you into a great nation,
            <span class="ml-8 block">and I will bless you;</span>
            I will make your name great,
            <span class="ml-8 block">and you will be a blessing.</span>
            <b class="">3</b>I will bless those who bless you,
            <span class="ml-8 block">and whoever curses you I will curse;</span>
            and all peoples on earth
            <span class="ml-8 block">will be blessed through you.</span>
          </p>
          <p>
            <b>4</b>So Abram went, as the LORD had told him; and Lot went with
            him. Abram was seventy-five years old when he set out from Harran.
            <b>5</b>He took his wife Sarai, his nephew Lot, all the possessions
            they had accumulated and the people they had acquired in Harran, and
            they set out for the land of Canaan, and they arrived there.
          </p>
          <p>
            <b>7</b>The LORD appeared to Abram and said, "To your offspring I
            will give this land." So he built an altar there to the LORD, who
            had appeared to him.
          </p>
          <p>
            <span class="text-4xl mr-1">15</span>
            <b>1</b>After this, the word of the LORD came to Abram in a vision:
          </p>
          <p class="ml-4">
            "Do not be afraid, Abram.
            <span class="ml-8 block">I am your shield,</span>
            <span class="ml-8">your very great reward."</span>
          </p>
          <p>
            <b>2</b>But Abram said, "Sovereign LORD, what can you give me since
            I remain childless and the one who will inherit my estate is Eliezer
            of Damascus?" <b>3</b>And Abram said, "You have given me no
            children; so a servant in my household will be my heir."
          </p>
          <p>
            <b>4</b>Then the word of the LORD came to him: "This man will not be
            your heir, but a son who is your own flesh and blood will be your
            heir." <b>5</b>He took him outside and said, "Look up at the sky and
            count the stars—if indeed you can count them." Then he said to him,
            "So shall your offspring be."
          </p>
          <p>
            <b>6</b>Abram believed the LORD, and he credited it to him as
            righteousness.
          </p>
          <p>
            <b>7</b>He also said to him, "I am the LORD, who brought you out of
            Ur of the Chaldeans to give you this land to take possession of it."
          </p>
        </div>
      </article>
    </main>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <div class="contents font-semibold text-center dark:text-slate-100">
        <h2 class="hidden lg:block">New King James Version</h2>
        <h2>English Standard Version</h2>
        <h2>Christian Standard Bible</h2>
        <h2 class="hidden lg:block">New English Translation</h2>
        <h2>New Living Translation</h2>
      </div>

      <ul
        v-for="(verse, number) in gen12"
        class="contents text-sm xl:text-base"
      >
        <li
          v-if="number != 6"
          v-for="t in ['nkjv', 'esv', 'csb', 'net', 'nlt']"
          :data-reference="'GEN 12:' + number + ' ' + t.toUpperCase()"
          :class="{ 'hidden lg:block': t == 'nkjv' || t == 'net' }"
          v-html="'<b>12:' + number + '</b> ' + verse[t]"
        ></li>
      </ul>

      <ul
        v-for="(verse, number) in gen15"
        class="contents text-sm xl:text-base"
      >
        <li
          v-for="t in ['nkjv', 'esv', 'csb', 'net', 'nlt']"
          :data-reference="'GEN 15:' + number + ' ' + t.toUpperCase()"
          :class="{ 'hidden lg:block': t == 'nkjv' || t == 'net' }"
          v-html="'<b>15:' + number + '</b> ' + verse[t]"
        ></li>
      </ul>
    </aside>
  </div>
</template>
