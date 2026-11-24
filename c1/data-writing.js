/* Writing extras: model answers per genre, writing drills, rules for the text checker.
   Extends window.C1 from data.js (load after it). */
Object.assign(window.C1, {

models: [
 { type: "essay", title: "Making our cities better places to live", task: "Essay: Improving city life (public transport / green spaces / affordable housing)",
   text: [
    "As more and more people move to urban areas, the question of how best to improve city life has become increasingly pressing. While there are many possible areas for investment, two stand out as particularly significant: public transport and affordable housing.",
    "There is little doubt that an efficient public transport network transforms daily life. When buses and trams are frequent, reliable and reasonably priced, fewer people feel the need to drive, which in turn reduces both congestion and air pollution. Moreover, good transport links give residents of poorer districts access to jobs and services that would otherwise be out of reach. Admittedly, such systems are expensive to build and can take decades to complete.",
    "Affordable housing, on the other hand, addresses a problem that is arguably more urgent. In many capital cities, rents have risen so sharply that teachers, nurses and young people are being forced out altogether. A city that cannot house the very people it depends on is unlikely to thrive in the long run. Not only would investing in reasonably priced homes ease the financial pressure on families, but it would also help to keep communities diverse.",
    "In conclusion, although both measures would bring considerable benefits, I believe that affordable housing should be the priority. Without it, even the best transport system would simply carry people into a city they can no longer afford to live in."
   ],
   notes: ["Úvod přeformuluje téma a hned řekne, které DVA body rozebere.","Každý odstavec: tvrzení → důvod → důsledek (which in turn…).","„Admittedly…“ uzná slabinu = vyvážený argument.","C1 slova: arguably, thrive, in the long run, the very people.","Závěr jasně vybere prioritu a zdůvodní ji – to je povinné."] },

 { type: "email", title: "Hi Sam,", task: "Email: advice for a friend coming to your country",
   text: [
    "Hi Sam,",
    "It was great to hear from you, and I'm thrilled you've finally decided to come over! Six months will fly by, so here are a few tips to help you make the most of it.",
    "First things first: accommodation. Whatever you do, don't sign a long contract before you arrive. Rents in Prague have gone through the roof, and some landlords take advantage of newcomers who don't know the market. If I were you, I'd book a room for the first couple of weeks and then look around in person. You might also want to join one of the local Facebook groups, where flatshares are advertised long before they reach the big websites.",
    "As for meeting people, what I'd honestly recommend is joining a club rather than hanging around in tourist bars. Czechs can seem a bit reserved at first, but once you're part of a climbing group or a five-a-side team, you'll be invited to everything. Language exchanges are another great option: you help someone with their English, and they help you with your Czech.",
    "One thing to avoid: don't expect everyone to speak English, especially outside the centre. Learning even a handful of phrases will go a long way, and people really appreciate the effort.",
    "Anyway, let me know when you've booked your flight – I'll be more than happy to show you around.",
    "Can't wait to see you!",
    "Petr"
   ],
   notes: ["Neformální registr: stažené tvary, frázová slovesa (fly by, hang around, come over).","Idiomy: go through the roof, go a long way, first things first.","Každý bod zadání = vlastní odstavec, uvedený signálem (As for…, One thing to avoid…).","Rada vždy s důvodem: If I were you, I'd… / You might want to…"] },

 { type: "letter", title: "Dear Sir or Madam,", task: "Letter: complaint to a hotel manager",
   text: [
    "Dear Sir or Madam,",
    "I am writing to express my dissatisfaction with my recent stay at the Riverside Hotel, where I spent three nights in October while attending a marketing conference.",
    "On arrival, I was informed that my room was not ready, despite the fact that I had confirmed my booking and arrival time in advance. As a result, I was obliged to wait in the lobby for almost three hours and missed the opening session of the conference. To make matters worse, the Wi-Fi in my room did not work at any point during my stay. Although I reported the problem to reception twice, nobody came to fix it, which had a detrimental effect on the presentation I was due to give.",
    "Upon checking out, I was also surprised to discover that my bill included charges for room service and the minibar, neither of which I had used. The receptionist was unable to explain these charges and advised me to contact you directly.",
    "I would therefore be grateful if you could refund the incorrect charges, which amount to €84, and offer some form of compensation for the inconvenience caused. Having stayed at your hotel several times in the past, I sincerely hope that this was an exception rather than the rule.",
    "I look forward to receiving your reply.",
    "Yours faithfully,",
    "Petr Svoboda"
   ],
   notes: ["Formální: žádné stažené tvary; slova jako obliged, upon, inconvenience.","Fakta chronologicky a konkrétně (3 hodiny, €84).","Jasný požadavek: I would therefore be grateful if you could…","Participle clause: Having stayed at your hotel…","Dear Sir or Madam → Yours faithfully (jméno neznáš)."] },

 { type: "proposal", title: "Improving student facilities", task: "Proposal: better facilities for students",
   text: [
    "Introduction",
    "The aim of this proposal is to outline the current state of student facilities at the college and to suggest two improvements that would make a significant difference to students' daily lives.",
    "Current situation",
    "At present, students have access to a library, a canteen and a small common room. While the library is well stocked, it closes at 6 p.m., which is far too early for those who attend evening classes. The common room, meanwhile, is cramped and poorly furnished, so most students spend their breaks elsewhere.",
    "Recommendations",
    "Firstly, I would like to suggest extending the library's opening hours until 10 p.m. on weekdays. This would be a viable option, since it could be achieved at relatively low cost by employing student assistants for the evening shifts. Secondly, I propose converting the unused classroom next to the canteen into a modern study and social space, equipped with comfortable seating, charging points and whiteboards for group work.",
    "Benefits",
    "Not only would these changes give students more flexibility in how and when they study, but they would also encourage them to spend more time on campus, which in turn would foster a stronger sense of community. Moreover, working in the library would provide students with valuable work experience.",
    "Conclusion",
    "I strongly recommend that both measures be introduced at the start of next term. I am confident that they would be warmly welcomed by students and staff alike."
   ],
   notes: ["Nadpisy = jasná struktura (u proposal a report jsou žádoucí).","Inverze: Not only would these changes…","Subjunktiv: I strongly recommend that both measures BE introduced.","Návrhy jsou konkrétní a realistické (cena, kdo, jak).","Míří do budoucnosti: would, could, I propose."] },

 { type: "report", title: "Report on last summer's social programme", task: "Report: the language school's social programme",
   text: [
    "Introduction",
    "The purpose of this report is to evaluate the social programme offered to students last summer and to recommend changes for next year. It is based on a questionnaire completed by 120 students and on feedback from teaching staff.",
    "Overview",
    "The programme consisted of weekly excursions, evening film screenings, a sports afternoon and a farewell party. On the whole, students were satisfied, with 78% rating the programme as good or excellent.",
    "Most popular activities",
    "By far the most popular activity was the weekend excursion, particularly the trip to the coast, which many students described as the highlight of their stay. Not only did students appreciate the chance to see more of the country, but they also practised their English in real situations. The film screenings, by contrast, were poorly attended. A significant number of respondents felt that the films were old-fashioned and that the evenings clashed with other plans.",
    "Recommendations",
    "In light of these findings, I would recommend increasing the number of excursions, possibly by adding a second trip each month, and replacing the film evenings with more interactive events, such as quiz nights or cooking workshops. It would also be advisable to let students vote on activities at the start of each course.",
    "Conclusion",
    "Overall, the programme was a success, and its benefits far outweighed its drawbacks. These relatively minor adjustments would, however, make it even more attractive to future students."
   ],
   notes: ["Neosobní a věcný tón; čísla a procenta dodávají důvěryhodnost.","Typické fráze: By far the most popular…, A significant number of respondents…, In light of these findings…","By contrast = kontrast mezi aktivitami.","Hodnotí minulost (minulé časy), doporučuje budoucnost (would)."] },

 { type: "review", title: "The Long Shift: a quiet masterpiece", task: "Review: a series about a social issue (smyšlený seriál)",
   text: [
    "If you think dramas about hospitals are all flashing lights and heroic surgeons, The Long Shift will make you think again.",
    "Set in an understaffed hospital in northern England, the six-part series follows Maya, a newly qualified nurse, through her first year on a busy night ward. Nothing especially dramatic happens. Instead, we watch Maya juggle impossible workloads, care for patients she barely has time to speak to and slowly come to terms with the fact that the system she works in is close to breaking point.",
    "What makes the series stand out is the way it handles the issue of burnout among healthcare workers. Rather than lecturing the audience, it lets small moments speak for themselves: a missed meal, a phone call home that never happens, a colleague crying quietly in a storeroom. The performances are superb, the attention to detail is meticulous, and filming almost entirely at night gives the whole thing a claustrophobic, exhausted feel that is hard to shake off.",
    "It is not without its flaws. The final episode ties things up rather too neatly, and one or two characters feel underdeveloped. However, these are minor drawbacks in what is, on the whole, a remarkably honest piece of television.",
    "I would wholeheartedly recommend The Long Shift to anyone who wants to understand what working in a hospital really means today. Just don't expect to feel cheerful afterwards."
   ],
   notes: ["Háček v 1. větě: oslovení čtenáře a překvapení.","Děj jen krátce, žádné převyprávění ani spoilery.","Hodnocení s konkrétními příklady (a missed meal, a colleague crying…).","Vytýkací věta: What makes the series stand out is…","It is not without its flaws = vyváženost; konec = jasné doporučení komu."] }
],

/* writing drills: [prompt, [options – first is correct, page shuffles them], czech note] */
wd: {
 upgrade: { name: "B2 → C1", hint: "Vyber nejlepší C1 verzi věty. Pozor: špatné verze mají gramatickou chybu.", items: [
  ["People started to worry about the problem only recently.", ["Only recently have people started to worry about the problem.","Only recently people have started to worry about the problem.","Recently only people started to worry about the problem."], "Only + příslovce na začátku → inverze (have people)."],
  ["Pollution is a big problem in our city.", ["Pollution poses a serious threat to our city.","Pollution is a very big problem in our city.","Pollution makes a big problem in our city."], "pose a threat = kolokace C1; „very big“ je slabé."],
  ["The cost worries me most.", ["What worries me most is the cost.","That worries me most is the cost.","What it worries me most is the cost."], "Vytýkací věta: What + sloveso … is …"],
  ["We should do something about it now.", ["Urgent action needs to be taken.","Urgent action needs to take.","It needs urgent action to do now."], "Pasivum: action needs to BE taken."],
  ["A lot of people think that cars are bad.", ["It is widely believed that cars are harmful.","It is widely believed that cars are bad things.","Widely believed is that cars are harmful."], "It is widely believed that… + přesné slovo (harmful)."],
  ["Because the government invested more money, things got better.", ["Increased government investment has led to significant improvements.","Because of the government invested more money, things got better.","The government investing more, things got better."], "Nominalizace (investment, improvements) = formální styl."],
  ["When I arrived at the station, I realised I had lost my ticket.", ["On arriving at the station, I realised I had lost my ticket.","Arrived at the station, I realised I had lost my ticket.","On arrive at the station, I realised I had lost my ticket."], "On + -ing = jakmile, když."],
  ["This idea is good, but it's expensive.", ["Admittedly, the idea has its merits; however, it would be costly to implement.","The idea is good, however it's expensive.","Despite the idea is good, it's expensive."], "However nespojuje dvě věty čárkou; despite + podst. jm."],
  ["You must not use your phone in the exam.", ["Under no circumstances are mobile phones to be used during the exam.","Under no circumstances mobile phones are to be used during the exam.","In no circumstances you must use phones in the exam."], "Under no circumstances + inverze (are phones)."],
  ["Social media has good and bad effects on young people.", ["Social media is something of a double-edged sword for young people.","Social media has very good and very bad effects on young people.","For young people social media is good and bad thing."], "a double-edged sword = idiom C1."],
  ["I think this is very important.", ["I would argue that this is of paramount importance.","I think this is very, very important.","In my opinion, this is importance."], "of paramount importance = naprosto zásadní."],
  ["If we don't act now, it will be too late.", ["Should we fail to act now, it may well be too late.","If we will not act now, it will be too late.","Should we don't act now, it will be too late."], "Should + podmět = formální podmínka; v if-větě ne will."],
  ["The film was good, but the ending was bad.", ["Although the film was gripping, the ending proved disappointing.","The film was good, the ending however was bad.","Despite the film was gripping, the ending was disappointing."], "Přesnější přídavná jména + although + věta."],
  ["It's cheap and it's also good for the environment.", ["Not only is it cheap, but it is also environmentally friendly.","Not only it is cheap, but also it is environmentally friendly.","Not only is cheap, but it is also environmentally friendly."], "Not only + inverze (is it) … but also."],
  ["After he had finished the report, he went home.", ["Having finished the report, he went home.","Having been finished the report, he went home.","Finished the report, he went home."], "Having + 3. tvar = poté, co."],
  ["Lots of students don't like the new rules.", ["A significant number of students object to the new rules.","Lots of students are not liking the new rules.","A lot of students doesn't like the new rules."], "A significant number of + object to = formální."]
 ]},
 register: { name: "Registr", hint: "Která věta se hodí do daného typu textu?", items: [
  ["Formální stížnost – první věta", ["I am writing to complain about…","I'm dropping you a line about…","Just wanted to tell you about…"], "Formální dopis začíná důvodem: I am writing to…"],
  ["Email kamarádovi – rozloučení", ["Can't wait to catch up!","Yours faithfully,","I look forward to your prompt reply."], "Kamarádovi neformálně."],
  ["Report – výsledky průzkumu", ["The vast majority of respondents expressed satisfaction.","Loads of students said they loved it.","Everybody was, like, really happy."], "Report = neosobně, čísla, respondents."],
  ["Essay – uvedení opačného názoru", ["It could, however, be argued that…","Some people reckon that's rubbish.","But hey, others don't agree."], "Essay = formální, neosobní."],
  ["Proposal – doporučení", ["I strongly recommend that the college invest in…","You should totally buy…","Why not get some new stuff?"], "recommend that + subjunktiv (invest bez -s)."],
  ["Review – úvod pro čtenáře", ["Have you ever wondered what it would be like to…?","This review will now describe the film.","Dear Sir or Madam,"], "Review chce zaujmout čtenáře."],
  ["Formální dopis – žádost o nápravu", ["I would be grateful if you could look into this matter.","Sort it out, please.","Can you fix it ASAP?"], "would be grateful if you could = zdvořilá žádost."],
  ["Email kamarádovi – rada", ["If I were you, I'd steer clear of…","It is advisable that you refrain from…","Applicants are advised to avoid…"], "Kamarádovi osobně: If I were you…"],
  ["Essay – závěr", ["On balance, I believe that…","So that's it, really.","To sum up, I reckon…"], "reckon je hovorové."],
  ["Dopis do novin – nesouhlas", ["I take issue with the claim that…","Your article is total rubbish.","No way do I agree!"], "take issue with = formálně nesouhlasit."],
  ["Report – úvod", ["The purpose of this report is to…","Hi! In this report I'm gonna…","Let me tell you a story about…"], "Report začíná účelem."],
  ["Dopis, který končí ‘Yours sincerely’, začíná:", ["Dear Ms Harper,","Dear Sir or Madam,","Hi Sarah,"], "Yours sincerely = znáš jméno. Sir or Madam → Yours faithfully."]
 ]},
 linkers: { name: "Spojky", hint: "Doplň spojovací výraz. Hlídej interpunkci a co následuje (věta × podstatné jméno).", items: [
  ["The plan is ambitious. ___, it is entirely achievable.", ["Nevertheless","Whereas","Despite","Although"], "Na začátku věty s čárkou: Nevertheless."],
  ["___ the high cost, the project went ahead.", ["Despite","Although","However","Even though"], "Despite + podstatné jméno."],
  ["Car use has fallen; ___, air quality has improved.", ["consequently","whereas","nonetheless","otherwise"], "Příčina → následek."],
  ["Some students prefer group work, ___ others work better alone.", ["whereas","however","therefore","moreover"], "whereas spojuje dvě věty kontrastem."],
  ["Public transport is cheap. ___, it is better for the environment.", ["Furthermore","Nevertheless","Instead","Otherwise"], "Přidání argumentu."],
  ["We must act now; ___, the damage may be irreversible.", ["otherwise","moreover","hence","likewise"], "otherwise = jinak."],
  ["___ the evidence suggests otherwise, many people still believe the myth.", ["Although","Despite","In spite of","However"], "Although + celá věta."],
  ["Prices have risen sharply. ___, many families are struggling.", ["As a result","In contrast","Even so","On the other hand"], "Následek."],
  ["Remote work saves time. ___, it can lead to isolation.", ["On the other hand","As a result","In addition","For instance"], "Protiargument."],
  ["Many cities, ___ Amsterdam and Copenhagen, have invested heavily in cycling.", ["such as","for example of","like as","namely of"], "such as = jako například."],
  ["___ to popular belief, the scheme has been a success.", ["Contrary","Opposite","Unlike","Despite"], "Contrary to popular belief."],
  ["The building will be renovated so ___ it meets modern safety standards.", ["that","as","for","such"], "so that + věta = aby."],
  ["___ having studied hard, he failed the exam.", ["Despite","Although","However","Even"], "Despite + -ing."],
  ["The proposal was rejected, ___ was hardly surprising.", ["which","what","that","it"], "which odkazuje na celou předchozí větu."]
 ]},
 errors: { name: "Chyby Čechů", hint: "Která věta je správně? Tohle jsou nejčastější české chyby v psaní.", items: [
  ["", ["I agree with this opinion.","I am agree with this opinion.","I am agreeing with this opinion."], "agree je sloveso – bez am."],
  ["", ["Life in big cities is stressful.","The life in big cities is stressful.","A life in big cities is stressful."], "Obecně, abstraktně → bez členu."],
  ["", ["It depends on the situation.","It depends of the situation.","It depends from the situation."], "depend ON."],
  ["", ["I have been living here for five years.","I have been living here since five years.","I live here for five years."], "for + doba, since + začátek."],
  ["", ["People are more and more interested in ecology.","People are more and more interested about ecology.","People are more and more interested for ecology."], "interested IN."],
  ["", ["He explained the problem to me.","He explained me the problem.","He explained to me about the problem."], "explain sth TO sb."],
  ["", ["The information was useful.","The informations were useful.","The information were useful."], "information/advice/news = nepočitatelné."],
  ["", ["I look forward to hearing from you.","I look forward to hear from you.","I am looking forward to hear from you."], "look forward to + -ing."],
  ["", ["There are many ways of solving it.","There are many possibilities how to solve it.","There are many possibilities to solve it."], "ways of + -ing."],
  ["", ["If I had time, I would help.","If I would have time, I would help.","If I have time, I would help."], "V if-větě ne would."],
  ["", ["Every person has the right to education.","Every people has the right to education.","Every persons has the right to education."], "every + jednotné číslo."],
  ["", ["In my opinion, schools should start later.","In my opinion, I think that schools should start later.","On my opinion, schools should start later."], "In my opinion + I think = zdvojení."],
  ["", ["Nowadays, technology is everywhere.","Nowadays, the technology is everywhere.","Nowadays, technologies is everywhere."], "Obecně → bez členu."],
  ["", ["She has made great progress.","She has made a big progress.","She has done a big progress."], "progress je nepočitatelné."],
  ["", ["The number of tourists has increased.","The number of tourists have increased.","A number of tourist has increased."], "The number … HAS."],
  ["", ["I didn't know what to do.","I didn't know what should I do.","I didn't know what I to do."], "Nepřímá otázka: bez inverze."],
  ["", ["We discussed the problem.","We discussed about the problem.","We discussed over the problem."], "discuss sth – bez předložky."],
  ["", ["It's worth visiting.","It's worth to visit.","It worths visiting."], "be worth + -ing."]
 ]}
},

/* text checker rules */
check: {
 linkers: ["however","moreover","furthermore","nevertheless","nonetheless","consequently","therefore","thus","hence","in addition","whereas","although","even though","despite","in spite of","on the other hand","as a result","admittedly","in conclusion","to conclude","on balance","what is more","not only","in contrast","by contrast","given that","provided that","while","firstly","secondly","finally","for instance","for example","such as","in light of","as for","otherwise","similarly","likewise","overall","all things considered","that said","meanwhile","in turn","instead","rather than","indeed","in fact","after all","besides","above all","not to mention","in other words","in particular","particularly","especially","on the whole","anyway","first things first","even so","having said that","not least"],
 advanced: [
  [/(^|[.!?]\s+)(not only (is|are|was|were|do|does|did|would|will|has|have|had|can|could|should))\b/gi, "inverze Not only…"],
  [/(^|[.!?]\s+)(rarely|seldom|never|hardly|scarcely|no sooner|little did|only (then|later|when|after|by|recently|once)|under no circumstances|on no account|at no time|in no way)\b/gi, "inverze / zdůraznění"],
  [/\bwhat(?: [a-z']+){1,6} (is|was)\b/gi, "vytýkací věta What… is"],
  [/\bit (is|was) (not until|only when|[a-z]+) (that|who)\b/gi, "vytýkací věta It is… that"],
  [/\bit is (widely |generally |often |commonly )?(believed|thought|argued|said|claimed|accepted)\b/gi, "neosobní pasivum"],
  [/(^|[.!?]\s+)(had|should|were) (i|we|you|they|he|she|it|the|this|people)\b/gi, "podmínka s inverzí"],
  [/(^|[.!?]\s+)(having [a-z]+(ed|en|ne|wn|t)|(set|based|located|written|filmed|faced|given|compared|seen) (in|on|by|with|to|as|from))\b/gi, "participle clause (Having…, Set in…)"],
  [/\b(recommend|suggest|propose|insist)(s|ed)? that\b/gi, "recommend / suggest that…"],
  [/\b(may|might|could|must) (well )?have [a-z]+(ed|en|wn|t)\b/gi, "modál + have + 3. tvar"],
  [/\bnot only\b[^.]{3,80}?\bbut\b/gi, "not only … but (also)"],
  [/\b(there is|there's) (little|no) doubt\b/gi, "There is little doubt"],
  [/\b(which|this),? in turn\b/gi, "which in turn"],
  [/\b(neither|none|both|all|most|some) of (which|whom)\b/gi, "neither of which / most of whom"],
  [/\b(in|for|to|with|on|by) (which|whom)\b/gi, "předložka + which/whom"],
  [/(?:\b(?:could|can|should|must|would|will|might)|'ll) (not )?be [a-z]+(ed|en|wn)\b/gi, "modální pasivum (could be achieved)"],
  [/\b(so|such) (?:[a-z]+ ){1,4}that\b/gi, "so / such … that"],
  [/\bthe very [a-z]+/gi, "the very… (důraz)"]
 ],
 weak: {
  "very": "extremely, highly, remarkably (nebo silnější slovo: very important → crucial)",
  "good": "beneficial, valuable, worthwhile, effective",
  "bad": "harmful, detrimental, damaging, disappointing",
  "nice": "pleasant, appealing, enjoyable",
  "big": "significant, considerable, major, substantial",
  "thing": "aspect, factor, issue, matter",
  "things": "aspects, factors, issues, matters",
  "a lot of": "a great deal of, numerous, a significant number of",
  "lots of": "a great deal of, numerous, a wide range of",
  "get": "obtain, become, receive, achieve",
  "really": "genuinely, truly, particularly",
  "stuff": "material, equipment, belongings",
  "kind of": "somewhat, rather"
 },
 czech: [
  [/\b(i|we|they|you) (am|are) agree\b/gi, "„am agree“ → I agree"],
  [/\bdepends? (of|from)\b/gi, "depend OF/FROM → depend ON"],
  [/\binterested (about|for)\b/gi, "interested IN"],
  [/\blook(ing)? forward to (?![a-z]+ing\b)(hear|see|meet|receive|get|work|have)\b/gi, "look forward to + -ing"],
  [/\b(informations|advices|knowledges|furnitures|equipments)\b/gi, "nepočitatelné slovo bez -s"],
  [/\bsince (\d+|two|three|four|five|six|ten|many|several) (years|months|weeks|days)\b/gi, "since + začátek; doba → FOR"],
  [/\bexplain(s|ed)? (me|him|her|us|them)\b/gi, "explain TO sb"],
  [/\bin my opinion,? i think\b/gi, "In my opinion + I think = zdvojení"],
  [/\bmake (a|big a) progress\b|\bmade a (big |great )?progress\b/gi, "progress je nepočitatelné (great progress)"],
  [/\bevery people\b/gi, "every person / all people"],
  [/\bdiscuss(ed|es|ing)? about\b/gi, "discuss sth (bez about)"],
  [/\bworth to\b/gi, "worth + -ing"],
  [/\bif (i|we|you|they|he|she|it|people) would\b/gi, "v if-větě ne would"],
  [/\bthe number of [a-z]+ (have|are|were)\b/gi, "the number of … HAS / IS"],
  [/\bon my opinion\b/gi, "IN my opinion"],
  [/\bpossibilit(y|ies) (how )?to\b/gi, "possibility of + -ing / way of + -ing"]
 ]
}
});
