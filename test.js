/* ----- DOM RENDER --- */
// querySelectors
const divSong = document.querySelector(".div-song");
const divArtist = document.querySelector(".div-artist");
const divLyrics = document.querySelector(".div-lyrics");
// render to DOM
divSong.innerHTML = renderTitle;
divArtist.innerHTML = `by Prince feat. ${renderArtist}`;
divLyrics.innerHTML = renderLyrics;

/* ----- REDUCE pifyLineArr ----- */
let renderLyrics = pifyLineArr.reduce((a, b) => `${a}<br>${b}`);
// genericized
const lyricReduce = arr => {
  arr.reduce((a, b) => `${a}<br>${b}`);
};
renderLyrics = lyricReduce(pifyLineArr);

/* ----- MUTATE origLineArr TO pifyLineArr ----- */
const pifyLineArr = [];

const mutateLine = lyrics => {
  for (jkl = 0; jkl < lyrics.length; ++jkl) {
    const mutate = lyrics[jkl].replace(
      /\bi\b|\byou\b|\byour\b|\bare\b|\bto\b|\btoo\b|\bfor\b|\bbe\b|\bknow\b|\bI\b|\bYou\b|\bYour\b|\bAre\b|\bTo\b|\bToo\b|\bFor\b|\bBe\b|\bKnow\b/gi,
      matched => {
        return pifyBasic[matched];
      }
    );
    pifyLineArr.push(mutate);
  }
};
mutateLine(lines);
// genericized
const mutateKeys = selectedRegExp => {
  const keyArr = [];
  // format keys for RegExp
  for (jkl = 0; jkl < selectedRegExp.length; ++jkl) {
    keyArr.push(`\b${selectedRegExp.keys[jkl]}\b|`);
  }
  // concatenate keys
  const intermediateStr = keyArr.reduce((a, b) => a + b);
  // remove last pipe [from (https://tecadmin.net/remove-last-character-from-string-in-javascript/)]
  const innerStr = intermediateStr.substring(0, str.length - 1);
  return `/${innerStr}/gi`;
};

const mutateLine = (lyrics, selectedRegExp) => {};
