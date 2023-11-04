<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "Song of Moses",
  description: "Deuteronomy 32:3-6, 10-14, 18",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="King James Version">
        <p class="ml-4">
          <b>3</b>Because I will publish the name of the <Lord />:
          <span class="block">Ascribe ye greatness unto our God.</span>
          <b>4</b><i>He is</i> the Rock, his work <i>is</i> perfect:
          <span class="block">For all his ways <i>are</i> judgment:</span>
          A God of truth and without iniquity,
          <span class="block">Just and right <i>is</i> he.</span>
          <b>5</b>They have corrupted themselves, their spot <i>is</i> not
          <i>the spot</i> of his children:
          <span class="block">
            <i>They are</i> a perverse and crooked generation.
          </span>
          <b>6</b>Do ye thus requite the <Lord />,
          <span class="block">O foolish people and unwise?</span>
          <i>Is</i> not he thy father <i>that</i> hath bought thee?
          <span class="block">
            Hath he not made thee, and established thee?
          </span>
        </p>
        <p class="ml-4">
          <b>10</b>He found him in a desert land,
          <span class="block">And in the waste howling wilderness;</span>
          He led him about, he instructed him,
          <span class="block">He kept him as the apple of his eye.</span>
          <b>11</b>As an eagle stirreth up her nest,
          <span class="block">Fluttereth over her young,</span>
          Spreadeth abroad her wings, taketh them,
          <span class="block">Beareth them on her wings:</span>
          <b>12</b><i>So</i> the <Lord /> alone did lead him,
          <span class="block">
            And <i>there was</i> no strange god with him.
          </span>
          <b>13</b>He made him ride on the high places of the earth,
          <span class="block">
            That he might eat the increase of the fields;
          </span>
          And he made him to suck honey out of the rock,
          <span class="block">And oil out of the flinty rock;</span>
          <b>14</b>Butter of kine, and milk of sheep,
          <span class="block">
            With fat of lambs, and rams of the breed of Bashan,
          </span>
          And goats, with the fat of kidneys of wheat;
          <span class="block">
            And thou didst drink the pure blood of the grape.
          </span>
        </p>
        <p class="ml-4">
          <b>18</b>Of the Rock <i>that</i> begat thee thou art unmindful,
          <span class="block">And hast forgotten God that formed thee.</span>
        </p>
      </Passage>
      <Passage translation="New International Version">
        <p class="ml-4">
          <b>3</b>I will proclaim the name of the <Lord />.
          <span class="ml-8 block">Oh, praise the greatness of our God!</span>
          <b>4</b>He is the Rock, his works are perfect,
          <span class="ml-8 block">and all his ways are just.</span>
          A faithful God who does no wrong,
          <span class="ml-8 block">upright and just is he.</span>
        </p>
        <p class="ml-4">
          <b>5</b>They are corrupt and not his children;
          <span class="ml-8 block">
            to their shame they are a warped and crooked generation.
          </span>
          <b>6</b>Is this the way you repay the <Lord />,
          <span class="ml-8 block">you foolish and unwise people?</span>
          Is he not your Father, your Creator,
          <span class="ml-8 block">who made you and formed you?</span>
        </p>
        <p class="ml-4">
          <b>10</b>In a desert land he found him,
          <span class="ml-8 block">in a barren and howling waste.</span>
          He shielded him and cared for him;
          <span class="ml-8 block">
            he guarded him as the apple of his eye,
          </span>
          <b>11</b>like an eagle that stirs up its nest
          <span class="ml-8 block">and hovers over its young,</span>
          that spreads its wings to catch them
          <span class="ml-8 block">and carries them aloft.</span>
          <b>12</b>The <Lord /> alone led him;
          <span class="ml-8 block">no foreign god was with him.</span>
        </p>
        <p class="ml-4">
          <b>13</b>He made him ride on the heights of the land
          <span class="ml-8 block">
            and fed him with the fruit of the fields.
          </span>
          He nourished him with honey from the rock,
          <span class="ml-8 block">and with oil from the flinty crag,</span>
          <b>14</b>with curds and milk from herd and flock
          <span class="ml-8 block">and with fattened lambs and goats,</span>
          with choice rams of Bashan
          <span class="ml-8 block">and the finest kernels of wheat.</span>
          You drank the foaming blood of the grape.
        </p>
        <p class="ml-4">
          <b>18</b>You deserted the Rock, who fathered you;
          <span class="ml-8 block">you forgot the God who gave you birth.</span>
        </p>
      </Passage>
    </main>
  </div>
</template>
