// zoo.js
// Placeholder for the Zoo location.
// Replace this render() function with the real page content and
// activity logic once it's built out, using the original
// scripts/zoo/*.pl files as a spec for expected behavior.

const ZOO_REGIONS = {
  ocean: {
    name: "Ocean", banner: "ocean.jpg", icon: "ocean3a.gif",
    intro: `Oceans cover more than two-thirds of the Earth's surface. The greatest variety of life is found in the oceans. Most ocean animals live in the warm, shallow waters surrounding the continents and islands. Yet, life can even be found deep in the ocean where light never reaches. Some of the different kinds of animals that live in the ocean are crabs, seahorses, sharks, and starfish.`,
    animals: [
      ["Crabs", "d6crab.gif", `A crab walks sideways instead of straight ahead, like most animals. A hard shell that covers its body helps protect it. However, in order to grow, a crab must shed its shell. After shedding, it is soft-bodied and very vulnerable. Once its new shell is hard and strong, the crab is ready to face the world again.`],
      ["Seahorses", "d6seahor.gif", `A seahorse swims in an upright position. Unlike most animals, the male seahorse gives birth. The male has a pouch on its stomach in which the female places her eggs. After hatching, the young seahorses stay inside the pouch for ten days. A male seahorse can give birth to as many as 600 young at one time.`],
      ["Sharks", "d6shark.gif", `Most sharks eat fish, sea lions, sea birds, and dolphins. They are very efficient hunters and have been nicknamed "eating machines" and "super predators." They use a combination of sight, smell, and a form of sonar to hunt their prey.`],
      ["Starfish", "d6starfi.gif", `There are many types of starfish, also known as "sea stars," in the ocean. They can have as few as five arms or as many as forty. If a starfish loses an arm, it will grow a new one. The starfish's mouth is located on the underside of its body.`],
    ],
    quiz: {
      question: "What covers two-thirds of the surface of the Earth?",
      choices: [
        { name: "Land", correct: false, explanation: "Land covers one-third of the surface of the Earth." },
        { name: "Trees", correct: false, explanation: "Trees do not cover two-thirds of the surface of the Earth. Trees supply most of the oxygen that people breathe. The oldest tree is 4,725 years old." },
        { name: "Water", correct: true, explanation: "Yes, water covers over two-thirds of the surface of the Earth." },
      ],
    },
  },
  africa: {
    name: "Africa", banner: "africa.jpg", icon: "africa3a.gif",
    intro: `In central Africa, many kinds of animals live on large, grass-covered plains. Animals that eat plants are herbivores. Some African herbivores are elephants, giraffes and hippos. Animals that eat only meat are carnivores. Lions are carnivores that live in Africa.`,
    animals: [
      ["Elephants", "d6elep.gif", `The most amazing feature on an elephant is its long nose, called a trunk. The elephant uses its trunk to eat and drink. An elephant eats grass, leaves, twigs and fruits by wrapping its trunk around the food and bringing it up to its mouth. It drinks by sucking water up into its trunk, putting the trunk into its mouth, and then spraying the water down its throat.`],
      ["Giraffes", "d6giraff.gif", `Giraffes are the tallest land animals living in the world today. Because giraffes need to eat a lot of food in order to live, they spend about half of their lives eating. Giraffes eat leaves and twigs by curling their strong tongues around the food to pull it free.`],
      ["Hippopotamus", "d6hippo.gif", `The word "hippo" is short for "hippopotamus," which means "horse of the river." Although hippos are very big, they do not eat as much food as you might think. They spend a few hours each day eating different kinds of grasses on land. To protect themselves from predators, hippos spend most of their time in water.`],
      ["Lions", "d6lion.gif", `Lions spend most of their time resting and sleeping. Lions sleep during the day when it is very hot. When they hunt, lions must sneak up on prey in order to catch it. Female lions do the hunting for their prides (family groups).`],
    ],
    quiz: {
      question: "What is the tallest land animal living in the world today?",
      choices: [
        { name: "Elephant", img: "d6elep.gif", correct: false, explanation: "The elephant is not the tallest animal in the world. The elephant is the largest land animal in the world. An adult male elephant can weigh up to 13,000 pounds!" },
        { name: "Giraffe", img: "d6giraff.gif", correct: true, explanation: "Giraffes are the tallest animals living in the world today. They can grow to be 19 feet tall!" },
        { name: "Hippopotamus", img: "d6hippo.gif", correct: false, explanation: "A hippopotamus can be big, but it is not the tallest animal in the world. Adult hippos are the second largest land animals in the world after elephants. They can grow to weigh 8,000 pounds!" },
      ],
    },
  },
  australia: {
    name: "Australia", banner: "australia.jpg", icon: "aussie3a.gif",
    intro: `Many unusual types of animals called marsupials are found on the island continent of Australia. Marsupials are unusual because the mother has a pouch on her stomach in which she carries her young. Some Australian marsupials are kangaroos and koala bears. Crocodiles are reptiles that live in Australia as well as other parts of the world. Off the coast of Australia is a coral reef called the Great Barrier Reef.`,
    animals: [
      ["Kangaroos", "d6kanga.gif", `Kangaroos stand tall by balancing on their big hind feet and thick tail. They can move very quickly by jumping in long leaps. A young kangaroo is called a "joey."`],
      ["Koala Bears", "d6koala.gif", `Koala bears look like teddy bears come to life. They only eat the leaves of a few trees that live in Australia. Because the leaves are not very nutritious, the little bears have to move slowly to conserve energy. They spend a lot of time sleeping.`],
      ["Crocodiles", "d6croc.gif", `The crocodile is a fierce animal that will attack any animal that comes near it. Although clumsy on land, it is an excellent swimmer. It spends much of its time drifting quietly under the surface of the water with only its eyes and nose showing.`],
      ["Great Barrier Reef", "d6coral.gif", `The Great Barrier Reef is a coral reef. Coral reefs are made of many tiny animals. As these animals grow, they build mini-fortresses around themselves. As the animals multiply, their fortresses join to form large structures in the ocean. Coral reefs provide food and shelter to many brightly colored fish that live in the sea.`],
    ],
    quiz: {
      question: "What do you call animals that have pouches to carry their young?",
      choices: [
        { name: "Marsupials", correct: true, explanation: "Animals that have pouches are called marsupials. Both kangaroos and koalas are marsupials." },
        { name: "Reptiles", correct: false, explanation: "Reptiles are cold-blooded animals that lay eggs. Reptiles do not have pouches to carry their young." },
        { name: "Herbivores", correct: false, explanation: "Herbivores are animals that eat plants. Although some herbivores have pouches to carry their young, not all herbivores have pouches." },
      ],
    },
  },
  polar: {
    name: "Polar Regions", banner: "polar.jpg", icon: "polar3a.gif",
    intro: `The polar regions have extremely cold winters and only a few months of warm temperatures in the summer. Parts of Russia, Norway, Greenland, the United States, and Canada, and all of Antarctica lie within the polar regions. The tundra is a vast, treeless land in the Arctic. Much of the ground there stays frozen all the time. The extremely cold winters prevent most animals from living in the polar regions during those months. During the short summer, these animals return to live and feed.`,
    animals: [
      ["Arctic Hares", "d6hare.gif", `In order to survive the cold during the winter, an arctic hare grows a pure white coat of long, thick fur. This white fur makes the hare blend in with the snow. The hare has large hind feet which allow it to run on top of the snow without sinking. During the summer, its fur turns brown or gray.`],
      ["Caribou", "d6caribo.gif", `Caribou are actually reindeer that live in the North American Arctic lands. As spring approaches, huge herds of caribou travel north to spend their summer on the tundra. Unlike other types of deer, both the male and the female caribou have antlers.`],
      ["Polar Bears", "d6polarb.gif", `A polar bear is one of the largest carnivorous animals in the world. It is so powerful that it can kill a seal with one blow of a paw. In October, a female polar bear digs a large hole in the snow called a den. In her den, she gives birth to one or two cubs and does not come out with them until spring.`],
      ["Wolves", "d6wolf.gif", `Wolves are predators and will eat almost anything, from caribou to mice, depending on the time of year and what food is available. Wolves live in groups called packs. A wolf pack usually contains about six wolves. One male wolf (the Alpha Male) leads the entire pack.`],
    ],
    quiz: {
      question: "Which animal's fur turns white in the winter and brown or gray in the summer?",
      choices: [
        { name: "Polar Bear", img: "d6polarb.gif", correct: false, explanation: "The polar bear's fur does not turn white in the winter and does not turn brown or gray in the summer. The polar bear's fur varies from pure white to a light yellow, an important disguise as it hunts on the ice pack." },
        { name: "Arctic Hare", img: "d6hare.gif", correct: true, explanation: "The arctic hare's fur turns white in the winter and brown or gray in the summer. In the winter, the arctic hare is white with black ear-tips, and its underfur is dense and gray." },
        { name: "Caribou", img: "d6caribo.gif", correct: false, explanation: "The caribou's fur does not turn white in the winter and does not turn brown or gray in the summer. The caribou's fur is typically brown and shaggy with a white neck and mane." },
      ],
    },
  },
};

function zooNav(current) {
  const items = Object.entries(ZOO_REGIONS).map(([key, r]) =>
    key === current
      ? `<span><img src="graphics/zoo/${r.icon}" alt="${r.name}"><br>${r.name}</span>`
      : `<a href="#zoo/${key}"><img src="graphics/zoo/${r.icon}" alt="${r.name}"><br>${r.name}</a>`
  ).join("");
  return `<p class="zoo-subnav">${items}</p>`;
}

function zooHome(container) {
  container.innerHTML = `
    <section class="location zoo-page">
      <h1>KidsTown Zoo</h1>
      <img class="zoo-banner" src="graphics/zoo/zoo.gif" alt="Zoo" width="500" height="200">
      ${zooNav()}
      <p>Animals in this zoo are grouped together by where they live. Each area of the
      world has a unique set of animals that live there. This zoo will introduce you to
      some of the animals in Africa, Australia, the Oceans and the Polar Regions.</p>
      <p>Once you have read about the animals in an area, you can play a trivia game by
      taking the Zoo Keeper's Challenge. Click on one of the areas above to get started!</p>
    </section>`;
}

function zooRegion(container, key) {
  const r = ZOO_REGIONS[key];
  if (!r) return zooHome(container);
  container.innerHTML = `
    <section class="location zoo-page">
      <h1>KidsTown Zoo: ${r.name}</h1>
      <img class="zoo-banner" src="graphics/zoo/${r.banner}" alt="Animals of ${r.name}" width="500" height="400">
      ${zooNav(key)}
      <p>${r.intro}</p>
      ${r.animals.map(([name, img, text]) => `
        <div class="zoo-animal">
          <img src="graphics/zoo/${img}" alt="${name}">
          <h2>${name}</h2>
          <p>${text}</p>
        </div>`).join("")}
      <p class="zoo-links"><a href="#zoo/${key}/quiz">Try taking the Zoo Keeper's Challenge!</a></p>
      <p class="zoo-links"><a href="#zoo">Go back to the Zoo.</a></p>
    </section>`;
}

function zooQuiz(container, key) {
  const r = ZOO_REGIONS[key];
  if (!r) return zooHome(container);

  function render() {
    container.innerHTML = `
      <section class="location zoo-page zoo-quiz">
        <h1>Zoo Keeper's Challenge: ${r.name}</h1>
        <p class="quiz-question">${r.quiz.question}</p>
        <p>Instructions: Please choose the answer you think is correct.</p>
        <div class="zoo-choices">
          ${r.quiz.choices.map((c, i) => `
            <button class="zoo-choice" data-i="${i}">
              ${c.img ? `<img src="graphics/zoo/${c.img}" alt="${c.name}">` : ""}
              ${c.name}
            </button>`).join("")}
        </div>
        <div class="zoo-feedback"></div>
        <p class="zoo-links"><a href="#zoo/${key}">Go back to the Animals of ${r.name}.</a></p>
      </section>`;

    container.querySelectorAll(".zoo-choice").forEach((btn) => {
      btn.addEventListener("click", () => {
        const c = r.quiz.choices[Number(btn.dataset.i)];
        const feedback = container.querySelector(".zoo-feedback");
        feedback.innerHTML = c.correct
          ? `<p>${c.explanation}</p>`
          : `<p>${c.explanation}</p><p><em>Please try again.</em></p>`;
        if (c.correct) {
          container.querySelectorAll(".zoo-choice").forEach((b) => (b.disabled = true));
        } else {
          btn.disabled = true;
        }
      });
    });
  }

  render();
}

KidsTown.locations["zoo"] = {
  render(container, subRoute) {
    if (!subRoute) return zooHome(container);
    const [key, page] = subRoute.split("/");
    if (page === "quiz") return zooQuiz(container, key);
    return zooRegion(container, key);
  },
};
