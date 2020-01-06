// // const replaceIt = line => {
// // if (line.includes("You")) {
// const replaceIt = line => {
//   // if (line.includes("you")) {
//   return line.replace(/you/gi, "U");
//   // } else {
//   // return line;
//   // }
// };
// console.log(replaceIt("i love you"));
// console.log(replaceIt("i love salmon"));
// console.log(replaceIt("I love the bayou"));

const lines = [
  "You're so gorgeous",
  "I'll do anything",
  "I'll kiss you from your feet",
  "To where your head begins",
  "",
  "You're so perfect",
  "You're so right as rain",
  "You make me, make me, make me",
  "Make me hungry again",
  "",
  "Everything you do is irresistible",
  "Everything you do is simply kissable",
  "Why can't I be you? Why can't I be you?",
  "",
  "...",
  "",
  "******* This Lyrics is NOT for Commercial use *******",
  "(1409618871795)",
  ""
];
// console.log(lines);
// const printLine = lyrics => {
//   for (i = 0; i < lyrics.length; ++i) {
//     console.log(lyrics[i]);
//   }
// };
// printLine(lines);

// const mutateLine = lyrics => {
//   for (i = 0; i < lyrics.length; ++i) {
//     const mutate = lyrics[i].replace(/you/gi, "U");
//     console.log(mutate);
//   }
// };
// mutateLine(lines);

const mapObj = {
  // Object.keys = original words; Object.values = Princified substitutions
  I: "👁️ ",
  you: "U",
  are: "R",
  to: "2",
  too: "2",
  for: "4",
  be: "B",
  know: "no"
};

const mutateLine = lyrics => {
  /* referred to
  (https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings)
  for multiple strings and
  (https://stackoverflow.com/questions/4921701/javascript-regex-for-replace-words-inside-text-and-not-part-of-the-words)
  for word boundaries */
  for (jkl = 0; jkl < lyrics.length; ++jkl) {
    const mutate = lyrics[jkl].replace(
      // /\bYou\b/gi,
      /\bI\b|\byou\b|\bare\b|\bto\b|\btoo\b|\bfor\b|\bbe\b|\bknow\b/gi,
      matched => {
        return mapObj[matched];
      }
    );
    console.log(mutate);
  }
};
mutateLine(lines);
