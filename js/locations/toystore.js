// toystore.js
// Placeholder for the Toy Store location.
// Replace this render() function with the real page content and
// activity logic once it's built out, using the original
// scripts/toystore/*.pl files as a spec for expected behavior.

const ORDINALS = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"];

const RIDDLES = [
  { text: `I wear a multicolored coat\nof ribbons, green, yellow and blue\nI shine after each rain\nTo bring good luck\nTo all of you.`, img: "rain3.gif", answer: "It is a rainbow." },
  { text: `Blow it up\nand watch the skin grow bigger.\nTwist a string to it. Tie it.\nSee it floating there\nway above you in the air.`, img: "balloon.gif", answer: "It is a balloon." },
  { text: `Once these creatures roamed the world alone.\nNow they are fossil. Now they are bone.\nYou can see them in the halls of\nthe natural history museum.`, img: "dino.gif", answer: "They are dinosaurs." },
  { text: `Over six feet tall,\nwith black and white feathers,\nand two long feet,\nyou will find me at the zoo street.`, img: "ostrich.gif", answer: "I am an ostrich." },
  { text: `I am the color of milky white\nfalling through the air\nlanding on things to light there.`, img: "snow.gif", answer: "I am a snow flake." },
  { text: `They grow by lakes and streams,\nwhen workers see them they scream.\nThey are four feet tall in the fall,\nblooming in white seeds they are like weeds,\nhot dog at first, catlike at last.`, img: "cattail.gif", answer: "I am a cattail." },
  { text: `They are yellow at first then fluffy white,\nhundreds grouped together,\nthey will float away in autumn days\nupon windy weather.`, img: "dande.gif", answer: "I am a dandelion." },
];

const SHAPE_POEMS = [
  { name: "Star", img: "star.gif", poem: `Stars are so bright,\nshining above us all.\nMillions and billions\nshining from dusk to dawn\nwith silver light, so pretty.` },
  { name: "Leaf", img: "leaf1.gif", poem: `Leaves are so neat.\nGreen, gold, brown and last but not least red.\nFalling, dancing & playing,\nthey're neat.` },
  { name: "Crescent Moon", img: "moon.gif", poem: `Have you ever thought about the moon?\nPeaceful and sleepy\nwith all its craters and of course mountains.\nIt lets you go to sleep.` },
  { name: "Tree", img: "tree.gif", poem: `Trees are so majestic,\nso tall and green,\nstanding above everyone.\nIt gives me cool shade in the summer\nwith all its leaves.\nThank goodness for the trees!` },
  { name: "Four Leaf Clover", img: "clover.gif", poem: `I once found a four leaf clover.\n"Oh wow," I thought, "it'll bring me good luck."\nO.k. I wish I never found it. Never found it!\nThat day I fell down the stairs\nand I got kicked in the shins, O.K.\nPooh on that four leaf clover.` },
];

const BONUS_PROBLEM = {
  img: "pingpong.gif",
  text: `Ping pong (table tennis) is a fun game to play, but sometimes the ball gets away and rolls into a hole. That is exactly what happened to this man. The problem is, he can not reach the ball.`,
  toolsImg: "tools.gif",
  toolsText: `There is a bucket of water, a broom, a shovel, a roll of string, and a dust pan.`,
  answerImg: "ansprob.gif",
  answerText: `There are multiple ways to retrieve the ping pong ball. A simple way is to fill the hole with the water from the bucket, and let the ball float to the top of the hole. From there, you can reach and grab it.`,
};

const crossLinks = (...items) => `<p class="toystore-links">${items.join(" &middot; ")}</p>`;
const RIDDLES_LINK = `<a href="#toystore/riddles/1">Riddles</a>`;
const SHAPES_LINK = `<a href="#toystore/shapepoems/1">Shape Poems</a>`;
const PROBLEM_LINK = `<a href="#toystore/problem">Bonus Problem</a>`;

function toystoreHome(container) {
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <p class="toystore-intro">Welcome to the KidsTown Toystore! Please click on one of the following:</p>
      <p class="toystore-menu">${RIDDLES_LINK}${SHAPES_LINK}${PROBLEM_LINK}</p>
    </section>`;
}

function toystoreRiddle(container, n) {
  const r = RIDDLES[n - 1];
  if (!r) return toystoreHome(container);
  const nav = RIDDLES.map((_, i) => (i + 1 === n ? `<b>${i + 1}</b>` : `<a href="#toystore/riddles/${i + 1}">${i + 1}</a>`)).join(" ");
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Your ${ORDINALS[n - 1]} Riddle</h2>
      <p class="toystore-riddle">${r.text.replace(/\n/g, "<br>")}</p>
      <p class="toystore-question">Can you guess it?</p>
      ${crossLinks(`<a href="#toystore/riddles/${n}/answer">Click here for the answer.</a>`)}
      <p class="toystore-subnav">Riddles: ${nav}</p>
      ${crossLinks(SHAPES_LINK, PROBLEM_LINK)}
    </section>`;
}

function toystoreRiddleAnswer(container, n) {
  const r = RIDDLES[n - 1];
  if (!r) return toystoreHome(container);
  const last = n === RIDDLES.length;
  const nextHref = last ? "#toystore/shapepoems/1" : `#toystore/riddles/${n + 1}`;
  const nextLabel = last ? "Click here to see the shape poems." : "Click here to try another riddle.";
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Did You Guess It?</h2>
      <img class="toystore-image" src="graphics/toystore/${r.img}" alt="${r.answer}">
      <p class="toystore-answer">${r.answer}</p>
      ${crossLinks(`<a href="${nextHref}">${nextLabel}</a>`)}
    </section>`;
}

function toystoreShapePoem(container, n) {
  const s = SHAPE_POEMS[n - 1];
  if (!s) return toystoreHome(container);
  const nav = SHAPE_POEMS.map((_, i) => (i + 1 === n ? `<b>${i + 1}</b>` : `<a href="#toystore/shapepoems/${i + 1}">${i + 1}</a>`)).join(" ");
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Your ${ORDINALS[n - 1]} Shape Poem</h2>
      <img class="toystore-image" src="graphics/toystore/${s.img}" alt="Shape poem ${n}">
      <p class="toystore-question">What shape do you see?</p>
      ${crossLinks(`<a href="#toystore/shapepoems/${n}/answer">Click here for the answer.</a>`)}
      <p class="toystore-subnav">Shape Poems: ${nav}</p>
      ${crossLinks(RIDDLES_LINK, PROBLEM_LINK)}
    </section>`;
}

function toystoreShapeAnswer(container, n) {
  const s = SHAPE_POEMS[n - 1];
  if (!s) return toystoreHome(container);
  const last = n === SHAPE_POEMS.length;
  const nextHref = last ? "#toystore/problem" : `#toystore/shapepoems/${n + 1}`;
  const nextLabel = last ? "Click here to read the problem." : "Click here for your next shape poem.";
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Did You See a ${s.name}?</h2>
      <img class="toystore-image" src="graphics/toystore/${s.img}" alt="${s.name}">
      <p class="toystore-poem">${s.poem.replace(/\n/g, "<br>")}</p>
      ${crossLinks(`<a href="${nextHref}">${nextLabel}</a>`)}
    </section>`;
}

function toystoreProblem(container) {
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Bonus Problem</h2>
      <img class="toystore-image" src="graphics/toystore/${BONUS_PROBLEM.img}" alt="Ping pong problem">
      <p>${BONUS_PROBLEM.text}</p>
      <p class="toystore-question">Can you help him retrieve the ball?</p>
      ${crossLinks(`<a href="#toystore/problem/tools">Click here to see the available tools.</a>`)}
      ${crossLinks(RIDDLES_LINK, SHAPES_LINK)}
    </section>`;
}

function toystoreTools(container) {
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Here Are the Available Tools</h2>
      <img class="toystore-image" src="graphics/toystore/${BONUS_PROBLEM.toolsImg}" alt="Tools">
      <p>${BONUS_PROBLEM.toolsText}</p>
      <p class="toystore-question">What tools would you use to get the ball out of the hole?</p>
      ${crossLinks(`<a href="#toystore/problem/answer">Click here to see one answer.</a>`)}
    </section>`;
}

function toystoreProblemAnswer(container) {
  container.innerHTML = `
    <section class="location toystore-page">
      <h1>KidsTown Toy Store</h1>
      <h2>Did You Think of the Water?</h2>
      <img class="toystore-image" src="graphics/toystore/${BONUS_PROBLEM.answerImg}" alt="Answer">
      <p>${BONUS_PROBLEM.answerText}</p>
      ${crossLinks(RIDDLES_LINK, SHAPES_LINK)}
    </section>`;
}

KidsTown.locations["toystore"] = {
  render(container, subRoute) {
    if (!subRoute) return toystoreHome(container);
    const [section, arg, tail] = subRoute.split("/");
    const n = Number(arg);
    if (section === "riddles") return tail === "answer" ? toystoreRiddleAnswer(container, n) : toystoreRiddle(container, n);
    if (section === "shapepoems") return tail === "answer" ? toystoreShapeAnswer(container, n) : toystoreShapePoem(container, n);
    if (section === "problem") {
      if (arg === "tools") return toystoreTools(container);
      if (arg === "answer") return toystoreProblemAnswer(container);
      return toystoreProblem(container);
    }
    return toystoreHome(container);
  },
};
