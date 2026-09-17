// township.js
// Placeholder for the Township location.
// Replace this render() function with the real page content and
// activity logic once it's built out, using the original
// scripts/township/*.pl files as a spec for expected behavior.

const WONDERS = {
  zeus: {
    title: "Statue of Zeus",
    mapImg: "mapgr.jpg",
    mapLabel: "Map of Greece",
    flagImg: "flaggr.gif",
    flagLabel: "Flag of Greece",
    sideImgs: [
      { img: "greece4.gif", label: "Parthenon" },
      { img: "greece7.gif", label: "Statue of Aphrodite" },
    ],
    intro: `The statue of Zeus was built in honor of the god who the Ancient Olympic games were held for. It was located in the ancient town that gave its name to the Olympics, the ancient town of Olympia in Greece. The ancient Greek calendar starts in 776 BCE. The Olympic games are believed to have started that year. The temple of Zeus in Olympia was designed by the architect Libon and was built around 420 BCE. The statue was placed inside the temple about 15 to 20 years later when its creator, Pheidias, finished sculpting it. The statue represents the god of the ancient world, Zeus, sitting and holding a staff made from ivory and gold. The whole statue was made from gold, and it was as tall as a modern four-story building. During the Olympic games, even wars stopped, allowing athletes from Syria, Egypt, and Sicily to celebrate the Olympics and to worship their king of gods: Zeus.`,
    q1: {
      prompt: "The statue of Zeus was built around the year",
      options: [
        { label: "500 CE", value: "500 CE" },
        { label: "300 BCE", value: "300 BCE" },
        { label: "420 BCE", value: "420 BC" },
      ],
      correctValue: "420 BC",
    },
    q2: { prompt: "Does the statue still exist?", labels: ["Yes", "No"], correct: "off" },
    q3: {
      prompt: "In which town was the statue located? (Construct the word)",
      letters: [
        ["M", "N", "O", "P", "Q", "R", "S"],
        ["K", "L", "M", "N", "O", "P", "Q"],
        ["U", "V", "W", "X", "Y", "Z"],
        ["K", "L", "M", "N", "O", "P"],
        ["K", "L", "M", "N", "O", "P", "Q"],
        ["F", "G", "H", "I", "J", "K", "L"],
        ["A", "B", "C", "D", "E", "F", "G"],
      ],
      answer: "OLYMPIA",
    },
    images: ["zeus3.jpg", "zeus2.jpg", "zeus1.jpg", "zeus.jpg"],
    resultText: `Greece is one of the countries with great history and mythology. Besides Zeus, other gods such as Poseidon, Aphrodite and Apollo, were the center of the attention of the ancient world.`,
  },
  pyramid: {
    title: "Great Pyramids of Giza",
    mapImg: "mapeg.jpg",
    mapLabel: "Map of Egypt",
    flagImg: "flageg.gif",
    flagLabel: "Flag of Egypt",
    sideImgs: [
      { img: "egypt6.gif", label: "Statue of a Pharaoh" },
      { img: "desert.jpg", label: "River Nile" },
    ],
    intro: `We have just arrived in Egypt. In this wonderful country on the west side of the river Nile, we find the oldest and one of the biggest monuments of the world: The Great Pyramid of Giza. This Pyramid was designed by the Egyptian Pharaoh (King) Khufu around the year 2560 BCE to be his tomb when he died. The Great Pyramid is believed to have been built over a 20-year period. When it was finished, it was 145.75 meters or 481 feet high. The structure consists of approximately two million blocks of stone each weighing more than two tons. The inside of the Great Pyramid has galleries, corridors and escape shafts that all lead to the center of the pyramid where the sarcophagus (the Pharaoh's tomb) is located. The Pharaoh was placed there when he died with a lot of gold, precious stones and other valuable things, that he could take with him on his mystic journey to the afterlife.`,
    q1: {
      prompt: "The Great Pyramid of Giza was built around the year",
      options: [
        { label: "500 CE", value: "500 CE" },
        { label: "2560 BCE", value: "2560 BCE" },
        { label: "5080 BCE", value: "5080 BCE" },
      ],
      correctValue: "2560 BCE",
    },
    q2: { prompt: "Were there any corridors, galleries, or escape shafts in the pyramid?", labels: ["Yes", "No"], correct: "on" },
    q3: {
      prompt: "An ancient building that Egyptians used as a tomb for their Pharaohs: (Construct the word)",
      letters: [
        ["M", "N", "O", "P", "Q", "R"],
        ["U", "V", "W", "X", "Y", "Z"],
        ["O", "P", "Q", "R", "S", "T"],
        ["A", "B", "C", "D", "E", "F"],
        ["K", "L", "M", "N", "O", "P"],
        ["F", "G", "H", "I", "J", "K"],
        ["A", "B", "C", "D", "E", "F"],
      ],
      answer: "PYRAMID",
    },
    images: ["pyramid4.jpg", "pyramid3.jpg", "pyramid2.jpg", "pyramid1.jpg"],
    resultText: `Egypt has many pyramids besides the one of Giza. It also has the great Sphinx, a beautiful structure of one of the gods of ancient Egypt, which still exists after thousands of years.`,
  },
  wall: {
    title: "Great Wall of China",
    mapImg: "mapch.jpg",
    mapLabel: "Map of China",
    flagImg: "flagch.gif",
    flagLabel: "Flag of China",
    sideImgs: [
      { img: "china3.gif", label: "Chinese Painting" },
      { img: "china8.gif", label: "Tiananmen Square" },
    ],
    intro: `The Great Wall of China is the longest structure ever built. It is about 4,000 miles long. Remarkably, it was all built by hand. Most of the wall was built with bricks and stones. Some of the tallest parts of the Great Wall, near the capital city of Beijing, rise to 35 feet. These sections are about 25 feet wide at the base and 20 feet wide at the top. Watch towers stand 100 to 200 feet apart along the wall. Historically, the wall was built during the time of the Ming dynasty, which ruled China from 1368-1644. Its main purpose was to protect China from the invaders of the north, who mostly came from Mongolia. Even after hundreds of years, the Great Wall still stands.`,
    q1: {
      prompt: "What dynasty ruled China during the time that the Great Wall was built?",
      options: [
        { label: "Ming", value: "Ming" },
        { label: "Hang", value: "Hang" },
        { label: "Khan", value: "Khan" },
      ],
      correctValue: "Ming",
    },
    q2: { prompt: "The Great Wall was built to protect China from invaders.", labels: ["TRUE", "FALSE"], correct: "on" },
    q3: {
      prompt: "Most of the Great Wall is built with stones and ________. (Construct the word)",
      letters: [
        ["A", "B", "C", "D", "E", "F"],
        ["M", "N", "O", "P", "Q", "R"],
        ["F", "G", "H", "I", "J", "K"],
        ["A", "B", "C", "D", "E", "F"],
        ["F", "G", "H", "I", "J", "K"],
        ["O", "P", "Q", "R", "S", "T"],
      ],
      answer: "BRICKS",
    },
    images: ["answer0.jpg", "answer1.jpg", "answer2.jpg", "answer3.jpg"],
    resultText: `In addition to the Great Wall, China has many other interesting places to visit. Places such as the mountains of Tibet, The Forbidden City, as well as the Temple of Heaven. The Great Wall awaits your arrival.`,
  },
  taj: {
    title: "Taj Mahal",
    mapImg: "india1.gif",
    mapLabel: "Map of India",
    flagImg: "indflag.jpg",
    flagLabel: "Flag of India",
    sideImgs: [
      { img: "india3.gif", label: "River Ganges" },
      { img: "india4.gif", label: "Hindu Temple" },
    ],
    intro: `The Taj Mahal is considered to be one of the wonders of the world. The Taj Mahal was built by the Mughal Emperor "Shah Jahan" in memory of his beloved "Mumtaz Mahal". It took 20,000 craftsmen working around the clock for 22 years to complete it. It is truly one man's monumental testimony of love. The Taj Mahal has become a landmark not only for the city of Agra, but for the entire country of India.`,
    q1: {
      prompt: "The Taj Mahal is located in:",
      options: [
        { label: "China", value: "China" },
        { label: "India", value: "India" },
        { label: "Tibet", value: "Tibet" },
      ],
      correctValue: "India",
    },
    q2: { prompt: "The Taj Mahal was built by 20,000 craftsmen.", labels: ["TRUE", "FALSE"], correct: "on" },
    q3: {
      prompt: "The Taj Mahal was a work of ____! (Construct the word)",
      letters: [
        ["F", "G", "H", "I", "J", "K", "L"],
        ["M", "N", "O", "P", "Q", "R"],
        ["R", "S", "T", "U", "V", "W"],
        ["A", "B", "C", "D", "E", "F"],
      ],
      answer: "LOVE",
    },
    images: ["taj14.jpg", "taj12.jpg", "taj34.jpg", "taj1.jpg"],
    resultText: `India is one of the largest countries in the world with a population of over 500 million people. The history of India is over two thousand years old.`,
  },
};

const COUNTRY_FACTS = {
  france: {
    name: "France",
    images: ["francmap.gif"],
    intro: "This is what France looks like:",
    facts: [
      `Among France's kings were Louis II the Stammerer, Charles III the Simple, and Louis VI the Fat.`,
      `France is part of Europe. The capital of France is Paris. Other important cities are Marseille, Lyon, Toulouse, and Nice.`,
      `France's cuisine is considered to be one of the greatest in the world. Well-known French dishes include coq au vin (chicken in wine), escargot (snails), and vichyssoise (cold potato soup).`,
    ],
  },
  australia: {
    name: "Australia",
    images: ["match_co.gif", "Austcntx.gif"],
    intro: "The country is indeed Australia! This is where Australia is located in the world:",
    facts: [
      `Australia is about the same size as the United States, but has much less usable land because the interior is mostly desert.`,
      `The capital of Australia is Canberra. Other major cities include Sydney, Melbourne, Adelaide, Perth, and Brisbane.`,
      `The original inhabitants are called Aborigines. The English settled the continent in 1788 to start a prison colony.`,
      `Australia has more sheep than any other country.`,
    ],
  },
  japan: {
    name: "Japan",
    images: ["japanmap.gif"],
    intro: "This is what Japan looks like:",
    facts: [
      `Japan is an island country off the coast of mainland Asia. Its four main islands are Honshu, Hokkaido, Kyushu, and Shikoku.`,
      `Around one-fourth to one-third of all documents published in Japan are manga, or comic books.`,
      `The capital of Japan is Tokyo. Other major cities are Yokohama, Osaka, Nagoya, and Sapporo.`,
    ],
  },
  finland: {
    name: "Finland",
    images: ["match2.gif", "Fincontx.gif"],
    intro: "The country is indeed Finland! This is where Finland is located in Europe:",
    facts: [
      `The capital of Finland is Helsinki. Other major cities include Espoo, Tampere, Vantaa, and Turku.`,
      `One of the most famous Finnish foods is lutefisk, which is made by soaking fish in lye. Finns also drink more coffee than any other people in the world.`,
      `There are about 60,000 lakes in Finland. Many were created when glaciers gouged them out.`,
      `Sauna baths are a central part of Finnish life.`,
    ],
  },
  egypt: {
    name: "Egypt",
    images: ["Egypt.gif"],
    intro: "This is what Egypt looks like:",
    facts: [
      `Egypt is in North Africa. The capital of Egypt is Cairo. Other important cities are Alexandria, Luxor, and Aswan.`,
      `Egypt's national dish is fool, which is made from beans.`,
      `The first Arabic-language writer to win the Nobel Prize for Literature was the Egyptian Naguib Mahfouz.`,
    ],
  },
  jamaica: {
    name: "Jamaica",
    images: ["Jamaica.gif"],
    intro: "This is what Jamaica looks like:",
    facts: [
      `The capital of Jamaica is Kingston.`,
      `Reggae music was invented in Jamaica. The best-known reggae musician was Bob Marley.`,
      `Jamaica is a popular island resort in the Caribbean Sea. It is part of the West Indies.`,
    ],
  },
  gabon: {
    name: "Gabon",
    images: ["Gabon.gif"],
    intro: "This is what Gabon looks like:",
    facts: [
      `Gabon is in Africa. The capital of Gabon is Libreville. Libreville, which means "Free Town," was founded as a settlement for slaves freed from illegal slaving ships. Other cities include Port-Gentil and Franceville.`,
      `Gabon has the world's largest deposits of manganese.`,
      `The largest tribe in Gabon is the Fangs. Fang masks, which are heart-shaped, influenced the famous European artist Pablo Picasso.`,
    ],
  },
  ukraine: {
    name: "Ukraine",
    images: ["Ukraine.gif"],
    intro: "This is what Ukraine looks like:",
    facts: [
      `Ukraine was part of the former Soviet Union and is now part of the Commonwealth of Independent States. The capital of Ukraine is Kiev. Other cities include Kharkiv, Donetske, Odessa, and Lviv.`,
      `The worst nuclear accident known to the world occurred in Kiev in 1986 at the Chernobyl nuclear power plant.`,
      `Olympic gold-medalist figure skaters Oksana Baiul and Viktor Petrenko are both Ukrainian.`,
    ],
  },
  saudi: {
    name: "Saudi Arabia",
    images: ["match3.gif", "Saudicon.gif", "midecon.gif"],
    intro: "The country is indeed Saudi Arabia! This is where Saudi Arabia is located in the Middle East:",
    facts: [
      `The capital of Saudi Arabia is Riyadh. Other important cities are Jeddah and Mecca.`,
      `Saudi Arabia contains the two holiest places of the religion of Islam: Mecca, the birthplace of the prophet Muhammad, and Medina, where Muhammad went in 622.`,
      `In the south of Saudi Arabia is the Rub'al Khali, the "Empty Quarter," one of the world's largest deserts.`,
      `Saudi Arabia is almost entirely the creation of one man, King Ibn Saud.`,
    ],
  },
  thailand: {
    name: "Thailand",
    images: ["thailand.gif"],
    intro: "This is what Thailand looks like:",
    facts: [
      `Thailand is in Asia. The capital of Thailand is Bangkok. Other important cities are Nonthanburi and Chiang Mai.`,
      `Thailand is the only Southeast Asian country that was never ruled by a European power.`,
      `Thailand used to be called Siam. The name was changed in 1949.`,
    ],
  },
  spain: {
    name: "Spain",
    images: ["Spain.gif"],
    intro: "This is what Spain looks like:",
    facts: [
      `Spain is in Europe. The capital of Spain is Madrid. Other important cities are Barcelona, Valencia, and Seville.`,
      `Famous Spanish foods include gazpacho, a cold vegetable soup; flan, a baked caramel custard; and arroz con pollo, chicken with rice.`,
      `Flamenco music and flamenco dancing were created in Spain by gypsies.`,
    ],
  },
  venezuela: {
    name: "Venezuela",
    images: ["Match4.gif", "Venezcon.gif"],
    intro: "The country is indeed Venezuela! This is where Venezuela is located in South America:",
    facts: [
      `The capital of Venezuela is Caracas. Other important cities are Maracaibo, Valencia, and Barquisimento.`,
      `Venezuela is the third biggest supplier of oil in the world.`,
      `Animals that can be found in Venezuela are jaguars, monkeys, sloths, ocelots, bears, armadillos, flamingos, herons, guacharos (oilbirds), crocodiles, large snakes (anacondas and boas), and tarantulas (big hairy spiders).`,
      `Venezuela means "Little Venice." Spanish explorers gave it that name because they saw houses on stilts along the coast.`,
    ],
  },
  antarctica: {
    name: "Antarctica",
    images: ["Antarc.gif"],
    intro: "This is what Antarctica looks like:",
    facts: [
      `Antarctica is not really a country. It is an uninhabited continent at the bottom of the world, covered with ice. Different countries have claimed parts of it because it has large mineral deposits.`,
      `Because Antarctica is so cold and people cannot raise food, it has no permanent human settlements. However, there are several research bases.`,
      `If the Antarctic ice sheet melted, the sea would rise at least 60 meters!`,
      `Antarctica is the coldest, windiest, highest, and driest continent on Earth.`,
    ],
  },
  madagascar: {
    name: "Madagascar",
    images: ["Madagas.gif"],
    intro: "This is what Madagascar looks like:",
    facts: [
      `Madagascar is the world's fourth largest island. It lies off the coast of Africa. The capital is Antananarivo.`,
      `90 percent of the animals and plants on Madagascar &mdash; more than 150,000 species &mdash; are not found anywhere else on Earth.`,
      `Although Madagascar is part of Africa, many of the ancestors of the inhabitants came from Southeast Asia.`,
    ],
  },
  china: {
    name: "China",
    images: ["match5.gif", "Chinacon.gif"],
    intro: "The country is indeed China! This is where China is located in Asia:",
    facts: [
      `The capital of China is Beijing. Other important cities are Chongqing, Shanghai, Tianjin, Canton, Wuhan, Shenyang, Nanjing, and Harbin.`,
      `Many basic inventions came out of China, including gunpowder, paper, kites, and silk.`,
      `Chinese is the language most spoken in the world.`,
      `Chop suey is commonly found in Chinese restaurants, but it wasn't created in China. It was invented by a Chinese cook in America.`,
    ],
  },
  mexico: {
    name: "Mexico",
    images: ["match6.gif", "Mexicont.gif"],
    intro: "The country is indeed Mexico! This is where Mexico is located in North America:",
    facts: [
      `The capital of Mexico is Mexico City. Other important cities are Guadalajara, Ecatepic, Nezahualcoyotl, and Puebla.`,
      `Several of the world's most famous resorts, such as Acapulco and Cancun, are in Mexico. In fact, in 1996, Mexico was the seventh most visited country by tourists.`,
      `Humans first learned to grow corn in Mexico. They may have learned to do this as early as 4500 BCE.`,
      `Mexico was the center of one of the great ancient civilizations, the Olmec. Although the Olmecs did not have draft animals, wheels, or iron tools, they still created huge sculptures, temples, and complex systems for managing water.`,
      `An ancient city in Mexico, Teotihuacan, was the largest city in the Americas for many centuries. It influenced the culture of the surrounding lands much as New York City, London, Paris, or Tokyo do today.`,
    ],
  },
  laos: {
    name: "Laos",
    images: ["Laos.gif"],
    intro: "This is what Laos looks like:",
    facts: [
      `Laos is in Asia. The capital of Laos is Vientiane. Other cities include Sam Neua, Thakhek, and Vang Vieng.`,
      `Laos is completely surrounded by other countries; it has no connection to the sea. However, its most valuable export is electricity generated by hydroelectric power stations on the River Mekong.`,
      `Once part of Indochina (a group of Southeast Asia countries run by France), Laos has been independent since 1950.`,
      `Laos has no railroads and only very basic roads.`,
    ],
  },
  turkey: {
    name: "Turkey",
    images: ["turkey.gif"],
    intro: "This is what Turkey looks like:",
    facts: [
      `Turkey is part of two continents: Europe and Asia (where it is known as Asia Minor or Anatolia). The capital of Turkey is Ankara. Other cities include Istanbul, Izmir, Bursa, and Gaziantep.`,
      `Istanbul is a very important historical city. It was first known as Byzantium but later became Constantinople when the Roman Empire moved its capital there in the year 330. The Romans named the city after their Emperor Constantine. The name "Istanbul" came from the Ottoman Turks, who conquered the city in 1435.`,
      `The highest mountain in Turkey is Mount Ararat, which is supposed to have been where Noah's Ark came to rest after the flood.`,
    ],
  },
};

const MATCH_ROUNDS = [
  {
    shapeImg: "match_co.gif",
    clues: [
      `This country is also known as "The Land Down Under."`,
      `Koalas and tasmanian devils live here.`,
      `This country takes up an entire continent.`,
    ],
    choices: [
      { key: "france", label: "France", correct: false },
      { key: "australia", label: "Australia", correct: true },
      { key: "japan", label: "Japan", correct: false },
    ],
  },
  {
    shapeImg: "match2.gif",
    clues: [`This country is in Europe.`, `Part of this country is in the Arctic Circle.`, `This country was invaded by the USSR in 1939.`],
    choices: [
      { key: "finland", label: "Finland", correct: true },
      { key: "egypt", label: "Egypt", correct: false },
      { key: "jamaica", label: "Jamaica", correct: false },
    ],
  },
  {
    shapeImg: "match3.gif",
    clues: [`This country is part of the Middle East.`, `Most of the people in this country are Islamic.`, `About 25% of the world's oil reserves are in this country.`],
    choices: [
      { key: "gabon", label: "Gabon", correct: false },
      { key: "ukraine", label: "Ukraine", correct: false },
      { key: "saudi", label: "Saudi Arabia", correct: true },
    ],
  },
  {
    shapeImg: "Match4.gif",
    clues: [`This is a South American country.`, `The world's highest waterfalls, Angel Falls, are in this country.`, `The official language is Spanish.`],
    choices: [
      { key: "thailand", label: "Thailand", correct: false },
      { key: "spain", label: "Spain", correct: false },
      { key: "venezuela", label: "Venezuela", correct: true },
    ],
  },
  {
    shapeImg: "match5.gif",
    clues: [`This country is in Asia.`, `More than 1 billion people live here.`, `One of the oldest civilizations in the world exists here.`],
    choices: [
      { key: "antarctica", label: "Antarctica", correct: false },
      { key: "madagascar", label: "Madagascar", correct: false },
      { key: "china", label: "China", correct: true },
    ],
  },
  {
    shapeImg: "match6.gif",
    clues: [`This country is part of North America.`, `This is the world's largest Spanish-speaking country.`, `Mayans, Aztecs, Toltecs, and Olmecs used to live here.`],
    choices: [
      { key: "mexico", label: "Mexico", correct: true },
      { key: "laos", label: "Laos", correct: false },
      { key: "turkey", label: "Turkey", correct: false },
    ],
  },
];

function townshipHome(container) {
  container.innerHTML = `
    <section class="location township-page">
      <h1>Welcome Aboard the TownShip</h1>
      <img class="township-banner" src="graphics/township/TownShip.gif" alt="TownShip">
      <h2>Sail to One of These Wonders of the World</h2>
      <p class="township-menu">
        <a href="#township/wonders/zeus">Statue of Zeus</a><br>
        <a href="#township/wonders/pyramid">Pyramids of Giza</a><br>
        <a href="#township/wonders/wall">Great Wall of China</a><br>
        <a href="#township/wonders/taj">Taj Mahal</a>
      </p>
      <h2>Identify Countries By Their Outlines</h2>
      <p class="township-menu"><a href="#township/countries">Country Shape Game</a></p>
    </section>`;
}

function wonderQuizHtml(w) {
  const q1Options = w.q1.options.map((o) => `<option value="${o.value}">${o.label}</option>`).join("");
  const letterSelects = w.q3.letters
    .map(
      (opts, i) =>
        `<select class="wq3" data-idx="${i}"><option value=""></option>${opts.map((l) => `<option value="${l}">${l}</option>`).join("")}</select>`
    )
    .join(" ");
  return `
    <h2>Game of Questions</h2>
    <div class="wonder-quiz">
      <div class="wonder-q">
        <p><b>${w.q1.prompt}</b></p>
        <select class="wq1"><option value="">Select One</option>${q1Options}</select>
      </div>
      <div class="wonder-q">
        <p><b>${w.q2.prompt}</b></p>
        <label><input type="radio" name="wq2" value="on"> ${w.q2.labels[0]}</label>
        <label><input type="radio" name="wq2" value="off"> ${w.q2.labels[1]}</label>
      </div>
      <div class="wonder-q wonder-q-spell">
        <p><b>${w.q3.prompt}</b></p>
        <div class="wonder-letters">${letterSelects}</div>
      </div>
      <p class="wonder-submit"><button type="button" class="wonder-solve">Click Here to Solve the Puzzle</button></p>
      <div class="wonder-result"></div>
    </div>`;
}

function townshipWonder(container, key) {
  const w = WONDERS[key];
  if (!w) return townshipHome(container);
  container.innerHTML = `
    <section class="location township-page wonder-page">
      <h1>${w.title}</h1>
      <div class="wonder-header">
        <figure><img src="graphics/township/${w.mapImg}" alt="${w.mapLabel}"><figcaption>${w.mapLabel}</figcaption></figure>
        <figure><img src="graphics/township/${w.flagImg}" alt="${w.flagLabel}"><figcaption>${w.flagLabel}</figcaption></figure>
      </div>
      <div class="wonder-body">
        ${w.sideImgs.map((s) => `<figure><img src="graphics/township/${s.img}" alt="${s.label}"><figcaption>${s.label}</figcaption></figure>`).join("")}
        <p>${w.intro}</p>
      </div>
      ${wonderQuizHtml(w)}
      <p class="township-links"><a href="#township">Back to the TownShip</a></p>
    </section>`;

  container.querySelector(".wonder-solve").addEventListener("click", () => {
    const q1val = container.querySelector(".wq1").value;
    const q2el = container.querySelector('input[name="wq2"]:checked');
    const q2val = q2el ? q2el.value : "";
    const q3val = Array.from(container.querySelectorAll(".wq3"))
      .map((s) => s.value)
      .join("");

    let score = 0;
    if (q1val === w.q1.correctValue) score++;
    if (q2val === w.q2.correct) score++;
    if (q3val === w.q3.answer) score++;

    const resultDiv = container.querySelector(".wonder-result");
    const img = w.images[score];
    if (score === 3) {
      resultDiv.innerHTML = `
        <div class="wonder-result-box wonder-result-good">
          <h3>Good Job</h3>
          <p>You answered all 3 questions correctly. This view of the ${w.title} is your prize.</p>
          <img src="graphics/township/${img}" alt="${w.title}">
          <p>${w.resultText}</p>
          <p class="township-links"><a href="#township">Main Page</a></p>
        </div>`;
    } else {
      resultDiv.innerHTML = `
        <div class="wonder-result-box">
          <h3>Almost There...</h3>
          <p>Nice try, but you missed ${3 - score} question(s). With your effort, you have earned this glimpse of the ${w.title}.</p>
          <img src="graphics/township/${img}" alt="${w.title}">
          <p class="township-links"><a href="#township/wonders/${key}">Try Again</a> &middot; <a href="#township">Main Page</a></p>
        </div>`;
    }
    resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function townshipCountriesIntro(container) {
  container.innerHTML = `
    <section class="location township-page match-page">
      <h1>Country Shape Matching Game</h1>
      <p>Welcome! The object of this game is to identify a country just from its shape. You can look in an atlas or on a globe to help you. If you're stumped, you can look at three clues that will help you narrow down your choices.</p>
      <p>Even wrong answers have interesting things to tell you, so try all the countries!</p>
      <p class="township-menu"><a href="#township/countries/1">Start the Game!</a></p>
      <p class="township-links"><a href="#township">Back to the TownShip</a></p>
    </section>`;
}

function townshipRound(container, n) {
  const round = MATCH_ROUNDS[n - 1];
  if (!round) return townshipHome(container);
  container.innerHTML = `
    <section class="location township-page match-page">
      <h1>What Country Is This?</h1>
      <div class="match-layout">
        <div class="match-clues">
          ${round.clues
            .map(
              (c, i) =>
                `<button type="button" class="match-clue-btn" data-idx="${i}">Clue ${i + 1}</button><p class="match-clue-text" data-idx="${i}" hidden>${c}</p>`
            )
            .join("")}
        </div>
        <img class="match-shape" src="graphics/township/${round.shapeImg}" alt="Country shape">
        <div class="match-choices">
          ${round.choices.map((c, i) => `<a href="#township/countries/${n}/answer/${c.key}">${String.fromCharCode(65 + i)}. ${c.label}</a>`).join("<br>")}
        </div>
      </div>
      ${n < MATCH_ROUNDS.length ? `<p class="township-links"><a href="#township/countries/${n + 1}">I've already done this set of countries. Skip to the next one!</a></p>` : ""}
      <p class="township-links"><a href="#township">Back to the TownShip</a></p>
    </section>`;

  container.querySelectorAll(".match-clue-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.idx;
      btn.hidden = true;
      container.querySelector(`.match-clue-text[data-idx="${idx}"]`).hidden = false;
    });
  });
}

function townshipCountryAnswer(container, n, key) {
  const round = MATCH_ROUNDS[n - 1];
  const choice = round && round.choices.find((c) => c.key === key);
  const facts = COUNTRY_FACTS[key];
  if (!round || !choice || !facts) return townshipHome(container);
  const isFinal = n === MATCH_ROUNDS.length && choice.correct;

  let nextLink;
  if (choice.correct) {
    nextLink = isFinal
      ? `<h3>That's all for now! Thanks for playing!</h3><p class="township-links"><a href="#township">Now choose another part of KidsTown to visit.</a></p>`
      : `<h3><a href="#township/countries/${n + 1}">Go to the next matching game!</a></h3>`;
  } else {
    nextLink = `<h3><a href="#township/countries/${n}">Go back to the game!</a></h3>`;
  }

  container.innerHTML = `
    <section class="location township-page match-page">
      <h1>${facts.intro}</h1>
      <div class="match-fact-images">${facts.images.map((img) => `<img src="graphics/township/${img}" alt="${facts.name}">`).join("")}</div>
      <h2>Did you know?</h2>
      <ul>${facts.facts.map((f) => `<li>${f}</li>`).join("")}</ul>
      ${nextLink}
    </section>`;
}

KidsTown.locations["township"] = {
  render(container, subRoute) {
    if (!subRoute) return townshipHome(container);
    const parts = subRoute.split("/");
    if (parts[0] === "wonders") return townshipWonder(container, parts[1]);
    if (parts[0] === "countries") {
      if (!parts[1]) return townshipCountriesIntro(container);
      if (parts[2] === "answer") return townshipCountryAnswer(container, Number(parts[1]), parts[3]);
      return townshipRound(container, Number(parts[1]));
    }
    return townshipHome(container);
  },
};
