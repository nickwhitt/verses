<script setup>
const lesson = {
  unit: "We Are God's Artwork",
  title: "God Picked You!",
  description: "Ephesians 1:1-14",
  date: "November 6, 2022",
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
          <b>1</b>Paul, an apostle of Jesus Christ by the will of God, to the
          saints which are at Ephesus, and to the faithful in Christ Jesus:
        </p>
        <p>
          <b>2</b>Grace <i>be</i> to you, and peace, from God our Father, and
          <i>from</i> the Lord Jesus Christ.
        </p>
        <p>
          <b>3</b>Blessed <i>be</i> the God and Father of our Lord Jesus Christ,
          who hath blessed us with all spiritual blessings in heavenly
          <i>places</i> in Christ: <b>4</b>According as he hath chosen us in him
          before the foundation of the world, that we should be holy and without
          blame before him in love: <b>5</b>Having predestinated us unto the
          adoption of children by Jesus Christ to himself, according to the good
          pleasure of his will, <b>6</b>To the praise of the glory of his grace,
          wherein he hath made us accepted in the beloved.
        </p>
        <p>
          <b>7</b>In whom we have redemption through his blood, the forgiveness
          of sins, according to the riches of his grace; <b>8</b>Wherein he hath
          abounded toward us in all wisdom and prudence; <b>9</b>Having made
          known unto us the mystery of his will, according to his good pleasure
          which he hath purposed in himself: <b>10</b>That in the dispensation
          of the fulness of times he might gather together in one all things in
          Christ, both which are in heaven, and which are on earth;
          <i>even</i> in him: <b>11</b>In whom also we have obtained an
          inheritance, being predestinated according to the purpose of him who
          worketh all things after the counsel of his own will: <b>12</b>That we
          should be to the praise of his glory, who first trusted in Christ.
        </p>
        <p>
          <b>13</b>In whom ye also <i>trusted</i>, after that ye heard the word
          of truth, the gospel of your salvation: in whom also after that ye
          believed, ye were sealed with that holy Spirit of promise,
          <b>14</b>Which is the earnest of our inheritance until the redemption
          of the purchased possession, unto the praise of his glory.
        </p>
      </Passage>
      <Passage translation="NIV" class="space-y-4">
        <p><b>1</b>Paul, an apostle of Christ Jesus by the will of God,</p>
        <p>To God's holy people in Ephesus, the faithful in Christ Jesus:</p>
        <p>
          <b>2</b>Grace and peace to you from God our Father and the Lord Jesus
          Christ.
        </p>
        <div>
          <p>
            <b>3</b>Praise be to the God and Father of our Lord Jesus Christ,
            who has blessed us in the heavenly realms with every spiritual
            blessing in Christ. <b>4</b>For he chose us in him before the
            creation of the world to be holy and blameless in his sight. In love
            <b>5</b>he predestined us for adoption to sonship through Jesus
            Christ, in accordance with his pleasure and will-- <b>6</b>to the
            praise of his glorious grace, which he has freely given us in the
            One he loves. <b>7</b>In him we have redemption through his blood,
            the forgiveness of sins, in accordance with the riches of God's
            grace <b>8</b>that he lavished on us. With all wisdom and
            understanding, <b>9</b>he made known to us the mystery of his will
            according to his good pleasure, which he purposed in Christ,
            <b>10</b>to be put into effect when the times reach their
            fulfillment--to bring unity to all things in heaven and on earth
            under Christ.
          </p>
          <p>
            <b>11</b>In him we were also chosen, having been predestined
            according to the plan of him who works out everything in conformity
            with the purpose of his will, <b>12</b>in order that we, who were
            the first to put our hope in Christ, might be for the praise of his
            glory. <b>13</b>And you also were included in Christ when you heard
            the message of truth, the gospel of your salvation. When you
            believed, you were marked in him with a seal, the promised Holy
            Spirit, <b>14</b>who is a deposit guaranteeing our inheritance until
            the redemption of those who are God's possession--to the praise of
            his glory.
          </p>
        </div>
      </Passage>
    </main>

    <nav class="flex justify-between my-4 font-light">
      <LessonLast slug="/2022/10/david-anointed-king">
        David Anointed as King
      </LessonLast>
      <LessonNext slug="/2022/11/christ-is-wisdom">Christ Is Wisdom</LessonNext>
    </nav>
  </div>
</template>
