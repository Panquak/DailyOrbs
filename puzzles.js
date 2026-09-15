/* ============================================================
   DAILY ORBS — PUZZLE DATA
   ============================================================
   To add a new puzzle:
     1. Copy an existing block and change the date key (YYYY-MM-DD).
     2. Replace the four category objects.
     3. Categories must appear in order: orange, green, blue, purple.
     4. Save and refresh.

   Image categories read files from IMG_BASE (defined in index.html).
   ============================================================ */

const PUZZLES = {

  /* ==========================================================
     2026-02-10 — Original puzzle
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
        {id:'spain', img:'dish1.png'},
        {id:'slovakia', img:'dish2.png'},
        {id:'bosnia', img:'dish3.png'},
        {id:'russia', img:'dish4.png'},
        {id:'austria', img:'dish5.png'},
        {id:'italy', img:'dish6.png'},
        {id:'uzbekistan', img:'dish7.png'},
        {id:'vietnam', img:'dish8.png'},
        {id:'lebanon', img:'dish9.png'},
        {id:'thailand', img:'dish10.png'},
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
        {id:'a1', label:'Mark Twain'},
        {id:'a2', label:'George Orwell'},
        {id:'a3', label:'Lewis Carroll'},
        {id:'a4', label:'Dr. Seuss'},
        {id:'a5', label:'Voltaire'},
        {id:'a6', label:'Stendhal'},
        {id:'a7', label:'George Eliot'},
        {id:'a8', label:'Stan Lee'},
        {id:'a9', label:'Lemony Snicket'},
        {id:'a10', label:'Anne Rice'},
      ],
      rightBank:[
        {id:'a4', label:'Theodor Geisel'},
        {id:'a7', label:'Mary Ann Evans'},
        {id:'a2', label:'Eric Blair'},
        {id:'a9', label:'Daniel Handler'},
        {id:'a10', label:'Howard Allen O\u2019Brien'},
        {id:'a1', label:'Samuel Clemens'},
        {id:'a5', label:'Fran\u00e7ois-Marie Arouet'},
        {id:'a3', label:'Charles Dodgson'},
        {id:'a8', label:'Stanley Lieber'},
        {id:'a6', label:'Marie-Henri Beyle'},
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
        {id:'taj', label:'Taj Mahal'},
        {id:'colosseum', label:'Colosseum'},
        {id:'machu', label:'Machu Picchu'},
        {id:'angkor', label:'Angkor Wat'},
        {id:'petra', label:'Petra'},
        {id:'christ', label:'Christ the Redeemer'},
        {id:'greatwall', label:'Great Wall of China'},
        {id:'stonehenge', label:'Stonehenge'},
        {id:'moai', label:'Moai (Easter Island)'},
        {id:'chichen', label:'Chichen Itza'},
      ],
      rightBank:[
        {id:'taj', img:'landmark1.png'},
        {id:'colosseum', img:'landmark2.png'},
        {id:'machu', img:'landmark3.png'},
        {id:'angkor', img:'landmark4.png'},
        {id:'petra', img:'landmark5.png'},
        {id:'christ', img:'landmark6.png'},
        {id:'greatwall', img:'landmark7.png'},
        {id:'stonehenge', img:'landmark8.png'},
        {id:'moai', img:'landmark9.png'},
        {id:'chichen', img:'landmark10.png'},
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

};