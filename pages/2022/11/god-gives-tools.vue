<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "God Gives Tools for Our Protection",
  description: "Ephesians 6:10-18",
};
useSeoMeta({
  title: lesson.title,
  description: lesson.description,
});
</script>

<template>
  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <LessonHeader v-bind="lesson" />
  </div>

  <div class="xl:container mx-auto px-4 xl:max-w-screen-xl">
    <main class="grid sm:grid-cols-2 gap-4">
      <Passage translation="KJV">
        <p>
          <b>10</b>Finally, my brethren, be strong in the Lord, and in the power
          of his might. <b>11</b>Put on the whole armour of God, that ye may be
          able to stand against the wiles of the devil. <b>12</b>For we wrestle
          not against flesh and blood, but against principalities, against
          powers, against the rulers of the darkness of this world, against
          spiritual wickedness in high <i>places</i>. <b>13</b>Wherefore take
          unto you the whole armour of God, that ye may be able to withstand in
          the evil day, and having done all, to stand.
        </p>
        <p>
          <b>14</b>Stand therefore, having your loins girt about with truth, and
          having on the breastplate of righteousness; <b>15</b>And your feet
          shod with the preparation of the gospel of peace; <b>16</b>Above all,
          taking the shield of faith, wherewith ye shall be able to quench all
          the fiery darts of the wicked. <b>17</b>And take the helmet of
          salvation, and the sword of the Spirit, which is the word of God:
          <b>18</b>Praying always with all prayer and supplication in the
          Spirit, and watching thereunto with all perseverance and supplication
          for all saints;
        </p>
      </Passage>
      <Passage translation="NIV">
        <p>
          <b>10</b>Finally, be strong in the Lord and in his mighty power.
          <b>11</b>Put on the full armor of God, so that you can take your stand
          against the devil's schemes. <b>12</b>For our struggle is not against
          flesh and blood, but against the rulers, against the authorities,
          against the powers of this dark world and against the spiritual forces
          of evil in the heavenly realms. <b>13</b>Therefore put on the full
          armor of God, so that when the day of evil comes, you may be able to
          stand your ground, and after you have done everything, to stand.
          <b>14</b>Stand firm then, with the belt of truth buckled around your
          waist, with the breastplate of righteousness in place, <b>15</b>and
          with your feet fitted with the readiness that comes from the gospel of
          peace. <b>16</b>In addition to all this, take up the shield of faith,
          with which you can extinguish all the flaming arrows of the evil one.
          <b>17</b>Take the helmet of salvation and the sword of the Spirit,
          which is the word of God.
        </p>
        <p>
          <b>18</b>And pray in the Spirit on all occasions with all kinds of
          prayers and requests. With this in mind, be alert and always keep on
          praying for all the Lord's people.
        </p>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/11/we-are-gods-handiwork">
        We Are God's Handiwork
      </LessonLast>
      <div></div>
    </nav>
  </div>
</template>
