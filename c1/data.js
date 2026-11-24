/* C1 Advanced practice content. All texts are original.
   p1: [sentence, [A,B,C,D], correctIndex, czech note]
   p2: [sentence, [accepted answers], czech note]
   p3: [sentence, STEM, [accepted answers], czech note]
   p4: [sentence 1, KEYWORD, text before gap, text after gap, [accepted answers], czech note]
   Writing extras (models per genre, writing drills) live in data-writing.js. */
window.C1 = {

p1: [
 ["Despite the heavy rain, the match went ___ as planned.", ["ahead","by","over","across"], 0, "go ahead = proběhnout (podle plánu)."],
 ["It never ___ my mind that he might be lying.", ["crossed","passed","ran","struck"], 0, "cross sb's mind = napadnout. (struck → It never struck me.)"],
 ["The film received ___ acclaim from critics around the world.", ["thick","vast","heavy","widespread"], 3, "widespread acclaim = široké uznání."],
 ["Please ___ in mind that the office closes at five.", ["bear","hold","carry","take"], 0, "bear in mind = mít na paměti."],
 ["The decision was taken in the ___ of the moment.", ["heat","warmth","fire","height"], 0, "in the heat of the moment = v zápalu chvíle."],
 ["After months of bad luck, her life was about to take a ___ for the better.", ["turn","twist","swing","bend"], 0, "take a turn for the better/worse = změnit se k lepšímu."],
 ["The scheme was ___ to failure from the start.", ["doomed","fated","destined","bound"], 0, "doomed to failure = odsouzený k nezdaru. (bound to fail – se slovesem)"],
 ["We need to ___ a balance between work and family life.", ["strike","hit","make","hold"], 0, "strike a balance = najít rovnováhu."],
 ["The match was called ___ because of the storm.", ["off","out","away","down"], 0, "call off = zrušit."],
 ["The new results ___ doubt on the original theory.", ["cast","lay","put","shed"], 0, "cast doubt on = zpochybnit. (shed light on = objasnit)"],
 ["His performance fell ___ of our expectations.", ["short","low","below","under"], 0, "fall short of = nesplnit (očekávání)."],
 ["I'd rather you didn't ___ a fuss about it.", ["make","do","raise","bring"], 0, "make a fuss = dělat povyk."],
 ["The proposal met with ___ opposition from local residents.", ["fierce","heavy","hard","thick"], 0, "fierce opposition = tvrdý odpor."],
 ["It's ___ knowledge that the two directors don't get on.", ["common","ordinary","popular","shared"], 0, "common knowledge = všeobecně známá věc."],
 ["Rescue teams worked ___ the clock to free the trapped miners.", ["round","over","through","across"], 0, "round the clock = nonstop."],
 ["His comments were taken ___ of context.", ["out","off","away","outside"], 0, "out of context = vytržené z kontextu."],
 ["She has a ___ for exaggerating her achievements.", ["tendency","habit","reputation","trend"], 2, "reputation FOR + -ing. (tendency TO do, habit OF doing) – rozhoduje předložka za mezerou!"],
 ["The new law will come into ___ next January.", ["force","power","practice","action"], 0, "come into force = vstoupit v platnost."],
 ["I was ___ the impression that the meeting had been cancelled.", ["under","with","in","on"], 0, "be under the impression = mít dojem."],
 ["It ___ to reason that prices will rise if demand keeps growing.", ["stands","goes","makes","holds"], 0, "it stands to reason = je logické."],
 ["For years, the authorities ___ a blind eye to the problem.", ["turned","shut","closed","looked"], 0, "turn a blind eye = přimhouřit oko."],
 ["We were ___ for choice: there were over fifty restaurants in the area.", ["spoilt","ruined","damaged","wasted"], 0, "be spoilt for choice = mít bohatý výběr."],
 ["The negotiations were ___ in secrecy.", ["shrouded","covered","dressed","hidden"], 0, "shrouded in secrecy = zahalený tajemstvím."],
 ["The festival ___ together artists from twenty countries.", ["brings","puts","sets","holds"], 0, "bring together = svést dohromady."],
 ["By and ___, the trip was a great success.", ["large","big","far","wide"], 0, "by and large = celkově vzato."],
 ["The idea first ___ me while I was on holiday.", ["struck","occurred","happened","came"], 0, "strike sb = napadnout (bez předložky). occur/come TO sb."],
 ["He has been ___ with a rare illness.", ["diagnosed","detected","identified","determined"], 0, "be diagnosed with = mít diagnostikováno."],
 ["The scandal ___ serious questions about the minister's judgement.", ["raises","rises","arises","arouses"], 0, "raise questions = vyvolat otázky. (arouse suspicion)"],
 ["The film is loosely ___ on a true story.", ["based","founded","grounded","built"], 0, "be based on = být založený na."],
 ["The concert was a ___ success, with tickets selling out in minutes.", ["resounding","loud","sounding","ringing"], 0, "a resounding success = ohromný úspěch."],
 ["Prices vary ___ from shop to shop.", ["considerably","heavily","strongly","deeply"], 0, "vary considerably = značně se lišit."],
 ["She ___ no effort to make her guests feel welcome.", ["spared","saved","kept","held"], 0, "spare no effort = nešetřit úsilím."],
 ["There's no new equipment, so we'll just have to ___ do with what we've got.", ["make","get","go","come"], 0, "make do with = vystačit si s."],
 ["The figures don't ___ up – someone must have made a mistake.", ["add","sum","count","total"], 0, "add up = sedět, dávat smysl."],
 ["Her speech ___ a chord with the audience.", ["struck","hit","rang","played"], 0, "strike a chord = zarezonovat."],
 ["He took the bad news in his ___ and carried on working.", ["stride","step","pace","walk"], 0, "take sth in your stride = vzít něco s klidem."],
 ["The council has ___ up plans for a new cycle network.", ["drawn","made","set","written"], 0, "draw up plans = vypracovat plány."],
 ["Don't worry, I'll ___ you a hand with the boxes.", ["lend","borrow","pass","offer"], 0, "lend sb a hand = pomoct."],
 ["The study ___ light on how memory works.", ["sheds","gives","makes","brings"], 0, "shed light on = vnést světlo do, objasnit."],
 ["There has been a ___ increase in the number of applicants.", ["marked","noted","signed","pointed"], 0, "a marked increase = výrazný nárůst."],
 ["His argument simply doesn't ___ water.", ["hold","keep","carry","contain"], 0, "hold water = obstát (o argumentu)."],
 ["Everyone involved was ___ to secrecy.", ["sworn","bound","held","promised"], 0, "be sworn to secrecy = zavázat se mlčenlivostí."],
 ["He's a ___ supporter of the local football club.", ["staunch","stiff","rigid","steady"], 0, "a staunch supporter = věrný příznivec."],
 ["The success of the project ___ on securing more funding.", ["hinges","counts","bases","leans"], 0, "hinge on = záviset na."],
 ["Her suspicions were ___ out by the evidence.", ["borne","carried","worn","held"], 0, "be borne out = potvrdit se."],
 ["They had a ___ escape when their car skidded off the road.", ["narrow","close","thin","slim"], 0, "a narrow escape = o vlásek."],
 ["The hotel was rather expensive; ___, the service was excellent.", ["nevertheless","whereas","although","despite"], 0, "nevertheless = přesto (po středníku/tečce). whereas/although spojují věty, despite + podst. jm."]
],

p2: [
 ["Try ___ she might, she couldn't open the jar.", ["as"], "Try as she might = ať se snažila sebevíc."],
 ["Not ___ did he apologise, but he also offered to pay for the damage.", ["only"], "Not only … but also + inverze."],
 ["___ it not been for your help, we would have failed.", ["had"], "Had it not been for = kdyby nebylo (3. kondicionál s inverzí)."],
 ["She left early so ___ to avoid the traffic.", ["as"], "so as to = aby."],
 ["The book, ___ author is only nineteen, has become a bestseller.", ["whose"], "whose = jehož/jejíž."],
 ["___ matter how hard I try, I can't remember his name.", ["no"], "No matter how = ať jakkoli."],
 ["He's not used ___ working such long hours.", ["to"], "be used to + -ing = být zvyklý."],
 ["It was ___ a boring film that we left halfway through.", ["such"], "such a + adj + noun."],
 ["___ the time we arrived, the concert had already started.", ["by"], "By the time = než (+ past perfect)."],
 ["She insisted ___ paying for everyone's lunch.", ["on"], "insist on + -ing."],
 ["We'll go for a walk ___ it rains, in which case we'll stay in.", ["unless"], "unless = pokud ne."],
 ["Hardly ___ I sat down when the phone rang.", ["had"], "Hardly had I … when + inverze."],
 ["The more you practise, the ___ confident you'll become.", ["more"], "The more …, the more … = čím víc, tím víc."],
 ["There's no point ___ complaining now.", ["in"], "There's no point in + -ing."],
 ["He talks as ___ he knew everything.", ["if","though"], "as if / as though = jako by."],
 ["___ of the two candidates was suitable, so they re-advertised the job.", ["neither"], "Neither (of the two) = ani jeden (ze dvou)."],
 ["I'd rather you ___ told me the truth from the start.", ["had"], "would rather + past perfect = lítost nad minulostí."],
 ["She was on the ___ of tears.", ["verge","brink"], "on the verge/brink of = na pokraji."],
 ["___ for the bad weather, the trip would have been perfect.", ["but","except"], "But for = nebýt."],
 ["It's high time we ___ something about climate change.", ["did"], "It's high time + minulý čas."],
 ["The concert was cancelled ___ to poor ticket sales.", ["owing","due"], "owing to / due to = kvůli."],
 ["He is by ___ the best player in the team.", ["far"], "by far = zdaleka."],
 ["She succeeded ___ passing the exam at the first attempt.", ["in"], "succeed in + -ing."],
 ["___ you need any help, just give me a call.", ["should","if"], "Should you need = kdybys potřeboval (inverze)."],
 ["This is the town ___ I grew up.", ["where"], "where = kde (relativní)."],
 ["We had ___ sooner arrived than it started to rain.", ["no"], "No sooner … than."],
 ["Much ___ I admire him, I don't agree with his decision.", ["as"], "Much as = jakkoli (i když)."],
 ["The company has been struggling ___ since the crisis.", ["ever"], "ever since = už od."],
 ["___ to popular belief, bats are not blind.", ["contrary"], "Contrary to popular belief = na rozdíl od běžné představy."],
 ["She's very good ___ keeping secrets.", ["at"], "good at + -ing."],
 ["I'm not used to ___ spoken to like that.", ["being"], "be used to + being + 3. tvar (pasivum)."],
 ["Fifty people came to the meeting, ___ of whom had questions.", ["most","many","some","all","few","several","none"], "most/many/some of whom."],
 ["In ___ of the bad weather, the festival went ahead.", ["spite"], "in spite of = navzdory."],
 ["He denied ___ anything to do with the robbery.", ["having"], "deny having (done) sth."],
 ["The film was ___ from perfect, but I enjoyed it.", ["far"], "far from perfect = zdaleka ne dokonalý."],
 ["On no ___ should you open this door.", ["account"], "On no account = v žádném případě (+ inverze)."],
 ["As ___ as I know, the shop is still open.", ["far"], "As far as I know = pokud vím."],
 ["We stayed at home ___ than go out in the storm.", ["rather"], "rather than = místo toho, abychom."],
 ["She speaks French as well ___ Spanish.", ["as"], "as well as = stejně jako, i."],
 ["I'll lend you the money ___ long as you pay me back by Friday.", ["as","so"], "as/so long as = pokud, za podmínky že."],
 ["Without more investment, the problem is ___ to get worse.", ["bound","likely","sure","certain","going"], "be bound/likely to = určitě/pravděpodobně."],
 ["It was ___ until midnight that we finally got home.", ["not"], "It was not until … that = teprve až."],
 ["He works incredibly hard, ___ his brother, who is rather lazy.", ["unlike"], "unlike = na rozdíl od."],
 ["What's the point of saving money ___ you never spend it?", ["if"], "if = jestliže."]
],

p3: [
 ["The film's ending was completely ___.", "PREDICT", ["unpredictable"], "Zápor un- + -able."],
 ["There is a growing ___ of the dangers of social media.", "AWARE", ["awareness"], "a growing + podstatné jméno."],
 ["Everyone was surprised by the ___ of such an inexperienced manager.", "APPOINT", ["appointment"], "the … of → podstatné jméno."],
 ["His ___ to admit his mistake annoyed his colleagues.", "WILLING", ["unwillingness"], "Smysl = neochota → un- + -ness."],
 ["The hotel staff were ___ helpful.", "EXCEPTION", ["exceptionally"], "Před přídavným jménem → příslovce."],
 ["She has a remarkable ___ to stay calm under pressure.", "ABLE", ["ability"], "able → ability."],
 ["Many of the claims in the article turned out to be ___.", "FOUND", ["unfounded"], "unfounded = nepodložený."],
 ["___ among young people has risen sharply since the factory closed.", "EMPLOY", ["unemployment"], "Kontext (továrna zavřena) → zápor."],
 ["The museum has a very ___ collection of modern art.", "IMPRESS", ["impressive"], "Přídavné jméno -ive."],
 ["It was ___ of him to leave without saying goodbye.", "CONSIDER", ["inconsiderate"], "inconsiderate = bezohledný."],
 ["The ___ of the bridge took three years.", "CONSTRUCT", ["construction"], "-ion podstatné jméno."],
 ["The two reports are ___ different.", "SIGNIFY", ["significantly"], "Příslovce před přídavným jménem."],
 ["His ___ in the project was crucial to its success.", "INVOLVE", ["involvement"], "-ment."],
 ["The talks broke down because of a fundamental ___ over pay.", "AGREE", ["disagreement"], "broke down → zápor dis-."],
 ["She spoke ___ about the plight of refugees.", "PASSION", ["passionately"], "Za slovesem → příslovce."],
 ["The ___ between the two theories is subtle.", "DISTINCT", ["distinction"], "the … between → podstatné jméno."],
 ["Regular exercise ___ the risk of heart disease.", "LESS", ["lessens"], "Sloveso, 3. os. j. č. → -s!"],
 ["Unfortunately, the new software is ___ with older computers.", "COMPATIBLE", ["incompatible"], "Unfortunately → zápor in-."],
 ["The report contained a serious ___ of the facts.", "REPRESENT", ["misrepresentation"], "serious + zkreslení → mis- + -ation."],
 ["There is no ___ for such rude behaviour.", "JUSTIFY", ["justification"], "-ification."],
 ["The village is ___ by road during the winter months.", "ACCESS", ["inaccessible"], "Zimní měsíce → nedostupná → in- + -ible."],
 ["The ___ of the plan depends on public support.", "SUCCEED", ["success"], "succeed → success."],
 ["She gave a very ___ account of her travels.", "COLOUR", ["colourful","colorful"], "-ful."],
 ["The government has repeatedly ___ the importance of education.", "EMPHASIS", ["emphasised","emphasized"], "Sloveso v present perfect → 3. tvar."],
 ["The company's ___ to adapt led to its collapse.", "ABLE", ["inability"], "Vedlo ke krachu → in- + -ity."],
 ["Prices have risen ___ over the past year.", "DRAMA", ["dramatically"], "-ically."],
 ["His behaviour at the meeting was completely ___.", "ACCEPT", ["unacceptable"], "un- + -able."],
 ["The ___ of the region depends largely on farming.", "PROSPER", ["prosperity"], "-ity."],
 ["She was praised for her ___ during the crisis.", "LEAD", ["leadership"], "-ship."],
 ["The rules must be applied ___ to all members.", "CONSIST", ["consistently"], "consistent → consistently."],
 ["Many young people feel ___ from mainstream politics.", "ALIEN", ["alienated"], "feel + příčestí -ed."],
 ["Lawyers questioned the ___ of the witness.", "RELY", ["reliability"], "y → i + -ability."],
 ["The ___ of the old factory into flats took two years.", "CONVERT", ["conversion"], "convert → conversion."],
 ["His remarks were ___ and offended many people.", "SENSE", ["insensitive"], "in- + sensitive."],
 ["Given the lack of funding, it is highly ___ that the problem will be solved soon.", "LIKELY", ["unlikely"], "Given the lack… → zápor."],
 ["The ___ of the new law sparked protests.", "INTRODUCE", ["introduction"], "-tion."],
 ["She has an ___ talent for languages.", "ORDINARY", ["extraordinary"], "an + samohláska → extra-."],
 ["The team's ___ was celebrated across the country.", "ACHIEVE", ["achievement"], "-ment."],
 ["The instructions were ___ and confusing.", "LEAD", ["misleading"], "mis- + -ing."],
 ["Rents keep rising, and ___ is becoming a serious problem.", "HOME", ["homelessness"], "home → homeless → homelessness (dvě přípony)."],
 ["The conference reflected a great ___ of opinion among experts.", "DIVERSE", ["diversity"], "-ity."],
 ["The meeting has been postponed ___.", "DEFINITE", ["indefinitely"], "in- + -ly."],
 ["Experts have confirmed the ___ of the painting.", "AUTHENTIC", ["authenticity"], "-ity."],
 ["The new rules have been ___ criticised.", "WIDE", ["widely"], "wide → widely (= široce)."]
],

p4: [
 ["I regret not studying harder for the exam.", "WISH", "I", "harder for the exam.", ["wish i had studied","wish i'd studied","wish i had worked"], "wish + past perfect = lituju minulosti."],
 ["It's possible that she missed the train.", "HAVE", "She", "the train.", ["may have missed","might have missed","could have missed"], "modál + have + 3. tvar = spekulace o minulosti."],
 ["They postponed the meeting because the manager was ill.", "PUT", "The meeting", "because the manager was ill.", ["was put off","had been put off","got put off","had to be put off"], "postpone = put off, tady v pasivu."],
 ["I'd never seen such a beautiful sunset before.", "EVER", "It was the most beautiful sunset", "seen.", ["i had ever","i'd ever"], "superlativ + I had ever seen."],
 ["He didn't realise how serious the problem was until later.", "ONLY", "", "realise how serious the problem was.", ["only later did he","only then did he"], "Only later + inverze (did he)."],
 ["She was very surprised to hear she had won.", "CAME", "Hearing that she had won", "to her.", ["came as a surprise","came as a big surprise","came as a great surprise","came as a complete surprise","came as a real surprise","came as quite a surprise","came as a total surprise","came as a huge surprise"], "come as a surprise to sb."],
 ["People say that the castle is haunted.", "SAID", "The castle", "haunted.", ["is said to be"], "Pasivní reporting: is said to be."],
 ["I didn't go to the party because I was tired.", "IF", "I would have gone to the party", "tired.", ["if i hadn't been","if i had not been"], "3. kondicionál."],
 ["It's not necessary for you to bring any food.", "NEED", "You", "any food.", ["don't need to bring","do not need to bring","needn't bring","need not bring"], "don't need to / needn't."],
 ["The film was so boring that we left early.", "SUCH", "It was", "that we left early.", ["such a boring film"], "such + a + adj + noun."],
 ["They think the thieves escaped through the window.", "THOUGHT", "The thieves", "escaped through the window.", ["are thought to have"], "Pasivní reporting o minulosti: are thought to have + 3. tvar."],
 ["Although it rained heavily, the match continued.", "DESPITE", "", "heavily, the match continued.", ["despite the fact that it rained","despite the fact it rained","despite it raining","despite its raining","despite the fact it was raining"], "despite + -ing / despite the fact that + věta."],
 ["I'm sure he didn't steal the money.", "CAN'T", "He", "the money.", ["can't have stolen","can't have taken"], "can't have + 3. tvar = určitě ne."],
 ["It was a mistake to sell the house.", "SHOULD", "We", "the house.", ["shouldn't have sold","should not have sold","should never have sold"], "shouldn't have + 3. tvar = výčitka."],
 ["She started learning Japanese three years ago.", "BEEN", "She", "Japanese for three years.", ["has been learning","has been studying","'s been learning","s been learning"], "Present perfect continuous + for."],
 ["Nobody told me the meeting had been cancelled.", "TOLD", "I", "the meeting had been cancelled.", ["wasn't told that","was not told that","wasn't told","was not told","hadn't been told","had not been told","hadn't been told that","had not been told that","was never told","was never told that","had never been told","had never been told that"], "Pasivum: I wasn't told (that)…"],
 ["He is too young to drive a car.", "ENOUGH", "He", "to drive a car.", ["isn't old enough","is not old enough"], "too young = not old enough."],
 ["I find it difficult to concentrate when it's noisy.", "DIFFICULTY", "I", "when it's noisy.", ["have difficulty concentrating","have difficulty in concentrating","have great difficulty concentrating","have great difficulty in concentrating","have a lot of difficulty concentrating"], "have difficulty (in) + -ing."],
 ["The concert was cancelled due to the storm.", "CALLED", "They", "because of the storm.", ["called off the concert","called the concert off"], "cancel = call off."],
 ["I've never been to Japan before.", "TIME", "This is the", "been to Japan.", ["first time i have","first time i've","first time that i have","first time that i've","first time i have ever","first time i've ever"], "This is the first time + present perfect."],
 ["She was the only person who passed the test.", "APART", "Nobody passed the test", ".", ["apart from her"], "apart from = kromě."],
 ["I'd prefer you not to smoke in here.", "RATHER", "I'd", "smoke in here.", ["rather you didn't","rather you did not"], "would rather + někdo + minulý čas."],
 ["We couldn't have finished on time without your help.", "FOR", "If it", "your help, we couldn't have finished on time.", ["hadn't been for","had not been for"], "If it hadn't been for = nebýt."],
 ["It's possible that the shop has already closed.", "MAY", "The shop", "closed.", ["may have already","may already have"], "may have + 3. tvar."],
 ["There's no way I'm lending him money again.", "CIRCUMSTANCES", "Under", "lend him money again.", ["no circumstances will i","no circumstances would i","no circumstances am i going to","no circumstances shall i"], "Under no circumstances + inverze."],
 ["It doesn't matter to me what you decide.", "DIFFERENCE", "It", "to me what you decide.", ["makes no difference","doesn't make any difference","does not make any difference","makes absolutely no difference","won't make any difference","will not make any difference","makes no difference at all"], "make no difference = je to jedno."],
 ["She had changed so much that I hardly recognised her.", "RECOGNITION", "She had changed", ".", ["beyond all recognition","almost beyond recognition","almost beyond all recognition","practically beyond recognition","nearly beyond recognition"], "change beyond (all) recognition = k nepoznání."],
 ["They say he is a brilliant cook.", "REPUTATION", "He", "a brilliant cook.", ["has a reputation for being","has a reputation as","has the reputation of being","has a reputation as being","has the reputation of"], "have a reputation for being / as."],
 ["Tom was the person who suggested the idea.", "IT", "", "who suggested the idea.", ["it was tom"], "Vytýkací věta (cleft): It was X who…"],
 ["I'm sure it was a mistake.", "MUST", "It", "a mistake.", ["must have been"], "must have been = určitě byl."],
 ["As soon as he arrived, the problems started.", "SOONER", "No", "than the problems started.", ["sooner had he arrived"], "No sooner had … than."],
 ["She hasn't seen her sister for ages.", "SINCE", "It's", "her sister.", ["been ages since she saw","been ages since she last saw","ages since she saw","ages since she last saw","been ages since she has seen","been ages since she's seen","ages since she has seen","ages since she's seen"], "It's (been) ages since + minulý čas."],
 ["You should take an umbrella in case it rains.", "BETTER", "You", "an umbrella in case it rains.", ["had better take","'d better take","d better take"], "had better = měl bys."],
 ["The last time I saw him was in 2019.", "SEEN", "I", "2019.", ["haven't seen him since","have not seen him since"], "present perfect + since."],
 ["It was such a difficult question that nobody could answer it.", "SO", "The question", "nobody could answer it.", ["was so difficult that","was so difficult"], "so + adj + that."],
 ["He worked hard, but he failed the exam.", "HOWEVER", "", "worked, he failed the exam.", ["however hard he"], "However hard he worked = ať se snažil sebevíc."]
],

/* ---------------- READING ---------------- */
r5: {
 title: "In praise of boredom",
 text: [
  "For most of human history, boredom was simply part of the furniture of life. Waiting for a bus, queuing at the post office, sitting through a long train journey: these were moments in which the mind had nothing to do but wander. Today, such moments have all but disappeared. The smartphone, ever present in our pockets, has turned every idle minute into an opportunity to scroll, check and respond. On the face of it, this looks like progress. Why endure tedium when entertainment is a swipe away?",
  "Yet a growing number of psychologists are beginning to suspect that we may have thrown out something valuable along with the dull bits. In one frequently cited experiment, participants who had first spent fifteen minutes copying numbers from a telephone directory went on to produce more inventive answers in a creativity test than those who had gone straight to the task. The researchers' explanation was that boredom acts as a kind of signal: an uncomfortable state that prompts the mind to go looking for stimulation of its own making.",
  "I should confess that I came to this research as a sceptic. Like many people who write for a living, I have long regarded boredom as the enemy, something to be outwitted with podcasts and playlists. But a month-long experiment in which I left my phone at home whenever I went for a walk forced me to reconsider. For the first week, the walks felt interminable. By the third, something had shifted. Half-formed ideas I had been circling for months began, quite unbidden, to take shape. I came home with notes scribbled on the backs of receipts.",
  "None of this means that boredom is good in itself. Chronic boredom, the kind experienced by people trapped in monotonous jobs or isolated by circumstance, is associated with anxiety, overeating and worse. The researchers I spoke to were careful to distinguish between this corrosive state and the short, low-stakes boredom of a long queue. It is the latter, they argue, that we have been so quick to eliminate, and whose loss may be quietly costing us.",
  "What, then, should we do? The answer is not, I think, to throw away our devices, a solution that is neither realistic nor, for most of us, desirable. It is rather to treat empty time as something worth protecting rather than filling. That might mean resisting the reflex to reach for a phone on a train, or allowing children to complain that they have nothing to do without immediately offering them a screen. Boredom, it turns out, is not the absence of thought. It may be where some of our best thinking begins."
 ],
 qs: [
  ["In the first paragraph, the writer suggests that smartphones have", ["made boredom more intense.","removed opportunities for the mind to wander.","made public transport more pleasant.","encouraged people to queue more patiently."], 1, "„moments in which the mind had nothing to do but wander… have all but disappeared“."],
  ["The experiment described in the second paragraph showed that", ["copying numbers improves concentration.","people dislike repetitive tasks more than expected.","a dull activity can lead to more original thinking.","creativity tests are unreliable."], 2, "Po nudném opisování čísel „more inventive answers“."],
  ["What does the writer say about his own experiment?", ["It confirmed views he already held.","Its benefits were not immediate.","He gave it up after a week.","It helped him finish a project quickly."], 1, "1. týden „interminable“, až ve 3. týdnu „something had shifted“. A je opak (byl skeptik)."],
  ["In the fourth paragraph, the writer is careful to", ["play down the dangers of boredom.","distinguish between two kinds of boredom.","criticise researchers for exaggerating.","explain why monotonous jobs are disappearing."], 1, "Chronická nuda vs. krátká „low-stakes“ nuda."],
  ["What does ‘the latter’ in paragraph 4 refer to?", ["chronic boredom","short, low-stakes boredom","anxiety and overeating","the researchers' argument"], 1, "the latter = to druhé zmíněné → krátká nuda ve frontě."],
  ["The writer's main recommendation is that people should", ["give up using smartphones.","make children spend more time alone.","value unoccupied time instead of filling it.","take part in research on boredom."], 2, "„treat empty time as something worth protecting rather than filling“. A výslovně odmítá."]
 ]
},

r6: {
 title: "Is remote work here to stay?",
 intro: "Four writers give their views on working from home.",
 texts: [
  ["A", "The shift to remote working has, by most measures, been a success in terms of output. Studies from several large firms show that staff working from home complete as much as, if not more than, they did in the office, not least because they are spared the daily commute. Employees themselves, freed from long journeys, generally report feeling less stressed. What concerns me is what happens to the unplanned conversations that used to occur by the coffee machine. Ideas are rarely born in scheduled video calls; they come from chance encounters between colleagues, and these have largely vanished. I suspect that within a few years most companies will quietly bring their staff back to the office for most of the week."],
  ["B", "I have managed a fully remote team for six years, and I see no evidence that productivity suffers; if anything, my colleagues get more done without constant interruptions. Nor do I accept that working apart weakens relationships. Our team culture is stronger than in any office I have worked in, precisely because we have to make a deliberate effort to stay in touch. My one real worry is for people's mental health: without a clear boundary between home and work, many of my colleagues find it hard to switch off, and loneliness is a genuine risk. Still, I expect the hybrid model, with two or three days in the office, to remain the norm for most firms."],
  ["C", "Working from home has clearly boosted efficiency for experienced staff, who know their jobs and can get on with them undisturbed. The people who lose out are those at the start of their careers. Learning by watching others, picking up the unwritten rules of a workplace, forming friendships with colleagues: all of this is far harder through a screen, and I fear we are creating a generation of employees who barely know the people they work with. That said, the improvement in people's quality of life is undeniable; most of those I spoke to said they felt healthier and happier. As for the future, the genie is out of the bottle: fully remote work will become standard in many industries."],
  ["D", "The claim that remote workers are more productive does not stand up to scrutiny. The studies so often quoted rely on employees reporting their own output, and when firms measure results objectively, the picture is far less flattering. Interestingly, though, I have found no sign that relationships between colleagues have suffered; if anything, when people do meet in person now, they make better use of the time. Staff also seem more relaxed and less exhausted, which is no small thing. My expectation is that most organisations will settle on a mix of office and home working, since neither employers nor staff seem willing to give up entirely what they have."]
 ],
 qs: [
  ["Which writer has a different view from the others on whether working from home makes people more productive?", 3, "A, B, C: produktivita roste. D: „does not stand up to scrutiny“."],
  ["Which writer shares A's opinion about the effect of remote working on relationships between colleagues?", 2, "A: mizí náhodná setkání. C: „forming friendships… far harder through a screen“. B a D: vztahy netrpí."],
  ["Which writer has a similar view to B about how working arrangements are likely to develop?", 3, "B: hybrid zůstane normou. D: „a mix of office and home working“. A: návrat do kanceláří, C: plně remote."],
  ["Which writer has a different view from the others on the effect of remote working on employees' well-being?", 1, "A, C, D: lidé méně ve stresu / šťastnější. B: „mental health… loneliness is a genuine risk“."]
 ]
},

r7: {
 title: "Silent flight",
 paras: [
  "I had always assumed that learning to fly was something you either did when you were young or not at all. So when a friend suggested, on the eve of my fortieth birthday, that I sign up for a gliding course, my first instinct was to laugh. My second, a few days later, was to wonder why I had laughed.",
  "That first flight lasted barely twelve minutes, but I remember every one of them. Once the tow plane released us, the noise simply stopped. All I could hear was the wind rushing past the canopy and, behind me, my instructor's calm voice describing the fields below as if we were out for a Sunday stroll.",
  "It took me most of the summer to get over this. What finally helped was Mark's insistence that I stop fighting the aircraft. ‘You're not driving a car,’ he kept telling me. ‘Feel what the glider wants to do, and help it.’ Gradually, my grip on the controls loosened, and so did my shoulders.",
  "Finding these columns of rising warm air is the real art of gliding, and it cannot be learned from a book. Experienced pilots read the sky the way sailors read the sea: a particular kind of cloud, a circling bird, even a ploughed field warmed by the sun can all betray the presence of lift.",
  "That moment came on a grey Tuesday in September. Mark climbed out of the back seat, tapped the canopy twice and walked away without a word. I had been told it would happen without warning, so that I would not have time to get nervous. It worked, more or less.",
  "I still fly most weekends. I am not, and never will be, a particularly gifted pilot. But I have learned something that has little to do with aircraft: that the things we decide are ‘not for people like us’ are very often just things we have not tried yet."
 ],
 opts: [
  ["A", "Despite these early thrills, I soon discovered that I was a tense and clumsy pupil. I gripped the stick as though my life depended on it, which, in a sense, it did, and every small bump of turbulence sent my heart racing."],
  ["B", "Once I had learned to relax, Mark began teaching me how to keep the glider in the air for longer. Without an engine, a glider is always slowly descending; the only way to stay up is to find air that is rising faster than you are sinking."],
  ["C", "Mark, it turned out, had been instructing for over thirty years and had taught pilots as young as fourteen and as old as eighty."],
  ["D", "And so, one blustery Saturday in April, I found myself strapped into the front seat of a two-seater glider, with an instructor called Mark sitting behind me and a knot of anxiety in my stomach."],
  ["E", "By the end of August I could stay up for an hour or more, and I began to wonder when I would be allowed to fly alone. Mark refused to say. ‘When you're ready,’ he would answer, ‘and not a day before.’"],
  ["F", "I made one cautious circuit of the airfield, talking to myself the whole way round, and landed a little too fast and a little too long. Nobody seemed to mind. When I climbed out, half the club was waiting with a bottle of something fizzy."]
 ],
 ans: [3, 0, 1, 4, 5],
 why: [
  "D: první let („That first flight“ hned za mezerou) + představí Marka a „my instructor“.",
  "A: „these early thrills“ navazuje na zážitek z letu; „get over this“ = jeho nervozita.",
  "B: „air that is rising“ → „these columns of rising warm air“.",
  "E: čekání na sólo → „That moment came…“.",
  "F: první sólo let skončil přistáním → „I still fly most weekends“. C je navíc (nikam logicky nenavazuje)."
 ]
},

r8: {
 title: "Changing direction",
 intro: "Four people describe how they changed careers.",
 texts: [
  ["A", "Elena, former lawyer, now a baker", "For eleven years I worked in corporate law, and I was good at it, which was part of the problem: it is hard to walk away from something you are praised for. What finally pushed me was not burnout but boredom. I had started baking bread at weekends, and I noticed I was counting the days until Saturday. I took a six-month course while still working part-time, which I'd recommend to anyone, because it let me test the idea without burning my bridges. The money is a fraction of what it was, and I sometimes miss the intellectual challenge, but I have never once regretted the move."],
  ["B", "Tom, former teacher, now a software developer", "People assume I left teaching because of the pay, but honestly it was the paperwork. I loved the classroom; I hated everything around it. I taught myself to code in the evenings using free online courses, and it took far longer than I expected – almost three years before anyone would hire me. The hardest part was being a beginner again at thirty-five, surrounded by colleagues half my age who knew far more than I did. What surprised me was how much of my teaching experience was useful: explaining complex ideas simply is a skill that most developers, frankly, lack."],
  ["C", "Priya, former nurse, now a garden designer", "My change of direction was forced on me rather than chosen. A back injury meant I could no longer do the physical side of nursing, and for a while I felt completely lost. It was my physiotherapist, of all people, who suggested I think about garden design, after I'd mentioned how much I loved my allotment. I'm glad I listened. The first year was financially very difficult, as I had almost no clients, and I relied heavily on my partner's income. Now I have more work than I can handle, much of it coming through word of mouth."],
  ["D", "Marcus, former banker, now a mountain guide", "I'd always climbed as a hobby, but I never imagined I could make a living from it. When the bank offered voluntary redundancy, I took it almost on impulse, and my family thought I'd lost my mind. Qualifying as a guide was gruelling, physically and mentally, and I failed one of the assessments the first time round. What keeps me going is the people: watching someone reach a summit they never thought they could is better than any bonus I ever received. I do worry about the future, though; it's not a job you can do forever, and I haven't yet worked out what comes next."]
 ],
 qs: [
  ["admits to concerns about the long-term future of their new career?", 3, "„I do worry about the future… not a job you can do forever“."],
  ["says the change was not originally their own decision?", 2, "„forced on me rather than chosen“."],
  ["mentions that skills from their previous job turned out to be valuable?", 1, "„how much of my teaching experience was useful“."],
  ["recommends a cautious way of trying out a new career?", 0, "Kurz při práci na částečný úvazek – „without burning my bridges“."],
  ["says that the people close to them reacted negatively?", 3, "„my family thought I'd lost my mind“."],
  ["found it hard to learn alongside people who were younger?", 1, "„colleagues half my age who knew far more“."],
  ["depended on someone else's financial support for a time?", 2, "„relied heavily on my partner's income“."],
  ["says they occasionally miss something about their previous job?", 0, "„I sometimes miss the intellectual challenge“."]
 ]
},

/* ---------------- LISTENING (spoken by the browser) ----------------
   script lines: [voice index, text] */
l1: [
 {
  title: "Extract 1 – two friends talking about a documentary",
  script: [
   [0, "Did you end up watching that documentary about plastic in the oceans?"],
   [1, "I did, yes. I have to say I went in expecting to be lectured for two hours, and it wasn't like that at all. The director just lets the fishermen talk, and somehow that's far more powerful than any statistics."],
   [0, "That's exactly what struck me. Although I thought the ending was a bit of a let-down. After all that, they just suggest we recycle more, as if that's going to solve anything."],
   [1, "Hmm, I'm not sure that's fair. I think the point was that individual action is only the start. They made it pretty clear that governments have to step in."],
   [0, "Maybe. I suppose I just wanted something more radical."]
  ],
  qs: [
   ["What did the man particularly like about the documentary?", ["its use of shocking statistics","the way ordinary people tell the story","the fact that it was short"], 1, "„lets the fishermen talk… more powerful than any statistics“."],
   ["What do the friends disagree about?", ["how the documentary ends","whether the fishermen were honest","how long the film should be"], 0, "Ona: konec „a let-down“. On: „I'm not sure that's fair“."]
  ]
 },
 {
  title: "Extract 2 – two colleagues talking about a training course",
  script: [
   [1, "So how was the leadership course? Worth the money?"],
   [0, "Well, the trainer was brilliant, really engaging, but I'm not convinced I learned much I didn't know already. A lot of it was common sense dressed up in fancy diagrams."],
   [1, "That's a shame. I was thinking of signing up for the next one."],
   [0, "Oh, I'd still go if I were you. The best bit wasn't the sessions at all, it was meeting people from other departments. I've already arranged to work on a project with two of them."],
   [1, "Really? Then maybe I will."]
  ],
  qs: [
   ["What is the woman's opinion of the course content?", ["It was too theoretical.","Most of it was familiar to her.","It was badly presented."], 1, "„not convinced I learned much I didn't know already“. C je past – školitel byl skvělý."],
   ["Why does she recommend the course?", ["for the chance to make useful contacts","because the trainer was so engaging","because it will help him get promoted"], 0, "„The best bit… was meeting people from other departments“."]
  ]
 },
 {
  title: "Extract 3 – a man talking on the radio about moving to the countryside",
  script: [
   [1, "When we first moved out of the city, I'll admit I romanticised it a bit. I imagined long walks, fresh vegetables, neighbours dropping by. Some of that's true, but what nobody tells you is how much you end up depending on the car. The nearest shop is eight miles away, and the bus comes twice a day if you're lucky. Would I go back? Not a chance. The quiet alone is worth it. But I'd tell anyone thinking of doing the same to spend a winter there first, not just a sunny fortnight in July."]
  ],
  qs: [
   ["What aspect of country life had he not expected?", ["how friendly the neighbours would be","how much he would need to drive","how quiet it would be"], 1, "„what nobody tells you is how much you end up depending on the car“."],
   ["What advice does he give?", ["Try living there in a difficult season first.","Keep a home in the city for a while.","Choose a village with good public transport."], 0, "„spend a winter there first, not just a sunny fortnight in July“."]
  ]
 }
],

l2: {
 title: "A talk by Hannah, a foley artist",
 script: [
  [0, "Hi everyone, I'm Hannah, and I work as a foley artist, which means I create the everyday sounds you hear in films: footsteps, doors closing, the rustle of clothes. Most people assume these sounds are recorded on set, but in fact the microphones on set are pointed at the actors' faces, so almost everything else has to be added afterwards in a studio."],
  [0, "I got into the job almost by accident. I studied music at university, and I was working as a sound engineer for a small radio station when a friend asked me to help out on a short film. I was hooked from the first day."],
  [0, "People are always surprised by the objects we use. Our studio is basically a room full of junk. For the sound of someone walking through snow, for example, we squeeze a bag of cornflour. And if you hear a bone breaking in a horror film, there's a good chance it's actually a stick of celery being snapped."],
  [0, "The hardest thing to get right isn't dramatic sounds like explosions, it's footsteps. Every character walks differently, and the footsteps have to match their personality as well as the surface they're walking on. I have a collection of over two hundred pairs of shoes for exactly this reason."],
  [0, "The job is very physical, which people don't expect. A typical day can involve ten hours of walking on the spot, so I spend a lot of time looking after my knees."],
  [0, "If you're interested in this kind of work, my advice is simple: start listening. Close your eyes in a café and try to identify every sound around you. The best foley artists aren't the ones with the most expensive equipment, they're the ones with the most patience."]
 ],
 gaps: [
  ["On set, the microphones are mainly pointed at the actors'", "", ["faces"]],
  ["Before this job, Hannah worked as a sound engineer at a", "", ["radio station","small radio station"]],
  ["To create the sound of walking through snow, she squeezes a bag of", "", ["cornflour","corn flour","cornstarch"]],
  ["The sound of a breaking bone is often made by snapping", "", ["celery","a stick of celery","sticks of celery"]],
  ["Hannah owns more than", "pairs of shoes.", ["200","two hundred","two-hundred"]],
  ["Because of all the walking on the spot, she has to look after her", "", ["knees"]],
  ["According to Hannah, the most important quality for a foley artist is", "", ["patience"]]
 ]
},

l3: {
 title: "A radio interview with a sleep scientist",
 script: [
  [0, "My guest today is Dr James Holt, who has spent twenty years researching sleep. James, why do you think sleep has become such a hot topic recently?"],
  [1, "Partly it's the technology. Millions of people now wear devices that claim to measure their sleep, so they're suddenly confronted with numbers every morning. The irony is that some of them sleep worse as a result, because they lie awake worrying about their scores."],
  [0, "So you're not a fan of sleep trackers?"],
  [1, "I wouldn't go that far. They can be useful for spotting patterns over weeks or months. The problem is when people treat one bad night as a disaster. Our bodies are remarkably good at catching up."],
  [0, "What about the famous eight hours? Is that a myth?"],
  [1, "It's an average, not a rule. Some people genuinely function well on six and a half hours; others need nine. What matters far more is consistency: going to bed and getting up at roughly the same time, even at weekends. That's the advice people least like to hear."],
  [0, "And teenagers? Parents often complain that they stay up too late."],
  [1, "Here I'd defend the teenagers. Their body clocks really do shift later during adolescence. It's biology, not laziness. That's why I've been campaigning for schools to start later in the morning. Where it's been tried, attendance and results have both improved."]
 ],
 qs: [
  ["According to James, why do some people with sleep trackers sleep worse?", ["The devices are uncomfortable to wear.","They become anxious about the data.","The measurements are inaccurate.","They check their phones at night."], 1, "„lie awake worrying about their scores“."],
  ["What is James's attitude to sleep trackers?", ["They are a waste of money.","They are useful if the data is viewed over time.","They should only be used by doctors.","They have improved a lot recently."], 1, "„useful for spotting patterns over weeks or months“."],
  ["What does James say matters most for good sleep?", ["sleeping for eight hours","having a regular routine","catching up at weekends","going to bed early"], 1, "„What matters far more is consistency“."],
  ["Why does James support later school start times?", ["Teenagers' body clocks are naturally different.","Teenagers use screens too late at night.","Teachers would be less tired.","Parents have asked for the change."], 0, "„It's biology, not laziness“."]
 ]
},

l4: {
 title: "Five people talking about a hobby they took up",
 task1: ["to recover from an injury","because a family member kept encouraging them","to meet people after moving","to get away from screens","to prove someone wrong","because of a childhood memory","to cope with stress at work","because it was cheap"],
 task2: ["a new career opportunity","better concentration","patience","friendships with older people","confidence in front of others","a closer relationship with a relative","physical fitness","pride in making things"],
 speakers: [
  "I'd just moved to Leeds for work and didn't know a soul, so I signed up for an evening pottery class, mainly to meet people. Funnily enough, the friends I made weren't the people my age at all. It was the retired couple who ran the studio and a group of women in their seventies who took me under their wing.",
  "My granddad taught me chess when I was about seven, and I still remember the smell of his pipe and the wooden board on his kitchen table. When I found that board in a box last year, I decided to start playing again. What I didn't expect was how much it would help at work. I can focus on a single problem for hours now without reaching for my phone.",
  "To be honest, I joined the choir because my sister wouldn't stop nagging me. She'd been a member for years. I was terrified at first. I could barely sing in the shower. But last month I sang a solo in front of three hundred people. I'd never have imagined I could do that.",
  "I work in IT, so my whole day is screens, and then I'd go home and stare at another one. I wanted a hobby that didn't involve a monitor of any kind. I started with a simple shelf. Now half the furniture in my flat is something I've made myself, and every time I put a cup down on my own table I feel quietly proud.",
  "After I hurt my shoulder playing rugby, my physio suggested climbing to rebuild the muscles. I thought it would be all about strength, but what it's really taught me is to slow down. You can't rush a hard route. You have to wait, rest, and try again, sometimes for weeks."
 ],
 ans1: [2, 5, 1, 3, 0],
 ans2: [3, 1, 4, 7, 2]
},

/* ---------------- WRITING ---------------- */
essays: [
 { title: "Improving city life",
   task: "Your class has attended a panel discussion on what governments should invest in to improve life in cities. You have made the notes below.",
   notes: ["public transport","parks and green spaces","affordable housing"],
   opinions: ["“Better buses would get cars off the roads.”","“Green spaces are good for people's mental health.”","“Young people simply can't afford to live in the city any more.”"] },
 { title: "Healthier lifestyles",
   task: "Your class has attended a lecture on how people can be encouraged to lead healthier lives. You have made the notes below.",
   notes: ["health education in schools","taxes on unhealthy food","free sports facilities"],
   opinions: ["“Habits are formed when we're young.”","“People only change when it hits their wallet.”","“Gyms are too expensive for many families.”"] },
 { title: "Reducing waste",
   task: "Your class has watched a documentary about how the amount of waste we produce could be reduced. You have made the notes below.",
   notes: ["banning single-use plastics","repair shops and services","public awareness campaigns"],
   opinions: ["“Bans are the only thing that really works.”","“We throw away things that could easily be fixed.”","“Most people don't realise how much they waste.”"] },
 { title: "Choosing a career",
   task: "Your class has had a discussion about the most important factors to consider when choosing a career. You have made the notes below.",
   notes: ["salary","job satisfaction","work–life balance"],
   opinions: ["“Money gives you freedom.”","“You spend most of your life at work, so you'd better enjoy it.”","“No job is worth missing your children growing up.”"] },
 { title: "Learning outside school",
   task: "Your class has attended a seminar on which out-of-school activities are most valuable for teenagers. You have made the notes below.",
   notes: ["part-time jobs","volunteering","sports clubs"],
   opinions: ["“Earning your own money teaches responsibility.”","“Helping others builds character.”","“Team sports teach you how to lose.”"] },
 { title: "Technology and young people",
   task: "Your class has had a debate on how young people's use of technology could be made healthier. You have made the notes below.",
   notes: ["limits on screen time","teaching digital skills at school","phone-free zones"],
   opinions: ["“Parents should set the rules, not apps.”","“Kids need to learn to spot fake news.”","“Schools without phones are calmer.”"] }
],
essayRubric: "Write an essay discussing <b>two</b> of the points in your notes. You should <b>explain which point is more important</b>, giving reasons to support your opinion. You may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible. Write your answer in 220–260 words.",

part2: [
 { type: "email", title: "Email: a friend coming to your country",
   task: "An English-speaking friend is planning to spend six months in your country to work and improve their language skills. They have written asking for your advice. Write an email to your friend giving advice on finding accommodation, the best ways to meet local people and anything they should avoid doing. Write 220–260 words." },
 { type: "letter", title: "Letter: complaint to a hotel manager",
   task: "You recently stayed at a hotel for a conference, but several things went wrong: your room was not ready, the Wi-Fi did not work and you were charged for services you did not use. Write a letter to the manager explaining what happened, how it affected your stay and what you would like the hotel to do. Write 220–260 words." },
 { type: "proposal", title: "Proposal: better facilities for students",
   task: "The principal of your college wants to improve facilities for students and has asked for proposals. Write a proposal describing the current facilities, suggesting two improvements and explaining how students would benefit. Write 220–260 words." },
 { type: "report", title: "Report: last summer's social programme",
   task: "You work for a language school. The director has asked you to write a report on the social programme offered to students last summer. In your report, you should evaluate the activities, say which were most popular and why, and recommend changes for next year. Write 220–260 words." },
 { type: "review", title: "Review: a film or series about a social issue",
   task: "A film website is inviting reviews of films or series that deal with an important social issue. Write a review describing the film or series, explaining how effectively it deals with the issue and saying whether you would recommend it to others. Write 220–260 words." },
 { type: "review", title: "Review: a museum or exhibition",
   task: "A travel magazine is asking readers to review a museum or exhibition they have visited. Write a review saying what the museum or exhibition offers, what kind of visitors would enjoy it most and how it could be improved. Write 220–260 words." },
 { type: "proposal", title: "Proposal: a greener town",
   task: "Your town council wants to make the town more environmentally friendly and has invited young residents to submit proposals. Write a proposal outlining the main environmental problems in your town, suggesting practical solutions and explaining why young people in particular would support them. Write 220–260 words." },
 { type: "report", title: "Report: how students use the library",
   task: "Your college library is under-used, and the head librarian has asked you to write a report. Describe how students currently use the library, explain why many students avoid it and recommend changes that would attract more users. Write 220–260 words." }
],

structures: {
 essay: { reg: "formální, neosobní; bez nadpisů, bez oslovení", plan: [
   "Úvod: přeformuluj téma vlastními slovy a zmiň dva body, které rozebereš.",
   "Odstavec 2: bod 1 → proč je důležitý + konkrétní příklad nebo důsledek.",
   "Odstavec 3: bod 2 → proč + příklad; klidně uznej i jeho slabinu.",
   "Závěr: řekni, KTERÝ bod je důležitější, a PROČ. Bez toho přicházíš o body za obsah."] },
 email: { reg: "neformální (kamarád): stažené tvary, frázová slovesa, otázky na čtenáře", plan: [
   "Oslovení + reakce na jeho zprávu (Great to hear from you!).",
   "Odstavec: bydlení → konkrétní rada + proč.",
   "Odstavec: jak poznat místní → 2 nápady.",
   "Odstavec: čemu se vyhnout (s humorem, ale věcně).",
   "Závěr: nabídka pomoci + rozloučení (Can't wait to see you! / Take care)."] },
 letter: { reg: "formální: žádné stažené tvary, zdvořile, ale jasně", plan: [
   "Dear Mr/Ms … / Dear Sir or Madam, + důvod dopisu v 1. větě.",
   "Odstavec: co se stalo (fakta, chronologicky).",
   "Odstavec: jak to ovlivnilo tvůj pobyt.",
   "Odstavec: co požaduješ (refund, omluva, sleva).",
   "I look forward to hearing from you. Yours sincerely (známé jméno) / Yours faithfully (Sir or Madam)."] },
 proposal: { reg: "formální, přesvědčivý; s nadpisy; míří do budoucnosti", plan: [
   "Nadpis + Introduction: účel návrhu.",
   "Current situation: jak to vypadá teď (krátce).",
   "Recommendations: 2 návrhy, každý s detaily.",
   "Benefits: konkrétní přínosy pro studenty.",
   "Conclusion: shrň a „I strongly recommend that…“."] },
 report: { reg: "formální, věcný; s nadpisy; hodnotí minulost", plan: [
   "Nadpis + Introduction: účel zprávy a na čem stojí (dotazník, zpětná vazba).",
   "Findings: aktivity a jak dopadly (čísla, procenta).",
   "Most popular activities: co a proč.",
   "Recommendations: konkrétní změny.",
   "Conclusion: celkové zhodnocení."] },
 review: { reg: "polo-formální, živý; oslov čtenáře, barvitá přídavná jména", plan: [
   "Chytlavý titulek + úvodní háček (otázka nebo silné tvrzení).",
   "Krátce o čem to je (BEZ převyprávění celého děje).",
   "Hodnocení: co funguje a co ne, s příklady.",
   "Odpověď na konkrétní otázku zadání (zpracování tématu / pro koho to je).",
   "Doporučení: komu ano, komu ne."] }
},

phrases: {
 essay: ["It is often argued that…","There is little doubt that…","One of the most compelling arguments for… is…","This, in turn, would lead to…","Admittedly, … ; however, …","Not only does it…, but it also…","What is more, …","It could be argued that…","On balance, I believe that…","In conclusion, although both measures have their merits, … should be the priority, since…"],
 email: ["It was great to hear from you!","I'm so glad you've decided to…","If I were you, I'd…","You might want to…","Whatever you do, don't…","Another thing worth bearing in mind is…","Trust me, …","Let me know if you need anything else.","Can't wait to see you!"],
 letter: ["I am writing to express my dissatisfaction with…","I was particularly disappointed by…","To make matters worse, …","As a result, I was unable to…","I would therefore be grateful if you could…","I trust that you will look into this matter.","I look forward to receiving your reply."],
 proposal: ["The aim of this proposal is to…","At present, students have access to…","I would like to suggest that…","One possible solution would be to…","This would enable students to…","Not only would this…, but it would also…","I strongly recommend that…","I am confident that these changes would…"],
 report: ["The purpose of this report is to…","This report is based on feedback from…","The majority of students (around 70%)…","By far the most popular activity was…","A significant number of respondents felt that…","It would be advisable to…","I would recommend that…","Overall, the programme was…"],
 review: ["If you're looking for…, look no further.","Have you ever wondered what it would be like to…?","Set in…, the series follows…","What makes it stand out is…","The only real drawback is…","It handles the issue with remarkable sensitivity.","It's not without its flaws, but…","I would wholeheartedly recommend it to anyone who…","Give it a miss if…"]
},

checklist: [
 "Pokryl jsem VŠECHNY body zadání",
 "Registr sedí ke čtenáři (formální / neformální)",
 "Každý odstavec má jednu hlavní myšlenku",
 "Aspoň 5 různých spojovacích výrazů (However, Moreover, Consequently…)",
 "Aspoň 1 inverze nebo vytýkací věta (Not only…, What really matters is…)",
 "Aspoň 3 slova nebo obraty C1+ ze Slovíček",
 "220–260 slov",
 "Zkontroloval jsem časy, členy a předložky"
],

/* ---------------- SPEAKING ---------------- */
s1: [
 "Where are you from, and what do you like most about living there?",
 "What do you enjoy doing in your free time?",
 "How important is it for you to speak English well?",
 "If you could live anywhere in the world for a year, where would you choose, and why?",
 "Do you prefer spending time with a big group of friends or just a few close ones?",
 "What's the most useful thing you've learned recently?",
 "How do you usually relax after a busy day?",
 "Do you think you'll still be living in the same place in ten years' time?",
 "What kind of films or series do you enjoy watching?",
 "How has technology changed the way you study?",
 "Who has had the biggest influence on your life so far?",
 "What would your ideal job be?",
 "Do you prefer planning your holidays carefully or being spontaneous?",
 "Is there a skill you'd really like to learn in the future?",
 "How often do you read for pleasure?",
 "What's the best piece of advice anyone has ever given you?",
 "Do you play any computer games? What do you get out of them?",
 "What do you think you'll remember most about your school years?"
],

s2: [
 { theme: "People learning new skills",
   pics: [["👴📱","An elderly man learning to use a tablet with his grandson"],["🏺","A group of adults at an evening pottery class"],["🎸","A teenage girl practising the guitar alone in her bedroom"]],
   q: "Compare two of the pictures and say why the people might be learning these skills and how they might be feeling.",
   partner: "Which of these skills do you think would be the most difficult to learn?" },
 { theme: "People working in difficult conditions",
   pics: [["🧑‍🚒","Firefighters working in thick smoke"],["🎣","A fisherman on the deck of a boat in a storm"],["🩺","A nurse on a night shift in a busy hospital"]],
   q: "Compare two of the pictures and say what challenges these people might face and why they might have chosen this kind of work.",
   partner: "Which job do you think requires the most courage?" },
 { theme: "People celebrating",
   pics: [["🎂","A family celebrating a grandmother's birthday at home"],["⚽","Football fans celebrating a goal in a stadium"],["🎓","Students throwing their caps at a graduation ceremony"]],
   q: "Compare two of the pictures and say why these people might be celebrating and how important this moment might be for them.",
   partner: "Which of these celebrations do you think will be remembered for the longest?" },
 { theme: "People making decisions",
   pics: [["🏠","A young couple being shown around a house for sale"],["💻","A student comparing universities on a laptop"],["🧑‍⚕️","A doctor discussing treatment options with a patient"]],
   q: "Compare two of the pictures and say what decisions the people might be making and how difficult these decisions might be.",
   partner: "Which decision do you think would be the hardest to change later?" }
],

s3: [
 { q: "How might these things affect people's happiness?", prompts: ["money","friendships","career success","health","free time"],
   decide: "Which two do you think are the most important for long-term happiness?" },
 { q: "Why do people choose to live in big cities?", prompts: ["job opportunities","nightlife and entertainment","public transport","universities","cultural diversity"],
   decide: "Which reason do you think attracts the most people?" },
 { q: "How could these actions help to protect the environment?", prompts: ["cycling to work","eating less meat","buying second-hand","flying less","recycling"],
   decide: "Which action would make the biggest difference?" },
 { q: "What might people gain from these experiences?", prompts: ["living abroad","doing voluntary work","learning an instrument","taking a gap year","starting a business"],
   decide: "Which experience would be the most valuable for a young person?" }
],

s4: [
 "Some people say money can't buy happiness. To what extent do you agree?",
 "Is it better to have a few close friends or lots of acquaintances?",
 "Do you think people today work too hard?",
 "Should governments do more to encourage people to live greener lives?",
 "How has social media changed the nature of friendship?",
 "Do you think cities will become more or less attractive places to live in the future?",
 "Who should be responsible for solving environmental problems: individuals or governments?",
 "Why do you think some people are reluctant to change their habits?",
 "Is it more important to enjoy your job or to be well paid?",
 "Do you think young people today have more opportunities than their parents did?",
 "Should schools focus more on practical life skills?",
 "How might artificial intelligence change the way we work?"
],

sPhrases: [
 ["Srovnání (Part 2)", ["Both pictures show…, but…","Whereas the people in the first picture…, those in the second…","The main difference is that…","Unlike picture A, picture B…","In contrast, …"]],
 ["Spekulace (Part 2)", ["It looks as if / as though…","They might well be…","I'd imagine that…","Judging by their expressions, …","There's a good chance that…","It's hard to say for sure, but…"]],
 ["Spolupráce (Part 3)", ["Shall we start with…?","What do you think about…?","That's a good point, but…","I see what you mean, although…","Shall we move on to…?","So, are we agreed that…?","Let's go for… then."]],
 ["Získat čas", ["That's an interesting question…","Let me think about that for a second…","I've never really thought about it, but…","How can I put this…?"]],
 ["Názor (Part 4)", ["From my point of view, …","I'd go along with that up to a point.","It depends to a large extent on…","On balance, I'd say…","I couldn't agree more.","I'm not entirely convinced that…"]]
],

/* ---------------- VOCAB (C1/C2): [word, czech, definition, example, level 1=C1 2=C2] ---------------- */
vocab: [
 ["albeit","i když, byť","although (formal)","The plan worked, albeit more slowly than expected.",1],
 ["detrimental","škodlivý","causing harm or damage","Lack of sleep can be detrimental to your health.",1],
 ["ubiquitous","všudypřítomný","found everywhere","Smartphones have become ubiquitous.",2],
 ["pivotal","klíčový, zlomový","of crucial importance","She played a pivotal role in the negotiations.",1],
 ["to mitigate","zmírnit","to make something bad less severe","Planting trees can mitigate the effects of flooding.",1],
 ["a plethora of","hromada, záplava","a very large amount of","There is a plethora of apps for learning languages.",2],
 ["to undermine","podkopat, oslabit","to gradually weaken","Constant criticism can undermine a child's confidence.",1],
 ["inherent","vrozený, neodmyslitelný","existing as a natural, basic part","Every extreme sport carries inherent risks.",1],
 ["to alleviate","ulevit, zmírnit","to make pain or a problem less bad","The new road should alleviate traffic congestion.",1],
 ["conducive to","příznivý pro","making something likely to happen","A quiet room is conducive to concentration.",1],
 ["unprecedented","bezprecedentní","never having happened before","The city saw an unprecedented rise in tourism.",1],
 ["to foster","podporovat, pěstovat","to encourage something to develop","Team sports foster a sense of cooperation.",1],
 ["far-reaching","dalekosáhlý","having a wide influence or effect","The reforms will have far-reaching consequences.",1],
 ["to curb","omezit, krotit","to control or limit something bad","The government wants to curb air pollution.",1],
 ["to deem","považovat za","to consider (formal)","The building was deemed unsafe.",1],
 ["viable","životaschopný, proveditelný","able to work successfully","Solar power is now a viable alternative to coal.",1],
 ["arguably","dá se říct, možná","it can be argued that","It is arguably the best film of the decade.",1],
 ["to hinder","bránit, brzdit","to make progress difficult","Bad weather hindered the rescue efforts.",1],
 ["to bolster","posílit","to support or strengthen","The victory bolstered the team's confidence.",1],
 ["contentious","sporný, kontroverzní","likely to cause disagreement","Immigration remains a contentious issue.",1],
 ["to scrutinise","důkladně zkoumat","to examine very carefully","Journalists scrutinised every detail of the report.",1],
 ["to exacerbate","zhoršit","to make a bad situation worse","Cutting staff would only exacerbate the problem.",1],
 ["to outweigh","převážit","to be greater or more important than","The benefits far outweigh the drawbacks.",1],
 ["to dwell on","pořád řešit (něco špatného)","to keep thinking about something unpleasant","There's no point dwelling on past mistakes.",1],
 ["complacent","samolibý, ukolébaný","too satisfied to try harder","We can't afford to become complacent.",1],
 ["resilient","odolný","able to recover quickly from difficulties","Children are often more resilient than we think.",1],
 ["to thrive","vzkvétat, dařit se","to grow or develop successfully","Small businesses thrive in this area.",1],
 ["tangible","hmatatelný","real and able to be measured","The new policy has brought tangible benefits.",1],
 ["elusive","nepolapitelný","difficult to find or achieve","Success proved elusive for the young band.",2],
 ["candid","upřímný, otevřený","honest and direct","She gave a candid interview about her illness.",1],
 ["to jeopardise","ohrozit","to put something at risk","One mistake could jeopardise the whole project.",1],
 ["to reconcile","sladit, smířit","to make two things compatible","It's hard to reconcile work and family life.",1],
 ["meticulous","pečlivý, puntičkářský","very careful about every detail","He kept meticulous records of his spending.",2],
 ["superfluous","zbytečný, nadbytečný","more than is needed","Cut any superfluous words from your essay.",2],
 ["ephemeral","pomíjivý","lasting a very short time","Fame on social media is often ephemeral.",2],
 ["to galvanise","vyburcovat","to shock or excite people into action","The speech galvanised young voters.",2],
 ["quintessential","typický, ukázkový","the most perfect example of something","It's the quintessential English village.",2],
 ["serendipity","šťastná náhoda","finding something good by chance","Their meeting was pure serendipity.",2],
 ["to be at odds with","být v rozporu s","to disagree with / not match","His actions are at odds with his words.",1],
 ["to pave the way for","připravit cestu pro","to make something possible in the future","The discovery paved the way for new treatments.",1],
 ["a double-edged sword","dvousečná zbraň","something with both good and bad effects","Fame can be a double-edged sword.",1],
 ["the tip of the iceberg","špička ledovce","a small visible part of a much bigger problem","These complaints are just the tip of the iceberg.",1],
 ["to bridge the gap","překlenout propast","to reduce the difference between two groups","The scheme aims to bridge the gap between rich and poor.",1],
 ["a vicious circle","začarovaný kruh","a problem that keeps making itself worse","Stress causes poor sleep, which causes more stress: a vicious circle.",1],
 ["to take sth for granted","brát jako samozřejmost","to not appreciate something","We often take clean water for granted.",1],
 ["by no means","rozhodně ne","not at all","The task is by no means easy.",1],
 ["to come to terms with","smířit se s","to accept something difficult","It took him years to come to terms with the loss.",1],
 ["notwithstanding","navzdory","despite (formal)","Notwithstanding the costs, the project went ahead.",2],
 ["a drawback","nevýhoda, háček","a disadvantage","The main drawback of the plan is its cost.",1],
 ["commonplace","běžný","very common, not unusual","Remote working is now commonplace.",1],
 ["to procrastinate","odkládat, prokrastinovat","to keep delaying something you should do","I always procrastinate before exams.",1],
 ["reluctant","zdráhavý, neochotný","unwilling to do something","Many people are reluctant to change their habits.",1],
 ["to weigh up","zvážit","to consider the advantages and disadvantages","You need to weigh up the pros and cons.",1],
 ["first-hand","z první ruky","experienced directly","She has first-hand experience of poverty.",1],
 ["to tackle","řešit, pustit se do","to deal with a difficult problem","We must tackle climate change now.",1],
 ["a stepping stone","odrazový můstek","a stage that helps you reach a goal","The job was a stepping stone to a career in film.",1]
]
};
