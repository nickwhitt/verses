<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "We Are God's Handiwork",
  description: "Ephesians 2:1-10",
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
      <Passage translation="KJV">
        <p>
          <b>1</b>And you <i>hath he quickened</i>, who were dead in trespasses
          and sins; <b>2</b>Wherein in time past ye walked according to the
          course of this world, according to the prince of the power of the air,
          the spirit that now worketh in the children of disobedience:
          <b>3</b>Among whom also we all had our conversation in times past in
          the lusts of our flesh, fulfilling the desires of the flesh and of the
          mind; and were by nature the children of wrath, even as others.
        </p>
        <p>
          <b>4</b>But God, who is rich in mercy, for his great love wherewith he
          loved us, <b>5</b>Even when we were dead in sins, hath quickened us
          together with Christ, (by grace ye are saved;) <b>6</b>And hath raised
          <i>us</i> up together, and made <i>us</i> sit together in heavenly
          <i>places</i> in Christ Jesus: <b>7</b>That in the ages to come he
          might shew the exceeding riches of his grace in <i>his</i> kindness
          toward us through Christ Jesus. <b>8</b>For by grace are ye saved
          through faith; and that not of yourselves: <i>it is</i> the gift of
          God: <b>9</b>Not of works, lest any man should boast. <b>10</b>For we
          are his workmanship, created in Christ Jesus unto good works, which
          God hath before ordained that we should walk in them.
        </p>
      </Passage>
      <Passage translation="NIV">
        <p>
          <b>1</b>As for you, you were dead in your transgressions and sins,
          <b>2</b>in which you used to live when you followed the ways of this
          world and of the ruler of the kingdom of the air, the spirit who is
          now at work in those who are disobedient. <b>3</b>All of us also lived
          among them at one time, gratifying the cravings of our flesh and
          following its desires and thoughts. Like the rest, we were by nature
          deserving of wrath. <b>4</b>But because of his great love for us, God,
          who is rich in mercy, <b>5</b>made us alive with Christ even when we
          were dead in transgressions--it is by grace you have been saved.
          <b>6</b>And God raised us up with Christ and seated us with him in the
          heavenly realms in Christ Jesus, <b>7</b>in order that in the coming
          ages he might show the incomparable riches of his grace, expressed in
          his kindness to us in Christ Jesus. <b>8</b>For it is by grace you
          have been saved, through faith--and this is not from yourselves, it is
          the gift of God-- <b>9</b>not by works, so that no one can boast.
          <b>10</b>For we are God's handiwork, created in Christ Jesus to do
          good works, which God prepared in advance for us to do.
        </p>
      </Passage>
    </main>
  </div>
</template>
