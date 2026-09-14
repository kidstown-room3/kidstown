// cityhall.js
// City Hall: two branching detective stories ("The Bungled Bank Burglary"
// and "The Case of the Alien Photo") plus a help page. Ported from
// scripts/cityhall/*.pl.
//
// Each page is a node in CITYHALL_NODES, keyed by the same KEY numbers the
// original site used. Routes look like #cityhall/5010 instead of
// kt.cgi?KEY=5010.
//
// KEY 5040 (bbb3-3.pl) is skipped on purpose: nothing ever links to it,
// so it was a dead page in the original site too.

const CITYHALL_MENU_KEY = "5000";

const CITYHALL_NODES = {
  // ---- Casebook menu (cityhall.pl) ----
  "5000": {
    menuStyle: true,
    image: "main.gif",
    imageAlt: "Casebook Interactive Stories",
    body: `
      <p><span class="story-lead">W</span>elcome to City Hall! Today you will be assisting
      the famous crime stopper Detective Anders. You have two new cases to solve.</p>
      <p>In each one, we need you to decide what to do next. Just click on the underlined
      words at the end of each page and watch how the story unfolds!</p>
      <p>Which case would you like to solve:</p>
    `,
    choicesHtml: `
      <p><a href="#cityhall/5250">The Case of the Alien Photo</a></p>
      <p>or</p>
      <p><a href="#cityhall/5010">The Bungled Bank Burglary</a></p>
      <p class="story-goodluck">Good Luck!</p>
    `,
    caption: "Casebook Interactive Stories",
  },

  // ---- The Bungled Bank Burglary ----
  "5010": {
    color: "#22ac2f",
    image: "bbb1.gif",
    body: `
      <p><span class="story-lead" style="color:#22ac2f">"Thank you both for coming,"</span> the
      bank manager says as he escorts you toward his office. "Last night we were nearly robbed."</p>
      <p>"Nearly?" questions Detective Anders.<br><br>
      "Well, thanks to quick action by our night security guard, Willy Sparks, nothing was stolen.
      I figured you may be able to find some clues that will lead us to the culprit so he won't
      strike again. Feel free to examine the vault and interview Willy."</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5210">examine the vault</a> or
      <a href="#cityhall/5020">question Willy?</a>`,
  },
  "5020": {
    color: "#a00000",
    image: "bbb2.gif",
    body: `
      <p><span class="story-lead" style="color:#a00000">"I'm not one to brag,"</span> asserts Willy
      Sparks, the security guard, "but without my help, the thief would have gotten away with
      everything."</p>
      <p>"Tell us exactly what happened," Detective Anders says as he looks closely at Willy.<br><br>
      "At about 4:30 in the morning I was doing my rounds near the teller's windows when I heard
      something back by the vault. I rushed back and surprised a masked man stuffing a bag full of
      money and <i>this</i>," explains Willy as he holds up a piece of paper.</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5060">examine the paper</a> or
      <a href="#cityhall/5120">continue questioning Willy?</a>`,
  },
  "5030": {
    color: "#a00000",
    image: "bbb2.gif",
    body: `
      <p><span class="story-lead" style="color:#a00000">"I'm not one to brag,"</span> asserts Willy
      Sparks, the security guard, "but without my help, the thief would have gotten away with
      everything."</p>
      <p>"Tell us exactly what happened," Detective Anders says as he looks closely at Willy.<br><br>
      "At about 4:30 in the morning I was doing my rounds near the teller's windows when I heard
      something back by the vault. I rushed back and surprised a masked man stuffing a bag full of
      money and <i>this</i>," explains Willy as he holds up a piece of paper.</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5070">examine the paper</a> or
      <a href="#cityhall/5090">continue questioning Willy?</a>`,
  },
  "5050": {
    color: "#0000a0",
    image: "bbb3.gif",
    body: `
      <p><span class="story-lead" style="color:#0000a0">"It is a page from former U.S. President
      Woodrow Wilson's diary,"</span> Willy continues. "It is one of the bank's most prized
      possessions.</p>
      <p>"It was recently appraised at $500,000. I had never seen it before, but the bank manager
      talks about it so often that I immediately knew what it was when I approached the thief."<br><br>
      You and Detective Anders read the page:</p>
      <p class="story-quote">April 16, 1917<br><br>
      Today we declared war on Germany and the other Central Powers. I have lived through many
      bloody conflicts in my life, but World War I is indeed the most terrible I have ever
      witnessed.<br><br>
      Thomas Woodrow Wilson</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5180">speak with an historian</a> about that diary entry."`,
  },
  "5060": {
    color: "#0000a0",
    image: "bbb3.gif",
    body: `
      <p><span class="story-lead" style="color:#0000a0">"It is a page from former U.S. President
      Woodrow Wilson's diary,"</span> Willy continues. "It is one of the bank's most prized
      possessions.</p>
      <p>"It was recently appraised at $500,000. I had never seen it before, but the bank manager
      talks about it so often that I immediately knew what it was when I approached the thief."<br><br>
      You and Detective Anders read the page:</p>
      <p class="story-quote">April 16, 1917<br><br>
      Today we declared war on Germany and the other Central Powers. I have lived through many
      bloody conflicts in my life, but World War I is indeed the most terrible I have ever
      witnessed.<br><br>
      Thomas Woodrow Wilson</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5170">speak with an historian about the diary entry</a>
      or <a href="#cityhall/5130">continue questioning Willy?</a>`,
  },
  "5070": {
    color: "#0000a0",
    image: "bbb3.gif",
    body: `
      <p><span class="story-lead" style="color:#0000a0">"It is a page from former U.S. President
      Woodrow Wilson's diary,"</span> Willy continues. "It is one of the bank's most prized
      possessions.</p>
      <p>"It was recently appraised at $500,000. I had never seen it before, but the bank manager
      talks about it so often that I immediately knew what it was when I approached the thief."<br><br>
      You and Detective Anders read the page:</p>
      <p class="story-quote">April 16, 1917<br><br>
      Today we declared war on Germany and the other Central Powers. I have lived through many
      bloody conflicts in my life, but World War I is indeed the most terrible I have ever
      witnessed.<br><br>
      Thomas Woodrow Wilson</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5150">speak with an historian about the diary entry</a>
      or <a href="#cityhall/5100">continue questioning Willy?</a>`,
  },
  "5080": {
    color: "#0000a0",
    image: "bbb3.gif",
    body: `
      <p><span class="story-lead" style="color:#0000a0">"It is a page from former U.S. President
      Woodrow Wilson's diary,"</span> Willy continues. "It is one of the bank's most prized
      possessions.</p>
      <p>"It was recently appraised at $500,000. I had never seen it before, but the bank manager
      talks about it so often that I immediately knew what it was when I approached the thief."<br><br>
      You and Detective Anders read the page:</p>
      <p class="story-quote">April 16, 1917<br><br>
      Today we declared war on Germany and the other Central Powers. I have lived through many
      bloody conflicts in my life, but World War I is indeed the most terrible I have ever
      witnessed.<br><br>
      Thomas Woodrow Wilson</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5160">speak with an historian about the diary entry</a>
      or <a href="#cityhall/5200">examine the vault?</a>`,
  },
  "5090": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy,</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `"We're missing a key element to this crime," you declare, "We need to
      <a href="#cityhall/5050">examine the Woodrow Wilson diary entry</a>."`,
  },
  "5100": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy.</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5180">speak with an historian</a> about that diary entry."`,
  },
  "5110": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy.</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5230">examine that vault</a>."`,
  },
  "5120": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy.</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5080">look more closely at the scrap of paper</a> or
      <a href="#cityhall/5220">examine the vault?</a>`,
  },
  "5130": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy.</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5160">speak with an historian about the diary entry</a>
      or <a href="#cityhall/5200">examine the vault?</a>`,
  },
  "5140": {
    color: "#af4c00",
    image: "bbb4.gif",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"Whenever the vault is opened at night a
      silent alarm notifies the police,"</span> explains Willy.</p>
      <p>"So I told the robber to put his hands in the air until they arrived, but he dropped the
      bag and fled out the back of the bank."<br><br>
      You and Detective Anders examine the door at the rear of the bank. The lock has been blown
      apart, probably by a small explosive.<br><br>
      "I figured that I shouldn't chase him out of the bank. So while I was waiting for the police,
      I counted the money by hand to make sure none was missing. Within a half an hour the police
      arrived and the robber had not returned."</p>
    `,
    prompt: `"That's all I needed to know," you exclaim. It is time to solve
      <a href="#cityhall/5240">The Bungled Bank Burglary.</a>`,
  },
  "5150": {
    color: "#9400d3",
    image: "bbb5.gif",
    body: `
      <p><span class="story-lead" style="color:#9400d3">"World War I, or the Great War, was the
      largest and most brutal conflict of its time,"</span> explains the historian from a nearby
      library.</p>
      <p>"It spanned the years from 1914 though 1918 but the United States wasn't actively involved
      until 1917. It was the first war to introduce large-scale use of machine guns, aircraft, and
      deadly poison gas."<br><br>
      "Could President Wilson have written a note about the Great War in April of 1917?" You ask the
      historian.<br><br>
      "Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United
      States began fighting. Until then, the U.S. had been considered a neutral country."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5140">question Willy again</a>."`,
  },
  "5160": {
    color: "#9400d3",
    image: "bbb5.gif",
    body: `
      <p><span class="story-lead" style="color:#9400d3">"World War I, or the Great War, was the
      largest and most brutal conflict of its time,"</span> explains the historian from a nearby
      library.</p>
      <p>"It spanned the years from 1914 though 1918 but the United States wasn't actively involved
      until 1917. It was the first war to introduce large-scale use of machine guns, aircraft, and
      deadly poison gas."<br><br>
      "Could President Wilson have written a note about the Great War in April of 1917?" You ask the
      historian.<br><br>
      "Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United
      States began fighting. Until then, the U.S. had been considered a neutral country."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5230">examine that vault</a>."`,
  },
  "5170": {
    color: "#9400d3",
    image: "bbb5.gif",
    body: `
      <p><span class="story-lead" style="color:#9400d3">"World War I, or the Great War, was the
      largest and most brutal conflict of its time,"</span> explains the historian from a nearby
      Library.</p>
      <p>"It spanned the years from 1914 though 1918 but the United States wasn't actively involved
      until 1917. It was the first war to introduce large-scale use of machine guns, aircraft, and
      deadly poison gas."<br><br>
      "Could President Wilson have written a note about the Great War in April of 1917?" You ask the
      historian.<br><br>
      "Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United
      States began fighting. Until then, the U.S. had been considered a neutral country."</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5110">continue questioning Willy</a> or
      <a href="#cityhall/5190">examine the vault?</a>`,
  },
  "5180": {
    color: "#9400d3",
    image: "bbb5.gif",
    body: `
      <p><span class="story-lead" style="color:#9400d3">"World War I, or the Great War, was the
      largest and most brutal conflict of its time,"</span> explains the historian from a nearby
      Library.</p>
      <p>"It spanned the years from 1914 though 1918 but the United States wasn't actively involved
      until 1917. It was the first war to introduce large-scale use of machine guns, aircraft, and
      deadly poison gas."<br><br>
      "Could President Wilson have written a note about the Great War in April of 1917?" You ask the
      historian.<br><br>
      "Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United
      States began fighting. Until then, the U.S. had been considered a neutral country."</p>
    `,
    prompt: `"That's all I needed to know," you exclaim. It is time to solve
      <a href="#cityhall/5240">The Bungled Bank Burglary.</a>`,
  },
  "5190": {
    color: "#226b22",
    image: "bbb6.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"We keep $1,000,000 in cash in the vault
      along with other documents,"</span> began the bank manager.</p>
      <p>"The bills are all in denominations of $20 or lower so it would have been easy for the
      robber to spend the money anywhere."<br><br>
      "And what about the other documents?" You ask.<br><br>
      "Most of them would have no value to a thief, they are just copies of deeds and loans.
      However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able
      to recover it with the cash."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5140">question Willy again</a>."`,
  },
  "5200": {
    color: "#226b22",
    image: "bbb6.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"We keep $1,000,000 in cash in the vault
      along with other documents,"</span> began the bank manager.</p>
      <p>"The bills are all in denominations of $20 or lower so it would have been easy for the
      robber to spend the money anywhere."<br><br>
      "And what about the other documents?" You ask.<br><br>
      "Most of them would have no value to a thief, they are just copies of deeds and loans.
      However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able
      to recover it with the cash."</p>
    `,
    prompt: `With a puzzled look Detective Anders says, "I think we must
      <a href="#cityhall/5180">speak with an historian</a> about that diary entry."`,
  },
  "5210": {
    color: "#226b22",
    image: "bbb6.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"We keep $1,000,000 in cash in the vault
      along with other documents,"</span> began the bank manager.</p>
      <p>"The bills are all in denominations of $20 or lower so it would have been easy for the
      robber to spend the money anywhere."<br><br>
      "And what about the other documents?" you ask.<br><br>
      "Most of them would have no value to a thief, they are just copies of deeds and loans.
      However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able
      to recover it with the cash."</p>
    `,
    prompt: `You decide <a href="#cityhall/5030">Willy needs to be questioned immediately.</a>`,
  },
  "5220": {
    color: "#226b22",
    image: "bbb6.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"We keep $1,000,000 in cash in the vault
      along with other documents,"</span> began the bank manager.</p>
      <p>"The bills are all in denominations of $20 or lower so it would have been easy for the
      robber to spend the money anywhere."<br><br>
      "And what about the other documents?" you ask.<br><br>
      "Most of them would have no value to a thief, they are just copies of deeds and loans.
      However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able
      to recover it with the cash."</p>
    `,
    prompt: `"We're missing a key element to this crime," you declare. "We need to
      <a href="#cityhall/5050">examine that diary entry</a>."`,
  },
  "5230": {
    color: "#226b22",
    image: "bbb6.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"We keep $1,000,000 in cash in the vault
      along with other documents,"</span> began the bank manager.</p>
      <p>"The bills are all in denominations of $20 or lower so it would have been easy for the
      robber to spend the money anywhere."<br><br>
      "And what about the other documents?" you ask.<br><br>
      "Most of them would have no value to a thief, they are just copies of deeds and loans.
      However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able
      to recover it with the cash."</p>
    `,
    prompt: `"That's all I needed to know," you exclaim. It is time to solve
      <a href="#cityhall/5240">The Bungled Bank Burglary.</a>`,
  },
  "5240": {
    color: "#22ac2f",
    image: "end.gif",
    body: `
      <p><span class="story-lead" style="color:#22ac2f">"I think we have enough information to
      assist your search for the culprit,"</span> Detective Anders explains to the bank manager.</p>
      <p>"Your security guard, Willy Sparks, is lying about his actions last night. That would
      suggest he has some involvement in the incident."<br><br>
      "Also, the diary page Willy gave you is a forgery," you add.<br><br>
      "I don't understand. How could Willy be involved? And where is the real diary page?" cries the
      bank manager.<br><br>
      "We knew Willy was lying when he said that he counted all the cash before the police arrived.
      He said the police arrived within half an hour, but it would have taken more than five hours
      to count $1,000,000 in small bills by hand. And the diary page is obviously bogus because it
      refers to 'World War I'. In 1917, the first World War was known as the Great War. It wouldn't
      have made sense to call it World War I when there hadn't been a World War II, yet."<br><br>
      Upon hearing this evidence, Willy admits to stealing the diary page and replacing it with a
      fake. Since he couldn't get into the vault without setting off the silent alarm, he made up the
      story about the robber. While the police were on their way he forged the diary page, but he was
      in such a hurry he wrote <i>World War I</i> instead of <i>The Great War</i>.</p>
    `,
    prompt: `Do you want to try <a href="#cityhall/5250"><i>The Case of the Alien Photo</i></a> or
      do you want to <a href="#cityhall/5000">return to the main Casebook Interactive Stories page?</a>`,
  },

  // ---- The Case of the Alien Photo ----
  "5250": {
    color: "#22ac2f",
    image: "cap1.gif",
    body: `
      <p><span class="story-lead" style="color:#22ac2f">"I have proof that there is life on
      Venus!"</span> shouts Maurice Mole from across the police station.</p>
      <p>"I'm going to make millions when I sell this to the tabloids," he giggles devilishly and
      waves a photograph in the air.<br><br>
      Maurice Mole is well known in the county as a con artist. He is clever, but you and Detective
      Anders have managed to foil all his previous attempts to fool the public. You decide to
      carefully examine the glossy photograph. It shows a barren landscape dotted with tiny figures
      that look like aliens.</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5260">question Maurice Mole about the photo</a> or
      <a href="#cityhall/5270">send the photo to the crime lab for testing?</a>`,
  },
  "5260": {
    color: "#a00000",
    image: "cap2.gif",
    body: `
      <p><span class="story-lead" style="color:#a00000">"Actually, I'm amazed that nobody discovered
      this before,"</span> explains Maurice.</p>
      <p>"When I pointed my telescope at Venus last night I saw these little figures jumping around.
      I thought I should take a picture of them."<br><br>
      You and Detective Anders exchange looks of skepticism. Maurice Mole seems like the least likely
      person to spend his nights looking at the stars.</p>
    `,
    prompt: `Do you want to <a href="#cityhall/5280">continue questioning Maurice</a> or
      <a href="#cityhall/5270">send the photo to the crime lab?</a>`,
  },
  "5270": {
    color: "#0000a0",
    image: "cap3.gif",
    body: `
      <p><span class="story-lead" style="color:#0000a0">Rather than spend more time listening to
      Maurice, you decide that the crime lab may provide you with some answers.</span></p>
      <p>"I think the photograph is a fake," states the scientist at the crime lab, "but I can't
      prove it. It looks like 'aliens' were put in the background by a computer. Unfortunately, you
      will probably need more evidence to prove that Maurice Mole's claims are untrue."</p>
    `,
    prompt: `You decide you need to <a href="#cityhall/5280">question Maurice face to face.</a>`,
  },
  "5280": {
    color: "#af4c00",
    image: "cap4.jpg",
    body: `
      <p><span class="story-lead" style="color:#af4c00">"I'm an astronomer at heart,"</span> claims
      Maurice. "Ever since I saw my first shooting star I fell in love with the night sky.</p>
      <p>"Of course, my favorite planet is Venus." Maurice Mole's ears twitch a little bit as he
      explains his nightly routine. "When the sky is its darkest, usually around midnight, I turn my
      telescope toward Venus to admire its rocky surface. In fact, there hasn't been one night in the
      last six months that I haven't spent at least fifteen minutes looking at the beautiful
      planet."<br><br>
      You see Detective Anders smile slightly. That can only mean one thing: he has found a problem
      with Maurice Mole's story.</p>
    `,
    prompt: `Do you think you're ready to <a href="#cityhall/5300">solve the mystery</a> or do you
      want to <a href="#cityhall/5290">look for more evidence at Maurice Mole's apartment?</a>`,
  },
  "5290": {
    color: "#9400d3",
    image: "cap5.gif",
    body: `
      <p><span class="story-lead" style="color:#9400d3">"I have absolutely nothing to hide,"</span>
      exclaims Maurice. "You may examine my apartment inside and out."</p>
      <p>Maurice Mole's apartment is dark and messy. His clothes are scattered about the floor and
      dirty dishes are piled up on the counters. You notice a computer with a scanner in a back room.
      Maurice guides you to his balcony and points to a shiny white telescope. "There it is," he
      says. "If the sky were darker, I would let you look at the aliens for yourselves."<br><br>
      You and Detective Anders look at the telescope. It appears to be remarkably clean compared to
      everything else in the apartment. Something dangling from the eyepiece of the telescope catches
      your eye; it is a price tag.<br><br>
      "I, uh," stammers Maurice, "I just forgot to take the price tag off."<br><br>
      Detective Anders looks at you with a wink, "I think you can also forget about getting any money
      from the tabloids, Maurice. Your photo is a fake."</p>
    `,
    prompt: `You decide it's time to confront Maurice Mole with
      <a href="#cityhall/5300">the solution to the <i>Case of the Alien Photo</i>.</a>`,
  },
  "5300": {
    color: "#226b22",
    image: "end.gif",
    body: `
      <p><span class="story-lead" style="color:#226b22">"Maurice, your story is so full of holes
      some people might mistake it for swiss cheese!"</span> you exclaim.</p>
      <p>"First, it would be impossible for you to photograph aliens on the surface of Venus. Venus
      is covered with a thick blanket of clouds which prevents anyone from seeing the surface.
      Second, you claim to have looked at Venus every night for the last six months. That, too, is
      impossible. Due to the motion of the planets, Venus is not visible from Earth for six
      consecutive months. Finally, you said that you looked at Venus at midnight. As every astronomer
      knows, Venus is visible only near sunrise or sunset."<br><br>
      Confronted with your facts, Maurice decides to confess to the forgery. "When I heard how much
      money the tabloids offered for alien photographs, I decided to fake one on my computer. I guess
      I should have spent more time in the library learning about Venus, first. I just bought the
      telescope yesterday to fool you two."</p>
    `,
    prompt: `Do you want to try <a href="#cityhall/5010"><i>The Bungled Bank Burglary</i></a> or do
      you want to <a href="#cityhall/5000">return to the main Casebook Interactive Stories page?</a>`,
  },

  // ---- Help ----
  "5900": {
    menuStyle: true,
    image: "help.gif",
    imageAlt: "Casebook Interactive Stories Help",
    body: `
      <p><span class="story-lead">T</span>o view, and hopefully solve, a Casebook story, select one
      of the cases from the main Casebook page in KidsTown CityHall. Then read each page of the
      story. At the bottom of every page you will be presented with one or two links. Choose which of
      these paths you wish to follow. When the entire case has been presented, you will be offered a
      link to SOLVE THE CASE. Once you select this final link, the solution to the case will be
      presented.</p>
      <p>Within the text of each story, clues will be revealed to assist you in solving the case.
      Don't be discouraged if the solution to the case is presented before you have solved it - you
      will get better at finding the solutions as you read more cases.</p>
      <p>Have Fun!</p>
    `,
    footnote: `NOTE: To return to the page you were last viewing, press the 'BACK' button on your browser.`,
  },
};

// The Casebook menu and Help page share one layout (no same.gif prompt
// icon); every story page shares another (same.gif + prompt bar at the
// bottom).
function renderCityhallNode(container, key) {
  const node = CITYHALL_NODES[key] || CITYHALL_NODES[CITYHALL_MENU_KEY];
  const imgSrc = `graphics/cityhall/${node.image}`;

  if (node.menuStyle) {
    container.innerHTML = `
      <section class="location cityhall-story">
        <div class="casebook-menu">
          <img class="story-image" src="${imgSrc}" alt="${node.imageAlt || ""}">
          <hr>
          <div class="story-body">${node.body}</div>
          ${node.choicesHtml ? `<div class="casebook-choices">${node.choicesHtml}</div>` : ""}
          <hr>
          ${node.caption ? `<p class="story-caption">${node.caption}</p>` : ""}
          ${node.footnote ? `<p class="story-footnote">${node.footnote}</p>` : ""}
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="location cityhall-story">
      <div class="story-body">
        <img class="story-image" src="${imgSrc}" alt="${node.imageAlt || "Casebook illustration"}">
        ${node.body}
      </div>

      <div class="story-prompt">
        <img class="story-prompt-icon" src="graphics/cityhall/same.gif" alt="">
        <p>${node.prompt}</p>
      </div>

      <p class="story-nav"><a href="#cityhall/5000">Back to the Casebook menu</a></p>
    </section>
  `;
}

KidsTown.locations["cityhall"] = {
  render(container, subRoute) {
    const key = subRoute || CITYHALL_MENU_KEY;
    renderCityhallNode(container, key);
  },
};
