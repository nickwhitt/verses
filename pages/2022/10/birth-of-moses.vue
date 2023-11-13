<script setup>
const lesson = {
  unit: "Out of Slavery to Nationhood",
  title: "The Birth of Moses",
  description: "Exodus 2:1-10",
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
          <b>1</b>And there went a man of the house of Levi, and took
          <i>to wife</i> a daughter of Levi.

          <b>2</b>And the woman conceived, and bare a son: and when she saw him
          that he <i>was a</i> goodly <i>child</i>, she hid him three months.

          <b>3</b>And when she could not longer hide him, she took for him an
          ark of bulrushes, and daubed it with slime and with pitch, and put the
          child therein; and she laid <i>it</i> in the flags by the river's
          brink.

          <b>4</b>And his sister stood afar off, to wit what would be done to
          him.
        </p>
        <p>
          <b>5</b>And the daughter of Pharaoh came down to wash <i>herself</i>
          at the river; and her maidens walked along by the river's side; and
          when she saw the ark among the flags, she sent her maid to fetch it.

          <b>6</b>And when she had opened <i>it</i>, she saw the child: and,
          behold, the babe wept. And she had compassion on him, and said, This
          <i>is one</i> of the Hebrews' children.
        </p>
        <p>
          <b>7</b>Then said his sister to Pharaoh's daughter, Shall I go and
          call to thee a nurse of the Hebrew women, that she may nurse the child
          for thee?
        </p>
        <p>
          <b>8</b>And Pharaoh's daughter said to her, Go. And the maid went and
          called the child's mother.

          <b>9</b>And Pharaoh's daughter said unto her, Take this child away,
          and nurse it for me, and I will give <i>thee</i> thy wages. And the
          woman took the child, and nursed it.

          <b>10</b>And the child grew, and she brought him unto Pharaoh's
          daughter, and he became her son. And she called his name Moses: and
          she said, Because I drew him out of the water.
        </p>
      </Passage>
      <Passage translation="New International Version">
        <p>
          <b>1</b>Now a man of the tribe of Levi married a Levite woman,
          <b>2</b>and she became pregnant and gave birth to a son. When she saw
          that he was a fine child, she hid him for three months. <b>3</b>But
          when she could hide him no longer, she got a papyrus basket for him
          and coated it with tar and pitch. Then she placed the child in it and
          put it among the reeds along the bank of the Nile. <b>4</b>His sister
          stood at a distance to see what would happen to him.
        </p>
        <p>
          <b>5</b>Then Pharaoh's daughter went down to the Nile to bathe, and
          her attendants were walking along the riverbank. She saw the basket
          among the reeds and sent her female slave to get it. <b>6</b>She
          opened it and saw the baby. He was crying, and she felt sorry for him.
          "This is one of the Hebrew babies," she said.
        </p>
        <p>
          <b>7</b>Then his sister asked Pharaoh's daughter, "Shall I go and get
          one of the Hebrew women to nurse the baby for you?"
        </p>
        <p>
          <b>8</b>"Yes, go," she answered. So the girl went and got the baby's
          mother. <b>9</b>Pharaoh's daughter said to her, "Take this baby and
          nurse him for me, and I will pay you." So the woman took the baby and
          nursed him. <b>10</b>When the child grew older, she took him to
          Pharaoh's daughter and he became her son. She named him Moses, saying,
          "I drew him out of the water."
        </p>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/09/scepter-given-to-judah">
        The Scepter Given to Judah
      </LessonLast>
      <LessonNext slug="/2022/10/song-of-moses">Song of Moses</LessonNext>
    </nav>
  </div>
</template>
