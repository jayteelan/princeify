const pifyBasic = {
  // Object.keys = original words; Object.values = Princified substitutions
  i: "👁️ ",
  you: "U",
  your: "Ur",
  are: "R",
  to: "2",
  too: "2",
  for: "4",
  be: "B",
  know: "no",
  I: "👁️ ",
  You: "U",
  Your: "Ur",
  Are: "R",
  To: "2",
  Too: "2",
  For: "4",
  Be: "B",
  Know: "No"
};

const juice = [
  "Mirror, mirror on the wall",
  "Don't say it, 'cause I know I'm cute (Oh, baby)",
  "Louis down to my drawers",
  "LV all on my shoes (Ooh, baby)",
  "",
  "I be dripping so much sauce",
  "Gotta been looking like ragù (Ooh, baby)",
  "Lit up like a crystal ball",
  "That's cool, baby, so is you",
  "That's how I roll",
  "",
  "If I'm shining, everybody gonna shine",
  "(Yeah, I'm goals)",
  "I was born like this, don't even gotta try",
  "(Now you know)",
  "I'm like Chardonnay, get better over time",
  "(So you know)",
  "Heard you say I'm not the baddest bitch, you lie",
  "",
  "Ain't my fault that I'm out here getting loose",
  "Gotta blame it on the Goose",
  "Gotta blame it on my juice, baby",
  "Ain't my fault that I'm out here making news",
  "I'm the pudding in the proof",
  "Gotta blame it on my juice",
  "",
  "Ya-ya-ee, ya-ya-ee, ya-ya-ee, ya-ya-ee",
  "...",
  "",
  "******* This Lyrics is NOT for Commercial use *******",
  "(1409618871795)",
  "",
  "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned."
];

// const makeRegExp = selectedObject => {
//   const RE = new RegExp(
//     `\\b${Object.keys(selectedObject).join("\\b|\\b")}\\b`,
//     "gi"
//   );
//   console.log(RE);
// };

// mutateKeys(pifyBasic);
const newArr = [];

const mutateLine = (lyrics, keyObject) => {
  const RE = new RegExp(
    `\\b${Object.keys(keyObject).join("\\b|\\b")}\\b`,
    "gi"
  );
  for (jkl = 0; jkl < lyrics.length; ++jkl) {
    const mutate = lyrics[jkl].replace(RE, matched => {
      return keyObject[matched];
    });
    newArr.push(mutate);
    console.log(newArr);
  }
};
mutateLine(juice, pifyBasic);

const lyricReduce = arr => {
  return arr.reduce((a, b) => `${a}<br>${b}`);
};
// invocation
const renderLyrics = lyricReduce(newArr);
console.log(renderLyrics);
