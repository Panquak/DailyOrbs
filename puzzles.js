/* ============================================================
   DAILY ORBS — PUZZLE DATA
   ============================================================ */

const PUZZLES = {

  /* ==========================================================
     2026-02-10 — Triple Letters / Root / Dishes / Majors
     ========================================================== */
  '2026-02-10': [
    {
      key:'orange', color:'var(--orange)', name:'Triple Letters',
      desc:'Find the word whose letter appears three times.',
      type:'fill',
      thresholds:[3,6,9], total:10,
      instructions:'Each answer contains a letter that appears exactly three times. Type the word that fits each clue.',
      items:[
        {clue:'Nuclear wasteland survivor', answers:['cockroach']},
        {clue:'Ride catcher', answers:['hitchhiker']},
        {clue:'Bedtime soother', answers:['lullaby']},
        {clue:'Gun recoil', answers:['kickback']},
        {clue:'Opium flower', answers:['poppy']},
        {clue:'Underwater eyewear', answers:['goggles']},
        {clue:'Ancient elephant', answers:['mammoth']},
        {clue:'Bandage horror', answers:['mummy']},
        {clue:'Soapy sphere', answers:['bubble']},
        {clue:'Very young dog', answers:['puppy']},
      ]
    },
    {
      key:'green', color:'var(--green)', name:'Root Faction Vocabulary',
      desc:'Match each faction in Root to a word on its board.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Each faction in the board game Root has a distinctive word printed on its player board. Match the board word (top) to its faction (bottom).',
      connector:'-', leftLabel:'Board word', rightLabel:'Faction',
      leftBank:[
        {id:'h3', label:'Relationship'}, {id:'h10', label:'Crown'},
        {id:'h7', label:'Land'}, {id:'h1', label:'Hospital'},
        {id:'h8', label:'Anoint'}, {id:'h4', label:'Sale'},
        {id:'h2', label:'Martial'}, {id:'h9', label:'Resolve'},
        {id:'h5', label:'Lost'}, {id:'h6', label:'Exposure'},
      ],
      rightBank:[
        {id:'h7', label:'Badgers'}, {id:'h9', label:'Birds'},
        {id:'h1', label:'Cats'}, {id:'h10', label:'Moles'},
        {id:'h4', label:'Otters'}, {id:'h8', label:'Rats'},
        {id:'h2', label:'Woodland'}, {id:'h6', label:'Crows'},
        {id:'h5', label:'Lizards'}, {id:'h3', label:'Vagabond'},
      ]
    },
    {
      key:'blue', color:'var(--blue)', name:'National Dishes',
      desc:'Match each country to its national dish.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Tap a country, then tap the dish that belongs to it. Tap either again to deselect before it locks in.',
      connector:'=', leftLabel:'Country', rightLabel:'Dish', rightIsImage:true,
      leftBank:[
        {id:'italy', label:'Italy'}, {id:'vietnam', label:'Vietnam'},
        {id:'austria', label:'Austria'}, {id:'bosnia', label:'Bosnia'},
        {id:'thailand', label:'Thailand'}, {id:'spain', label:'Spain'},
        {id:'lebanon', label:'Lebanon'}, {id:'russia', label:'Russia'},
        {id:'uzbekistan', label:'Uzbekistan'}, {id:'slovakia', label:'Slovakia'},
      ],
      rightBank:[
        {id:'spain', img:'dish1.png'}, {id:'slovakia', img:'dish2.png'},
        {id:'bosnia', img:'dish3.png'}, {id:'russia', img:'dish4.png'},
        {id:'austria', img:'dish5.png'}, {id:'italy', img:'dish6.png'},
        {id:'uzbekistan', img:'dish7.png'}, {id:'vietnam', img:'dish8.png'},
        {id:'lebanon', img:'dish9.png'}, {id:'thailand', img:'dish10.png'},
      ]
    },
    {
      key:'purple', color:'var(--purple)', name:'UW-Madison Majors',
      desc:'Sort majors by the skew of their gender ratio.',
      type:'categorize',
      thresholds:[2,5,8], total:10,
      instructions:'Sort each UW-Madison major by how skewed its gender ratio is, in either direction. Wrong guesses lock the item out.',
      fields:[
        {key:'lt1_5', label:'&lt;1.5', emoji:'BAL'},
        {key:'mid', label:'2-4', emoji:'MID'},
        {key:'gt5', label:'&gt;5', emoji:'SKEW'},
      ],
      fieldTotals:{lt1_5:3, mid:3, gt5:4},
      items:[
        {name:'Nursing', field:'gt5'},
        {name:'Applied Math, Engineering and Physics', field:'gt5'},
        {name:'Physics PhD', field:'mid'},
        {name:'Chemistry BS', field:'lt1_5'},
        {name:'BME BS', field:'lt1_5'},
        {name:'Kinesiology BS', field:'mid'},
        {name:'Data Science BS', field:'mid'},
        {name:'Gender and Women\u2019s Studies Cert', field:'gt5'},
        {name:'Undecided', field:'lt1_5'},
        {name:'Human Development and Family Studies', field:'gt5'},
      ]
    },
  ],

  /* ==========================================================
     2026-02-15 — Silent Letters / Pen Names / Landmarks / Composers
     ========================================================== */
  '2026-02-15': [
    {
      key:'orange', color:'var(--orange)', name:'Silent Letters',
      desc:'Find the word hiding a silent letter.',
      type:'fill',
      thresholds:[3,6,9], total:10,
      instructions:'Each answer contains exactly one silent letter. Ten answers, ten different silent letters. Type the word that fits each clue.',
      items:[
        {clue:'Armored medieval warrior', answers:['knight']},
        {clue:'Tiny bearded garden statue', answers:['gnome']},
        {clue:'Money owed', answers:['debt']},
        {clue:'Joint between hand and forearm', answers:['wrist']},
        {clue:'Fortified medieval residence', answers:['castle']},
        {clue:'Song of praise in church', answers:['hymn']},
        {clue:'Sacred song of David', answers:['psalm']},
        {clue:'Contractile body tissue', answers:['muscle']},
        {clue:'Attractive, especially of a man', answers:['handsome']},
        {clue:'Pink-fleshed fish', answers:['salmon']},
      ]
    },
    {
      key:'green', color:'var(--green)', name:'Pen Names',
      desc:'Match each famous pen name to the author\u2019s real name.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Every pen name below belongs to a writer who used a different name on their birth certificate. Match the pen name (top) to the real name (bottom).',
      connector:'is really', leftLabel:'Pen name', rightLabel:'Real name',
      leftBank:[
        {id:'a1', label:'Mark Twain'}, {id:'a2', label:'George Orwell'},
        {id:'a3', label:'Lewis Carroll'}, {id:'a4', label:'Dr. Seuss'},
        {id:'a5', label:'Voltaire'}, {id:'a6', label:'Stendhal'},
        {id:'a7', label:'George Eliot'}, {id:'a8', label:'Stan Lee'},
        {id:'a9', label:'Lemony Snicket'}, {id:'a10', label:'Anne Rice'},
      ],
      rightBank:[
        {id:'a4', label:'Theodor Geisel'}, {id:'a7', label:'Mary Ann Evans'},
        {id:'a2', label:'Eric Blair'}, {id:'a9', label:'Daniel Handler'},
        {id:'a10', label:'Howard Allen O\u2019Brien'}, {id:'a1', label:'Samuel Clemens'},
        {id:'a5', label:'Fran\u00e7ois-Marie Arouet'}, {id:'a3', label:'Charles Dodgson'},
        {id:'a8', label:'Stanley Lieber'}, {id:'a6', label:'Marie-Henri Beyle'},
      ]
    },
    {
      key:'blue', color:'var(--blue)', name:'Famous Landmarks',
      desc:'Match each landmark to its photo.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Tap a landmark name, then tap the photo that shows it. Tap either again to deselect before it locks in.',
      connector:'=', leftLabel:'Landmark', rightLabel:'Photo', rightIsImage:true,
      leftBank:[
        {id:'taj', label:'Taj Mahal'}, {id:'colosseum', label:'Colosseum'},
        {id:'machu', label:'Machu Picchu'}, {id:'angkor', label:'Angkor Wat'},
        {id:'petra', label:'Petra'}, {id:'christ', label:'Christ the Redeemer'},
        {id:'greatwall', label:'Great Wall of China'}, {id:'stonehenge', label:'Stonehenge'},
        {id:'moai', label:'Moai (Easter Island)'}, {id:'chichen', label:'Chichen Itza'},
      ],
      rightBank:[
        {id:'taj', img:'landmark1.jpeg'}, {id:'colosseum', img:'landmark2.jpeg'},
        {id:'machu', img:'landmark3.jpeg'}, {id:'angkor', img:'landmark4.jpeg'},
        {id:'petra', img:'landmark5.jpeg'}, {id:'christ', img:'landmark6.jpeg'},
        {id:'greatwall', img:'landmark7.jpeg'}, {id:'stonehenge', img:'landmark8.jpeg'},
        {id:'moai', img:'landmark9.jpeg'}, {id:'chichen', img:'landmark10.jpeg'},
      ]
    },
    {
      key:'purple', color:'var(--purple)', name:'Composers by Era',
      desc:'Sort composers by their era.',
      type:'categorize',
      thresholds:[2,5,8], total:10,
      instructions:'Sort each composer by their historical era. Baroque: 1600\u20131750. Classical: 1750\u20131820. Romantic: 1820\u20131900. Wrong guesses lock the item out.',
      fields:[
        {key:'baroque', label:'Baroque', emoji:'B'},
        {key:'classical', label:'Classical', emoji:'C'},
        {key:'romantic', label:'Romantic', emoji:'R'},
      ],
      fieldTotals:{baroque:4, classical:3, romantic:3},
      items:[
        {name:'Johann Sebastian Bach', field:'baroque'},
        {name:'Wolfgang Amadeus Mozart', field:'classical'},
        {name:'Fr\u00e9d\u00e9ric Chopin', field:'romantic'},
        {name:'Antonio Vivaldi', field:'baroque'},
        {name:'Joseph Haydn', field:'classical'},
        {name:'Pyotr Ilyich Tchaikovsky', field:'romantic'},
        {name:'George Frideric Handel', field:'baroque'},
        {name:'Ludwig van Beethoven', field:'classical'},
        {name:'Johannes Brahms', field:'romantic'},
        {name:'Johann Pachelbel', field:'baroque'},
      ]
    },
  ],

  /* ==========================================================
     2026-02-20 — Same Consonants / Butterflies / Boy Names / Super Bowl
     ========================================================== */
  '2026-02-20': [
            {
      key:'orange', color:'var(--orange)', name:'Same Consonants',
      desc:'Find two words that share the same consonants.',
      type:'pair-fill',
      thresholds:[3,6,9], total:10,
      instructions:'Each pair of clues has two answers that share the same consonants.\n\nA consonant can appear more times in one word than the other, but every consonant in the pair appears at least once in each word.\n\nType just one of the two answers \u2014 either one will solve the pair.\n\nExample:\nQ1: thrilling amusement park ride\nQ2: dense group of something\n\nAnswers:\nrollercoaster\ncluster',
      items:[
        {clues:['specific way to say something','Dec-Jan zodiac sign'], answers:['pronounce','capricorn']},
        {clues:['biggest land mammal','Alexander Graham Bell'], answers:['elephant','telephone']},
        {clues:['plane, boat, and truck are forms of this','pieces of atom'], answers:['transport','protons']},
        {clues:['what every student in a strict school has','what kombucha needs to do before it\u2019s eaten'], answers:['uniform','ferment']},
        {clues:['big coin','rotational force'], answers:['quarter','torque']},
        {clues:['opposite of well known','person who copies documents by hand'], answers:['obscure','scribe']},
        {clues:['Right-wing','talking back and forth'], answers:['conservative','conversation']},
        {clues:['driver\u2019s licenses and passports are forms of this','adjective meaning certainty in your abilities'], answers:['identification','confident']},
        {clues:['a mistake','opposite of common'], answers:['error','rare']},
        {clues:['talking back and forth about opposite viewpoints','butt washing device'], answers:['debate','bidet']},
      ]
    },
    {
      key:'green', color:'var(--green)', name:'Butterflies',
      desc:'Match each butterfly to its photo.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Tap a butterfly name, then tap the photo that shows it. Tap either again to deselect before it locks in.',
      connector:'=', leftLabel:'Butterfly', rightLabel:'Photo', rightIsImage:true,
      leftBank:[
        {id:'b1', label:'Mourning cloak'},
        {id:'b2', label:'Banded owl-butterfly'},
        {id:'b3', label:'Balkan Marbled White'},
        {id:'b4', label:'Small Wood-nymph'},
        {id:'b5', label:'Three-banded Crescent'},
        {id:'b6', label:'American Snout Butterfly'},
        {id:'b7', label:'Illinissa Glasswing'},
        {id:'b8', label:'Tiger Longwing'},
        {id:'b9', label:'Widespread Eighty-eight'},
        {id:'b10', label:'Sara Longwing Butterfly'},
      ],
      rightBank:[
        {id:'b7',  img:'Butterfly7.png'},
        {id:'b2',  img:'Butterfly2.png'},
        {id:'b9',  img:'Butterfly9.png'},
        {id:'b4',  img:'Butterfly4.png'},
        {id:'b1',  img:'Butterfly1.png'},
        {id:'b10', img:'Butterfly10.png'},
        {id:'b6',  img:'Butterfly6.png'},
        {id:'b3',  img:'Butterfly3.png'},
        {id:'b8',  img:'Butterfly8.png'},
        {id:'b5',  img:'Butterfly5.png'},
      ]
    },
    {
      key:'blue', color:'var(--blue)', name:'Top Boy Names, 2003',
      desc:'Match each country to its top three boy names.',
      type:'cross-match',
      thresholds:[3,6,9], total:10,
      instructions:'Tap a country, then tap the group of three names that were most popular there in 2003. Order within each group is by rank. Tap either again to deselect.',
      connector:'\u2192', leftLabel:'Country', rightLabel:'Top 3 names',
      leftBank:[
        {id:'us',  label:'United States'},
        {id:'ar',  label:'Argentina'},
        {id:'br',  label:'Brazil'},
        {id:'tr',  label:'Turkey'},
        {id:'in',  label:'India'},
        {id:'au',  label:'Australia'},
        {id:'de',  label:'Germany'},
        {id:'ie',  label:'Ireland'},
        {id:'fr',  label:'France'},
        {id:'pl',  label:'Poland'},
      ],
      rightBank:[
        {id:'br', label:'Jo\u00e3o \u00b7 Gabriel \u00b7 Pedro'},
        {id:'au', label:'Jack \u00b7 Lachlan \u00b7 William'},
        {id:'us', label:'Jacob \u00b7 Michael \u00b7 Joshua'},
        {id:'in', label:'Karna \u00b7 Surya \u00b7 Rama'},
        {id:'de', label:'Alexander \u00b7 Maximillian \u00b7 Leon'},
        {id:'pl', label:'Jan \u00b7 Andrzej \u00b7 Piotr'},
        {id:'ar', label:'Juan \u00b7 Carlos \u00b7 Jorge'},
        {id:'ie', label:'Sean \u00b7 Jack \u00b7 Conor'},
        {id:'tr', label:'Mehmet \u00b7 Yusuf \u00b7 Furkan'},
        {id:'fr', label:'Lucas \u00b7 Th\u00e9o \u00b7 Thomas'},
      ]
    },
    {
      key:'purple', color:'var(--purple)', name:'Super Bowl Winners',
      desc:'Name every NFL franchise that has won a Super Bowl.',
      type:'list-fill',
      thresholds:[4,10,18], total:20,
      instructions:'Type any NFL team that has won a Super Bowl. Each franchise that has never won costs you a life. 3 wrong guesses ends the puzzle.',
      items:[
        {name:'Cowboys',    hint:'NFC East',  aliases:['dallas cowboys','dallas']},
        {name:'Steelers',   hint:'AFC North', aliases:['pittsburgh steelers','pittsburgh']},
        {name:'Patriots',   hint:'AFC East',  aliases:['new england patriots','new england','pats']},
        {name:'49ers',      hint:'NFC West',  aliases:['san francisco 49ers','san francisco','niners','forty niners']},
        {name:'Packers',    hint:'NFC North', aliases:['green bay packers','green bay']},
        {name:'Giants',     hint:'NFC East',  aliases:['new york giants','ny giants']},
        {name:'Chiefs',     hint:'AFC West',  aliases:['kansas city chiefs','kansas city','kc']},
        {name:'Broncos',    hint:'AFC West',  aliases:['denver broncos','denver']},
        {name:'Raiders',    hint:'AFC West',  aliases:['las vegas raiders','las vegas','oakland raiders','oakland','vegas']},
        {name:'Commanders', hint:'NFC East',  aliases:['washington commanders','washington','redskins','washington redskins']},
        {name:'Dolphins',   hint:'AFC East',  aliases:['miami dolphins','miami']},
        {name:'Colts',      hint:'AFC South', aliases:['indianapolis colts','indianapolis','indy']},
        {name:'Buccaneers', hint:'NFC South', aliases:['tampa bay buccaneers','tampa bay','tampa','bucs']},
        {name:'Eagles',     hint:'NFC East',  aliases:['philadelphia eagles','philadelphia','philly']},
        {name:'Rams',       hint:'NFC West',  aliases:['los angeles rams','la rams','los angeles','st louis rams','st louis']},
        {name:'Bears',      hint:'NFC North', aliases:['chicago bears','chicago']},
        {name:'Saints',     hint:'NFC South', aliases:['new orleans saints','new orleans']},
        {name:'Seahawks',   hint:'NFC West',  aliases:['seattle seahawks','seattle']},
        {name:'Ravens',     hint:'AFC North', aliases:['baltimore ravens','baltimore']},
        {name:'Jets',       hint:'AFC East',  aliases:['new york jets','ny jets']},
      ]
    },
  ],

};