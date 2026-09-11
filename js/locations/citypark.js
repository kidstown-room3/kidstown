// citypark.js
// City Park: "Your Big Journey", a choose-your-own-adventure story that
// uses the player's name. Ported from scripts/citypark/main.pl (name form)
// and page.pl + data/citypark/page1..18 (the story pages).
//
// #citypark shows the name form, #citypark/<n> shows story page n.

const CITYPARK_NAME_KEY = "kt_citypark_name";

const CITYPARK_PAGES = {
  "1": `
    <p>Your big adventure starts out just like any other lazy summer day. The birds are chirping
    outside, and you can just tell from the smell of the air that this day is going to be really
    hot.</p>
    <p>Your friend calls out from the street, "{{NAME}}, why don't you come outside and play? It
    looks like its going to be a great day!" You decide that yes, you will go out and play today.
    You pull on your favorite blue shirt and head outside.</p>
    <p>As you step out onto the porch, you feel that something is not quite right. The birds are no
    longer chirping. The light seems too bright. All of a sudden, you can't see anything at all. You
    fall into a deep sleep. <a href="#citypark/2">You wake up</a> in a strange place.</p>
    <p class="story-back"><a href="#citypark">Back</a></p>
  `,
  "2": `
    <img src="graphics/citypark/park.gif" alt="The Park" width="90" height="100" hspace="10"
      vspace="10" align="left">
    <p>Bright sunlight streams into your eyes, making it hard to see. Your eyes finally adjust and
    you see that you are no longer on your front porch. You look around and see that you seem to be
    in a very large park. There are big trees around the edge of the park, and lots of grass. There
    are other people in the park, but for some reason, they don't look right. The air feels much
    cooler than it did on your porch.</p>
    <p>You see a girl and her dog. Do you want to walk up to them?
      <a href="#citypark/3">Yes</a> &nbsp;
      <a href="#citypark/4">No</a></p>
    <p class="story-back"><a href="#citypark/1">Back</a></p>
  `,
  "3": `
    <img src="graphics/citypark/girl.gif" alt="Girl and Dog" width="90" height="100" hspace="10"
      vspace="10" align="right">
    <p>As you begin to get closer to the girl, you notice what is wrong with her. You can see right
    through her! She looks like any other girl, but she also kind of looks like ghosts do in the
    movies. You can even see through her dog! You finally say "Hello, my name is {{NAME}}. What is
    your name?"</p>
    <p>She doesn't even notice you. You reach out to touch her, and your hand goes right through
    her!</p>
    <p>You think to yourself, "Well, these people aren't going to be much help."</p>
    <img src="graphics/citypark/book.gif" alt="Old Book" width="55" height="72" hspace="10"
      vspace="10" align="right">
    <p>You walk back to the place where you first woke up and you see a book. "That wasn't there
    before," you think to yourself. You reach down and grab it.</p>
    <p>The book has a leather cover and looks very old. The writing on the cover is in a language you
    have never seen before. You open the book and see that the first page says, "{{NAME}}, FIND THE
    COMPASS." The rest of the pages are strangely blank.</p>
    <p>So, you are supposed to find the compass. A compass is a thing that helps you find your way,
    and since you are very lost, finding your way sounds like a great idea. You look around and see a
    stand about 50 feet away that looks like it has something on it. You
    <a href="#citypark/5">walk</a> towards the stand.</p>
    <p class="story-back"><a href="#citypark/2">Back</a></p>
  `,
  "4": `
    <img src="graphics/citypark/book.gif" alt="Old Book" width="55" height="72" hspace="10"
      vspace="10" align="right">
    <p>You walk back to the place where you first woke up and you see a book. "That wasn't there
    before," you think to yourself. You reach down and grab it.</p>
    <p>The book has a leather cover and looks very old. The writing on the cover is in a language you
    have never seen before. You open the book and see that the first page says, "{{NAME}}, FIND THE
    COMPASS."</p>
    <p>So, you are supposed to find the compass. A compass is a thing that helps you find your way,
    and since you are very lost, finding your way sounds like a great idea. You look around and see a
    stand about 50 feet away that looks like it has something on it. You
    <a href="#citypark/5">walk</a> towards the stand.</p>
    <p class="story-back"><a href="#citypark/2">Back</a></p>
  `,
  "5": `
    <img src="graphics/citypark/compass.gif" alt="Compass" width="60" height="60" hspace="10"
      vspace="10" align="right">
    <p>As you approach the stand, you notice two things. First, you see that there is a compass on
    the stand. That is interesting. Second, you see a small reddish bird next to the compass. Unlike
    the people still with you here in the park, you can't see through the bird. It looks kind of like
    a parakeet.</p>
    <p>You get to the stand. As you reach for the compass, you feel the leather book in your hand
    getting warm. At that same moment the bird says, "Hey {{NAME}}, you should probably look in the
    book."</p>
    <img src="graphics/citypark/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>The bird startles you. As far as you know, only parrots talk, and this certainly doesn't look
    like a parrot.</p>
    <img src="graphics/citypark/directions.gif" alt="Directions" width="100" height="111" hspace="10"
      vspace="10" align="right">
    <p>You decide to do what it says. You look in the book. The first page still says, "{{NAME}},
    FIND THE COMPASS," but now, there is writing on the second page. It says, "{{NAME}}, GO WEST AND
    FIND THE DOME."</p>
    <p>You take the compass and find that you are facing North. Using the directions of North, South,
    East and West from the picture, which way do you have to turn in order to be facing West?
      <a href="#citypark/6">Left</a> or <a href="#citypark/7">Right</a>?</p>
    <p class="story-back"><a href="#citypark/4">Back</a></p>
  `,
  "6": `
    <img src="graphics/citypark/directionl.gif" alt="Directions" width="100" height="111"
      hspace="10" vspace="10" align="right">
    <p>You did it {{NAME}}! If you are facing North, and you take a little turn to your left, you
    will then be facing West.</p>
    <p>Let's <a href="#citypark/8">continue</a>. Way to go!</p>
    <p class="story-back"><a href="#citypark/5">Back</a></p>
  `,
  "7": `
    <img src="graphics/citypark/directionr.gif" alt="Compass" width="100" height="111" hspace="10"
      vspace="10" align="right">
    <p>{{NAME}}, this is kind of a tricky question. Looking again at the picture that has N, S, E and
    W on it, you will see that if you turn to your right when you are facing North, you will then be
    facing East.</p>
    <p class="story-back"><a href="#citypark/5">Back</a></p>
  `,
  "8": `
    <img src="graphics/citypark/mountains.gif" alt="Compass" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>You leave the park and start walking West on a paved street. After you have gone a little way
    you notice that way off in the distance, you can see snow capped mountains.</p>
    <img src="graphics/citypark/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>You look over your shoulder and see that the bird is following you. It says, "Hey, {{NAME}},
    don't mind me. I'm just here to help you out if you get in any trouble."</p>
    <p>You decide to <a href="#citypark/9">Continue</a>.</p>
    <p class="story-back"><a href="#citypark/7">Back</a></p>
  `,
  "9": `
    <img src="graphics/citypark/mountains.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>The first street you pass is called Apple Street. The next street you pass is called Birch
    Street.</p>
    <p>Which street do you think would come next,
      <a href="#citypark/10">Willow Street</a> or <a href="#citypark/11">Cherry Street</a>?</p>
    <p class="story-back"><a href="#citypark/8">Back</a></p>
  `,
  "10": `
    <img src="graphics/citypark/mountains.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>If you were thinking that all of these streets had the names of trees, then Willow Street
    might come next. But Cherry is also the name of a tree. There must be another way to choose.</p>
    <p class="story-back"><a href="#citypark/9">Back</a></p>
  `,
  "11": `
    <img src="graphics/citypark/mountains.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>{{NAME}}, you sure are good at figuring things out! You noticed that Apple Street started with
    the letter A, and Birch Street started with the letter B. So it would make sense to think that
    the next street would start with a C, and it does! Cherry Street is the next street.</p>
    <p>Now that you have that figured out, you <a href="#citypark/12">continue</a> down the street,
    looking for the dome.</p>
    <p class="story-back"><a href="#citypark/9">Back</a></p>
  `,
  "12": `
    <img src="graphics/citypark/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10"
      align="right">
    <p>After walking several blocks you finally see the glint of the dome up ahead of you.</p>
    <img src="graphics/citypark/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>Out of nowhere, the bird says, "Hey, {{NAME}}. I've got a little riddle for you.</p>
    <p>I happen to know that the address of the dome is 1369 Kids Town Lane. It is also on the right
    side of the street. I'll give you a clue as to how to get home if you can tell me what side of
    the street my house is on.</p>
    <p>All I'll tell you is that the address of my house is even, meaning that the last number of the
    address ends with an even number.</p>
    <p>What side of the street do you suppose my house is on?
      <a href="#citypark/14">Left</a> &nbsp;or&nbsp; <a href="#citypark/13">Right</a>?"</p>
    <p class="story-back"><a href="#citypark/11">Back</a></p>
  `,
  "13": `
    <img src="graphics/citypark/dome.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>Wow {{NAME}}, that was a hard riddle. The dome has an odd address. Odd addresses end with 1,
    3, 5, 7, or 9. The dome is on the right side of the street.</p>
    <img src="graphics/citypark/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>That makes you think odd addresses are on one side of the street and even addresses are on the
    other side of the street. The bird's house has an even address (it ends with 2, 4, 6, or 8) so it
    is on the opposite side of the house as the dome. Therefore it is on the left side of the
    street.</p>
    <p class="story-back"><a href="#citypark/12">Back</a></p>
  `,
  "14": `
    <img src="graphics/citypark/dome.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>Nice work {{NAME}}. That riddle was especially hard. This is how you solved the puzzle: The
    dome has an odd address and is on the right side of the street. Odd addresses end with 1, 3, 5,
    7, or 9.</p>
    <img src="graphics/citypark/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>That makes you think odd addresses are on one side of the street and even addresses are on the
    other side of the street. And that is exactly the way it is. The bird's house has an even address
    (it ends with 2, 4, 6, 8 or 0) so it is on the opposite side of the house as the dome. Therefore
    it is on the left side of the street.</p>
    <p>Here is your <a href="#citypark/15">clue</a>.</p>
    <p class="story-back"><a href="#citypark/12">Back</a></p>
  `,
  "15": `
    <img src="graphics/citypark/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10"
      align="right">
    <p>The bird says to you, "{{NAME}}, the answer has been in your hands the whole time." You
    realize that the book in your hands is getting warm again. You open it up. You see that the first
    two pages say the same thing, but now there is a third page.</p>
    <img src="graphics/citypark/bird.gif" alt="Bird" width="84" height="95" hspace="10" vspace="10"
      align="left">
    <p>The page says, "{{NAME}}, this journey is over. There will be more to come, but now it is time
    to go home. Close your eyes, count backwards from 10 to 1 and you will be back to where you
    began."</p>
    <p>Which way do you decide to count?</p>
    <p><a href="#citypark/16">1, 2, 3, 4, 5, 6, 7, 8, 9, 10</a></p>
    <p><a href="#citypark/17">10, 9, 8, 7, 6, 5, 4, 3, 2, 1</a></p>
    <p><a href="#citypark/18">2, 4, 6, 8, 10</a></p>
  `,
  "16": `
    <img src="graphics/citypark/dome.gif" alt="Mountains" width="100" height="90" hspace="10"
      vspace="10" align="right">
    <p>You close your eyes and count from 1 to 10.</p>
    <p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>
    <p>You open your eyes and see that nothing has changed. You are still in the same spot by the
    dome!</p>
    <p>Then you realize that you were supposed to count backwards, starting at 10 and ending at 1.</p>
    <p>You decide to <a href="#citypark/15">try</a> again.</p>
    <p class="story-back"><a href="#citypark/15">Back</a></p>
  `,
  "17": `
    <p>You close your eyes and count from 10 down to 1.</p>
    <p>10, 9, 8, 7, 6, 5, 4, 3, 2, 1</p>
    <p>You try to open your eyes, but you can't. Suddenly, the air is hot again, and you hear the
    birds chirping.</p>
    <p>You are finally able to open your eyes. When you do, you realize that you are once again on
    your front porch. You see your friend standing in the street.</p>
    <p>She says, "{{NAME}}, come on! Let's go play!" Well, she doesn't seem to have noticed that you
    were gone for a little while. You decide not to bring it up.</p>
    <p>It's time for another journey... let's go explore the rest of KidsTown!</p>
    <p><a href="#home">Back to Kids Town</a></p>
    <p class="story-back"><a href="#citypark/15">Back</a></p>
  `,
  "18": `
    <p>You close your eyes and count from 2 to 10 by even numbers.</p>
    <img src="graphics/citypark/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10"
      align="right">
    <p>You open your eyes and see that nothing has changed. You are still in the same spot by the
    dome!</p>
    <p>Then you realize that you were supposed to count backwards, starting at 10 and ending at 1.
    Instead, you counted by evens, from 2 to 10.</p>
    <p>You decide to <a href="#citypark/15">try</a> again.</p>
    <p class="story-back"><a href="#citypark/15">Back</a></p>
  `,
};

function getCitparkName() {
  try {
    return sessionStorage.getItem(CITYPARK_NAME_KEY) || "";
  } catch (e) {
    return "";
  }
}

function setCitparkName(name) {
  try {
    sessionStorage.setItem(CITYPARK_NAME_KEY, name);
  } catch (e) {
    // sessionStorage unavailable (private browsing, etc.) -- the journey
    // still works, it just falls back to "My friend" every page load.
  }
}

function renderCityparkForm(container) {
  container.innerHTML = `
    <section class="location citypark-story">
      <h1>KidsTown City Park - Your Big Journey</h1>
      <hr>
      <p class="story-intro">
        Hello, and welcome to the KidsTown City Park. You are about to go on a big journey through
        the park. To get started, type in your first name below. Then click " Let's Go! ".
      </p>
      <form id="citypark-form" class="citypark-form">
        <input type="text" name="name" size="10" autocomplete="given-name">
        <button type="submit">Let's Go!!</button>
      </form>
      <hr>
    </section>
  `;

  container.querySelector("#citypark-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = container.querySelector('input[name="name"]').value.trim();
    setCitparkName(name);
    window.location.hash = "#citypark/1";
  });
}

function renderCityparkPage(container, pageNum) {
  const page = CITYPARK_PAGES[pageNum];
  const name = getCitparkName() || "My friend";

  if (!page) {
    renderCityparkForm(container);
    return;
  }

  const html = page.replace(/\{\{NAME\}\}/g, name);

  container.innerHTML = `
    <section class="location citypark-story">
      <h1>${name}'s Big Journey</h1>
      <hr>
      <div class="story-body">${html}</div>
      <hr>
    </section>
  `;
}

KidsTown.locations["citypark"] = {
  render(container, subRoute) {
    if (!subRoute) {
      renderCityparkForm(container);
      return;
    }
    renderCityparkPage(container, subRoute);
  },
};
