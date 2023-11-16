<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "Christ Is Wisdom",
  description: "Ephesians 1:15-23",
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
          <b>15</b>Wherefore I also, after I heard of your faith in the Lord
          Jesus, and love unto all the saints, <b>16</b>Cease not to give thanks
          for you, making mention of you in my prayers; <b>17</b>That the God of
          our Lord Jesus Christ, the Father of glory, may give unto you the
          spirit of wisdom and revelation in the knowledge of him: <b>18</b>The
          eyes of your understanding being enlightened; that ye may know what is
          the hope of his calling, and what the riches of the glory of his
          inheritance in the saints, <b>19</b>And what <i>is</i> the exceeding
          greatness of his power to us-ward who believe, according to the
          working of his mighty power, <b>20</b>Which he wrought in Christ, when
          he raised him from the dead, and set <i>him</i> at his own right hand
          in the heavenly <i>places</i>, <b>21</b>Far above all principality,
          and power, and might, and dominion, and every name that is named, not
          only in this world, but also in that which is to come:
        </p>
        <p>
          <b>22</b>And hath put all <i>things</i> under his feet, and gave him
          <i>to be</i> the head over all <i>things</i> to the church,
          <b>23</b>Which is his body, the fulness of him that filleth all in
          all.
        </p>
      </Passage>
      <Passage translation="NIV">
        <p>
          <b>15</b>For this reason, ever since I heard about your faith in the
          Lord Jesus and your love for all God's people, <b>16</b>I have not
          stopped giving thanks for you, remembering you in my prayers.
          <b>17</b>I keep asking that the God of our Lord Jesus Christ, the
          glorious Father, may give you the Spirit of wisdom and revelation, so
          that you may know him better. <b>18</b>I pray that the eyes of your
          heart may be enlightened in order that you may know the hope to which
          he has called you, the riches of his glorious inheritance in his holy
          people, <b>19</b>and his incomparably great power for us who believe.
          That power is the same as the mighty strength <b>20</b>he exerted when
          he raised Christ from the dead and seated him at his right hand in the
          heavenly realms, <b>21</b>far above all rule and authority, power and
          dominion, and every name that is invoked, not only in the present age
          but also in the one to come. <b>22</b>And God placed all things under
          his feet and appointed him to be head over everything for the church,
          <b>23</b>which is his body, the fullness of him who fills everything
          in every way.
        </p>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/11/god-picked-you">God Picked You!</LessonLast>
      <LessonNext slug="/2022/11/we-are-gods-handiwork">
        We Are God's Handiwork
      </LessonNext>
    </nav>
  </div>
</template>
