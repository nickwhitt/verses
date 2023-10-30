<script setup>
import { BookOpenIcon } from "@heroicons/vue/24/outline";
useSeoMeta({
  title: "Jacob Called Israel",
  description: "Genesis 32:22-32",
});

const { data: gen32 } = await useFetch("/api/gen32");
</script>

<template>
  <Body class="text-slate-700 dark:text-slate-300 dark:bg-slate-900" />
  <div class="xl:container mx-auto px-4">
    <hgroup class="prose prose-slate dark:prose-invert py-8">
      <p class="font-light mb-0">God Calls Abraham's Family</p>
      <h1 class="m-0">Jacob Called Israel</h1>
      <p class="flex items-center font-light gap-2 mt-0">
        <BookOpenIcon class="h-5 w-5" />
        Genesis 32:22-32
      </p>
    </hgroup>

    <main class="grid sm:grid-cols-2 gap-4">
      <article class="prose prose-slate dark:prose-invert">
        <h2 class="sm:text-center">King James Version</h2>
        <div class="sm:prose-sm md:prose-base xl:prose-lg">
          <p>
            <b>22</b>And he rose up that night, and took his two wives, and his
            two womenservants, and his eleven sons, and passed over the ford
            Jabbok.

            <b>23</b>And he took them, and sent them over the brook, and sent
            over that he had.

            <b>24</b>And Jacob was left alone; and there wrestled a man with him
            until the breaking of the day.

            <b>25</b>And when he saw that he prevailed not against him, he
            touched the hollow of his thigh; and the hollow of Jacob's thigh was
            out of joint, as he wrestled with him.

            <b>26</b>And he said, Let me go, for the day breaketh. And he said,
            I will not let thee go, except thou bless me.
          </p>
          <p>
            <b>27</b>And he said unto him, What <i>is</i> thy name? And he said,
            Jacob.
          </p>
          <p>
            <b>28</b>And he said, Thy name shall be called no more Jacob, but
            Israel: for as a prince hast thou power with God and with men, and
            hast prevailed.
          </p>
          <p>
            <b>29</b>And Jacob asked <i>him</i>, and said, Tell <i>me</i>, I
            pray thee, thy name. And he said, Wherefore <i>is</i> it
            <i>that</i> thou dost ask after my name? And he blessed him there.
          </p>
          <p>
            <b>30</b>And Jacob called the name of the place Peniel: for I have
            seen God face to face, and my life is preserved.

            <b>31</b>And as he passed over Penuel the sun rose upon him, and he
            halted upon his thigh.

            <b>32</b>Therefore the children of Israel eat not <i>of</i> the
            sinew which shrank, which <i>is</i> upon the hollow of the thigh,
            unto this day: because he touched the hollow of Jacob's thigh in the
            sinew that shrank.
          </p>
        </div>
      </article>
      <article class="prose prose-slate dark:prose-invert">
        <h2 class="sm:text-center">New International Version</h2>
        <div class="sm:prose-sm md:prose-base xl:prose-lg">
          <p>
            <b>22</b>That night Jacob got up and took his two wives, his two
            female servants and his eleven sons and crossed the ford of the
            Jabbok.

            <b>23</b>After he had sent them across the stream, he sent over all
            his possessions.

            <b>24</b>So Jacob was left alone, and a man wrestled with him till
            daybreak.

            <b>25</b>When the man saw that he could not overpower him, he
            touched the socket of Jacob's hip so that his hip was wrenched as he
            wrestled with the man.

            <b>26</b>Then the man said, "Let me go, for it is daybreak."
          </p>
          <p>But Jacob replied, "I will not let you go unless you bless me."</p>
          <p><b>27</b>The man asked him, "What is your name?"</p>
          <p>"Jacob," he answered.</p>
          <p>
            <b>28</b>Then the man said, "Your name will no longer be Jacob, but
            Israel, because you have struggled with God and with humans and have
            overcome."
          </p>
          <p><b>29</b>Jacob said, "Please tell me your name."</p>
          <p>
            But he replied, "Why do you ask my name?" Then he blessed him there.
          </p>
          <p>
            <b>30</b>So Jacob called the place Peniel, saying, "It is because I
            saw God face to face, and yet my life was spared."
          </p>
          <p>
            <b>31</b>The sun rose above him as he passed Peniel, and he was
            limping because of his hip.

            <b>32</b>Therefore to this day the Israelites do not eat the tendon
            attached to the socket of the hip, because the socket of Jacob's hip
            was touched near the tendon.
          </p>
        </div>
      </article>
    </main>

    <aside class="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-3 py-8">
      <div class="contents font-semibold text-center dark:text-slate-100">
        <h2 class="hidden lg:block">New King James Version</h2>
        <h2>English Standard Version</h2>
        <h2>Christian Standard Bible</h2>
        <h2 class="hidden lg:block">New English Translation</h2>
        <h2>New Living Translation</h2>
      </div>

      <ul v-for="verse in gen32" class="contents text-sm xl:text-base">
        <li
          v-for="t in ['nkjv', 'esv', 'csb', 'net', 'nlt']"
          :data-reference="'GEN 32:' + verse.number + ' ' + t.toUpperCase()"
          :class="{ 'hidden lg:block': t == 'nkjv' || t == 'net' }"
          v-html="verse[t]"
        ></li>
      </ul>
    </aside>
  </div>
</template>
