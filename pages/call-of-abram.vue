<script setup>
const nkjv = ref([
  {
    number: 1,
    lines: [
      "Now the LORD had said to Abram:",
      '"Get out of your country,',
      "From your family",
      "And from your father's house,",
      "To a land that I will show you."
    ]
  },
  {
    number: 2,
    lines: [
      "I will make you a great nation;",
      "I will bless you",
      "And make your name great;",
      "And you shall be a blessing.",
    ]
  },
  {
    number: 3,
    lines: [
      "I will bless those who bless you,",
      "And I will curse him who curses you;",
      'And in you all the families of the earth shall be blessed."',
    ]
  },
  {
    number: 4,
    lines: [
      "So Abram departed as the LORD had spoken to him, and Lot went with him. And Abram was seventy-five years old when he departed from Haran."
    ]
  },
  {
    number: 5,
    lines: [
      "Then Abram took Sarai his wife and Lot his brother's son, and all their possessions that they had gathered, and the people whom they had acquired in Haran, and they departed to go to the land of Canaan.So they came to the land of Canaan."
    ]
  },
  {
    number: 7,
    lines: [
      'Then the LORD appeared to Abram and said, "To your descendants I will give this land." And there he built an altar to the LORD, who had appeared to him.'
    ]
  }
])
</script>

<template>
  <article class="container mx-auto px-4">
    <hgroup>
      <h1 class="text-3xl font-bold">The Call of Abram</h1>
      <p class="mb-4">Genesis 12:1-5, 7; 15:1-7</p>
    </hgroup>

    <ol class="list-decimal">
      <Verse v-for="verse in nkjv" :key="verse.number" :value="verse.number" :lines="verse.lines" />
    </ol>
  </article>
</template>
