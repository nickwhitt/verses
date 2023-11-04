<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "Who Is King?",
  description: "1 Samuel 8:4-7; 10:17-24",
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
        <p>
          <span class="text-4xl mr-1">8</span>
          <b>4</b>Then all the elders of Israel gathered themselves together,
          and came to Samuel unto Ramah, <b>5</b>And said unto him, Behold, thou
          art old, and thy sons walk not in thy ways: now make us a king to
          judge us like all the nations.
        </p>
        <p>
          <b>6</b>But the thing displeased Samuel, when they said, Give us a
          king to judge us. And Samuel prayed unto the <Lord />. <b>7</b>And the
          <Lord /> said unto Samuel, Hearken unto the voice of the people in all
          that they say unto thee: for they have not rejected thee, but they
          have rejected me, that I should not reign over them.
        </p>
        <p>
          <span class="text-4xl mr-1">10</span>
          <b>17</b>And Samuel called the people together unto the <Lord /> to
          Mizpeh; <b>18</b>And said unto the children of Israel, Thus saith the
          <Lord /> God of Israel, I brought up Israel out of Egypt, and
          delivered you out of the hand of the Egyptians, and out of the hand of
          all kingdoms, <i>and</i> of them that oppressed you: <b>19</b>And ye
          have this day rejected your God, who himself saved you out of all your
          adversities and your tribulations; and ye have said unto him,
          <i>Nay</i>, but set a king over us. Now therefore present yourselves
          before the <Lord /> by your tribes, and by your thousands.
        </p>
        <p>
          <b>20</b>And when Samuel had caused all the tribes of Israel to come
          near, the tribe of Benjamin was taken. <b>21</b>When he had caused the
          tribe of Benjamin to come near by their families, the family of Matri
          was taken, and Saul the son of Kish was taken: and when they sought
          him, he could not be found. <b>22</b>Therefore they enquired of the
          <Lord /> further, if the man should yet come thither. And the <Lord />
          answered, Behold, he hath hid himself among the stuff.
        </p>
        <p>
          <b>23</b>And they ran and fetched him thence: and when he stood among
          the people, he was higher than any of the people from his shoulders
          and upward. <b>24</b>And Samuel said to all the people, See ye him
          whom the <Lord /> hath chosen, that <i>there is</i> none like him
          among all the people? And all the people shouted, and said, God save
          the king.
        </p>
      </Passage>
      <Passage translation="New International Version">
        <p>
          <span class="text-4xl mr-1">8</span>
          <b>4</b>So all the elders of Israel gathered together and came to
          Samuel at Ramah. <b>5</b>They said to him, "You are old, and your sons
          do not follow your ways; now appoint a king to lead us, such as all
          the other nations have."
        </p>
        <p>
          <b>6</b>But when they said, "Give us a king to lead us," this
          displeased Samuel; so he prayed to the <Lord />. <b>7</b>And the
          <Lord /> told him: "Listen to all that the people are saying to you;
          it is not you they have rejected, but they have rejected me as their
          king.
        </p>
        <p>
          <span class="text-4xl mr-1">10</span>
          <b>17</b>Samuel summoned the people of Israel to the <Lord /> at
          Mizpah <b>18</b>and said to them, "This is what the <Lord />, the God
          of Israel, says: 'I brought Israel up out of Egypt, and I delivered
          you from the power of Egypt and all the kingdoms that oppressed you.'
          <b>19</b>But you have now rejected your God, who saves you out of all
          your disasters and calamities. And you have said, 'No, appoint a king
          over us.' So now present yourselves before the <Lord /> by your tribes
          and clans."
        </p>
        <p>
          <b>20</b>When Samuel had all Israel come forward by tribes, the tribe
          of Benjamin was taken by lot. <b>21</b>Then he brought forward the
          tribe of Benjamin, clan by clan, and Matri's clan was taken. Finally
          Saul son of Kish was taken. But when they looked for him, he was not
          to be found. <b>22</b>So they inquired further of the <Lord />, "Has
          the man come here yet?"
        </p>
        <p>
          And the <Lord /> said, "Yes, he has hidden himself among the
          supplies."
        </p>
        <p>
          <b>23</b>They ran and brought him out, and as he stood among the
          people he was a head taller than any of the others. <b>24</b>Samuel
          said to all the people, "Do you see the man the <Lord /> has chosen?
          There is no one like him among all the people."
        </p>
        <p>Then the people shouted, "Long live the king!"</p>
      </Passage>
    </main>
  </div>
</template>
