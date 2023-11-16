<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "Song of Moses",
  description: "Deuteronomy 32:3-6, 10-14, 18",
  date: "October 9, 2022",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});
const { data: deu32 } = await useFetch("/api/deu32");
</script>

<template>
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="KJV" class="space-y-4">
        <ol>
          <li><b>3</b>Because I will publish the name of the <Lord />:</li>
          <li>Ascribe ye greatness unto our God.</li>
          <li><b>4</b><i>He is</i> the Rock, his work <i>is</i> perfect:</li>
          <li>For all his ways <i>are</i> judgment:</li>
          <li>A God of truth and without iniquity,</li>
          <li>Just and right <i>is</i> he.</li>
          <li>
            <b>5</b>They have corrupted themselves, their spot <i>is</i> not
            <i>the spot</i> of his children:
          </li>
          <li><i>They are</i> a perverse and crooked generation.</li>
          <li><b>6</b>Do ye thus requite the <Lord />,</li>
          <li>O foolish people and unwise?</li>
          <li><i>Is</i> not he thy father <i>that</i> hath bought thee?</li>
          <li>Hath he not made thee, and established thee?</li>
        </ol>
        <ol>
          <li><b>10</b>He found him in a desert land,</li>
          <li>And in the waste howling wilderness;</li>
          <li>He led him about, he instructed him,</li>
          <li>He kept him as the apple of his eye.</li>
          <li><b>11</b>As an eagle stirreth up her nest,</li>
          <li>Fluttereth over her young,</li>
          <li>Spreadeth abroad her wings, taketh them,</li>
          <li>Beareth them on her wings:</li>
          <li><b>12</b><i>So</i> the <Lord /> alone did lead him,</li>
          <li>And <i>there was</i> no strange god with him.</li>
          <li><b>13</b>He made him ride on the high places of the earth,</li>
          <li>That he might eat the increase of the fields;</li>
          <li>And he made him to suck honey out of the rock,</li>
          <li>And oil out of the flinty rock;</li>
          <li><b>14</b>Butter of kine, and milk of sheep,</li>
          <li>With fat of lambs, and rams of the breed of Bashan,</li>
          <li>And goats, with the fat of kidneys of wheat;</li>
          <li>And thou didst drink the pure blood of the grape.</li>
        </ol>
        <ol>
          <li>
            <b>18</b>Of the Rock <i>that</i> begat thee thou art unmindful,
          </li>
          <li>And hast forgotten God that formed thee.</li>
        </ol>
      </Passage>
      <Passage translation="NIV" class="space-y-4">
        <ol>
          <li><b>3</b>I will proclaim the name of the <Lord />.</li>
          <li>Oh, praise the greatness of our God!</li>
          <li><b>4</b>He is the Rock, his works are perfect,</li>
          <li>and all his ways are just.</li>
          <li>A faithful God who does no wrong,</li>
          <li>upright and just is he.</li>
        </ol>
        <ol>
          <li><b>5</b>They are corrupt and not his children;</li>
          <li>to their shame they are a warped and crooked generation.</li>
          <li><b>6</b>Is this the way you repay the <Lord />,</li>
          <li>you foolish and unwise people?</li>
          <li>Is he not your Father, your Creator,</li>
          <li>who made you and formed you?</li>
        </ol>
        <ol>
          <li><b>10</b>In a desert land he found him,</li>
          <li>in a barren and howling waste.</li>
          <li>He shielded him and cared for him;</li>
          <li>he guarded him as the apple of his eye,</li>
          <li><b>11</b>like an eagle that stirs up its nest</li>
          <li>and hovers over its young,</li>
          <li>that spreads its wings to catch them</li>
          <li>and carries them aloft.</li>
          <li><b>12</b>The <Lord /> alone led him;</li>
          <li>no foreign god was with him.</li>
        </ol>
        <ol>
          <li><b>13</b>He made him ride on the heights of the land</li>
          <li>and fed him with the fruit of the fields.</li>
          <li>He nourished him with honey from the rock,</li>
          <li>and with oil from the flinty crag,</li>
          <li><b>14</b>with curds and milk from herd and flock</li>
          <li>and with fattened lambs and goats,</li>
          <li>with choice rams of Bashan</li>
          <li>and the finest kernels of wheat.</li>
          <li>You drank the foaming blood of the grape.</li>
        </ol>
        <ol>
          <li><b>18</b>You deserted the Rock, who fathered you;</li>
          <li>you forgot the God who gave you birth.</li>
        </ol>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/10/birth-of-moses">The Birth of Moses</LessonLast>
      <LessonNext slug="/2022/10/call-of-gideon">The Call of Gideon</LessonNext>
    </nav>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <VerseGrid chapter="32" :verses="deu32" />
    </aside>
  </div>
</template>
