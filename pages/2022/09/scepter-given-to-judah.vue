<script setup>
const lesson = {
  unit: "God Calls Abraham's Family",
  title: "The Scepter Given to Judah",
  description: "Genesis 32:22-26; 38:24-26; 49:10-12",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});

const { data: gen32 } = await useFetch("/api/gen32", {
  transform: (verses) => {
    return verses.filter((verse) => {
      return verse.number <= 26;
    });
  },
});
const { data: gen38 } = await useFetch("/api/gen38");
const { data: gen49 } = await useFetch("/api/gen49");
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
            <span class="text-4xl mr-1">32</span>
            <b>22</b>And he rose up that night, and took his two wives, and his
            two womenservants, and his eleven sons, and passed over the ford
            Jabbok.

            <b>23</b>And he took them, and sent them over the brook, and sent
            over that he had.

            <b>24</b>And Jacob was left alone; and there wrestled a man with him
            until the breaking of the day.

            <b>25</b>And when he saw that he prevailed not against him, he
            touched the hollow of his thigh; and the hollow of Jacob's thigh was
            out of joint, as he wrestled with him.

            <b>26</b>And he said, Let me go, for the day breaketh. And he said,
            I will not let thee go, except thou bless me.
          </p>
        </div>
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">38</span>
            <b>24</b>And it came to pass about three months after, that it was
            told Judah, saying, Tamar thy daughter in law hath played the
            harlot; and also, behold, she <i>is</i> with child by whoredom. And
            Judah said, Bring her forth, and let her be burnt.
          </p>
          <p>
            <b>25</b>When she <i>was</i> brought forth, she sent to her father
            in law, saying, By the man, whose these <i>are, am</i> I with child:
            and she said, Discern, I pray thee, whose <i>are</i> these, the
            signet, and bracelets, and staff.
          </p>
          <p>
            <b>26</b>And Judah acknowledged <i>them</i>, and said, She hath been
            more righteous than I; because that I gave her not to Shelah my son.
            And he knew her again no more.
          </p>
        </div>
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">49</span>
            <b>10</b>The sceptre shall not depart from Judah, nor a lawgiver
            from between his feet, until Shiloh come; and unto him
            <i>shall</i> the gathering of the people <i>be</i>.
          </p>
          <p>
            <b>11</b>Binding his foal unto the vine, and his ass's colt unto the
            choice vine; he washed his garments in wine, and his clothes in the
            blood of grapes:
          </p>
          <p>
            <b>12</b>His eyes <i>shall be</i> red with wine, and his teeth white
            with milk.
          </p>
        </div>
      </Passage>
      <Passage translation="NIV" class="space-y-4">
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">32</span>
            <b>22</b>That night Jacob got up and took his two wives, his two
            female servants and his eleven sons and crossed the ford of the
            Jabbok.

            <b>23</b>After he had sent them across the stream, he sent over all
            his possessions.

            <b>24</b>So Jacob was left alone, and a man wrestled with him till
            daybreak.

            <b>25</b>When the man saw that he could not overpower him, he
            touched the socket of Jacob's hip so that his hip was wrenched as he
            wrestled with the man.

            <b>26</b>Then the man said, "Let me go, for it is daybreak."
          </p>
        </div>
        <div>
          <p class="lead">
            <span class="text-4xl mr-1">38</span>
            <b>24</b>About three months later Judah was told, "Your
            daughter-in-law Tamar is guilty of prostitution, and as a result she
            is now pregnant."
          </p>
          <p>Judah said, "Bring her out and have her burned to death!"</p>
          <p>
            <b>25</b>As she was being brought out, she sent a message to her
            father-in-law. "I am pregnant by the man who owns these," she said.
            And she added, "See if you recognize whose seal and cord and staff
            these are."
          </p>
          <p>
            <b>26</b>Judah recognized them and said, "She is more righteous than
            I, since I wouldn't give her to my son Shelah." And he did not sleep
            with her again.
          </p>
        </div>
        <div>
          <p class="lead text-4xl mr-1">49</p>
          <ol>
            <li><b>10</b>The scepter will not depart from Judah,</li>
            <li class="ml-6">nor the ruler's staff from between his feet,</li>
            <li>until he to whom it belongs shall come</li>
            <li class="ml-6">and the obedience of the nations shall be his.</li>

            <li><b>11</b>He will tether his donkey to a vine,</li>
            <li class="ml-6">his colt to the choicest branch;</li>
            <li>he will wash his garments in wine,</li>
            <li class="ml-6">his robes in the blood of grapes.</li>

            <li><b>12</b>His eyes will be darker than wine,</li>
            <li class="ml-6">his teeth whiter than milk.</li>
          </ol>
        </div>
      </Passage>
    </main>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <VerseGrid chapter="32" :verses="gen32" />
      <VerseGrid chapter="38" :verses="gen38">
        <template #header><p class="hidden" /></template>
      </VerseGrid>
      <VerseGrid chapter="49" :verses="gen49">
        <template #header><p class="hidden" /></template>
      </VerseGrid>
    </aside>
  </div>
</template>
