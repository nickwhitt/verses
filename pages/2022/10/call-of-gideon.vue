<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "The Call of Gideon",
  description: "Judges 6:1-2, 7-16",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});
const { data } = await useFetch("/api/jdg6");
</script>

<template>
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="KJV">
        <p>
          <b>1</b>And the children of Israel did evil in the sight of the
          <Lord />: and the <Lord /> delivered them into the hand of Midian
          seven years. <b>2</b>And the hand of Midian prevailed against Israel:
          <i>and</i> because of the Midianites the children of Israel made them
          the dens which <i>are</i> in the mountains, and caves, and strong
          holds.
        </p>
        <p>
          <b>7</b>And it came to pass, when the children of Israel cried unto
          the <Lord /> because of the Midianites, <b>8</b>That the <Lord /> sent
          a prophet unto the children of Israel, which said unto them, Thus
          saith the <Lord /> God of Israel, I brought you up from Egypt, and
          brought you forth out of the house of bondage; <b>9</b>And I delivered
          you out of the hand of the Egyptians, and out of the hand of all that
          oppressed you, and drave them out from before you, and gave you their
          land; <b>10</b>And I said unto you, I <i>am</i> the <Lord /> your God;
          fear not the gods of the Amorites, in whose land ye dwell: but ye have
          not obeyed my voice.
        </p>
        <p>
          <b>11</b>And there came an angel of the <Lord />, and sat under an oak
          which <i>was</i> in Ophrah, that <i>pertained</i> unto Joash the
          Abiezrite: and his son Gideon threshed wheat by the winepress, to hide
          <i>it</i> from the Midianites. <b>12</b>And the angel of the
          <Lord /> appeared unto him, and said unto him, The <Lord />
          <i>is</i> with thee, thou mighty man of valour.
        </p>
        <p>
          <b>13</b>And Gideon said unto him, Oh my Lord, if the <Lord /> be with
          us, why then is all this befallen us? and where <i>be</i> all his
          miracles which our fathers told us of, saying, Did not the
          <Lord /> bring us up from Egypt? but now the <Lord /> hath forsaken
          us, and delivered us into the hands of the Midianites.
        </p>
        <p>
          <b>14</b>And the <Lord /> looked upon him, and said, Go in this thy
          might, and thou shalt save Israel from the hand of the Midianites:
          have not I sent thee?
        </p>
        <p>
          <b>15</b>And he said unto him, Oh my Lord, wherewith shall I save
          Israel? behold, my family <i>is</i> poor in Manasseh, and I
          <i>am</i> the least in my father's house.
        </p>
        <p>
          <b>16</b>And the <Lord /> said unto him, Surely I will be with thee,
          and thou shalt smite the Midianites as one man.
        </p>
      </Passage>
      <Passage translation="NIV">
        <p>
          <b>1</b>The Israelites did evil in the eyes of the <Lord />, and for
          seven years he gave them into the hands of the Midianites.
          <b>2</b>Because the power of Midian was so oppressive, the Israelites
          prepared shelters for themselves in mountain clefts, caves and
          strongholds.
        </p>
        <p>
          <b>7</b>When the Israelites cried out to the <Lord /> because of
          Midian, <b>8</b>he sent them a prophet, who said, "This is what the
          <Lord />, the God of Israel, says: I brought you up out of Egypt, out
          of the land of slavery. <b>9</b>I rescued you from the hand of the
          Egyptians. And I delivered you from the hand of all your oppressors; I
          drove them out before you and gave you their land. <b>10</b>I said to
          you, 'I am the <Lord /> your God; do not worship the gods of the
          Amorites, in whose land you live.' But you have not listened to me."
        </p>
        <p>
          <b>11</b>The angel of the <Lord /> came and sat down under the oak in
          Ophrah that belonged to Joash the Abiezrite, where his son Gideon was
          threshing wheat in a winepress to keep it from the Midianites.
          <b>12</b>When the angel of the <Lord /> appeared to Gideon, he said,
          "The <Lord /> is with you, mighty warrior."
        </p>
        <p>
          <b>13</b>"Pardon me, my lord," Gideon replied, "but if the <Lord /> is
          with us, why has all this happened to us? Where are all his wonders
          that our ancestors told us about when they said, 'Did not the
          <Lord /> bring us up out of Egypt?' But now the <Lord /> has abandoned
          us and given us into the hand of Midian."
        </p>
        <p>
          <b>14</b>The <Lord /> turned to him and said, "Go in the strength you
          have and save Israel out of Midian's hand. Am I not sending you?"
        </p>
        <p>
          <b>15</b>"Pardon me, my lord," Gideon replied, "but how can I save
          Israel? My clan is the weakest in Manasseh, and I am the least in my
          family."
        </p>
        <p>
          <b>16</b>The <Lord /> answered, "I will be with you, and you will
          strike down all the Midianites, leaving none alive."
        </p>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/10/song-of-moses">Song of Moses</LessonLast>
      <LessonNext slug="/2022/10/who-is-king">Who Is King?</LessonNext>
    </nav>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <VerseGrid chapter="6" :verses="data" />
    </aside>
  </div>
</template>
