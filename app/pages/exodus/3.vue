<template>
  <UCard>
    <template #header>
      <h2>Chapter 3</h2>
    </template>

    <div class="space-y-6">
      <Parallel>
        <template #left>
          <h3 class="text-center font-medium tracking-tight">Westminster Leningrad Codex</h3>
        </template>
        <h3 class="text-center font-medium tracking-tight">The Contemporary Torah</h3>
        <template #right>
          <h3 class="text-center font-medium tracking-tight">King James Version</h3>
        </template>
        <template #far-right>
          <h3 class="text-center font-medium tracking-tight">Septuagint</h3>
        </template>
      </Parallel>

      <Parallel v-for="scripture in scriptures" :verse="scripture.verse">
        <template #left>
          <p dir="rtl" class="font-serif text-lg sm:text-xl">{{ scripture.wlc }}</p>
        </template>
        <p class="font-serif text-sm sm:text-base">{{ scripture.cjps }}</p>
        <template #right>
          <p class="font-serif text-sm sm:text-base">{{ scripture.kjv }}</p>
        </template>
        <template #far-right>
          <p class="font-serif text-sm sm:text-base">{{ scripture.lxx }}</p>
        </template>
      </Parallel>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const scriptures = [
  {
    verse: 1,
    wlc: 'וּמֹשֶׁה הָיָה רֹעֶה אֶת־צֹאן יִתְרוֹ חֹתְנוֹ כֹּהֵן מִדְיָן וַיִּנְהַג אֶת־הַצֹּאן אַחַר הַמִּדְבָּר וַיָּבֹא אֶל־הַר הָאֱלֹהִים חֹרֵבָה׃',
    cjps: 'Now Moses, tending the flock of his father-in-law Jethro, the priest of Midian, drove the flock into the wilderness, and came to Horeb, the mountain of God.',
    kjv: 'Now Moses kept the flock of Jethro his father in law, the priest of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, [even] to Horeb.',
    lxx: 'καὶ Μωυσῆς ἦν ποιμαίνων τὰ πρόβατα Ιοθορ τοῦ γαμβροῦ αὐτοῦ τοῦ ἱερέως Μαδιαμ καὶ ἤγαγεν τὰ πρόβατα ὑπὸ τὴν ἔρημον καὶ ἦλθεν εἰς τὸ ὄρος Χωρηβ',
  },
  {
    verse: 2,
    wlc: 'וַיֵּרָא מַלְאַךְ יְהֹוָה אֵלָיו בְּלַבַּת־אֵשׁ מִתּוֹךְ הַסְּנֶה וַיַּרְא וְהִנֵּה הַסְּנֶה בֹּעֵר בָּאֵשׁ וְהַסְּנֶה אֵינֶנּוּ אֻכָּל׃',
    cjps: 'A messenger of יהוה appeared to him in a blazing fire out of a bush. He gazed, and there was a bush all aflame, yet the bush was not consumed.',
    kjv: 'And the angel of the LORD appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush [was] not consumed.',
    lxx: 'ὤφθη δὲ αὐτῷ ἄγγελος κυρίου ἐν φλογὶ πυρὸς ἐκ τοῦ βάτου καὶ ὁρᾷ ὅτι ὁ βάτος καίεται πυρί ὁ δὲ βάτος οὐ κατεκαίετο',
  },
  {
    verse: 3,
    wlc: 'וַיֹּאמֶר מֹשֶׁה אָסֻרָה־נָּא וְאֶרְאֶה אֶת־הַמַּרְאֶה הַגָּדֹל הַזֶּה מַדּוּעַ לֹא־יִבְעַר הַסְּנֶה׃',
    cjps: 'Moses said, "I must turn aside to look at this marvelous sight; why doesn\'t the bush burn up?"',
    kjv: 'And Moses said, I will now turn aside, and see this great sight, why the bush is not burnt.',
    lxx: 'εἶπεν δὲ Μωυσῆς παρελθὼν ὄψομαι τὸ ὅραμα τὸ μέγα τοῦτο τί ὅτι οὐ κατακαίεται ὁ βάτος',
  },
  {
    verse: 4,
    wlc: 'וַיַּרְא יְהוָה כִּי סָר לִרְאוֹת וַיִּקְרָא אֵלָיו אֱלֹהִים מִתּוֹךְ הַסְּנֶה וַיֹּאמֶר מֹשֶׁה מֹשֶׁה וַיֹּאמֶר הִנֵּנִי׃',
    cjps: 'When יהוה saw that he had turned aside to look, God called to him out of the bush: "Moses! Moses!" He answered, "Here I am."',
    kjv: 'And when the LORD saw that he turned aside to see, God called unto him out of the midst of the bush, and said, Moses, Moses. And he said, Here [am] I.',
    lxx: 'ὡς δὲ εἶδεν κύριος ὅτι προσάγει ἰδεῖν ἐκάλεσεν αὐτὸν κύριος ἐκ τοῦ βάτου λέγων Μωυσῆ Μωυσῆ ὁ δὲ εἶπεν τί ἐστιν',
  },
  {
    verse: 5,
    wlc: 'וַיֹּאמֶר אַל־תִּקְרַב הֲלֹם שַׁל־נְעָלֶיךָ מֵעַל רַגְלֶיךָ כִּי הַמָּקוֹם אֲשֶׁר אַתָּה עוֹמֵד עָלָיו אַדְמַת־קֹדֶשׁ הוּא׃',
    cjps: 'And [God] said, "Do not come closer! Remove your sandals from your feet, for the place on which you stand is holy ground!"',
    kjv: 'And he said, Draw not nigh hither: put off thy shoes from off thy feet, for the place whereon thou standest [is] holy ground.',
    lxx: 'καὶ εἶπεν μὴ ἐγγίσῃς ὧδε λῦσαι τὸ ὑπόδημα ἐκ τῶν ποδῶν σου ὁ γὰρ τόπος ἐν ᾧ σὺ ἕστηκας γῆ ἁγία ἐστίν',
  },
  {
    verse: 6,
    wlc: 'וַיֹּאמֶר אָנֹכִי אֱלֹהֵי אָבִיךָ אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב וַיַּסְתֵּר מֹשֶׁה פָּנָיו כִּי יָרֵא מֵהַבִּיט אֶל־הָאֱלֹהִים׃',
    cjps: 'and continued, "I am the God of your father\'s [house]—the God of Abraham, the God of Isaac, and the God of Jacob." And Moses hid his face, for he was afraid to look at God.',
    kjv: 'Moreover he said, I [am] the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob. And Moses hid his face; for he was afraid to look upon God.',
    lxx: 'καὶ εἶπεν αὐτῷ ἐγώ εἰμι ὁ θεὸς τοῦ πατρός σου θεὸς Αβρααμ καὶ θεὸς Ισαακ καὶ θεὸς Ιακωβ ἀπέστρεψεν δὲ Μωυσῆς τὸ πρόσωπον αὐτοῦ εὐλαβεῖτο γὰρ κατεμβλέψαι ἐνώπιον τοῦ θεοῦ',
  },
  {
    verse: 7,
    wlc: 'וַיֹּאמֶר יְהוָה רָאֹה רָאִיתִי אֶת־עֳנִי עַמִּי אֲשֶׁר בְּמִצְרָיִם וְאֶת־צַעֲקָתָם שָׁמַעְתִּי מִפְּנֵי נֹגְשָׂיו כִּי יָדַעְתִּי אֶת־מַכְאֹבָיו׃',
    cjps: 'And יהוה continued, "I have marked well the plight of My people in Egypt and have heeded their outcry because of their taskmasters; yes, I am mindful of their sufferings.',
    kjv: 'And the LORD said, I have surely seen the affliction of my people which [are] in Egypt, and have heard their cry by reason of their taskmasters; for I know their sorrows;',
    lxx: 'εἶπεν δὲ κύριος πρὸς Μωυσῆν ἰδὼν εἶδον τὴν κάκωσιν τοῦ λαοῦ μου τοῦ ἐν Αἰγύπτῳ καὶ τῆς κραυγῆς αὐτῶν ἀκήκοα ἀπὸ τῶν ἐργοδιωκτῶν οἶδα γὰρ τὴν ὀδύνην αὐτῶν',
  },
  {
    verse: 8,
    wlc: 'וָאֵרֵד לְהַצִּילוֹ מִיַּד מִצְרַיִם וּלְהַעֲלֹתוֹ מִן־הָאָרֶץ הַהִוא אֶל־אֶרֶץ טוֹבָה וּרְחָבָה אֶל־אֶרֶץ זָבַת חָלָב וּדְבָשׁ אֶל־מְקוֹם הַכְּנַעֲנִי וְהַחִתִּי וְהָאֱמֹרִי וְהַפְּרִזִּי וְהַחִוִּי וְהַיְבוּסִי׃',
    cjps: 'I have come down to rescue them from the Egyptians and to bring them out of that land to a good and spacious land, a land flowing with milk and honey, the region of the Canaanites, the Hittites, the Amorites, the Perizzites, the Hivites, and the Jebusites.',
    kjv: 'And I am come down to deliver them out of the hand of the Egyptians, and to bring them up out of that land unto a good land and a large, unto a land flowing with milk and honey; unto the place of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites.',
    lxx: 'καὶ κατέβην ἐξελέσθαι αὐτοὺς ἐκ χειρὸς Αἰγυπτίων καὶ ἐξαγαγεῖν αὐτοὺς ἐκ τῆς γῆς ἐκείνης καὶ εἰσαγαγεῖν αὐτοὺς εἰς γῆν ἀγαθὴν καὶ πολλήν εἰς γῆν ῥέουσαν γάλα καὶ μέλι εἰς τὸν τόπον τῶν Χαναναίων καὶ Χετταίων καὶ Αμορραίων καὶ Φερεζαίων καὶ Γεργεσαίων καὶ Ευαίων καὶ Ιεβουσαίων',
  },
  {
    verse: 9,
    wlc: 'וְעַתָּה הִנֵּה צַעֲקַת בְּנֵי־יִשְׂרָאֵל בָּאָה אֵלָי וְגַם־רָאִיתִי אֶת־הַלַּחַץ אֲשֶׁר מִצְרַיִם לֹחֲצִים אֹתָם׃',
    cjps: 'Now the cry of the Israelites has reached Me; moreover, I have seen how the Egyptians oppress them.',
    kjv: 'Now therefore, behold, the cry of the children of Israel is come unto me: and I have also seen the oppression wherewith the Egyptians oppress them.',
    lxx: 'καὶ νῦν ἰδοὺ κραυγὴ τῶν υἱῶν Ισραηλ ἥκει πρός με κἀγὼ ἑώρακα τὸν θλιμμόν ὃν οἱ Αἰγύπτιοι θλίβουσιν αὐτούς',
  },
  {
    verse: 10,
    wlc: 'וְעַתָּה לְכָה וְאֶשְׁלָחֲךָ אֶל־פַּרְעֹה וְהוֹצֵא אֶת־עַמִּי בְנֵי־יִשְׂרָאֵל מִמִּצְרָיִם׃',
    cjps: 'Come, therefore, I will send you to Pharaoh, and you shall free My people, the Israelites, from Egypt."',
    kjv: 'Come now therefore, and I will send thee unto Pharaoh, that thou mayest bring forth my people the children of Israel out of Egypt.',
    lxx: 'καὶ νῦν δεῦρο ἀποστείλω σε πρὸς Φαραω βασιλέα Αἰγύπτου καὶ ἐξάξεις τὸν λαόν μου τοὺς υἱοὺς Ισραηλ ἐκ γῆς Αἰγύπτου',
  },
  {
    verse: 11,
    wlc: 'וַיֹּאמֶר מֹשֶׁה אֶל־הָאֱלֹהִים מִי אָנֹכִי כִּי אֵלֵךְ אֶל־פַּרְעֹה וְכִי אוֹצִיא אֶת־בְּנֵי יִשְׂרָאֵל מִמִּצְרָיִם׃',
    cjps: 'But Moses said to God, "Who am I that I should go to Pharaoh and free the Israelites from Egypt?"',
    kjv: 'And Moses said unto God, Who [am] I, that I should go unto Pharaoh, and that I should bring forth the children of Israel out of Egypt?',
    lxx: 'καὶ εἶπεν Μωυσῆς πρὸς τὸν θεόν τίς εἰμι ὅτι πορεύσομαι πρὸς Φαραω βασιλέα Αἰγύπτου καὶ ὅτι ἐξάξω τοὺς υἱοὺς Ισραηλ ἐκ γῆς Αἰγύπτου',
  },
  {
    verse: 12,
    wlc: 'וַיֹּאמֶר כִּי־אֶהְיֶה עִמָּךְ וְזֶה־לְּךָ הָאוֹת כִּי אָנֹכִי שְׁלַחְתִּיךָ בְּהוֹצִיאֲךָ אֶת־הָעָם מִמִּצְרַיִם תַּעַבְדוּן אֶת־הָאֱלֹהִים עַל הָהָר הַזֶּה׃',
    cjps: 'And [God] said, "I will be with you; that shall be your sign that it was I who sent you. And when you have freed the people from Egypt, you shall worship God at this mountain."',
    kjv: 'And he said, Certainly I will be with thee; and this [shall be] a token unto thee, that I have sent thee: When thou hast brought forth the people out of Egypt, ye shall serve God upon this mountain.',
    lxx: 'εἶπεν δὲ ὁ θεὸς Μωυσεῖ λέγων ὅτι ἔσομαι μετὰ σοῦ καὶ τοῦτό σοι τὸ σημεῖον ὅτι ἐγώ σε ἐξαποστέλλω ἐν τῷ ἐξαγαγεῖν σε τὸν λαόν μου ἐξ Αἰγύπτου καὶ λατρεύσετε τῷ θεῷ ἐν τῷ ὄρει τούτῳ',
  },
  {
    verse: 13,
    wlc: 'וַיֹּאמֶר מֹשֶׁה אֶל־הָאֱלֹהִים הִנֵּה אָנֹכִי בָא אֶל־בְּנֵי יִשְׂרָאֵל וְאָמַרְתִּי לָהֶם אֱלֹהֵי אֲבוֹתֵיכֶם שְׁלָחַנִי אֲלֵיכֶם וְאָמְרוּ־לִי מַה־שְּׁמוֹ מָה אֹמַר אֲלֵהֶם׃',
    cjps: 'Moses said to God, "When I come to the Israelites and say to them, \'The God of your fathers\' [house] has sent me to you,\' and they ask me, \'What is [God\'s] name?\' what shall I say to them?"',
    kjv: 'And Moses said unto God, Behold, [when] I come unto the children of Israel, and shall say unto them, The God of your fathers hath sent me unto you; and they shall say to me, What [is] his name? what shall I say unto them?',
    lxx: 'καὶ εἶπεν Μωυσῆς πρὸς τὸν θεόν ἰδοὺ ἐγὼ ἐλεύσομαι πρὸς τοὺς υἱοὺς Ισραηλ καὶ ἐρῶ πρὸς αὐτούς ὁ θεὸς τῶν πατέρων ὑμῶν ἀπέσταλκέν με πρὸς ὑμᾶς ἐρωτήσουσίν με τί ὄνομα αὐτῷ τί ἐρῶ πρὸς αὐτούς',
  },
  {
    verse: 14,
    wlc: 'וַיֹּאמֶר אֱלֹהִים אֶל־מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה וַיֹּאמֶר כֹּה תֹאמַר לִבְנֵי יִשְׂרָאֵל אֶהְיֶה שְׁלָחַנִי אֲלֵיכֶם׃',
    cjps: 'And God said to Moses, "Ehyeh-Asher-Ehyeh," continuing, "Thus shall you say to the Israelites, \'Ehyeh sent me to you.\'"',
    kjv: 'And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.',
    lxx: 'καὶ εἶπεν ὁ θεὸς πρὸς Μωυσῆν ἐγώ εἰμι ὁ ὤν καὶ εἶπεν οὕτως ἐρεῖς τοῖς υἱοῖς Ισραηλ ὁ ὢν ἀπέσταλκέν με πρὸς ὑμᾶς',
  },
  {
    verse: 15,
    wlc: 'וַיֹּאמֶר עוֹד אֱלֹהִים אֶל־מֹשֶׁה כֹּה־תֹאמַר אֶל־בְּנֵי יִשְׂרָאֵל יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב שְׁלָחַנִי אֲלֵיכֶם זֶה־שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר׃',
    cjps: 'And God said further to Moses, "Thus shall you speak to the Israelites: יהוה, the God of your fathers\' [house]--the God of Abraham, the God of Isaac, and the God of Jacob--has sent me to you: This shall be My name forever, This My appellation for all eternity.',
    kjv: 'And God said moreover unto Moses, Thus shalt thou say unto the children of Israel, The LORD God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath sent me unto you: this [is] my name for ever, and this [is] my memorial unto all generations.',
    lxx: 'καὶ εἶπεν ὁ θεὸς πάλιν πρὸς Μωυσῆν οὕτως ἐρεῖς τοῖς υἱοῖς Ισραηλ κύριος ὁ θεὸς τῶν πατέρων ὑμῶν θεὸς Αβρααμ καὶ θεὸς Ισαακ καὶ θεὸς Ιακωβ ἀπέσταλκέν με πρὸς ὑμᾶς τοῦτό μού ἐστιν ὄνομα αἰώνιον καὶ μνημόσυνον γενεῶν γενεαῖς',
  },
  {
    verse: 16,
    wlc: 'לֵךְ וְאָסַפְתָּ אֶת־זִקְנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם נִרְאָה אֵלַי אֱלֹהֵי אַבְרָהָם יִצְחָק וְיַעֲקֹב לֵאמֹר פָּקֹד פָּקַדְתִּי אֶתְכֶם וְאֶת־הֶעָשׂוּי לָכֶם בְּמִצְרָיִם׃',
    cjps: '"Go and assemble the elders of Israel and say to them: יהוה, the God of your fathers\' [house]--the God of Abraham, Isaac, and Jacob--has appeared to me and said, \'I have taken note of you and of what is being done to you in Egypt,',
    kjv: 'Go, and gather the elders of Israel together, and say unto them, The LORD God of your fathers, the God of Abraham, of Isaac, and of Jacob, appeared unto me, saying, I have surely visited you, and [seen] that which is done to you in Egypt:',
    lxx: 'ἐλθὼν οὖν συνάγαγε τὴν γερουσίαν τῶν υἱῶν Ισραηλ καὶ ἐρεῖς πρὸς αὐτούς κύριος ὁ θεὸς τῶν πατέρων ὑμῶν ὦπταί μοι θεὸς Αβρααμ καὶ θεὸς Ισαακ καὶ θεὸς Ιακωβ λέγων ἐπισκοπῇ ἐπέσκεμμαι ὑμᾶς καὶ ὅσα συμβέβηκεν ὑμῖν ἐν Αἰγύπτῳ',
  },
  {
    verse: 17,
    wlc: 'וָאֹמַר אַעֲלֶה אֶתְכֶם מֵעֳנִי מִצְרַיִם אֶל־אֶרֶץ הַכְּנַעֲנִי וְהַחִתִּי וְהָאֱמֹרִי וְהַפְּרִזִּי וְהַחִוִּי וְהַיְבוּסִי אֶל־אֶרֶץ זָבַת חָלָב וּדְבָשׁ׃',
    cjps: 'and I have declared: I will take you out of the misery of Egypt to the land of the Canaanites, the Hittites, the Amorites, the Perizzites, the Hivites, and the Jebusites, to a land flowing with milk and honey.\'',
    kjv: 'And I have said, I will bring you up out of the affliction of Egypt unto the land of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites, unto a land flowing with milk and honey.',
    lxx: 'καὶ εἶπον ἀναβιβάσω ὑμᾶς ἐκ τῆς κακώσεως τῶν Αἰγυπτίων εἰς τὴν γῆν τῶν Χαναναίων καὶ Χετταίων καὶ Αμορραίων καὶ Φερεζαίων καὶ Γεργεσαίων καὶ Ευαίων καὶ Ιεβουσαίων εἰς γῆν ῥέουσαν γάλα καὶ μέλι',
  },
  {
    verse: 18,
    wlc: 'וְשָׁמְעוּ לְקֹלֶךָ וּבָאתָ אַתָּה וְזִקְנֵי יִשְׂרָאֵל אֶל־מֶלֶךְ מִצְרַיִם וַאֲמַרְתֶּם אֵלָיו יְהוָה אֱלֹהֵי הָעִבְרִיִּים נִקְרָה עָלֵינוּ וְעַתָּה נֵלֲכָה־נָּא דֶּרֶךְ שְׁלֹשֶׁת יָמִים בַּמִּדְבָּר וְנִזְבְּחָה לַיהוָה אֱלֹהֵינוּ׃',
    cjps: 'They will listen to you; then you shall go with the elders of Israel to the king of Egypt and you shall say to him, \'יהוה, the God of the Hebrews, became manifest to us. Now therefore, let us go a distance of three days into the wilderness to sacrifice to our God יהוה.\'',
    kjv: 'And they shall hearken to thy voice: and thou shalt come, thou and the elders of Israel, unto the king of Egypt, and ye shall say unto him, The LORD God of the Hebrews hath met with us: and now let us go, we beseech thee, three days\' journey into the wilderness, that we may sacrifice to the LORD our God.',
    lxx: 'καὶ εἰσακούσονταί σου τῆς φωνῆς καὶ εἰσελεύσῃ σὺ καὶ ἡ γερουσία Ισραηλ πρὸς Φαραω βασιλέα Αἰγύπτου καὶ ἐρεῖς πρὸς αὐτόν ὁ θεὸς τῶν Εβραίων προσκέκληται ἡμᾶς πορευσώμεθα οὖν ὁδὸν τριῶν ἡμερῶν εἰς τὴν ἔρημον ἵνα θύσωμεν τῷ θεῷ ἡμῶν',
  },
  {
    verse: 19,
    wlc: 'וַאֲנִי יָדַעְתִּי כִּי לֹא־יִתֵּן אֶתְכֶם מֶלֶךְ מִצְרַיִם לַהֲלֹךְ וְלֹא בְּיָד חֲזָקָה׃',
    cjps: 'Yet I know that the king of Egypt will let you go only because of a greater might.',
    kjv: 'And I am sure that the king of Egypt will not let you go, no, not by a mighty hand.',
    lxx: 'ἐγὼ δὲ οἶδα ὅτι οὐ προήσεται ὑμᾶς Φαραω βασιλεὺς Αἰγύπτου πορευθῆναι ἐὰν μὴ μετὰ χειρὸς κραταιᾶς',
  },
  {
    verse: 20,
    wlc: 'וְשָׁלַחְתִּי אֶת־יָדִי וְהִכֵּיתִי אֶת־מִצְרַיִם בְּכֹל נִפְלְאֹתַי אֲשֶׁר אֶעֱשֶׂה בְּקִרְבּוֹ וְאַחֲרֵי־כֵן יְשַׁלַּח אֶתְכֶם׃',
    cjps: 'So I will stretch out My hand and smite Egypt with various wonders which I will work upon them; after that he shall let you go.',
    kjv: 'And I will stretch out my hand, and smite Egypt with all my wonders which I will do in the midst thereof: and after that he will let you go.',
    lxx: 'καὶ ἐκτείνας τὴν χεῖρα πατάξω τοὺς Αἰγυπτίους ἐν πᾶσι τοῖς θαυμασίοις μου οἷς ποιήσω ἐν αὐτοῖς καὶ μετὰ ταῦτα ἐξαποστελεῖ ὑμᾶς',
  },
  {
    verse: 21,
    wlc: 'וְנָתַתִּי אֶת־חֵן הָעָם־הַזֶּה בְּעֵינֵי מִצְרָיִם וְהָיָה כִּי תֵלֵכוּן לֹא תֵלְכוּ רֵיקָם׃',
    cjps: 'And I will dispose the Egyptians favorably toward this people, so that when you go, you will not go away empty-handed.',
    kjv: 'And I will give this people favour in the sight of the Egyptians: and it shall come to pass, that, when ye go, ye shall not go empty:',
    lxx: 'καὶ δώσω χάριν τῷ λαῷ τούτῳ ἐναντίον τῶν Αἰγυπτίων ὅταν δὲ ἀποτρέχητε οὐκ ἀπελεύσεσθε κενοί',
  },
  {
    verse: 22,
    wlc: 'וְשָׁאֲלָה אִשָּׁה מִשְּׁכֶנְתָּהּ וּמִגָּרַת בֵּיתָהּ כְּלֵי־כֶסֶף וּכְלֵי זָהָב וּשְׂמָלֹת וְשַׂמְתֶּם עַל־בְּנֵיכֶם וְעַל־בְּנֹתֵיכֶם וְנִצַּלְתֶּם אֶת־מִצְרָיִם׃',
    cjps: 'Each woman shall borrow from her neighbor and the lodger in her house objects of silver and gold, and clothing, and you shall put these on your sons and daughters, thus stripping the Egyptians."',
    kjv: 'But every woman shall borrow of her neighbour, and of her that sojourneth in her house, jewels of silver, and jewels of gold, and raiment: and ye shall put [them] upon your sons, and upon your daughters; and ye shall spoil the Egyptians.',
    lxx: 'αἰτήσει γυνὴ παρὰ γείτονος καὶ συσκήνου αὐτῆς σκεύη ἀργυρᾶ καὶ χρυσᾶ καὶ ἱματισμόν καὶ ἐπιθήσετε ἐπὶ τοὺς υἱοὺς ὑμῶν καὶ ἐπὶ τὰς θυγατέρας ὑμῶν καὶ σκυλεύσετε τοὺς Αἰγυπτίους',
  },
]
</script>
